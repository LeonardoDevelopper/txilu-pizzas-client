import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { BASE_URL } from '../../api/BASE_URL';
import { haversineDistance, min } from '../../api/geolocation';
import { Loading } from '../containerLoaders';

const MapScreen = ({ setName, setCalculing, setDistance, setLoading, setStores, setUser, setRoute }) => {

  if (setUser) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation
          initialRegion={{
            latitude: setUser.latitude,
            longitude: setUser.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          { setRoute && (
            <Polyline
              coordinates={setRoute.map(([longitude, latitude]) => ({ latitude, longitude }))}  
              strokeWidth={4}
              strokeColor="red"   
            />
          )}
          {typeof setStores != 'undefined' && setStores.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.ADMIN_LOCATION.LAT, longitude: marker.ADMIN_LOCATION.LON }}
              title={marker.name}  
              icon={require('../../../assets/storeMarker.png')}
            />
          ))}
        </MapView>
      </View>
    );
  }
  else
    return null; 

};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 700,
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
