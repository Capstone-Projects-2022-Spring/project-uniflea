import React, {useEffect, useContext} from 'react';
import styles from './styles'
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Alert
} from 'react-native';
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from "@react-navigation/native";
import {Auth, DataStore, Storage} from "aws-amplify";
import {SavedProduct, User, Product} from "../../models";
import AuthContext from "../../contexts/Authentication";


const CreateListingScreen = () => {
    const navigation = useNavigation();
    const {user} = useContext(AuthContext);
    const [titleOfListing, setTitleOfListing] = React.useState(null);
    const [descriptionOfListing, setDescriptionOfListing] = React.useState(null);
    const [priceOfListing, setPriceOfListing] = React.useState(null);
    const [notesOfListing, setNotesOfListing] = React.useState(null); // make another variable for each field for placeholder and setter
    const [image, setImage] = React.useState('../../../assets/camera.png');
    // const [percentage, setPercentage] = useState(0);

    const pickImage = async () => {
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
        const uploadedImage = await Storage.put(myuuid, blob);
        console.warn("Image uploaded successfully");
        setImage(uploadedImage.key);
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
            // category: [category],
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
        <SafeAreaView style = {styles.container}>
            {/*<Text style = {styles.centerTitle}>Create New Listing*/}
            {/*</Text>*/}
            {/*<Pressable onPress={console.log("You tapped the camera icon")}>*/}
            {/*    <Image source={require('../../../assets/camera.png')}*/}
            {/*           style={styles.cameraFrame}*/}
            {/*    />*/}
            {/*</Pressable>*/}
            <TouchableOpacity onPress={pickImage}>
                <Image style={styles.cameraFrame} source={{ uri: image }} />
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Title of Listing"
                onChangeText = {newText => setTitleOfListing(newText)}
                defaultValue={titleOfListing}
            />
            <TextInput
                style={styles.input2}
                placeholder="Description of Listing"
                onChangeText = {newText => setDescriptionOfListing(newText)}
                defaultValue={descriptionOfListing}
            />
            <TextInput
                style={styles.input}
                placeholder="($) Price of Listing"
                onChangeText = {newText => setPriceOfListing(newText)}
                defaultValue={priceOfListing}
            />
            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    placeholder="Notes of Listing"*/}
            {/*    onChangeText = {newText => setNotesOfListing(newText)}*/}
            {/*    defaultValue={notesOfListing}*/}
            {/*/>*/}

            {/*<CustomButton onPress= {saveListingAsDraft} text  = "Save Listing as Draft"/>*/}
            {/*<View style={styles.space}/>*/}
            <CustomButton onPress= {publishListing} text  = "Publish Listing"/>
            {/*<View style={styles.space}/>*/}
            {/*<Pressable onPress={console.log("You tried to save listing as a draft")}>*/}
            {/*    <Text style = {styles.draftSave}>Save Listing as Draft</Text>*/}
            {/*</Pressable>*/}
            {/*<Pressable onPress={console.log("You tried to publish listing")}>*/}
            {/*    <Text style = {styles.draftSave}>Publish Listing</Text>*/}
            {/*</Pressable>*/}

        </SafeAreaView>
    );
};



export default CreateListingScreen;