import { View, Image, StyleSheet, Text } from 'react-native'
import { FormCreateAccount } from '../../partials/form/form'

const SignUp = () => {
    return (
        <View style={{flex : 1, backgroundColor: 'white', justifyContent : 'center'}}>
            <FormCreateAccount />
        </View>
    )
}

export default SignUp