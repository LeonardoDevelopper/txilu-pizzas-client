import { View, Image, TouchableHighlight, StyleSheet, Text, ScrollView } from 'react-native'
import HeaderScreen from '../../partials/headerScreen'
import { Footer } from '../../partials/footer'
import { BASE_URL } from '../../api/BASE_URL'
import { getUserData } from '../../api/asyncStorage'
import React from 'react'
import { Loading } from '../../partials/containerLoaders'
import ProductCart from '../../partials/product-cart'

const Cart = () => {
    const [cart, setCart] = React.useState(0)
    const [loading, setloading] = React.useState(true)
    const [list, setList] = React.useState([])

    React.useEffect(() =>{
        async function getCart() {
            
            const USER = await getUserData('CLIENT-TOKEN');
        
            fetch(BASE_URL + `/client/selects/get-cart/${USER.ID}`,
            {
                method: 'GET',
                headers : {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((response) => {
                setloading(false)
                setCart(response.data.counter)
                setList(response.data.products)
                // alert(list.data.products[0].ID)
    
            }).catch((error) => console.log(error.message)) 
        }
        getCart()
    }, [])
    return (
        <View style={styles.cart}>
            <HeaderScreen title={'Carrinho'} path2={require('../../../assets/send.png')} target1={'Home'} />
            
            <View style={styles.containerScrollView}>
                {loading ? <Loading /> : 
                (
                    <ProductCart key={'56'} setCounter={setCart} setProducts={setList} products={list.length > 0 ? list : ''} />
                )
                
                }
            </View>
            
            <Footer cart={cart} selection= {[false, false, false, true, false]} />

        </View>
    )
}

const styles = StyleSheet.create({
    cart : {
        width: '100%',
        height: '100%',
        backgroundColor : 'white'
      },
      containerScrollView : {
        height : '75%'
      }
})

export default Cart

