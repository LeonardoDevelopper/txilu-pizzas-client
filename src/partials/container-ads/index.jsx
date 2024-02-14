import { View, Text, Image, StyleSheet } from "react-native";

const  Ads = () => {
    return (
        <View style={styles.containerAds}>
            <View style={styles.contentAds}>
                <View style={styles.contentAdsImg}>
                    <Image style={styles.imgAds} source={{uri : 'http://192.168.190.241:8080/uploads/pizzas/3016b15e-d180-45ac-9a07-6516782cc0b0.jpg'}} />
                </View>
                <View style={styles.contentAdsText}>
                    <Text style={styles.adsText}>
                        Anúncio
                    </Text>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerAds : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        height : 150,
    },
    contentAds : {
        width : '85%',
        backgroundColor : 'tomato',
        borderRadius : 14,
        padding : 20,
        flexDirection : 'row',
        justifyContent : 'center',
        alignContent : 'center',
        gap : 20,
        elevation : 9

    },
    contentAdsImg : {
        flexDirection : 'row'
    },
    imgAds : {
        width : 90,
        height : 90,
        borderRadius : 100

    },
    contentAdsText : {
        width : '50%',
        justifyContent : 'center'
        ,alignContent : 'center'

    },
    adsText : {
        color : 'white',
        fontSize : 18
    }
})

export default Ads