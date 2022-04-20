import React, {useEffect, useContext, useState, useRef} from 'react';
import styles from './styles'
import {SafeAreaView, StyleSheet, TextInput, Pressable, Image, ScrollView,
    Text, View, TouchableHighlight, TouchableOpacity, Picker, Alert} from 'react-native';
import CustomButton from "../../components/CustomButton";
import ScaledCustomButton from "../../components/ScaledCustomButton";
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
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

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
    const [image, setImage] = React.useState('camera.png');
    const [pickedCategory, setPickedCategory] = React.useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [items, setItems] = useState([
        {label: 'Books', value: 'Books'},
        {label: 'Supplies & Equipment', value: 'Supplies & Equipment'},
        {label: 'Electronics', value: 'Electronics'},
        {label: 'Clothes', value: 'Clothes'},
        {label: 'Food & Nutrition', value: 'Food & Nutrition'},
        {label: 'Handmade', value: 'Handmade'},
        {label: 'Service', value: 'Service'},
        {label: 'Other', value: 'Other'},
    ]);
    const CATEGORIES = [
        {label: 'Books', value: 'Books'},
        {label: 'Supplies & Equipment', value: 'Supplies & Equipment'},
        {label: 'Electronics', value: 'Electronics'},
        {label: 'Clothes', value: 'Clothes'},
        {label: 'Food & Nutrition', value: 'Food & Nutrition'},
        {label: 'Handmade', value: 'Handmade'},
        {label: 'Service', value: 'Service'},
        {label: 'Other', value: 'Other'},
    ];

    const pickImage = async () => {
        let myuuid = uuidv4();
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        const response = await fetch(result.uri);
        const blob = await response.blob();
        // console.warn("blob created=====", blob);
        const uploadedImage = await Storage.put(myuuid, blob);
        setImage(uploadedImage.key);
        // console.warn("image uploaded gang=====", uploadedImage.key);
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
            image: image,
            images: [image],
            university: user.attributes["custom:University"],
            displayName: user.attributes["preferred_username"],
            category: pickedCategory,
        });
        // console.log("University==========", user.attributes["custom:University"]);

        await DataStore.save(newProduct);
        Alert.alert("Success!", "Your Listing Has Been Published!");
        setImage('camera.png')
        setTitleOfListing('');
        setDescriptionOfListing('');
        setPriceOfListing('');
        setPickedCategory('');

    }

    // had scroll view to permit tapping out of text boxes. try to find keyboard dismiss. also figure out how to keep default camera image on pickimage. implement multiople images as well. /clear fields after publishing successfully. require fileds too
    return (
        <TouchableWithoutFeedback onPress = {Keyboard.dismiss} accessibile = {false}>
            <SafeAreaView>
                {/*<ScrollView>*/}
                <View style = {styles.container}>
                    <TouchableOpacity onPress={pickImage}>
                        <S3Image style={styles.cameraFrame} imgKey={image} />
                        {/*<Image style = {styles.cameraFrame} source = {require("../../../assets/camera.png")}/>*/}
                        {/*<S3Image style={styles.cameraFrame} imgKey={image} />*/}
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder={"Title of Listing"}
                        onChangeText = {newText => setTitleOfListing(newText)}
                        defaultValue={titleOfListing}
                        maxLength={32}
                    />
                    <TextInput
                        style={styles.input2}
                        placeholder={"Description of Listing"}
                        multiline = {true}
                        onChangeText = {newText => setDescriptionOfListing(newText)}
                        defaultValue={descriptionOfListing}
                        maxLength={256}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"($) Price of Listing"}
                        onChangeText = {newText => setPriceOfListing(newText)}
                        defaultValue={priceOfListing}
                        maxLength={6}
                    />
                    <View style = {styles.container2}>
                        {/*<CategorySelect*/}
                        {/*    control={control}*/}
                        {/*    items={CATEGORIES}*/}
                        {/*    name="catSelector"*/}
                        {/*    rules={{ required: 'Must select a category' }}*/}
                        {/*    itemToSelect='Category'*/}
                        {/*/>*/}
                        <DropDownPicker
                            //I think this borderRadius is what is breaking
                            style = {{
                                backgroundColor: "#f2f2f2",
                                borderRadius: 5,
                                borderWidth: 1.25,
                            }}
                            placeholder="Select a Category"

                            placeholderStyle={{
                                color: "#bdbdc2",
                            }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            multiple={false}
                            onChangeValue={(value) => {
                                setPickedCategory(value);
                            }}
                            dropDownDirection = "TOP"
                        />
                    </View>
                    <ScaledCustomButton onPress= {publishListing} text  = {"Publish Listing"}/>
                </View>
                {/*</ScrollView>*/}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};



export default CreateListingScreen;