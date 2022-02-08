import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, Pressable, View } from 'react-native';


const ProfilePage = () => {

    return (
        <SafeAreaView style={styles.container}>
            
        <Text>hi from ProfilePage</Text>
        <Image source={require('../../assets/blank_pfp.png')}/>
        <View style={styles.space}/>
            <Pressable style={styles.button} onPress={console.log}>
                <Text style={styles.text}>Active Listings</Text>
            </Pressable>
        <View style={styles.space}/>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Reviews and Ratings</Text>
            </Pressable>
        <View style={styles.space}/>
        <Pressable style={styles.button}>
                <Text style={styles.text}>Purchases Items</Text>
        </Pressable>
        <View style={styles.space}/>
        <Pressable style={styles.button}>
                <Text style={styles.text}>Sold Items</Text>
            </Pressable>
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

const styles = StyleSheet.create({
    container: {
      flex: .5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding:10,
        backgroundColor: '#99182e',
        borderRadius: 4,
        paddingVertical:12,
    },
    text:{
        color: 'white',
    },
    space:{
        width:20,
        height:20
    }
  });

export default ProfilePage;