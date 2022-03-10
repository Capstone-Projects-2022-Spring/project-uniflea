import React from 'react';
import styles from './styles'
import {SafeAreaView, StyleSheet, TextInput, Pressable, Image, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';
import CustomButton from "../../components/CustomButton";
import * as ImagePicker from 'expo-image-picker';


const CreateListingScreen = () => {
    const [titleOfListing] = React.useState(null);
    const [descriptionOfListing] = React.useState(null);
    const [priceOfListing] = React.useState(null);
    const [notesOfListing] = React.useState(null); // make another variable for each field for placeholder and setter
    const [image, setImage] = React.useState('../../../assets/camera.png');
    // const [percentage, setPercentage] = useState(0);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "Images",
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.centerTitle}>Create New Listing
            </Text>
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
                value={titleOfListing}
                placeholder="Title of Listing"
            />
            <TextInput
                style={styles.input2}
                value={descriptionOfListing}
                placeholder="Description of Listing"
            />
            <TextInput
                style={styles.input}
                value={priceOfListing}
                placeholder="($) Price of Listing"
                keyboardType = "numeric"
            />
            <TextInput
                style={styles.input}
                value={notesOfListing}
                placeholder="Notes of Listing"
            />
            <CustomButton onPress= {console.log} text  = "Save Listing as Draft"/>
            {/*<View style={styles.space}/>*/}
            <CustomButton onPress= {console.log} text  = "Publish Listing"/>
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