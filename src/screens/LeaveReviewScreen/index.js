
import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Text, TextInput, View , Alert} from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import { useRoute } from '@react-navigation/native';
import { User, Review } from '../../models';
import { DataStore } from 'aws-amplify';
import AuthContext from '../../contexts/Authentication';
import { useNavigation } from '@react-navigation/native';

const LeaveReviewScreen = () => {
    const [rating, setRating] = useState(1);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
    const route = useRoute();
    const navigation = useNavigation();
    const { user, otherUser } = useContext(AuthContext);
    

    const queryOtherUser = async() => {
        
    }
    const onLeaveReview = async () => {
        // query the user
        console.warn("Other userid ======",otherUser);
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
            <Picker
                style={styles.ratingPicker}
                selectedValue={rating}
                onValueChange={(itemValue, itemIndex) =>
                    setRating(itemValue)
                }>
                <Picker.Item label="1.0 Stars" value={1.0} />
                <Picker.Item label="2.0 Stars" value={2.0} />
                <Picker.Item label="3.0 Stars" value={3.0} />
                <Picker.Item label="4.0 Stars" value={4.0} />
                <Picker.Item label="5.0 Stars" value={5.0} />
            </Picker>

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