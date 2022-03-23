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
  const [selectedValue, setSelectedValue] = useState("Category 1");

  useEffect(() => {
    // query the products in the product list on rendering the page
    DataStore.query(Product).then(setProducts);
  
  }, []);
  return (
    
    <View style={styles.page}>

    {/*Modal used to display filter tab*/}
    <Modal visible={modalOpen} animationType='slide'>
      <View style={styles.modalContent}>
        <View style={{alignItems: 'flex-end'}}>
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
            onValueChange={(itemValue, itemIndex)=> setSelectedValue(itemValue)}
            >
              <Picker.Item label ="Category 1" value="category1"/>
              <Picker.Item label ="Category 2" value="category2"/>
              <Picker.Item label ="Category 3" value="category3"/>
              <Picker.Item label ="Category 4" value="category4"/>
              <Picker.Item label ="Category 5" value="category5"/>

          </Picker>
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
          Sign Out
        </Text>
      </View>


    </View>

  );
}

export default HomeScreen;