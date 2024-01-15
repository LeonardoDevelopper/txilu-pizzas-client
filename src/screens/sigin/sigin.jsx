import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

const Sigin = () => {
    return (
        <View style= {styles.container}>
            <Text>Sigin</Text>
            <TextInput placeholder='username' style = {inputStyle.input} />
            <TextInput placeholder='userpassword' style = {inputStyle.input} />
            <TouchableHighlight
                style={styleButton.button}
                activeOpacity={0.5}
                >
                <Text style ={{color : 'white'}}>{'Criar conta'}</Text>
            </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display : 'flex',
      flexDirection : 'column',
      gap : 15
    },
  });

  const styleButton = StyleSheet.create({
    button : {
        width : 140,
        height : 45,
        backgroundColor : 'tomato',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 9
    }
  })
  

  const inputStyle = StyleSheet.create(
    {
        input : {
            backgroundColor : '#f5f5f5f5',
            height : 40,
            width : 250,
            borderRadius : 10,
            color : 'dimgray',
            paddingLeft : 15
        }
    }
  )

  export default Sigin