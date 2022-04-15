import React, { useContext, useEffect, useState } from 'react';
import {Text, ScrollView, SafeAreaView, Alert, ActivityIndicator, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import ImageCarousel from '../ImageCarousel';
import CustomButton from '../CustomButton';
import {Auth, DataStore, loadingContainer} from 'aws-amplify';
import { Product, SavedProduct, User } from '../../models';
import { useNavigation } from '@react-navigation/native';
import SendMessageItem from '../SendMessageItem';
import { useChatContext } from 'stream-chat-expo';
import CustomCircleButton from "../CustomCircleButton";
import {S3Image} from "aws-amplify-react-native/src/Storage";
import AuthContext from '../../contexts/Authentication';
import ScaledCustomButton from "../ScaledCustomButton";

const ProductDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [sellingUser, setSellingUser] = useState(undefined);

    const { client } = useChatContext();

    const navigation = useNavigation();
    const [product, setProduct] = useState(undefined);
    const [profileImage, setProfileImage] = useState(undefined);
    const [profileName, setProfileName] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const {setOtherUser} = useContext(AuthContext);
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
        // console.log('prod------',prod )


        setOtherUser(prod.userSub)


        // console.log("Product = ", product)

        // fetching user profile image
        const user = await DataStore.query(User, s => s.userSub("eq", prod.userSub));
        const profileImage = user[0].image;
        setProfileImage(profileImage);
        setProfileName(user[0].name);
        // console.log("Profile Author's Name: ", response);

        // fetch the user who created the listing's Stream API account
        const response = await client.queryUsers({ id: { $in: [prod.userSub] } });
        // console.log("Response from user query = ", response);
        setSellingUser(response.users[0]);
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
    } else {
        return (
            <SafeAreaView>
                <ScrollView style={styles.root}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {product.title}
                        </Text>
                    </View>
                    <View style={styles.profileContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("OtherProfileScreen", {userSub: product.userSub})}>
                            <View style={styles.profileContainer2}>
                                {/*<Image style = {styles.circleButtonPic} source = {require("../../../assets/user.png")}/>*/}
                                <S3Image style={styles.circleButtonPic} imgKey={profileImage}/>
                                <Text style={styles.profileText}>Visit {profileName}'s Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Image Carousel */}
                    {/*<ImageCarousel images={product.images}/>*/}
                    <View style = {styles.imageContainer}>
                        <S3Image style = {styles.imageFrame} imgKey={product.image}/>
                    </View>
                    {/* Price */}
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    {/* Description */}
                    <View>
                        <Text style={styles.description}>{product.description}</Text>
                    </View>
                    {/* Save listing */}
                    <View style={styles.buttonContainer}>
                        <ScaledCustomButton onPress={addToSavedList} text='Save Listing' primary={true}/>

                        
                        <SendMessageItem userToMessage={sellingUser}/>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }
}

export default ProductDetails;