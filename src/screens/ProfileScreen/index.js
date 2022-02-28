import React, {useState} from 'react';

import { Text, SafeAreaView, Image, Pressable,TouchableOpacity, View } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'
import { Rating } from 'react-native-rating-element';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const ProfilePage = () => {
    const navigation = useNavigation();
    
    const [image, setImage] = useState(null);
    
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
    };

    return (
    
            <SafeAreaView style={styles.container}>
            
            <Text>hi from ProfilePage</Text>

            <TouchableOpacity styles = {[styles.topRightPosition]} onPress={console.log}>
                <Image source={require('../../../assets/cogwheel.jpg')} 
                style={[{width:50, height:50, borderRadius:50/2,}, styles.topRightPosition]}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
            <Image source={{uri: image}} 
                style={ {width:100, height:100, borderRadius:100/2}}/>
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

const createButton = ( string ) =>{

    return (
        <><View style={styles.space} /><Pressable style={styles.button}>
            <Text style={styles.text}>
                string
            </Text>
        </Pressable></>
    );
}



export default ProfilePage;
