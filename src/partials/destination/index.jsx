import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
const Destination = ({obj, fun}) => {
    const [selected, setSelected ] = React.useState(false)
    const handleSelect = () => {
        fun(obj)
    }
    React.useEffect(() => {
        setSelected(false)
    }, [handleSelect])
    return (
        <TouchableHighlight
        style={{
            width : 100, 
            height : 80,
            backgroundColor : selected ? 'tomato' : 'silver',
            elevation : 3,
            borderRadius : 5,
            marginLeft : 10
            ,
            justifyContent : 'center',
            alignItems : 'center'
        }}
        onPress={handleSelect} 
        
        >
            <View style={
                {
                    width : '100%',
                    height: '100%',
                    backgroundColor : selected ? 'tomato' : 'silver',
                    justifyContent : 'center',
                    alignItems : 'center'
                }
            }>
                <Image  style={{width : 40, height : 40}} source={require('../../../assets/destination.png')} />
                <Text style={{fontWeight : 'bold', color : 'white'}}>
                    {obj.NAME}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

export default Destination