import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import { DataStore, Auth } from 'aws-amplify';
import styles from './styles';
import ActiveProductItem from '../../components/ActiveProductItem';
import { Product } from '../../models';

const ActiveListingScreen = () => {
    const [products] = useState([]);

    
    const fetchSaved = async() => {
    
        const myUser = await Auth.currentAuthenticatedUser();
        
    
        
        const userListing = await DataStore.query(Product, p => p.userSub("eq", myUser.attributes.sub));
        if (!myUser || userListing.length === 0) {
          console.warn("No Avtive Listings");
          return;
        }
        console.log(myUser.attributes.sub);
        console.log("Active items = ", userListing);
        console.log(userListing[0].userSub);
        setItems(userListing);
      };

      useEffect(() => {
          fetchSaved()
      }, []);
  

    return(
        <SafeAreaView style={styles.page}>
            <Text> hello active listing </Text>
            
            <FlatList
                data={products}
                renderItem={({product}) => {
                

                <ActiveProductItem
                id={item.id}
                title={item.product.title} 
                image={item.product.image} 
                price={item.product.price} 
                productId={item.product.id}
                items={items}
                setItems={setItems}
                /> 

                }}
                keyExtractor={product => product.id}
                showsVerticalScrollIndicator={false}

            /> 





        </SafeAreaView> 

    );

}
export default ActiveListingScreen;
