import { View, Image, StyleSheet, Text } from 'react-native'
import {  FormLoginAccount } from '../../partials/form/form'

const Login = () => {
    return (
        <View style={{flex : 1, backgroundColor: 'white', justifyContent : 'center'}}>
            <FormLoginAccount />
        </View>
    )
}

export default Login