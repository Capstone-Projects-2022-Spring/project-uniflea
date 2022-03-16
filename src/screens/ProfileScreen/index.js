import React, {useEffect, useState} from 'react';
import {Storage, Auth, DataStore} from "aws-amplify";
import { Text, SafeAreaView,TouchableOpacity, View, Image } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'
import { Rating } from 'react-native-rating-element';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import { S3Image } from 'aws-amplify-react-native';
import { User } from '../../models';
import { Feather } from '@expo/vector-icons';


const ProfilePage = () => {
    const navigation = useNavigation();
    let myuuid = uuidv4();
    const [image, setImage] = useState(null);

    const downloadImage = async()  => {
      const myUser = await Auth.currentAuthenticatedUser();
      //i want the single user in the DB with the correct userSUB
      const user = await DataStore.query(User, s => s.userSub("eq", myUser.attributes.sub));
      //i want the pfp of that user
      const image = user[0].image;
      
        
      setImage(image);
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
        //uploads to s3
        const response = await fetch(result.uri);
        const blob = await response.blob();
        const uploadedImage = await Storage.put(myuuid, blob);
        
        //upload to amplify
        const myUser = await Auth.currentAuthenticatedUser();
        const original = await DataStore.query(User, s => s.userSub("eq", myUser.attributes.sub));

        await DataStore.save(
            User.copyOf(original[0], updated => {
                updated.image = uploadedImage.key
            })
        )

        setImage(uploadedImage.key);
    };

    useEffect(  () => {downloadImage()}, []);

    return (
    
            <SafeAreaView style={styles.container} >
            {/* cog icon to navigate to the settings screen */}
            <TouchableOpacity styles = {styles.topRightPosition} onPress={console.log}>
            <Feather name="settings" size={30} color="black" 
                style={[{width:50, height:50, borderRadius:50/2,}, styles.topRightPosition]}/>
            </TouchableOpacity>
            
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
                <View style={styles.space}/>
                <ProfileScreenButton onPress={() => navigation.navigate("SettingsScreen")} text="Settings"/>
            </SafeAreaView>

    );
}


export default ProfilePage;
