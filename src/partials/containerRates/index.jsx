import React from 'react';
import { Image, Text, View } from 'react-native';

const Rates = ({value}) => {
  let rate = [];
  for (let i = 0; i < 5; i++) {
    if (i < value) {
      rate.push(
        <Image
          source={require('../../../assets/starf.png')}
          style={{ width: 16, height: 16 }}
        />
      );
    } else {
      rate.push(
        <Image
          
          source={require('../../../assets/stare.png')}
          style={{ width: 16, height: 16 }}
        />
      );
    }
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {rate}
      <Text style={{ color: 'tomato', fontWeight : 'bold', fontSize : 18 }}>{value+ ', 0'}</Text>
    </View>
  );
};

export default Rates;
