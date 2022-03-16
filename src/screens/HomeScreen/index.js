import { Auth } from 'aws-amplify';
import { Text, View, FlatList, Modal, Picker } from 'react-native';
import styles from './styles';
import ProductItem from '../../components/ProductItem';
import React, { useEffect, useState, useContext } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Product } from '../../models';
import AuthContext from '../../contexts/Authentication';
import { useChatContext } from 'stream-chat-expo';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
const HomeScreen = ({ searchValue }) => {
  const {client} = useChatContext();
  const [products, setProducts] = useState([]);
  var [sortedProducts, setSortedProducts] = useState([]);
  const {user, setUser} = useContext(AuthContext);
  console.log(searchValue);
  console.log('user id homescreen= ', user);
  const signOut = () => {
    setUser(undefined);
    client.disconnectUser();
    Auth.signOut();
  }

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  }
  const [selectedValue, setSelectedValue] = useState("None");

  const filterSort = (sortedProducts, itemValue) => {
      setSelectedValue(itemValue);
      console.log("Changed sort setting");
      console.log(itemValue);

      switch(itemValue) {
      case 'none':
        console.log("Didn't sort");
        //No need to sort
        setSortedProducts(products);
        return;

      case 'price':
        console.log("Sorted by price");
        //sort by price
        sortedProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
        //console.log("Sorted products after sort:")
        //console.log(sortedProducts);
        return;

      default:
        console.log("Default switch case, not sorting.")
        return;
    }
  }

  useEffect(() => {
    // query the products in the product list on rendering the page
    DataStore.query(Product).then(setProducts);
    DataStore.query(Product).then(setSortedProducts);
    //console.log("OG product array:");
    //console.log(products);
    //console.log("Copy Product Array:");
    //console.log(sortedProducts);

  }, []);
  return (
    <View style={styles.page}>

    {/*Modal used to display filter tab*/}
    <Modal visible={modalOpen} animationType='slide'>
      <View style={styles.modalContent}>
        <View style={{alignItems: 'flex-end', height: 40}}>
          <Feather
            name='check'
            size={40}
            color='gray'
            onPress={toggleModalOpen}
            /> 
        </View>

        <View style={{alignItems: 'flex-start'}}>

          <Picker
            style = {{width: '100%', borderTopWidth: 0}}
            itemStyle={{fontSize:20}}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex)=> filterSort(sortedProducts, itemValue)}
            >
              <Picker.Item label ="None" value="none"/>
              <Picker.Item label ="Price" value="price"/>

          </Picker>
        </View>

        <View style={{ width: '100%', height: 15}}>
        <Text
          onPress={()=>console.log('Category Filter pressed')}
          style={{
            width: '100%',
            textAlign: 'center',
          }}>
          Filter by Category
        </Text>
      </View>

      </View>

    </Modal>  

      {/*Filter Button*/}
      <View style={{alignItems: 'flex-end'}}>
      <AntDesign 
        name='filter'
        size={40}
        color='gray'
        onPress={toggleModalOpen}
        />
      </View>
      
      <FlatList
        data={sortedProducts}
        renderItem={({ item }) =>

          <ProductItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
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
          Sign Out
        </Text>
      </View>


    </View>

  );
}

export default HomeScreen;