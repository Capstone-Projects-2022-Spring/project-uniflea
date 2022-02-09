import React from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from '../ProfileScreen/styles';

const OtherProfilePage = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Hi from OtherProfilePage</Text>

            <TouchableOpacity>
                <Image source={require('../../../assets/blank_pfp.png')}
                style={ {width:100, height:100, borderRadius:100/2}}></Image>
            </TouchableOpacity>
            <View style={styles.space}/>
            <ProfileScreenButton onPress={console.log} text="Message Seller"/>
            <ProfileScreenButton onPress={console.log} text="Reviews and Ratings"/>
        </SafeAreaView>
    );
}