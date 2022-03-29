import React, {useEffect, useContext, useState, useRef} from 'react';
import styles from './styles'
import {SafeAreaView, StyleSheet, TextInput, Pressable, Image, ScrollView,
    Text, View, TouchableHighlight, TouchableOpacity, Picker, Alert} from 'react-native';
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from "@react-navigation/native";
import {Auth, DataStore, Storage} from "aws-amplify";
import {SavedProduct, User, Product} from "../../models";
import AuthContext from "../../contexts/Authentication";
import {v4 as uuidv4} from 'uuid';
import {S3Image} from 'aws-amplify-react-native';
import CategorySelect from '../../components/CategorySelect';
import {UIImagePickerPresentationStyle} from "expo-image-picker";
import {useForm} from "react-hook-form";

const CreateListingScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const {user} = useContext(AuthContext);
    const [titleOfListing, setTitleOfListing] = React.useState(null);
    const [descriptionOfListing, setDescriptionOfListing] = React.useState(null);
    const [priceOfListing, setPriceOfListing] = React.useState(null);
    const [image, setImage] = React.useState('../../../assets/camera.png');
    const [selectedCategory, setSelectedCategory] = React.useState(null);
    const CATEGORIES = [
        {id: 'Books', name: 'Books'},
        {id: 'Supplies & Equipment', name: 'Supplies & Equipment'},
        {id: 'Electronics', name: 'Electronics'},
        {id: 'Clothes', name: 'Clothes'},
        {id: 'Handmade', name: 'Handmade'},
        {id: 'Service', name: 'Service'},
    ];

    const pickImage = async () => {
        let myuuid = uuidv4();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        const response = await fetch(result.uri);
        const blob = await response.blob();
        console.warn("blob created=====", blob);
        const uploadedImage = await Storage.put(myuuid, blob);
        setImage(uploadedImage.key);
        console.warn("image uploaded gang=====", uploadedImage.key);
    };

    // const saveListingAsDraft = async() => {
    //     // const userData = await Auth.currentAuthenticatedUser();
    //     // console.log('user data  = ', userData)
    //     // if(!product || !userData){
    //     //     console.warn("Missing product or user data");
    //     //     return;
    //     // }
    //     const newListing = new listing(titleOfListing, descriptionOfListing, priceOfListing,
    //         notesOfListing);
    //     // await DataStore.save(newListing);
    //     // Alert.alert("Success!", "Your Listing Has Been Saved as a Draft!");
    //     Alert.alert(newListing.title, "This is the title !");
    //     Alert.alert(newListing.desc, "This is the description!");
    //     Alert.alert(newListing.pri, "This is the price!");
    //     Alert.alert(newListing.no, "This is the notes!");
    // }
    const publishListing = async() => {
        const newProduct = new Product({
            userSub: user.attributes.sub,
            title: titleOfListing,
            description: descriptionOfListing,
            price: Number(priceOfListing),
            category: catSelector[0],
            image: image, // when implementing multiple images, maybe 5 max, reference 1 image is images[0]
            images: [image],
            university: user.attributes["custom:University"],
            displayName: user.attributes["preferred_username"],
        });
        // console.log("University==========", user.attributes["custom:University"]);

        await DataStore.save(newProduct);
        Alert.alert("Success!", "Your Listing Has Been Published!");
    }

    return (
        <ScrollView>
            <View style = {styles.container}>
                <TouchableOpacity onPress={pickImage}>
                    <S3Image style={styles.cameraFrame} imgKey={image} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Title of Listing"
                    onChangeText = {newText => setTitleOfListing(newText)}
                    defaultValue={titleOfListing}
                />
            </View>
            <View style = {styles.container2}>
                <CategorySelect
                    control={control}
                    items={CATEGORIES}
                    name="catSelector"
                    rules={{ required: 'Must select a category' }}
                    itemToSelect='Category'
                />
            </View>
            <View style = {styles.container}>
                <TextInput
                    style={styles.input2}
                    placeholder="Description of Listing"
                    multiline = {true}
                    onChangeText = {newText => setDescriptionOfListing(newText)}
                    defaultValue={descriptionOfListing}
                />
                <TextInput
                    style={styles.input}
                    placeholder="($) Price of Listing"
                    onChangeText = {newText => setPriceOfListing(newText)}
                    defaultValue={priceOfListing}
                />
                <CustomButton onPress= {publishListing} text  = "Publish Listing"/>
            </View>
        </ScrollView>
    );
};



export default CreateListingScreen;