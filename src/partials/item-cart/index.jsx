import React from 'react';
import { ScrollView, Image, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import ContainerCount from '../Container-count';


const Item = ({product, handleDeleteItem}) => {
    const [selected, setSelected] = React.useState(false)
    const [counter, setCounter] = React.useState(0)
    const handleSelect = () => {
         setSelected(!selected)
        //setList([...list, product.ID])
    }
    return (

        <View style={styles.container}>
            <TouchableHighlight
            underlayColor={'silver'}
            onPress={handleSelect}
            
            style={selected ? styles.content : styles.containerNo}>
                <View style={{flexDirection : 'row', width : '100%'}}>
                    <View style={styles.content1}>
                        <View style = {{
                            height : '60%',
                            justifyContent : 'center',
                            alignItems : 'center',
                            }}>
                            <Text style= {{fontSize : 16, color : 'white'}}>
                                {product.PIZZA.NAME}
                            </Text>
                            <Text style= {{fontSize : 16, color : 'white'}}>
                                {product.PIZZA.PRICE+', 00KZ'}
                            </Text>
                        </View>
                            {
                                selected ?
                                <View style={{ width : 145, backgroundColor : 'white', bottom : 2, height : '42%', borderRadius : 10}}>
                                    <ContainerCount  counter={counter} setCounter={setCounter}  />
                                </View>
                                :
                                null
                            }
                    </View>
                    <View style={styles.content2}>
                        <Image style={{width : 120,
                        height : 120,
                        borderRadius : 100,
                        position : 'absolute',
                        top: -12,
                        }} source={{uri : product.PIZZA.PHOTO}} />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 150,
        justifyContent : 'center',
        alignItems : 'center',
    },
    content : {
        width : '76%',
        backgroundColor : 'tomato',
        borderRadius : 15,
        height : 110,
        flexDirection : 'row',
        gap : 16,
        elevation : 5
    },
    containerNo : {
        width : '76%',
        backgroundColor : 'silver',
        borderRadius : 15,
        height : 110,
        flexDirection : 'row',
        gap : 16,
        elevation : 5
    },
    content1 : {
        width : '55%'
    }
})