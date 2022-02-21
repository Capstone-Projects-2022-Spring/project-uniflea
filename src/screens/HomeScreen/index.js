import { Auth } from 'aws-amplify';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import ProductItem from '../../components/ProductItem';
import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
const prodData = [
  {
    id: 1,
    title: 'Test1',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
    price: 19.99,
  },
  {
    id: 2,
    title: 'Test2',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg',
    price: 19.99,
  },
  {
    id: 3,
    title: 'Test3',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac1.jpg',
    price: 19.99,
  },
  {
    id: 4,
    title: 'Test4',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac2.jpg',
    price: 19.99,
  },
  {
    id: 5,
    title: 'Test5',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/keyboard1.jpg',
    price: 19.99,
  },
]
const HomeScreen = ({ searchValue }) => {

  const [products, setProducts] = useState([]);

  console.log(searchValue);
  const signOut = () => {
    Auth.signOut();
  }
  useEffect(() => {
    // query the products in the product list on rendering the page
    DataStore.query(Product).then(setProducts);
    console.log('products = ', products);
  }, []);
  return (
    <View style={styles.page}>

      <FlatList
        data={products}
        renderItem={({ item }) =>

          <ProductItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />


        }
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
      />

      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
        }}>
        Sign out
      </Text>

    </View>

  );
}

export default HomeScreen;