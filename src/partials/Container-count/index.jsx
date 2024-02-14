import { View, Image, TouchableHighlight, StyleSheet, Text, ScrollView } from 'react-native'
import { ButtonCount } from '../form/button'

const ContainerCount = ({counter, setCounter}) => {
    const sum = () => {
        setCounter(counter + 1)
    }
    const sub = () => {
        counter > 0 ?
            setCounter(counter - 1)
            :
            ''
    }
    return (
        <View style={styles.container}>
            <ButtonCount fun={sub} text={'-'} />
            <View style={styles.cText}>
                <Text>{counter}</Text>
            </View>
            <ButtonCount fun={sum} text={'+'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        
    },
    text : {
        color : 'tomato',
        width: 50,
        height : '100%',
        fontSize : 17,
    },
    cText : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',

    }
})

export default ContainerCount