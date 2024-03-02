import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
const Destination = ({name, fun}) => {
    const [selected, setSelected ] = React.useState(false)
    const handleSelect = () => {
    }
    React.useEffect(() => {
        setSelected(false)
    }, [handleSelect])
    return (
        <TouchableHighlight
        style={{
            width : 100, 
            height : 40,
            backgroundColor : selected ? 'tomato' : 'silver',
            elevation : 3,
            borderRadius : 100,
            marginLeft : 10,
            padding : 10
            ,
            justifyContent : 'center',
            alignItems : 'center'
        }}
        onPress={handleSelect} 
        
        >
            <View>
                <Text style={{fontWeight : 'bold', color : 'white'}}>
                     {name} 
                </Text>
            </View>
        </TouchableHighlight>
    )
}

export default Destination