import { Text, View } from "react-native"
import HeaderScreen from "../../partials/headerScreen"
import { useFocusEffect } from "@react-navigation/native"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { getUserData } from "../../api/asyncStorage"
import { BASE_URL } from "../../api/BASE_URL"


const ViewWaitingPayment = () => {

    const [list, setList] = React.useState([])
    const get_order_waiting_payment = async () => {
        const user = await getUserData('CLIENT-TOKEN')
        fetch(BASE_URL + `/client/selects/get-orders/${user.ID}`)
        .then(res => res.json())
        .then((response) => {
            setList(response.data.filter((item) => item.STATUS == 'waiting payment'))
        })
        .catch((error) => {
            alert(error.message) 
        })
    }

    useFocusEffect(
      React.useCallback(() => {
        get_order_waiting_payment();
      }, [])
    )

    return (
        <View style={{backgroundColor: 'white'}}>
            <HeaderScreen title={"Aguardando pagamento"} target1={'Status'} />
            <View style={{
                top: 90,
                backgroundColor : 'white',
                height : '100%'
            }}>
               <ScrollView style={{backgroundColor: 'white' , marginTop: 50}}>
                {list.length > 0 && list.map((item, index) => <ViewOrder date={item.createdAt} name={index} />)}
                    
               </ScrollView>

            </View>
        </View>
    )

}

const ViewOrder = ({name, date}) => {
    return (
        <View style={{
            width : '100%',
            height : 70,
            marginTop : 5,
            backgroundColor : 'white'
            ,justifyContent : 'center',
            alignItems : 'center'
            

        }}>
            <View style={{

            flexDirection : 'row',
            width : '90%',
            backgroundColor : '#f5f5f5f5'
                ,
                padding : 25,
                borderRadius : 8
            }}> 
                <View style={{ width : '45%' }}>
                    <Text style={{fontWeight : "bold" , color: 'dimgray'}}>
                        Pedido {'#'+(name+1)}

                    </Text>
                </View>
                <View style={{
                    width : '55%'
                }}>
                    <Text style={{fontWeight : "bold" , color: 'dimgray'}}>
                        {date}

                    </Text>
                </View>
                
            </View>
        </View>
    )
}

export default ViewWaitingPayment