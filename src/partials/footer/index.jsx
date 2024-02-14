import React from 'react'
import { View , Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import { ButtonIconCircle } from '../form/button'
import { useNavigation } from '@react-navigation/native'


export const Footer = ({selection, cart}) => {
   const REDIRECT_TO = useNavigation()
    return (
        <View style={styles.footer}>
 
            <View style= {styles.containerFooter}>
                <ButtonIconCircle id={'home'}   onclieck={() => REDIRECT_TO.navigate('Home')} selected={selection[0]}    path={selection[0] ? require('../../../assets/homew.png') : require('../../../assets/homes.png')} />
                <View>
                    <ButtonIconCircle id={'status'} onclieck={() => REDIRECT_TO.navigate('Status')} selected={selection[1]}  path={selection[1] ? require('../../../assets/pedidosw.png') : require('../../../assets/pedidoss.png')} />
                    <Text style={styles.count}>5</Text>
                </View>
                <ButtonIconCircle id={'search'} onclieck={() => REDIRECT_TO.navigate('Search')} selected={selection[2]}  path={selection[2] ? require('../../../assets/searchw.png') : require('../../../assets/searchs.png')} />
                <View>
                    <ButtonIconCircle id={'cart'} onclieck={() => REDIRECT_TO.navigate('Cart')} selected={selection[3]}  path={selection[3] ? require('../../../assets/cartw.png') : require('../../../assets/carts.png')} />
                    <Text style={styles.count}>{cart}</Text>
                </View>
                <ButtonIconCircle id={'account'}onclieck={() => REDIRECT_TO.navigate('Account')} selected={selection[4]} path={selection[4] ? require('../../../assets/accountw.png') : require('../../../assets/accounts.png')} />
            </View>
        </View>
    )
}

export const FooterNoLogged = ({selection}) => {
    const REDIRECT_TO = useNavigation()
     return (
         <View style={styles.footer}>
  
             <View style= {styles.containerFooter2}>
                 <ButtonIconCircle id={'home'}   onclieck={() => REDIRECT_TO.navigate('Home')} selected={selection[0]}    path={selection[0] ? require('../../../assets/homew.png') : require('../../../assets/homes.png')} />
                 <View>
                     <ButtonIconCircle id={'status'} onclieck={() => REDIRECT_TO.navigate('Status')} selected={selection[1]}  path={selection[1] ? require('../../../assets/pedidosw.png') : require('../../../assets/pedidoss.png')} />
                     <Text style={styles.count}>5</Text>
                 </View>
                 <ButtonIconCircle id={'search'} onclieck={() => REDIRECT_TO.navigate('Search')} selected={selection[2]}  path={selection[2] ? require('../../../assets/searchw.png') : require('../../../assets/searchs.png')} />
             </View>
         </View>
     )
 }



const styles = StyleSheet.create({
    footer : {
        position: 'absolute',
        width: '100%',
        height : 60,
        backgroundColor : 'transparent',
        bottom : 10,
        justifyContent : 'center',
        alignItems: 'center',
    },
    containerFooter : {
        width : 310,
        height : 60,
        backgroundColor : 'white',
        borderRadius : 40,
        justifyContent : 'center',
        alignItems: 'center',
        elevation : 5,
        flexDirection : 'row',
        gap : 20

    },
    containerFooter2 : {
        width : 210,
        height : 60,
        backgroundColor : 'white',
        borderRadius : 40,
        justifyContent : 'center',
        alignItems: 'center',
        elevation : 5,
        flexDirection : 'row',
        gap : 20

    },
    contentFooter : {

    },
    ico : {
        width : 25,
        height : 25,
    },
    button : {
     borderRadius : 100,
     padding : 10   
    },
    buttonSelected : {
        borderRadius : 100,
     backgroundColor : 'tomato',
     padding : 10   
    },
    count : {
        position: 'absolute',
        width : 20,
        height : 20,
        top : 6,
        right : 0,
        color: 'white',
        textAlign : 'center',
        borderRadius : 100,
        fontWeight : 'bold',
        backgroundColor : 'tomato',
        borderWidth : 2,
        borderColor : 'white'
    }
})