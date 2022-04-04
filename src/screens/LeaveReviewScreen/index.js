
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import ProfileScreenButton from '../../components/ProfileScreenButton';

const LeaveReviewScreen = () => {
    const [rating, setRating] = useState(null);
    const [titleText, setTitleText] = useState('');
    const [bodyText, setBodyText] = useState('');
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
            <ProfileScreenButton onPress={console.log("Clicked submit")} text="Submit Review" />
        </SafeAreaView>
    )
}

export default LeaveReviewScreen;