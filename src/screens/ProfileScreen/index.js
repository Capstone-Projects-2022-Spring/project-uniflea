import React from 'react';

import { Colors } from '../../styles/Colors';

import { Text, SafeAreaView, Image, View, TouchableOpacity, Pressable } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'
import { Rating } from 'react-native-rating-element';


const ProfilePage = () => {

    return (
        <SafeAreaView style={styles.container}>
        
        <Text>hi from ProfilePage</Text>

        {/* asset not found error */}
        {/* <Image source={require('../../assets/blank_pfp.png')}/> */}

        
        {/*the cogwheel button is sus, need to test with actual onPress behavior to see if it works*/}
        <Pressable onPress={console.log("word")}>
            <Image source={require('../../../assets/cogwheel.jpg')} 
            style={[{width:50, height:50, borderRadius:50/2,}, styles.topRightPosition]}/>
        </Pressable>

        <TouchableOpacity onPress={console.log}>
        <Image source={require('../../../assets/blank_pfp.png')} 
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
        <ProfileScreenButton onPress={console.log} text="active listing"/>
        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="Reviews and Ratings"/>
        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="Purchased Items"/>
        <View style={styles.space}/>
        <ProfileScreenButton onPress={console.log} text="Sold Items"/>
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
