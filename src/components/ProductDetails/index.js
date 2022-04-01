import React, { useEffect, useState } from 'react';
import { Text, ScrollView, SafeAreaView, Alert, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import ImageCarousel from '../ImageCarousel';
import CustomButton from '../CustomButton';
import { Auth, DataStore } from 'aws-amplify';
import { Product, SavedProduct } from '../../models';
import { useNavigation } from '@react-navigation/native';
import SendMessageItem from '../SendMessageItem';
import { useChatContext } from 'stream-chat-expo';
const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sellingUser, setSellingUser] = useState(undefined);

    const { client } = useChatContext();

    const navigation = useNavigation();
    const [product, setProduct] = useState(undefined);
    const route = useRoute();

    // route allows us to receive the data passed as param from navigator hook
    // console.log('route params = ', route.params);
    // console.log(route.params.id);

    const queryProduct = async () => {
        setIsLoading(true);
        if (!route.params?.id) {
            console.warn("No id matching item");
            return;
        }
        const prod = await DataStore.query(Product, route.params.id);
        setProduct(prod);
        // console.log("Product = ", product)

        // fetch the user who created the listing's Stream API account
        const response = await client.queryUsers({ id: { $in: [prod.userSub] } });
        // console.log("Response from user query = ", response);
        setSellingUser(response.users[0]);
        // console.log(sellingUser)
        setIsLoading(false);
    }

    // query product on render and each time the id parameter changes
    useEffect(() => {

        queryProduct();

    }, [route.params?.id]);

    const addToSavedList = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        // console.log('user data  = ', userData)
        if (!product || !userData) {
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

    if (!product) {
        return (
            <Text>Error: No such product found</Text>
        )
    }
    if (isLoading) {
        return (


            <SafeAreaView>
                <ScrollView style={styles.root}>
                    <ActivityIndicator />
                </ScrollView>
            </SafeAreaView>
        );
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
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={addToSavedList} text='Save Listing' primary={true} />

                    <CustomButton onPress={() => {
                        // console.log("Product Details screen: " + product.id)
                        // console.log("Product Details screen: " + product.title)
                        // console.log("Product Details screen: " + product.price)
                        // console.log("Product Details screen: " + product.description)
                        navigation.navigate('EditProductScreen',
                            {
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                description: product.description
                            }
                        )
                    }}
                        text="Edit" />
                    <SendMessageItem userToMessage={sellingUser} />
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}

export default ProductDetails;