import React from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, ToastAndroid, RefreshControl } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Item from '../item-cart';
import { BASE_URL } from '../../api/BASE_URL';
import { getUserData } from '../../api/asyncStorage';
import { Loading } from '../containerLoaders';
import { NoPizza } from '../no-found';

const ProductCart  = ({products, setProducts, setCounter}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
   
  const handleDeleteItem = async (id) => {
    setProducts((product) => product.filter(item => item.ID != id))
    const  USER = await getUserData('CLIENT-TOKEN')
    fetch(BASE_URL + `/client/deletes/product-from-cart/${id}/${USER.ID}`, 
    {
      method : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((response) => {
      if(response.OK)
      {
        fetchData(true)
        ToastAndroid.show(response.message, ToastAndroid.SHORT)
      }else
      {
        ToastAndroid.show(response.messageError, ToastAndroid.SHORT)

      }
    })
    .catch((error) => ToastAndroid.show(error.message, ToastAndroid.SHORT))
  };

  const fetchData = async (deleting) => {
    if(!deleting)
    {
      setLoading(true)

    }
    const  USER = await getUserData('CLIENT-TOKEN')
    fetch(BASE_URL + `/client/selects/get-cart/${USER.ID}`,
    {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((response) => {
        setLoading(false)
         setCounter(response.data.counter)
        setProducts(response.data.products)

    }).catch((error) => console.log(error.message)) 
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData()
    setRefreshing(false);
  }, [fetchData]);

  React.useEffect(() => {
     fetchData();
  }, []);

  const renderSwipeableItem = (item) => {

    return (
      <Swipeable renderRightActions={() => renderRightActions(item.ID)}>
        <Item key={item.ID} product={item} handleDeleteItem={handleDeleteItem} />
      </Swipeable>
    );
  };

  const renderRightActions = (id) => {
    return (
      <TouchableHighlight onPress={() => handleDeleteItem(id)}>
        <View style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      </TouchableHighlight>
    );
  };

  if(!loading)
  {
    return (
      <ScrollView 
        refreshControl={<RefreshControl refreshing = {refreshing} onRefresh={onRefresh} />}
  
      style={{top: 130}}>
        { products && products.length > 0 ? products.map((item) => renderSwipeableItem(item)) : <NoPizza text={'O carrinho está vazio'} /> }
      </ScrollView>
    );
  }
  else{
    return <Loading />
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000',
    width: 100,
    height: '100%',
  },
  deleteText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ProductCart;
