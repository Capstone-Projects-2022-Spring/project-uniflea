import { Auth } from 'aws-amplify';
import { Text, View, FlatList } from 'react-native';
import styles from './styles';
import ProductItem from '../../components/ProductItem';
import React, { useEffect, useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
import AuthContext from '../../contexts/Authentication';
import { useChatContext } from 'stream-chat-expo';
const HomeScreen = ({ searchValue }) => {
  const {client} = useChatContext();
  const [products, setProducts] = useState([]);
  const {user, setUser} = useContext(AuthContext);
  console.log(searchValue);
  console.log('user id homescreen= ', user);
  const signOut = () => {
    setUser(undefined);
    client.disconnectUser();
    Auth.signOut();
  }
  useEffect(() => {
    // query the products in the product list on rendering the page
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
          />


        }
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={{marginBottom: 'auto', width: '100%', height: 15}}>
        <Text
          onPress={signOut}
          style={{
            width: '100%',
            textAlign: 'center',
          }}>
          Sign out
        </Text>
      </View>


    </View>

  );
}

export default HomeScreen;