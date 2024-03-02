import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { ButtonLogout, ButtonNavigation2 } from '../../partials/form/button';
import { Footer, FooterNoLogged } from '../../partials/footer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { deleteUserData, getUserData } from '../../api/asyncStorage';
const Account = () => {
    const REDIRECT_TO = useNavigation()
    const [user, setUser] = React.useState(null)

    React,useEffect(() =>{
        load()
        console.log(user)
    }, [])
    const load = async () => {
        const USER = await getUserData('CLIENT-TOKEN');
        if(USER)
        {
            setUser(USER)

        }
    }

    const handleLogout = () =>{
        deleteUserData('CLIENT-TOKEN')
        REDIRECT_TO.navigate('Signup')
    }
  return (
    <View style={{flex: 1, justifyContent : 'center', alignItems : 'center'}}>
        <LinearGradient
        colors={['tomato', '#f5f5f5','#f5f5f5','#f5f5f5']}
        style={{ flex: 1, width : '100%', height: '100%' }}>
            <ScrollView style={{width: '100%', height : '100%'}}>
                <View style={styles.contentImgText}>
                    <View style={styles.contentImg}>
                        <Image style={styles.img} source={require('../../../assets/accounts.png')} />
                    </View>
                    <View>
                        <Text style={styles.textWhite}>
                            {user && user.EMAIL}
                            
                        </Text>
                        <Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.contentInfo}>
                        <View style={styles.mydata}>
                            <Text style={{fontWeight : 'bold', color : 'dimgray', fontSize : 16}}>
                                Minhas estatísticas
                            </Text>
                        </View>
                        <View style={styles.order}>
                            <View>
                                <Text style={{fontWeight : 'bold', color : 'silver', fontSize : 16}}>Valor gasto(Kz)</Text>
                                <Text style={{fontWeight : 'bold', color : 'dimgray', fontSize : 26}}>0,00</Text>
                            </View>
                        </View>
                        <View style={{width : '100%',
                                    padding : 15,
                                    height : 60,}}
                        >
                            <Text style={{fontWeight : 'bold', color : 'dimgray', fontSize : 15}}>Alguma outra informação</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerButtons}>
                    <View>
                        <ButtonNavigation2 path={require('../../../assets/usert.png')} text={'Conta'}  />
                        <ButtonNavigation2 path={require('../../../assets/creditt.png')} text={'Cartões de crédito'}  />
                        <ButtonNavigation2 navigate={REDIRECT_TO.navigate} where={'setdestination'} path={require('../../../assets/destinationt.png')} text={'Locais de entrega'}  />
                    </View>
                    <View>
                        <ButtonNavigation2 path={require('../../../assets/orders.png')} text={'Pedidos'} />
                    </View>
                    <View>
                        <ButtonNavigation2 path={require('../../../assets/setting.png')} text={'Definições'}  />
                        <ButtonLogout fun={handleLogout} path={require('../../../assets/exit.png')} text={'Sair'}  />
                    </View>
                    <View style={{height : 120}}>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
        <Footer  selection={[false, false, false, false, true]} />
    </View>
  );
};

const styles = StyleSheet.create(
    {
        contentImgText : {
            flex: 1,
             width : '100%', 
             height: 150, 
             paddingLeft : 20,
             paddingTop : 50,
             justifyContent : 'left',
              alignItems: 'center',
              flexDirection : 'row',
              gap : 15
            },
            img : {
                width : 30,
                height : 30,

            },
            contentImg : {
                backgroundColor : 'white',
                borderRadius: 100,
                padding : 15,
                justifyContent : 'center',
                alignItems : 'center'
            },
            textWhite : {
                color: 'white',
                fontWeight : 'bold',
                fontSize : 20

            },
            containerInfo : {
                width : '100%',
                justifyContent : 'center',
                alignItems : 'center'
            },
            contentInfo : {
                width : '90%',
                height : 200,
                backgroundColor : 'white',
                borderRadius : 10,
                elevation : 1,
                marginBottom : 20
            

            },
            containerButtons : {
                width : '100%',
                justifyContent : 'center',
                alignItems : 'center',
                gap : 15,
            },
            mydata : {
                width : '100%',
                padding : 15,
                height : 60,
                borderStyle : 'solid',
                borderBottomColor : 'rgb(225, 225, 225)',
                borderBottomWidth : 1,
            },
            order : {
                width : '100%',
                padding : 15,
                height : 90,
                borderStyle : 'solid',
                borderBottomColor : 'rgb(225, 225, 225)',
                borderBottomWidth : 1,
            }
    }
)

export default Account;
