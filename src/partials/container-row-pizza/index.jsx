import { View, ScrollView, Text, TouchableHighlight, StyleSheet, Image,  } from "react-native";
import { ButtonAddCart, ButtonIconCircle } from "../form/button";
import Pizza from "../content-pizza";
import React from "react";
import InfoPizza from "../modal/info-pizza";
import { BASE_URL } from "../../api/BASE_URL";

const PrintRowPizza = ({data}) => {
    const [info, setInfo] = React.useState(null)
    const closeInfo = () => {
        setInfo(null)
    }
    const handleSubmit = (id) => {
        fetch(BASE_URL + `/client/selects/get-info-pizza/${id}`,{
            method: 'GET',
            headers : {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => res.json())
        .then((response) => {
          console.log(response.data)
          setInfo(response.data)  
        })
        .catch((err) => alert(err.message))
    }

    if(!info)
    {
        return (
            <View style={styles.containerRow}>
                <Text style={styles.title}>
                    {data.NAME}
                </Text>
                <ScrollView horizontal style={styles.contentRow}>
                    <Pizza pizza={{ID : 'none', PHOTO : 'http://192.168.190.241:8080/uploads/pizzas/3016b15e-d180-45ac-9a07-6516782cc0b0.jpg' , NAME : 'Pizza de Omelete', PRICE : 7936}} />
                    {data? data.PIZZAs.map((pizza) => <Pizza onPress={handleSubmit} pizza={pizza} />) : <Text>Sem Pizzas</Text>}
                </ScrollView> 
            </View>
        )

    }else
        return <InfoPizza fun={closeInfo} pizza={info} />
}

const styles = StyleSheet.create({

    containerRow : {
        width : '100%',

    },
    title : {
        fontSize : 23,
        fontWeight : 'bold',
        paddingLeft : 25,
        color : 'tomato'
    },
    contentRow : {
        flex : 1,
        marginTop : 20,
        marginBottom : 20
    },


})


export default PrintRowPizza