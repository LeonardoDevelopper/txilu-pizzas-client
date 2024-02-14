import { View,Text ,Image, TouchableHighlight, StyleSheet } from 'react-native'
import {Footer} from '../../partials/footer'


const Status = () => {
    return (
        <View style={styles.container}>
            <Text>
                Account
            </Text>
            <Footer selection={[false, true, false, false, false]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }
})

export default Status