import React, {useState, useEffect, useContext} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import { DataStore, Auth } from 'aws-amplify';
import styles from './styles';
import ActiveProductItem from '../../components/ActiveProductItem';
import { Product } from '../../models';
import AuthContext from '../../contexts/Authentication';

const ActiveListingScreen = ({route}) => {
    const [items, setItems] = useState([]);
    const {user, otherUser} = useContext(AuthContext);
    const { fromScreen } = route.params;

      const fetchSaved = async() => {
      let userListing; 

        if(fromScreen === "OtherProfileScreen"){
          userListing = await DataStore.query(Product, s => s.userSub("eq", otherUser));
        }
        else{
          userListing = await DataStore.query(Product, s => s.userSub("eq", user.attributes.sub));
        }
    
        // only want roducts where my id == userID in database
        if (!user || userListing.length === 0) {
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
                  userSub={item.userSub}
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
