import { View,Text ,Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native'
import {Footer} from '../../partials/footer'
import React from 'react'
import { BASE_URL } from '../../api/BASE_URL'
import { getUserData } from '../../api/asyncStorage'
import HeaderScreen from '../../partials/headerScreen'
import { ButtonIconCircle } from '../../partials/form/button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'


const Status = () => {
  
    const [waiting_payment, setWaiting_payment] = React.useState([])
    const [waiting_shipping, setWaiting_shipping] = React.useState([])
    const [waiting_delivery, setWaiting_delivery] = React.useState([])
    const REDIRECT_TO = useNavigation();


    useFocusEffect(
      React.useCallback(() => {
        get_orders();
      }, [])
    )
    const handleNavigate = (target) => {
        REDIRECT_TO.navigate(target);
    }

    const get_orders = async () => {
        const user = await getUserData('CLIENT-TOKEN')
        fetch(BASE_URL + `/client/selects/get-orders/${user.ID}`)
        .then(res => res.json())
        .then((response) => {
            setWaiting_payment(response.data.filter((item) => item.STATUS == 'waiting payment'))
            setWaiting_shipping(response.data.filter((item) => item.STATUS == 'Paid'))
            setWaiting_delivery(response.data.filter((item) => item.STATUS == 'shipped'))
            console.log(waiting_payment)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <View style={styles.container}>
            <View style={{top : 80,  left : 50}}>
                <Text style={{fontSize : 19, color : 'tomato'}}>
                    Pedidos
                </Text>
            </View>
            <View style={styles.contentOrder}>
                <View style={styles.content}> 
                    <ButtonOrderOptions navigate={handleNavigate} target={'View Payment'} img={require('../../../assets/waiting-payment.png')} text={'Aguardando pagamento'} counter={waiting_payment && waiting_payment.length} />
                    <ButtonOrderOptions navigate={handleNavigate} target={'View Shipping'} img={require('../../../assets/waiting-shipping.png')} text={'Aguardando envio'} counter={waiting_shipping && waiting_shipping.length} />
                    <ButtonOrderOptions navigate={handleNavigate} target={'View Delivery'} img={require('../../../assets/waiting-delivery.png')} text={'Aguardando entrega'} counter={waiting_delivery && waiting_delivery.length} />
                </View>
                
                <View style={{height : 700, width : '100%', marginTop : 20, padding : 20}}>
                    <Text style={{left : 20, fontWeight : 'bold', color : 'dimgray'}}>
                        Recentes
                    </Text>
                    <ScrollView style={{flex: 1}}>
                        <Text style={{width : '100%', height: 300, paddingTop : 100, textAlign: 'center', }}>
                            Vazio
                        </Text>
                    </ScrollView>
                </View>
            </View>
            <Footer selection={[false, true, false, false, false]} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    },
    contentOrder : {        
        flex: 1,
        height : '60%',
        top: 140,
        justifyContent : 'center', 
        alignItems : 'center', 
    },
    content : {
        width : '90%',
        height : 150,
        padding : 20,
        backgroundColor : 'white',
        elevation : 4,
        borderRadius : 10 ,
        justifyContent : 'center', 
        alignItems : 'center', 
        flexDirection : 'row',
        gap : 5
    }
})


const ButtonOrderOptions = ({img, text, counter, navigate, target}) => {
    return (
        <TouchableHighlight
        onPress={() => navigate(target)}
            activeOpacity={0.8}
            underlayColor={'#f5f5f5f5'}        
        >
            <View style={{width : 107, height: 100, padding: 10, paddingLeft : 3, paddingRight : 3, justifyContent : 'center', alignItems : 'center'}}>
                <Image style={{width : 45, height : 45}} source={img} />
                <Text style={{color : 'dimgray', fontWeight : 'bold', fontSize: 13}}> {text} </Text>
                <View style={{position : 'absolute', backgroundColor : "tomato" , borderRadius : 100, width : 20, height :20, justifyContent : 'center', alignItems : 'center', top: 10, right : 20}}>
                    <Text style={{color : 'white', fontWeight : 'bold'}}>{counter}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

export default Status