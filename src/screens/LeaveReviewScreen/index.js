
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import StarRating from 'react-native-star-rating';

const LeaveReviewScreen = () => {
    const [rating, setRating] = useState(null);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    
    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item,key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setRating(item)}
                            >
                                <Image
                                    style={styles.starImgStyle}
                                    source={
                                        item <= rating
                                            ? {uri: starImgFilled}
                                            : {uri: starImgCorner}
                                    }
                                    />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }


import React, { useState, useContext } from 'react';
import { SafeAreaView, TextInput, View , Alert} from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import { User, Review } from '../../models';
import { DataStore } from 'aws-amplify';
import AuthContext from '../../contexts/Authentication';
import { useNavigation } from '@react-navigation/native';

const LeaveReviewScreen = () => {
    const [rating, setRating] = useState(1);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
  
    const navigation = useNavigation();
    const { user, otherUser } = useContext(AuthContext);
    
    const onLeaveReview = async () => {
        // query the other user's profile
        console.log("Other userid ======",otherUser);
        if(!otherUser){
            console.warn("Error, no user found to review");
            return;
        }
        const other = await DataStore.query(User, u=> u.userSub("eq", otherUser))
        if (other.length < 1){
            console.warn("Query returned no results");
            return;
        }
        
        console.log("Other User Profile ======= ", other[0])
        if (titleText.length ==0) {
            console.warn("Need to add title");
            return;
        }else if (bodyText.length == 0) {
            console.warn("Need to add message");
            return;
        } else if (rating == null){
            console.warn("Need to add rating");
            return;
        }
        
        // upload review
        const newReview = new Review({
            reviewerSub: user.attributes.sub,
            user: other[0], 
            title: titleText,
            message: bodyText,
            rating: rating
        });
        await DataStore.save(newReview);

        Alert.alert("Success", "Review Left");
        navigation.goBack()
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <CustomRatingBar/>
            <View style={styles.space} />
            <TextInput
            value={titleText}
                style={styles.titleBox}
                placeholder='Review title...'
                textAlignVertical='top'
                onChangeText={setTitleText}
            />
            <TextInput
                value={bodyText}
                style={styles.textBox}
                placeholder='Review body...'
                textAlignVertical='top'
                multiline={true}
                onChangeText={setBodyText}
            />
            <View style={styles.space} />
            <ProfileScreenButton onPress={onLeaveReview} text="Submit Review" />
        </SafeAreaView>
    )
}

export default LeaveReviewScreen;