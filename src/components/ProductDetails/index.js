import React, {useEffect, useState} from 'react';
import { Text, ScrollView, SafeAreaView, Alert } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import ImageCarousel from '../ImageCarousel';
import CustomButton from '../CustomButton';
import { Auth, DataStore } from 'aws-amplify';
import { Product, SavedProduct } from '../../models';
const prod = {
    id: '5',
    title: "Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB",
    description: `Features & details
    - MAGSPEED WHEEL: Ultra-fast, precise, quiet MagSpeed electromagnetic scrolling
    - DARKFIELD 4000 DPI SENSOR: Darkfield 4000 DPI sensor for precise tracking on any surface, even glass (up to 4mm in thickness)
    - COMFORTABLE DESIGN: Tactile reference for hand positioning makes it easy to stay oriented and in your flow
    - FLOW CROSS-COMPUTER CONTROL: Supports flow cross-computer control across multiple screens. Pair up to 3 devices via Bluetooth Low Energy or Unifying USB receiver`,
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
    images: [
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg',
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg',
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg',
    ],
    price: 99.98,
  
  };
const ProductDetails = () => {

    const [product, setProduct] = useState(undefined);
    const route = useRoute();
    // route allows us to receive the data passed as param from navigator hook
    console.log('route params = ', route.params);
    console.log(route.params.id);
    
    const queryProduct = async() => {
        if(!route.params?.id) {
            console.warn("No id matching item");
            return;
        }
        const prod = await DataStore.query(Product, route.params.id);
        setProduct(prod);
        console.log("Product = ", product)
    }
    // query product on render and each time the id parameter changes
    useEffect(() => {

        queryProduct();
        
    }, [route.params?.id]);

    const addToSavedList = async() => {
        const userData = await Auth.currentAuthenticatedUser();
        console.log('user data  = ', userData)
        if(!product || !userData){
            console.warn("Missing product or user data");
            return;
        }
        const newSavedProduct = new SavedProduct({
            userSub: userData.attributes.sub, 
            product,
        });

        await DataStore.save(newSavedProduct);
        Alert.alert("Pressed", "Saved listing pressed");
    }

    if(!product){
        return (
            <Text>Error: No such product found</Text>
        )
    }
    return (
        <SafeAreaView>
            <ScrollView style={styles.root}>
                <Text style={styles.title}>
                    {product.title}
                </Text>
                {/* Image Carousel */}
                <ImageCarousel images={product.images} />
                {/* Price */}
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                {/* Description */}
                <Text style={styles.description}>{product.description}</Text>
                {/* Save listing */}
                <CustomButton onPress={addToSavedList} text='Save Listing' primary={true} />
            </ScrollView>
        </SafeAreaView>

    );
}

export default ProductDetails;