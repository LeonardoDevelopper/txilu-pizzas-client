import { View, Text, StyleSheet,  Image, SectionList, FlatList, SafeAreaView,StatusBar,ScrollView, Alert } from 'react-native'



export const NoPizza = ({text}) => {
    return (
        <View style={{
            flex : 1,
            height : 450,
            justifyContent : 'center',
            alignItems : 'center',
            }}>
            <Image style={{width : 150, height : 150}} source={require('../../../assets/nopizza.png')} />
            <Text style={{marginTop : 50, fontSize : 18, color : 'tomato'}}>
                {text}
            </Text>
        </View>
    )
}