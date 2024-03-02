import { View, Image, Text, StyleSheet } from 'react-native'
import { Loading } from '../containerLoaders'
import React from 'react'


const ContainerPreViewLocation = ({distance, time, userLocation, store, name, loading}) => {

      return (
          <View style={{gap : 5, width : '100%' ,justifyContent: 'left', paddingLeft : 50, height : 200, backgroundColor : 'white', paddingTop : 30}}>
              <View style={styles.container}>
                  <View style={styles.contentImg}>
                      <Image style={styles.img} source={require('../../../assets/storew.png')} />
                  </View>
                  <View>
                      <Text>
                          Loja mais proxima
                      </Text>
                      <Text style={styles.textT}>
                          {name}
                      </Text>
                  </View>
              </View>
              {loading? <Loading /> : <Image  style={ [ { width : 35, height : 35, transform: [{ rotate: '90deg' }]}]} source={require('../../../assets/right-arrow.png')} />}
              
              <View style={styles.container}>
                  <View style={styles.contentImg}>
                      <Image style={styles.img} source={require('../../../assets/userw.png')} />
                  </View>
                  <View>
                      <Text>
                          Sua localização
                      </Text>
                      <Text style={styles.textT}>
                          {userLocation}
                      </Text>
                  </View>
              </View>
              <Text style={styles.textT}>Cerca de {distance} Km, tempo estimado {(Number(distance) / 30) * 60} minutos</Text>
          </View>
      )

}

const styles = StyleSheet.create({
    contentImg : {
        backgroundColor : 'rgba(240, 150, 150, 1.5)',
        width : 30,
        height : 30,
        borderRadius : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    img : {
        width : 18,
        height : 18
    },
    container: {
        flexDirection : 'row',
        gap : 10
    }, textT : {
        color: 'tomato',
        fontWeight : 'bold',
    }
})

export default ContainerPreViewLocation