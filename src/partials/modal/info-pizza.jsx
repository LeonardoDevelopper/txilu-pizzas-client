import { View, Text, Image, Modal, StyleSheet, ScrollView} from 'react-native'
import HeaderScreen from '../headerScreen'
import HeaderScreenModal from '../HeaderScreenModal'
import * as Animatable from 'react-native-animatable';
import React from 'react';
import Rate from '../containerRates';
import Rates from '../containerRates';
import { saveUserData } from '../../api/asyncStorage';

const InfoPizza = ({fun, pizza}) => {
    const  [zoom, setZoom ]  = React.useState(true)
    function closing() {
        setZoom(false)
    }
    const handleOrder = () => {
        setZoom(false)
        saveUserData('ORDER-PROCESSOR', {PIZZAs : [{id : pizza.ID, price : pizza.PRICE, quantity : 1},]});
    }
    return (
        <Modal style={styles.modal}>
            <Animatable.View
                animation={zoom ? 'zoomIn': 'zoomOut'} 
                duration={500}
                style={[styles.modal, { opacity: 1 }]}
           >
                <HeaderScreenModal close={closing} fun={fun} fun2={handleOrder} where={'Map'} />
                <ScrollView>
                    <View style={styles.containerImg}>
                        <Image source={{uri : pizza.PHOTO}} style={styles.photo} />
                    </View>
                    <View style={styles.container}>
                        <View style={styles.contentText}>
                            <View style={styles.containerText}>
                                <View style={styles.priceContent}>
                                    <Image style={{width : 30, height : 30}} source={require('../../../assets/pizza.png')} />
                                    <Text style= {styles.name}>
                                        {pizza.NAME}
                                    </Text>
                                </View>
                                <View style={styles.priceContent}>
                                    <Image style={styles.priceIco} source={require('../../../assets/money.png')} />
                                    <Text style= {styles.price}>
                                        {pizza.PRICE +', 00KZ'}
                                    </Text>
                                </View>
                                <View style={styles.priceContent}>
                                    <Text style={{color: 'dimgray', fontWeight : 'bold', }}>
                                        {pizza.STATUS ? 'Disponível' : 'Indisponível'}
                                    </Text>
                                    <Text style={pizza.STATUS ? {backgroundColor: 'rgb(100,200,100)', width: 10, height: 10, borderRadius : 100} : {backgroundColor: 'rgb(200,100,100)', width: 10, height: 10, borderRadius : 100}}></Text>
                                </View>
                            </View>
                            <View style={styles.containerRate}>
                                <Rates value={4} />

                            </View>
                        </View>
                        <View>
                            <Image style={styles.priceIco} source={require('../../../assets/information.png')} />
                            <Text style={{color: 'dimgray'}}>
                            A propriedade pointerEvents é usada para controlar se o modal deve responder a eventos de toque quando estiver visível ou não.
                            O conteúdo do modal pode ser colocado dentro do componente Animatable.View.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        top : 0,
        height: '100%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
      },
    containerImg : {
        justifyContent : 'center',
        alignItems : 'center',
    },
    photo : {
        width: 170,
        height: 170,
        borderRadius : 100
    },
    containerText : {
        padding: 20,
        gap : 10,
    },
    name : {
        fontSize : 18,
        color : 'tomato'
    },
    price : {
        color : 'tomato',
        fontSize : 20,
        fontWeight : 'bold'

    },
    priceContent : {
        flexDirection : 'row',
        gap : 5,
        justifyContent : 'left',
        alignItems : 'center',
    },
    priceIco : {
        width : 20,
        height : 20,
    },
    contentText : {
        flexDirection : 'row'
    }
    ,
    containerRate : {
        width : '40%',

        justifyContent : 'center',
        alignItems : 'center',
        
    }
})

export default InfoPizza