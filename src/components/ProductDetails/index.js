import React, { useEffect, useState } from 'react';
import {Text, ScrollView, SafeAreaView, Alert, ActivityIndicator, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import ImageCarousel from '../ImageCarousel';
import CustomButton from '../CustomButton';
import { Auth, DataStore } from 'aws-amplify';
import { Product, SavedProduct, User } from '../../models';
import { useNavigation } from '@react-navigation/native';
import SendMessageItem from '../SendMessageItem';
import { useChatContext } from 'stream-chat-expo';
import CustomCircleButton from "../CustomCircleButton";
import {S3Image} from "aws-amplify-react-native/src/Storage";

const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sellingUser, setSellingUser] = useState(undefined);

    const { client } = useChatContext();

    const navigation = useNavigation();
    const [product, setProduct] = useState(undefined);
    const [profileImage, setProfileImage] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [productImage, setProductImage] = useState(undefined);
    const route = useRoute();

    // route allows us to receive the data passed as param from navigator hook
    // console.log('route params = ', route.params);
    // console.log(route.params.id);

    const pullProductRecord = async () => {
        // const productRecord = await DataStore.query(Product, s => s.userSub("eq", userSub));
        const productImage = await DataStore.query(Product, route.params.id);
        setProductImage(productImage);
    }

    const queryProduct = async () => {
        setIsLoading(true);
        if (!route.params?.id) {
            console.warn("No id matching item");
            return;
        }
        const prod = await DataStore.query(Product, route.params.id);
        setProduct(prod);
        console.log('prod------',prod )

        // console.log("Product = ", product)

        // fetch the user who created the listing's Stream API account
        const response = await client.queryUsers({ id: { $in: [prod.userSub] } });
        console.log("Response from user query = ", response);
        setSellingUser(response.users[0]);
        setIsLoading(false);

    }

    // query product on render and each time the id parameter changes
    useEffect(() => {
        queryProduct();
        // pullProductRecord();
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
                <View style = {styles.titleContainer}>
                    <Text style={styles.title}>
                        {product.title}
                    </Text>
                </View>
                <View style = {styles.profileContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("OtherProfileScreen",{userSub: product.userSub} )}>
                    <Text style = {styles.profileText}>Visit User's Profile</Text>
                    </TouchableOpacity>
                </View>
                {/* Image Carousel */}
                <ImageCarousel style = {styles.imageFrame} images={product.images} />
                {/*<S3Image style = {styles.imageFrame} imgKey={productImage}/>*/}
                {/* Price */}
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                {/* Description */}
                <View>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                {/* Save listing */}
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={addToSavedList} text='Save Listing' primary={true} />

                    {/*<CustomButton onPress={() => {*/}
                    {/*    // console.log("Product Details screen: " + product.id)*/}
                    {/*    // console.log("Product Details screen: " + product.title)*/}
                    {/*    // console.log("Product Details screen: " + product.price)*/}
                    {/*    // console.log("Product Details screen: " + product.description)*/}
                    {/*    navigation.navigate('EditProductScreen',*/}
                    {/*        {*/}
                    {/*            id: product.id,*/}
                    {/*            title: product.title,*/}
                    {/*            price: product.price,*/}
                    {/*            description: product.description*/}
                    {/*        }*/}
                    {/*    )*/}
                    {/*}}*/}
                    {/*    text="Edit" />*/}
                    <SendMessageItem userToMessage={sellingUser} />
                    {/*<CustomButton onPress = {addToSavedList} text = 'Profile'/>*/}
                </View>

            </ScrollView>
        </SafeAreaView>

    );
}

export default ProductDetails;