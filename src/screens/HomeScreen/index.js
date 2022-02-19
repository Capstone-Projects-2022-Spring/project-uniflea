// import { Auth } from 'aws-amplify';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductItem from '../components/ProductItem';
// import products from '../AmazonAssets/data/products';
import React, { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../models';

const HomeScreen = ({ searchValue }) => {

  const [products, setProducts] = useState([]);

  console.log(searchValue);
  const signOut = () => {
    Auth.signOut();
  }
  useEffect(() => {

    DataStore.query(Product).then(setProducts);

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
            avgRating={item.avgRating}
            ratingCount={item.ratings}
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
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },

  item: {
    flex: 1,
    height: 150,
    width: '95%',
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
export default HomeScreen;