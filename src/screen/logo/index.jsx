
import React from 'react';
import { StyleSheet, Text, View, Image , ProgressBarAndroid, TextInput, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const txiluPizzasLogo = 'http://192.168.130.241:8080/uploads/txilu-pizzas-logo-no-background.png'

const Logo = () => {

    const REDIRECT_TO = useNavigation()
    React.useEffect(() => {
        setTimeout(() => {
            REDIRECT_TO.navigate('Home');
        }, 3000)
    })
    return (
        <View style={styles.container} >
            <Image
                source={{uri : txiluPizzasLogo}}
                style = {{width : 190, height : 110}}
            />
                <ProgressBarAndroid style={styles.absoluteContainer} color={'tomato'} />
            <View >

            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      gap : 0,
      justifyContent: 'center', // Alinha verticalmente ao centro
      alignItems: 'center', // Alinha horizontalmente ao centro
    },
    absoluteContainer: {
        width : 50,
        position: 'absolute',
        top: 550,
        left: 150,
        padding: 10,
      },
      otherContent: {
        marginTop: 50,
      },
  });

export default Logo