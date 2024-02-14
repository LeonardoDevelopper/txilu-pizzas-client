import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image,StyleSheet, ScrollView, RefreshControl, ToastAndroid } from 'react-native';
import {Footer, FooterNoLogged} from '../../partials/footer';
import Ads from '../../partials/container-ads';
import PrintRowPizza from '../../partials/container-row-pizza';
import { Loading } from '../../partials/containerLoaders';
import { NoPizza } from '../../partials/no-found';
import { ButtonIconCircle } from '../../partials/form/button';
import { txiluPizzasLogo } from '../logo';
import { BASE_URL } from '../../api/BASE_URL';
import { getUserData } from '../../api/asyncStorage';

const Home = () => {
  const [userLogged, setUserLogged] = React.useState(null)
  const [loading, setLoading] = useState(false);
  const [pizzas, setPizzas] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = React.useState(0)

  const fetchData = useCallback(() => {
        setLoading(true);

        (async () => {
      
          const USER = await getUserData()
          setUserLogged(USER)
          async function fetchData(url) {
            return fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Erro na requisição');
                }
                return response.json();
              });
          }
          
          // Fazendo duas requisições simultâneas
          Promise.all([fetchData(BASE_URL + '/client/selects/get-pizzas'), fetchData(BASE_URL + `/client/selects/count-cart/${USER.ID}`)])
            .then(([data1, data2]) => {
              // Aqui você tem acesso aos dados retornados de ambas as requisições
    
              setLoading(false);
              setPizzas(data1.data);
              setCart(data2.data)
              console.log('Dados da requisição 1:', data1);
              console.log('Dados da requisição 2:', data2);
            })
            .catch(error => {
              // Tratar erros, se houver algum
              setPizzas(null)
              setLoading(false)
               ToastAndroid('Erro ao buscar dados:'+ error.message, ToastAndroid.SHORT);
            });
        })();
      
  }, [])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <View style={styles.home}>
      <View style={styles.h}>
      </View>
      <ScrollView
        style={styles.containerHome}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.header}>
            <Text style={styles.wellcome}>
                Bem-Vindo
            </Text>
            <Image style={{width : 80, height: 80}} source={{uri : txiluPizzasLogo}} />
        </View>
        <Ads />

        {loading ? (
          <Loading />
        ) : (
          <View style={styles.containerPizza}>
            {pizzas && pizzas.length > 0 ? pizzas.map((item) => <PrintRowPizza key={item.id} data={item} />) : <NoPizza text={'Something is wrong'} />}
          </View>
        )}
      </ScrollView>
      <Footer cart={cart} selection={[true, false, false, false, false]} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    width: '100%',
    height: '100%',
    backgroundColor : 'white'
  },
  header : {
    height: 100,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'

  },
  wellcome: {
    color: 'tomato',
    fontSize : 30,
  },
  h :{
    height : 30,
  },
  containerHome: {
  },
  containerPizza: {
    width: '100%',
  },
  txt: {
    fontSize: 80,
  },
});

export default Home;
