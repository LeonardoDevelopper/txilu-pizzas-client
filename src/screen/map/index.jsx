import { ScrollView, Text, View } from "react-native"
import MapScreen from "../../partials/map"
import ContainerPreViewLocation from "../../partials/container-pre-view-location"
import { Button } from "../../partials/form/button"
import * as Location from 'expo-location';
import { useNavigation } from "@react-navigation/native"
import React from "react"
import HeaderScreen from "../../partials/headerScreen"
import { BASE_URL } from "../../api/BASE_URL"
import { haversineDistance, min } from "../../api/geolocation";
import Destination from "../../partials/destination";
import { ContainerLoading } from "../../partials/containerLoaders";
import { getUserData, saveUserData } from "../../api/asyncStorage";

const Map = () => {
    const [id, setId] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [distance, setDistance] = React.useState(0);
    const [name, setName] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [stores, setStores] = React.useState([]);
    const [route, setRoute] = React.useState([]);
    const [list, setList] = React.useState([]);
    const [order, setOrder] = React.useState(null);
    const REDIRECT_TO = useNavigation();

    const getUserLocation = async () => {
        const { coords } = await Location.getCurrentPositionAsync();
        setUser(coords);
    }

    const getStores = () => {
        fetch(BASE_URL + '/deliver/selects/get-stores-positions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(response => setStores(response.data))
        .catch((error) => alert(error.message))
    }

    const traceRoute = (storeLat, storeLon) => {
        // alert('tracing route...')
        const apiKey = '5b3ce3597851110001cf62481517ed3fc62a45fda89ff8bc6837fa45';
        fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${user.longitude},${user.latitude}&end=${storeLon},${storeLat}`, {
            method : 'GET'
        })
        .then(res => res.json())
        .then(response => {
            // console.log(response)
            setRoute(response.features[0].geometry.coordinates)
            setLoading(false)
        })  
        .catch(error => { alert(error.message); setLoading(false)}) 
        .finally(() => setLoading(false))
    }

    React.useEffect(() => {
        getUserLocation(); 
        getStores();
        loadList()

    }, []);

    React.useEffect(() => {
        if (user && stores.length > 0) { 
            const minDistanceStore = min(stores.map(item => ({
                id: item.id,
                distance: haversineDistance(Number(user.latitude), Number(user.longitude), Number(item.ADMIN_LOCATION.LAT), Number(item.ADMIN_LOCATION.LON)).toFixed(1),
            })));
            setDistance(minDistanceStore.distance)
            
            const foundStore = stores.find(st => st.id === minDistanceStore.id);
            if (foundStore) {
                traceRoute(foundStore.ADMIN_LOCATION.LAT, foundStore.ADMIN_LOCATION.LON);
                setName(foundStore.name)
            }
        }
    }, [user, stores]);
    const loadList = async () => {
        const dest =  await getUserData('DESTINATION-LIST')
        setList(dest)
        const user = await getUserData('CLIENT-TOKEN')
        setId(user.ID)
    }

    const fetchOrder = async () => {

        if(user)
        {
            const Order = await getUserData('ORDER-PROCESSOR')

            setOrder({...Order, CLIENTID : id, distance : distance, time : (Number(distance) / 30) * 60 , status : 'waiting payment', coords : { LAT :user.latitude , LON : user.longitude}})
            
            
            if(order)
            {
                fetch(BASE_URL + `/client/inserts/send-order`, 
                {
                    method : 'POST',
                    headers : {'Content-Type': 'application/json'},
                    body : JSON.stringify(order),
                })
                .then((res) => res.json() )
                .then((response) => {
                    setOrder((order) =>  { return {...order, ID : response.data.ID,}} )
                }).catch((error) => {
                    alert(error.message) 
                })

            }

        }
        
    }
    async function handleNext () {
        fetchOrder()
    }
    React.useEffect(() => {
        
        if(order && order.ID)
        {
            saveUserData('ORDER-PROCESSOR', order)
            console.log(order)
            REDIRECT_TO.navigate('Payment Method') 
        }


    }, [order])

    return (
        <View style={{ flex: 1, flexDirection : 'coloumn' }}>
            <HeaderScreen target1={'Home'} />
            <MapScreen setStores={stores} setUser={user}  setRoute={route} />
            {/* Assuming that ContainerPreViewLocation and Button components are being used correctly */}
            <View style={{height : 55, padding : 5}}>
                <ScrollView style={{ flex : 1,}} horizontal >
                    
                    {list && list.length > 0 ? list.map(item => <Destination name={item} key={item} />) : <Text style={{color : 'tomato', height : 40, marginTop : 15, fontWeight : 'bold'}}> Nenhum local de entrega encontrado</Text>}

                </ScrollView>
            </View>
            <ContainerPreViewLocation loading={false} name={name}  distance={distance} userLocation={'Actual'} />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', bottom: 20 }}>
                <Button fun={handleNext} text={'Avançar'} />
            </View>
            {loading ? <ContainerLoading /> : null}
        </View>
    )
}

export default Map;
