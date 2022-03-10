import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import SavedProductItem from '../../components/SavedProductItem';
import styles from './styles';
import { Auth, DataStore } from 'aws-amplify';
import { SavedProduct } from '../../models';

  const SavedItemScreen = () => {
    const [items, setItems] = useState([]);

    const fetchSaved = async() => {
      const myUser = await Auth.currentAuthenticatedUser();
      
  
      // only want saved products where my id == userID in database
      const savedItems = await DataStore.query(SavedProduct, s => s.userSub("eq", myUser.attributes.sub));
      if (!myUser || savedItems.length === 0) {
        console.warn("no saved listings");
        return;
      }
      console.log(myUser.attributes.sub);
      console.log("saved items = ", savedItems);
      console.log(savedItems[0].userSub);
      setItems(savedItems);
    };

    useEffect(() => {
      fetchSaved();
      const subscription = DataStore.observe(SavedProduct).subscribe(() => {
        fetchSaved()
      });
      // close subscription to prevent memory leaks
      return () => subscription.unsubscribe();
    }, []);
      return (
        <SafeAreaView style={styles.page}>
            
            <FlatList 
              data={items}
              renderItem={({item}) =>
               
                <SavedProductItem 
                  id={item.id}
                  title={item.product.title} 
                  image={item.product.image} 
                  price={item.product.price} 
                  productId={item.product.id}
                  items={items}
                  setItems={setItems}
                />

            }
              keyExtractor={product => product.id}
              showsVerticalScrollIndicator={false}
              
            />
          
        </SafeAreaView>
        
      );
  }

  export default SavedItemScreen;