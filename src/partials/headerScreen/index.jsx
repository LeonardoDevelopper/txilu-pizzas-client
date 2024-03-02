import { View, Text, Image, Modal, StyleSheet} from 'react-native'
import { ButtonNavigation } from '../form/button'
import { useNavigation } from '@react-navigation/native'

const HeaderScreen = ({path1, target1, title, path2, target2}) => {
    const REDIRECT_TO = useNavigation()
    function Navigate(target) {
        REDIRECT_TO.navigate(target)
    }
    return (
        <View style={styles.header}>
            <View style={styles.containerBack}>
                <ButtonNavigation navigate={Navigate} where={target1} path={require('../../../assets/left.png')}  />
                <Text style={styles.titleScreen}>
                    {title}
                </Text>
            </View>
            <View style={styles.containerOptional}>
                {path2 ? <ButtonNavigation navigate={Navigate} where={target2} path={path2}  /> : ''}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        position : 'absolute',
        top : 0,
        height : 120,
        paddingLeft : 40,
        paddingRight : 50,
        flexDirection : 'row',
        backgroundColor : 'transparent',
        zIndex : 100

    },
    containerBack : {
        width : '70%',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        gap: 15,
        marginTop :50
    },
    containerOptional : {
        width : '30%',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        marginTop :50,
        alignItems : 'center',
    },
    titleScreen : {
        fontSize : 18,
        color : 'tomato',
        fontWeight : 'bold',
    }
})


export default HeaderScreen