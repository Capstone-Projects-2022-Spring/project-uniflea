import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import { DataStore, Auth } from 'aws-amplify';
import styles from './styles';
import ActiveProductItem from '../../components/ActiveProductItem';
import { Product } from '../../models';
import { useChannelTruncated } from 'stream-chat-expo';

const ActiveListingScreen = () => {
    const [ products, setProducts] = useState([]);


    const fetchSaved = async() => {
        const myUser = await Auth.currentAuthenticatedUser();
        try{

       
        const userListing = await DataStore.query(Product, s => s.userSub("eq", myUser.attributes.sub));
        if (!myUser || userListing.length == 0) {
          console.warn("No Avtive Listings");
          return;
        }
    //       if(userListing.length == 0){
    //           return;

        console.log(myUser.attributes.sub);
        console.log("Active items = ", userListing);
        console.log(userListing[0]);
        setProducts([{"displayName": "kmadden",
        "id": "2cb16e0e-1e62-4d03-be43-decf68e56767",
        "image": "https://www.independent.ie/world-news/and-finally/bb002/36681952.ece/AUTOCROP/w620/ipanews_35405a47-daac-4590-82ba-ebf41a7b9951_embedded412269",
        "images":[
          "https://www.independent.ie/world-news/and-finally/bb002/36681952.ece/AUTOCROP/w620/ipanews_35405a47-daac-4590-82ba-ebf41a7b9951_embedded412269",    
        ],
        "price": 39.49,
        "title": "Cat For Sale (3/23/22 11:07)",
        "university": "Temple University",
        "updatedAt": "2022-03-23T15:39:49.789Z",
        "userSub": "7e113e4e-c999-479e-917d-2e9efdc7a946"}]);      
        console.log("products ========= ", products) 
        
   
    // }
    }
    catch(e){
        alert(e.message);
        return;
    }

      };

      useEffect(() => {
        const subscription = DataStore.observe(Product).subscribe(() => {
        });
        // close subscription to prevent memory leaks
        return () => subscription.unsubscribe();
      }, []);
  

    return(
        <SafeAreaView style={styles.page}>
            <Text> hello active listing </Text>
            
            <FlatList style={{backgroundColor:'red', width:200, height:200,}}
                data={products}
                renderItem={({item}) => {
                

                <ActiveProductItem
                id={item.id}
                title={item.title} 
                image={item.image} 
                price={item.price} 
                items={products}
                //  setProducts={setProducts}
                /> 


                }}
                keyExtractor={product => product.id}
                showsVerticalScrollIndicator={false}

            /> 


        </SafeAreaView> 

    );

}
export default ActiveListingScreen;
