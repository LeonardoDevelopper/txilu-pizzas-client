import { View,Text ,Image, TouchableHighlight, StyleSheet, ScrollView } from 'react-native'
import {Footer} from '../../partials/footer'
import HeaderScreen from '../../partials/headerScreen'
import { ButtonNavigation2 } from '../../partials/form/button'

const Account = () => {
    return (
        <View style={styles.container}>
            <HeaderScreen target1={'Home'} title={'Conta'} />
            <ScrollView style={styles.containerGradient} >
                
            <View style={styles.container}>

            </View>





                {/* <View style={styles.containerBtn}>
                    <ButtonNavigation2 text={'Informaçẽos da conta'} path={require('../../../assets/accounts.png')} />
                    <ButtonNavigation2 text={'Produtos no carrinho'} path={require('../../../assets/carts.png')} />
                    <ButtonNavigation2 text={'Locais de entrega'} path={require('../../../assets/location.png')} />
                    <ButtonNavigation2 text={'cartões de crédito'} path={require('../../../assets/credit.png')} />
                    <ButtonNavigation2 text={'Sair'} path={require('../../../assets/logout.png')} />
                </View> */}

            </ScrollView>
            <Footer selection={[false, false, false, false, true]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        backgroundColor : 'white'
    },
    contentImg : {
        alignItems : 'center',
    },
    containerBtn : {
        alignItems : 'center',
        marginTop : 30,
        gap : 5
    },
    containerGradient : {
        backgroundColor : 'tomato'
    }
})

export default Account