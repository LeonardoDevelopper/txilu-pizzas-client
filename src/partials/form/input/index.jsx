import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export const Input = ({type, placeholder, value, setValue}) => {
    return <TextInput
     value={value} 
     placeholder={placeholder} 
     style={inputStyle.input} 
     keyboardType={type}
    secureTextEntry={type == 'password'? true : false}
    
    autoCapitalize="words"
    onChangeText={(text) => setValue(text)}
     />
}

export const InputPassword = ({ placeholder, value, setValue}) => {
    return <TextInput
     value={value} 
     placeholder={placeholder} 
     style={inputStyle.input} 
    secureTextEntry
    
    autoCapitalize="words"
    onChangeText={(text) => setValue(text)}
     />
}

const inputStyle = StyleSheet.create({
    input : {
        width : 300,
        backgroundColor : '#f6f6f6f6',
        height : 60,
        borderRadius : 10,
        color : 'tomato',
        paddingLeft : 20,
        
    }
})
