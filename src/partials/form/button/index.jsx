import { View, Image, TouchableHighlight, StyleSheet, Text } from 'react-native'


export const  ButtonIconCircle = ({id, selected, path ,onclieck}) => {
    return (
        <TouchableHighlight
        accessibilityLabel= {id}
            underlayColor={'#f5f5f5f5'}        
            style={selected ? styles.buttonCircleSelected : styles.buttonCircle}
            onPress={(target) => onclieck(target)}
        >
            <Image style={styles.ico} source={path} />

        </TouchableHighlight>
    )
}


export const  ButtonAddCart = ({id, selected, path ,onclieck}) => {
    return (
        <TouchableHighlight
        accessibilityLabel= {id}
            underlayColor={'#f5f5f5f5'}        
            style={styles.btnAddCart}
            onPress={(target) => onclieck(target)}
        >
            <Image style={styles.icoSmall} source={path} />

        </TouchableHighlight>
    )

}

export const  ButtonNavigation = ({path ,navigate, where}) => {
    return (
        <TouchableHighlight
            underlayColor={'#f5f5f5f5'}
            style={styles.btnNav}
            onPress={() => {
                navigate(where)
            }}
        >
                <Image style={styles.ico} source={path} />
        </TouchableHighlight>
    )
}

export const  ButtonNavigation2 = ({id, text, path ,navigate, where}) => {
    return (
        <TouchableHighlight
        accessibilityLabel= {id}
            underlayColor={'#f5f5f5f5'}        
            style={styles.btnNav2}
            onPress={() => {
                navigate(where)
            }}
        >
            <View style={styles.contentBtn}>
                <View style={{width : 50, justifyContent : 'left',}}>
                    <Image style={{width : 20, height : 20}} source={path} />
                </View>
                <Text style={{color: 'dimgray', fontSize : 16, width : 200, fontWeight : 'bold'}}>{text}</Text>
                <View style={{ width : 50}}>
                    <Image style={{width : 20, height : 20}} source={require('../../../../assets/next.png')} />
                </View>
            </View>

        </TouchableHighlight>
    )
}

export const  ButtonLogout = ({id, text, path , fun}) => {
    return (
        <TouchableHighlight
        accessibilityLabel= {id}
            underlayColor={'#f5f5f5f5'}        
            style={styles.btnNav2}
            onPress={() => {
                fun()
            }}
        >
            <View style={styles.contentBtn}>
                <View style={{width : 50, justifyContent : 'left',}}>
                    <Image style={{width : 20, height : 20}} source={path} />
                </View>
                <Text style={{color: 'dimgray', fontSize : 16, width : 200, fontWeight : 'bold'}}>{text}</Text>
                <View style={{ width : 50}}>
                    <Image style={{width : 20, height : 20}} source={require('../../../../assets/next.png')} />
                </View>
            </View>

        </TouchableHighlight>
    )
}

export const Button = ({text, fun}) => {
    return <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="lightgray"
        style = {styles.button}
        onPress={() => fun()}
        >
        <Text style={{color : 'white' }}>
            {text}
        </Text>
    </TouchableHighlight>
}
export const ButtonCount = ({count, text, fun}) => {
    return <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="lightgray"
        style = {styles.buttonCount}
        onPress={fun}
        >
        <Text style={{color : 'tomato', fontSize : 18 }}>
            {text}
        </Text>
    </TouchableHighlight>
}

export const ButtonDelete = ({id, fun}) => {
    return <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="transparent"
        style = {{}}
        onPress={() => fun(id)}
        >
        <Image style={{width : 25, height : 25}} source={require('../../../../assets/deleter.png')} />
    </TouchableHighlight>
}



const styles = StyleSheet.create({
    ico : {
        width : 25,
        height : 25,
    },
    icoSmall : {
        width : 18,
        height : 18,
    },
    buttonCircle : {
     borderRadius : 100,
     padding : 10   ,
     justifyContent : 'center',
     alignItems : 'center',
    },
    buttonCircleSelected : {
        borderRadius : 100,
     backgroundColor : 'tomato',
     padding : 10   ,
     justifyContent : 'center',
     alignItems : 'center',
    },
    btnAddCart : {
        width : 30,
        height : 30,
        position : 'absolute',
        backgroundColor : 'white',
        bottom : 2,
        right : 0,
        borderBottomRightRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 3
    },
    btnNav : {
        width : 40,
        height : 40,
        borderRadius : 11,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 8
    }
    ,
    contentBtn : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    btnNav2 : {
        justifyContent : 'center',
        alignItems : 'center',
        height : 70,
        padding : 15,
        width : '95%',
        borderRadius : 10,
        backgroundColor : 'white'
    },
    button : {
        width : 300,
        height : 50,
        backgroundColor : 'tomato',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10

    },
    buttonCount : {
        width : 47,
        height : 47,
        backgroundColor : 'white',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        elevation : 7

    }
})