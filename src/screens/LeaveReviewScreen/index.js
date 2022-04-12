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
            <ProfileScreenButton onPress={console.log("Clicked submit")} text="Submit Review" />
        </SafeAreaView>
    )
}

export default LeaveReviewScreen;