import { Image, StyleSheet, Text, ToastAndroid, TouchableHighlight, View } from 'react-native'
import { ButtonAddCart } from '../form/button'
import React from 'react'
import { BASE_URL } from '../../api/BASE_URL'
import { getUserData } from '../../api/asyncStorage'
import { useNavigation } from '@react-navigation/native'


const Pizza = ({pizza, onPress}) => {
    const [id, setId] = React.useState(pizza.ID)
    const [user, setUser] = React.useState(null)
    const REDIRECT_TO = useNavigation()
    React.useEffect(() => {
        (async() => {
            const USER = await getUserData('CLIENT-TOKEN')
            console.log(USER)
            setUser(USER)
            if(typeof USER == 'undefined')
            {   
                REDIRECT_TO.navigate('Signup')

            }
        })()
    }, [])
    
    function add() {
        fetch(BASE_URL + `/client/inserts/add-to-cart/${user.ID}/${id}`, 
        {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
        .then((response) => 
        {
             if(response.OK)
                 ToastAndroid.show('Produto Adicionado ao carrinho', ToastAndroid.LONG)
             else
                 ToastAndroid.show('Este produto já está no carrinho', ToastAndroid.LONG)

        })
        
    }
    function handleSubmit() {
        if(onPress)
        {
            onPress(id)
        }
    }
    return (
        <TouchableHighlight style={styles.pizza} onPress={handleSubmit} underlayColor={'#f5f5f5f5'}>
            <View style={styles.r}>
                <Image style={styles.img} source={{uri : pizza.PHOTO}} />
                <Text style={styles.txtTomato}>
                    {pizza.NAME}
                </Text>
                <Text style={styles.txtTomato}>
                    {pizza.PRICE+ ', 00Kz'}
                </Text>
                <ButtonAddCart onclieck={add} path={require('../../../assets/plus.png')} />
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({

    pizza : {
        
        width : 160,
        height : 160,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        marginRight : 10
    },
    img : {
        borderRadius : 100,
        width : 90,
        height : 90,
    },
    r : {
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    txtTomato : {
        color : 'tomato',
        fontWeight : 'bold',
    }
})

export default Pizza