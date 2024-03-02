import { View, Image, ToastAndroid ,TouchableHighlight, StyleSheet, Text, TextInputBase } from 'react-native'
import  {Input, InputPassword } from './input';
import {Button} from './button';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { txiluPizzasLogo } from '../../screen/logo';
import { ContainerLoading, Loading } from '../containerLoaders';
import { BASE_URL } from '../../api/BASE_URL';
import { saveUserData } from '../../api/asyncStorage';

const showToast = (message) => {
    ToastAndroid.show(message,
     ToastAndroid.SHORT);
  };


export const FormCreateAccount = () => {
    
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [password, setPassword] = React.useState('')
    const REDIRECT_TO = useNavigation()
    const [submiting, setSubmiting]  = React.useState(false)
    function handleSubmit() {
        setSubmiting(true)
        fetch(BASE_URL + '/client/inserts/create-account' 
        ,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            
            },
            body : JSON.stringify({email : email, phone : phone, password : password})
        })
        .then((res) => res.json())
        .then( (response) => {
            setSubmiting(false)
            console.log(response)
            if(response.OK)
            {
                saveUserData('CLIENT-TOKEN', response.data)
                showToast(response.message)
                REDIRECT_TO.navigate('Setlocation')
            }
            else{
                showToast(response.messageError == 'Error: Validation error'? 'Este usuario já existe' : 'Error de Validação')

            }
        })
        .catch((error) => {
            showToast(error.message)
            setSubmiting(false)
        })
    }
    return (
        <View style={styles.form}>
            
            {submiting ? <ContainerLoading /> : ''}
            <Image style={{width: 150, height : 90}} source={{uri : txiluPizzasLogo}} />
            <View style={styles.contentInputs}>
                <Input tyle={'email-address'} value={email} setValue={setEmail} placeholder={'Email'} />
                <Input type={'number-pad'} value={phone} setValue={setPhone} placeholder={'Número de telefone'} />
                <InputPassword type={'password'} value={password} setValue={setPassword} placeholder={'Senha'} />
                <Button fun={handleSubmit} text={'Criar conta'} />
               <View style={{flexDirection : 'row', justifyContent : 'center', gap : 5, marginTop : 10}}>
                <Text >
                    Já tem uma conta?
                </Text>
                    <TouchableHighlight
                    underlayColor={'#f5f5f5'}

                        onPress={() => REDIRECT_TO.navigate('Login')}
                    >
                        <Text style={{ color: 'tomato', fontSize : 16,  textDecorationStyle : 'solid', textDecorationColor : 'tomato'}}>
                            Fazer login
                        </Text>
                    </TouchableHighlight>

               </View>
            </View>
        </View>
    )
}

export const FormLoginAccount = () => {

    const [any, setAny] = React.useState('')
    const [password, setPassword] = React.useState('')

    const REDIRECT_TO = useNavigation()
    const [submiting, setSubmiting]  = React.useState(false)
    function handleSubmit(params) {
        setSubmiting(true)
        fetch(BASE_URL + '/client/selects/get-account' 
        ,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            
            },
            body : JSON.stringify({any : any, password : password})
        })
        .then((res) => res.json())
        .then( (response) => {
            setSubmiting(false)
            if(response.OK)
            {
                ToastAndroid.show(response.message, ToastAndroid.SHORT)
                saveUserData('CLIENT-TOKEN', response.data )
                console.log(response.data)
                REDIRECT_TO.navigate('Home')
            }
            else{
                ToastAndroid.show(response.messageError, ToastAndroid.SHORT)


            }
        })
        .catch((error) => {
            ToastAndroid.show(error.message, ToastAndroid.SHORT)
            
            console.log(error.message)})
    }
    return (
        <View style={styles.form}>
            
            {submiting ? <ContainerLoading /> : ''}
            <Image style={{width: 150, height : 90}} source={{uri : txiluPizzasLogo}} />
            <View style={styles.contentInputs}>
                <Input value={any} setValue={setAny} placeholder={'Email ou número de telefone'} />
                <Input value={password} setValue={setPassword} placeholder={'Senha'} />
                <Button fun={handleSubmit} text={'Entrar'} />
               <View style={{flexDirection : 'row', justifyContent : 'center', gap : 5, marginTop : 10}}>
                <Text >
                    Não tem uma conta?
                </Text>
                    <TouchableHighlight
                    underlayColor={'#f5f5f5'}
                        onPress={() => REDIRECT_TO.navigate('Signup')}
                    >
                        <Text style={{color: 'tomato', fontSize : 16}}>
                            Criar conta
                        </Text>
                    </TouchableHighlight>

               </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    form : {
        justifyContent : 'center',
        alignItems : 'center',
        gap: 50
    },
    photo : {

    }, 
    contentInputs : {
        gap : 10
    }
})

