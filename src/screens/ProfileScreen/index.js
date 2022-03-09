import React, {useState} from 'react';
import Amplify from "@aws-amplify/core";
import {Storage, Auth} from "aws-amplify";
import { Text, SafeAreaView, Image, Pressable,TouchableOpacity, View } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'
import { Rating } from 'react-native-rating-element';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import { S3Image } from 'aws-amplify-react-native';



const ProfilePage = () => {
    const navigation = useNavigation();
    let myuuid = uuidv4();
    const [image, setImage] = useState(null);
    const [percentage, setPercentage] = useState(0);

    const updatePercentage = (number) => {
        setPercentage(number);
      };

    const setLoading = (progress) => {
        const calculated = parseInt((progress.loaded / progress.total) * 100);
        updatePercentage(calculated); // due to s3 put function scoped
      };

    const uploadImage = (filename, img) => {
        Auth.currentCredentials();
        return Storage.put(filename, img, {
          level: "public",
          contentType: "image/jpeg",
          progressCallback(progress) {
            setLoading(progress);
          },
        })
          .then((response) => {
            return response.key;
          })
          .catch((error) => {
            console.log(error);
            return error.response;
          });
    };

    const downloadImage = (uri) => {
        Storage.get(uri)
          .then((result) => setImage(result))
          .catch((err) => console.log(err));

      };
    
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

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
        setImage(uploadedImage.key);
        
    };

    return (
    
            <SafeAreaView style={styles.container}>
         
            {/* <TouchableOpacity styles = {styles.topRightPosition} onPress={console.log}>
                <Image source={require('../../../assets/cogwheel.jpg')} 
                style={[{width:50, height:50, borderRadius:50/2,}, styles.topRightPosition]}/>
            </TouchableOpacity> */}
            
            <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
            
            <S3Image style={styles.image} imgKey={image} />
            </TouchableOpacity>
            <Text style={styles.profileNameText}>John Doe</Text>

            <Rating
                rated={3.0}
                totalCount={5}
                size={20}
                ratingColor={'#99182e'}
            />

            <View style={styles.space}/>
                <ProfileScreenButton onPress={() => navigation.navigate("SaveItemScreen")} text="active listing"/>
                <View style={styles.space}/>
                <ProfileScreenButton onPress={console.log} text="Reviews and Ratings"/>
                <View style={styles.space}/>
                <ProfileScreenButton onPress={ () => navigation.navigate("ForgotPasswordScreen")} text="Change Password"/>
            </SafeAreaView>

    );
}

export default ProfilePage;
