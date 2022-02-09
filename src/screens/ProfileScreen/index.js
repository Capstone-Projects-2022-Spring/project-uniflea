import React from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'

const ProfilePage = () => {

    return (
        <SafeAreaView style={styles.container}>
        <Text>hi from ProfilePage</Text>
        <TouchableOpacity onPress={console.log}>
        <Image source={require('../../../assets/blank_pfp.png')} 
            style={ {width:100, height:100, borderRadius:100/2}}/>
        </TouchableOpacity>

        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="active listing"/>
        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="Reviews and Ratings"/>
        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="Purchased Items"/>
        <View style={styles.space}/>
      
    <   ProfileScreenButton onPress={console.log} text="Sold Items"/>
    </SafeAreaView>
    );
}

export default ProfilePage;