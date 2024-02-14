import React from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BASE_URL } from '../../api/BASE_URL';
import * as Location from 'expo-location'

const MapScreen = () => {

  const [stores, setStores] = React.useState([])
  const [user, setUser] = React.useState(null)
  async function handleLocation(){
    const { coords } = await Location.getCurrentPositionAsync()
    setUser(coords)
  }
React.useEffect(() =>{
  handleLocation()
  fetch(BASE_URL + '/deliver/selects/get-stores-positions', 
  {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
    }
  }).then((res) => res.json())
  .then((response) => {
    setStores(response.data)
  })
  .catch((error) => {
    ToastAndroid.show(error.message, ToastAndroid.SHORT)
  })
}, [])
if(user && user.latitude)
{
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation
        initialRegion={
          {
            latitude : user.latitude,
            longitude : user.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }
        }
        
      >
        {/* Renderiza os marcadores no mapa */}
        {stores.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.ADMIN_LOCATION.LAT, longitude: marker.ADMIN_LOCATION.LON }}
              title={marker.ADMIN_LOCATION.NAME}
              icon={require('../../../assets/storeMarker.png')}
          />
        ))}
      </MapView>
    </View>
  );

} 
return null
};

const styles = StyleSheet.create({

  container: {
    width : '100%',
    height : '100%',
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
