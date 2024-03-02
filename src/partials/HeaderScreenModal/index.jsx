import { View, Text, Image, Modal, StyleSheet, TouchableHighlight} from 'react-native'
import { ButtonNavigation } from '../form/button'
import { useNavigation } from '@react-navigation/native'
const HeaderScreenModal = ({fun, fun2, close, where}) => {
    const REDIRECT_TO = useNavigation()
    return (
        <View style={styles.header}>
            <View style={styles.containerBack}>
            <TouchableHighlight
                    underlayColor={'#f5f5f5f5'}        
                    style={styles.btnNav}
                    onPress={() => {
                        close()
                        setTimeout(() => {
                            fun()
                        },500)

                    }}
                >
                <Image style={styles.ico} source={require('../../../assets/left.png')} />
            </TouchableHighlight>
                <Text style={styles.titleScreen}>
                    Detalhes
                </Text>
            </View>
            <View style={styles.containerOptional}>
                 <TouchableHighlight
                    underlayColor={'#f5f5f5f5'}        
                    style={styles.btnNav}
                    onPress={() => {
                        REDIRECT_TO.navigate(where);
                        fun2()
                    }}
                >
                    <Image style={styles.ico} source={require('../../../assets/send.png')} />
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        height : 100,
        flexDirection : 'row',
        paddingLeft : 10,
        paddingRight : 10,

    },
    containerBack : {
        width : '70%',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        gap: 15,
    },
    containerOptional : {
        width : '30%',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center',
    },
    titleScreen : {
        fontSize : 20,
        color : 'tomato'
    },
    btnNav : {
        width : 45,
        height : 45,
        borderRadius : 11,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 8,
    },
    ico : {
        width : 25,
        height : 25,
    }
})


export default HeaderScreenModal