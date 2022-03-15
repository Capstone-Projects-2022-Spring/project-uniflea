import React from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from '../ProfileScreen/styles';
import {Rating} from 'react-native-rating-element';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const OtherProfilePage = () => {

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

    return(
        <SafeAreaView style={styles.container}>
            <Text>Hi from OtherProfilePage</Text>

            <TouchableOpacity onPress={console.log}>
                <Image 
                    source={require('../../../assets/flag.jpg')} 
                    style={[{width:50, height:50, borderRadius:50/2,}, styles.topRightPosition]}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={console.log}>
                <Image source={require('../../../assets/blank_pfp.png')}
                style={ {width:100, height:100, borderRadius:100/2}}></Image>
            </TouchableOpacity>
            
            <View style={styles.space}/>
            <Text style={styles.profileNameText}> Jonny Test</Text>
            <View style={styles.space}/>
            <Rating
                rated={4}
                totalCount={5}
                size={20}
                ratingColor={'#99182e'}
            />
            <View style={styles.space}/>
            <ProfileScreenButton onPress={navigation.useNavigation("MessagesScreen")} text="Message Seller"/>
            <View style={styles.space}/>
            <ProfileScreenButton onPress={console.log} text="Reviews and Ratings"/>
        </SafeAreaView>
    );
}

export default OtherProfilePage;