import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import MapScreen from "../../partials/map";
import HeaderScreen from "../../partials/headerScreen";
import * as Location from 'expo-location'
import React from "react";
import { Button, ButtonNavigation } from "../../partials/form/button";
import { useNavigation } from "@react-navigation/native";
import Destination from "../../partials/destination";
import ContainerPreViewLocation from "../../partials/container-pre-view-location";

const SettingOrder = () => {
    const REDIRECT_TO = useNavigation()
    const [userLocation, setUserLocation] = React.useState(null)
    const [destination, setDestination] = React.useState(null)
    const getUserLocation = async () => {
        const user_location = await Location.getCurrentPositionAsync()
        setUserLocation(user_location)
    }
    React.useEffect(() => {
        getUserLocation()
    }, [])
    function handleNext() {
        REDIRECT_TO.navigate('Payment Method')
    }
    return (
        <View style={{
            width: "100%",
            height: "100%",
            flex: 1,
            gap : 20
        }} >
            <HeaderScreen target1={'Home'} title={'Adicionar local de entrega'}  />
            <View style={styles.containerViewMap}>
                <View style={{paddingLeft : 50, gap: 20}}>
                    <View>
                        <Text style={{color : 'dimgray', fontSize: 16}}>
                            Escolha algum local  onde deseja receber a pizza
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={{color : 'dimgray',}}>
                            Marcar no mapa
                        </Text>
                        <ButtonNavigation  path={require('../../../assets/map.png')} />
                    </View>
                    
                </View>
                <View style={{gap : 30}}>
                    <Text style={{ color : 'dimgray', width : '100%', paddingLeft : 50, marginBottom : 20}}>
                        Seus locais de entrega
                    </Text>
                    <ScrollView horizontal
                    style={{width : '100%', height :100 }}
                    
                    >
                        <Destination fun={setDestination} name={'Casa'} />
                        <Destination fun={setDestination} name={'Escritório'} />
                        <Destination fun={setDestination} name={'Escola'} />
                        <Destination fun={setDestination} name={'Casa'} />

                    </ScrollView>
                    <View style={{
                        width : '100%',
                        height : 200,
                        justifyContent : 'center'
                        ,
                        alignItems : 'center',
                    }}>
                        <ContainerPreViewLocation  userLocation={destination} />
                    </View>
                </View>
                <View style={{width : '100%', justifyContent : "center", alignItems : 'center'}} >
                    <Button fun={handleNext} text={'Avançar'} />
                </View>
            </View>
        </View> 
    )
}

const styles = StyleSheet.create({
    containerViewMap : {
        width: '100%',
        height : 100,
        gap : 50,
        marginTop : 150
    }
    ,
    content : {
        flexDirection : 'row',
         gap: 20, 
         width : '100%',
         justifyContent : 'left',
         alignItems : 'center',
        },
       
})

export default SettingOrder