import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import { DataStore, Auth } from 'aws-amplify';
import styles from './styles';
import ActiveProductItem from '../../components/ActiveProductItem';
import { Product } from '../../models';

const ActiveListingScreen = () => {
    const [items, setItems] = useState([]);

      const fetchSaved = async() => {
        const myUser = await Auth.currentAuthenticatedUser();
        
    
        // only want roducts where my id == userID in database
        const userListing = await DataStore.query(Product, s => s.userSub("eq", myUser.attributes.sub));
        if (!myUser || userListing.length === 0) {
          console.warn("no Active listings");
          return;
        }
        
        setItems(userListing);
      };

      useEffect(() => {
        fetchSaved();
        const subscription = DataStore.observe(Product).subscribe(() => {
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
               
                <ActiveProductItem 
                  id={item.id}
                  title={item.title} 
                  image={item.image} 
                  price={item.price} 
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
export default ActiveListingScreen;
