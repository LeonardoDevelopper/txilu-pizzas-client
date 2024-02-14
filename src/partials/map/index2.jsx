import React, { useEffect, useState } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';
import { View, StyleSheet } from 'react-native';

const MapScreen = () => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        // Substitua 'YOUR_OPENROUTESERVICE_API_KEY' pela sua chave da API OpenRouteService
        const apiKey = '5b3ce3597851110001cf62481517ed3fc62a45fda89ff8bc6837fa45';
        const lon1 = -122.4324;
        const lat1 = 37.78825;
        const lon2 = -122.431297;
        const lat2 = 37.773972;

        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${lon1},${lat1}&end=${lon2},${lat2}`
        );

        const routeCoordinates = response.data.features[0].geometry.coordinates;
        setRouteCoordinates(routeCoordinates);
      } catch (error) {
        console.error('Erro ao obter a rota da OpenRouteService:', error);
      }
    };

    fetchRoute();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {routeCoordinates.length > 0 && (
          <Polyline
            coordinates={routeCoordinates.map(([longitude, latitude]) => ({ latitude, longitude }))}
            strokeWidth={4}
            strokeColor="red"
          />
        )}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Origem" />
        <Marker coordinate={{ latitude: 37.773972, longitude: -122.431297 }} title="Destino" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
