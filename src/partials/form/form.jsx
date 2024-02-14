import { View, Image, ToastAndroid ,TouchableHighlight, StyleSheet, Text, TextInputBase } from 'react-native'
import  {Input, InputPassword } from './input';
import Button from './button';
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
                saveUserData(response.data)
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

    const [email, setEmail] = React.useState('')
    const REDIRECT_TO = useNavigation()
    const [submiting, setSubmiting]  = React.useState(false)
    function handleSubmit(params) {
        setSubmiting(true)
        fetch(BASE_URL + '/deliver/selects/request-account' 
        ,{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json',
            
            },
            body : JSON.stringify({email : email})
        })
        .then((res) => res.json())
        .then(async (response) => {
            setSubmiting(false)
            console.log(response)
            if(response.OK)
            {
                saveUserData(response.data)
                MessageBox('Mensagem', response.message)

                REDIRECT_TO.navigate('Completar cadastramento')
            }
            else{
                MessageBox('Mensagem', 'Não fomos capazes de encontrar a sua conta')

            }
        })
        .catch((error) => {
            MessageBox('Mensagem', error.message)
            
            console.log(error.message)})
    }
    return (
        <View style={styles.form}>
            
            {submiting ? <Loading /> : ''}
            <Image style={{width: 150, height : 90}} source={{uri : txiluPizzasLogo}} />
            <View style={styles.contentInputs}>
                <Input value={email} setValue={setEmail} placeholder={'Email ou número de telefone'} />
                <Input value={email} setValue={setEmail} placeholder={'Senha'} />
                <Button fun={handleSubmit} text={'Criar conta'} />
               <View style={{flexDirection : 'row', justifyContent : 'center', gap : 5, marginTop : 10}}>
                <Text >
                    Não tem uma conta?
                </Text>
                    <TouchableHighlight
                    underlayColor={'#f5f5f5'}
                        onPress={() => REDIRECT_TO.navigate('Signup')}
                    >
                        <Text style={{color: 'tomato', fontSize : 16}}>
                            Entrar
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

