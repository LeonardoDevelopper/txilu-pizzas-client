import { View, Image, Text, TextInput, TouchableHighlight, ScrollView, StyleSheet } from 'react-native'
import HeaderScreen from '../../partials/headerScreen'
import { Input } from '../../partials/form/input'
import { Button } from '../../partials/form/button'
import React from 'react'
import { getUserData, saveUserData } from '../../api/asyncStorage'
import List from '../../partials/list'
import { Loading } from '../../partials/containerLoaders'

const SetDestination = () => {
    
    const  [list, setList] = React.useState([])
    const [name, setName] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() =>{
        setLoading(true)
       loadList()
    }, [])
    React.useEffect(() =>{
        saveUserData('DESTINATION-LIST', list)
    }, [list])
    const loadList = async () => {
        const dest =  await getUserData('DESTINATION-LIST')
        setList(dest)
        setLoading(false)
    }
    const handleAdd = () => {
        setList([...list, name])
        saveUserData('DESTINATION-LIST', list)
    }
    return (
        <View style={{ flex : 1, backgroundColor : 'white'}}>
            <HeaderScreen target1={'Account'} title={'Adicionar destino'} />
            <View style={{marginTop : 150, paddingLeft: 50}}>
                <Text style={{fontWeight : 'bold', color: 'dimgray'}}>
                    Meus locais de entrega
                </Text>
            </View>
            <ScrollView style={{width : '100%', height : 50}}>
                {loading? <Loading /> : <List key={2} data={list} fun={setList} />}
                
            </ScrollView>
            <View style={styles.form}>
                <Input setValue={setName} value={name} placeholder={'Novo local de entrega'} />
                <Button fun={handleAdd} text={'Adicionar'} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form : {
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        gap : 10
    }
})

export default SetDestination