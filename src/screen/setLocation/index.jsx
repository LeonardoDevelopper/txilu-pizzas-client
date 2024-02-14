import * as Location from 'expo-location'
import React from 'react';
import { Text, TouchableHighlight, StyleSheet, View } from 'react-native';
import Button from '../../partials/form/button';
import HeaderScreen from '../../partials/headerScreen';
import { useNavigation } from '@react-navigation/native';

const SetLocation = () => {
    const REDIRECT_TO = useNavigation()
    const [permitions, setPermition] = React.useState(null)
    const handlePermitions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permissão de localização não concedida');
            return;
        }
        else
            setPermition(status)
            REDIRECT_TO.navigate('Home')
    }
    return (
        <View style={styles.container}>
            <HeaderScreen target1={'Login'} title={'Permitir Localização'} />
            <View style={styles.content}>
                <Text style={styles.text}>Clique em 'permitir' para conceder as permissões</Text>
            </View>
            {
                !permitions
                ? (
                    <Button text={'Permitir'} fun={handlePermitions} />
                 )
                :
                (
                    <TouchableHighlight
                    
                    style={{width : 300,
                        height : 50,
                        backgroundColor : 'silver',
                        display : 'flex',
                        justifyContent : 'center',
                        alignItems : 'center',
                        borderRadius : 10}}

                    >
                        <Text style={ {color: 'white'} }>
                            Permitir
                        </Text>
                    </TouchableHighlight>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        gap : 20
    },
    content : {
        justifyContent : 'center',
        alignItems : 'center',
    }
    ,
    text : {
        color : 'tomato'
    }
})

export default SetLocation