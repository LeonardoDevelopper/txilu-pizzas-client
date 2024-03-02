import { StyleSheet, View, Text } from "react-native"

const ItemPreview =  ({item}) => {
    return (
        <View style={styles.containerItem}>
            <View style={styles.contentItem} >
                <Text style={styles.title}>Nome : </Text>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.contentItem}>
                <Text style={styles.title}>Quantidade : </Text>
                <Text style={styles.text}>X{item.quantity}</Text>
            </View>
            <View style={styles.contentItem}>
                <Text style={styles.title}>Preço :</Text>
                <Text style={styles.text}> {(item.price*820).toFixed(0)}, 00KZ</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentItem : {
        flexDirection : 'row'
    },
    containerItem : {
        padding : 10,
        width : '100%',
        backgroundColor : 'rgb(235, 235, 235)',
        borderRadius : 5,
        marginTop  : 10

    },
    title : {
        fontWeight : 'bold',
        color : 'dimgray'
    },
    textt : {
        fontSize : 17,
        fontWeight : 'bold',
        color : 'tomato'
    }
    ,text : {
        fontWeight : 'bold',
        color : 'tomato'
    }
})


export default ItemPreview