import { Text, View, StyleSheet, Image, ScrollView, Linking, Platform, ToastAndroid } from "react-native"
import HeaderScreen from "../../partials/headerScreen"
import { Button } from "../../partials/form/button"
import ItemPreview from "../../partials/item-preview"
import { BASE_URL } from "../../api/BASE_URL"
import { ContainerLoading, Loading } from "../../partials/containerLoaders"
import React from "react"
import { deleteUserData, getUserData } from "../../api/asyncStorage"
import { useFocusEffect, useNavigation } from "@react-navigation/native"

const PaymentMethod = () => {
    const [ loading, setLoading ] = React.useState(false)
    const [ paid, setPaid ] = React.useState(false)
    const [ list, setlist ] = React.useState([])
    const [ total, setTotal ] = React.useState(0)
    const [ orderID, setOrderID ] = React.useState(null)
    const [ user, setUser ] = React.useState(null)
    const REDIRECT_TO = useNavigation()

    const load = async () => {
        const USER = await getUserData('CLIENT-TOKEN');
        const ORDER = await getUserData('ORDER-PROCESSOR')
        

        if(USER && ORDER)
        {
            setOrderID(ORDER.ID)
            setUser(USER)
            fetch(BASE_URL + `/client/selects/get-only-pizzas`)
            .then((res) => res.json())
            .then((response) => {


                  const novoArray = ORDER.PIZZAs.map((item) => {
                    const item2 = response.data.find((item2) => item.id === item2.ID);
                    if (item2) {
                        return { name : item2.NAME, sku : item.id,  price : ( item.price / 820).toFixed(2) , currency : 'USD', quantity : item.quantity, }; // Mesclando os dados dos dois objetos
                    } else {
                        return item; // Retornando apenas o item original se não houver correspondência
                    }
                });
                
                console.log(ORDER) 
                   setlist(novoArray)  
                   setTotal(sum(novoArray))
                     
            })
            .catch((error) => {
                ToastAndroid.show(error.message, ToastAndroid.SHORT)
            })
            setlist(ORDER.PIZZAs)
            //  console.log(ORDER) 

        }
    }

    useFocusEffect(
        React.useCallback(() => {
            if(paid)
                REDIRECT_TO.navigate("Status")
            setPaid(false)
        }, [])
    );

    React.useEffect(() => {
        load()
       

    },  [])
   
    const sum = (items) => {
        let total = 0;
        items.forEach(item => {
            total += (Number(item.price) * item.quantity)
        })
        return total
    }

    const OpenPaypal = async (approvalUrl) => { 
        try {
        
            await Linking.openURL(approvalUrl);

          } catch (error) {
            alert('Erro ao abrir a URL de aprovação com o aplicativo PayPal:', error);
          }
    }
    const HandlePay = async () => {
        const ORDER = await getUserData('ORDER-PROCESSOR')
        setLoading(true)
        fetch(BASE_URL + '/client/inserts/payment' , 
        {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({items : list, total : total, ORDERID : ORDER.ID })
        }).then((res)  => res.json()) 
        .then((response)  => {
            setLoading(false)
            console.log(response)
            // REDIRECT_TO.navigate("Home") 
            OpenPaypal(response.href)
            setPaid(true)
            // deleteUserData('ORDER-PROCESSOR')

        })
        .catch((error) => {
            console.log(error.message)
        }) 
    }
    return (
        <View style={styles.container}>
            {loading ? <ContainerLoading  /> : null} 
            <HeaderScreen target1={'Map'} title={'Método de pagamento'} />
            <View style={{width : '100%', marginTop : 150, paddingLeft : 30}}>
                <Image style={{width : '50%', height : 70}} source={require('../../../assets/PayPalLogo.jpg')}  />
            </View>
            <ScrollView style={{ flex : 1, padding : 20 }}>
                {list && list.map((item, index) => <ItemPreview key={index} item={item} /> )}

            </ScrollView>
            <View style={{paddingLeft : 35, flexDirection : 'row', gap : 5}}>
                <Text style={{fontSize : 17, fontWeight : 'bold', color : 'dimgray'}}>
                    Total a pagar : 
                </Text>
                <Text style={styles.textt}>{(total*820).toFixed(0)}, 00Kz</Text>
            </View>
            <View style={{width : '100%', justifyContent : "center", alignItems : 'center', height : 100}} >
                <Button fun={HandlePay} text={'Concluir'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        height : '100%'
    },
    textt : {
        fontSize : 17,
        fontWeight : 'bold',
        color : 'tomato'
    }
    
})

export default PaymentMethod