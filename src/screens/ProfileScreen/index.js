import React, { useEffect, useState, useContext, useCallback } from "react";
import { Storage, Auth, DataStore } from "aws-amplify";
import { Text, SafeAreaView, TouchableOpacity, View, Modal, Pressable, Alert, StyleSheet} from "react-native";
import ProfileScreenButton from "../../components/ProfileScreenButton";
import styles from "./styles";
import { Rating } from "react-native-rating-element";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { S3Image } from "aws-amplify-react-native";
import { User } from "../../models";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AuthContext from "../../contexts/Authentication";
import { scale } from 'react-native-size-matters';

import {
  useResponsiveHeight,
  useResponsiveWidth,
  useResponsiveScreenHeight,
  useResponsiveScreenWidth,
  useDimensionsChange
} from "react-native-responsive-dimensions";



const ProfilePage = () => {
  const navigation = useNavigation();

  //to for signing out 
  const { user, setUser } = useContext(AuthContext);
  const signOut = () => {
    setUser(undefined);
    Auth.signOut();
  };

  let myuuid = uuidv4();
  const [image, setImage] = useState(null);

  const downloadImage = async () => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const user = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );
    console.log("user ====================", user[0]);
    //i want the pfp of that user
    const image = user[0].image;

    setImage(image);
  };

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
    //uploads to s3
    const response = await fetch(result.uri);
    const blob = await response.blob();
    const uploadedImage = await Storage.put(myuuid, blob);

    //upload to amplify
    const myUser = await Auth.currentAuthenticatedUser();
    const original = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );

    await DataStore.save(
      User.copyOf(original[0], (updated) => {
        updated.image = uploadedImage.key;
      })
    );

    setImage(uploadedImage.key);
  };
   

    /*Setting the name of the user on the page */
  const [displayName, setDisplayName] = useState(null);
  const [name, setName] = useState(null);
  const [memberDate, setMemberDate] = useState(null);

  const placeholder = async () => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const userRecord = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );
    //setting all the data for the users
    const displayName = userRecord[0].displayName;
    const name = userRecord[0].name;
    const memberDate = userRecord[0].createdAt;
    setDisplayName(displayName);
    setName(name);
    setMemberDate(memberDate.split("-", 1).toString());
  };

    //for the circle buttons 
  const Circle = ({ text }) => (
    <View style={styles.circle}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );

  useEffect(() => {
    downloadImage();
    placeholder();
  }, []);

  //setting varriable to naviate to the settings screen
  const iconPress = () => {
    navigation.navigate("SettingsScreen");
  };
  const [modalVisible, setModalVisible] = useState(false);
 
 const windowHeight = useResponsiveHeight(100);
  const windowWidth = useResponsiveWidth(100);

  const screenHeight = useResponsiveScreenHeight(100);
  const screenWidth = useResponsiveScreenWidth(100);

  useDimensionsChange(
    useCallback(({ window, screen }) => {
      console.log("Updated Values ﹣ ");
      console.log("window ﹣ ", window);
      console.log("screen ﹣ ", screen);
    }, [])
    )
  //***************************************************************************************RETURN() */
  return (
    <SafeAreaView style={styles.root}>

      <View style={styles.topBannerContainer}> 
      <View style={styles.topBannerrRow}>
        
          {/*The profile image */}
          <View style={styles.profilePicContainer}>
            <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
              <S3Image style={styles.image} imgKey={image} />
            </TouchableOpacity>
          </View>

        <View style={styles.rightInfoContainer}>

          {/* The onpress settings icon */}
          <View style={styles.SettingsPosition}>
            <TouchableOpacity onPress={iconPress}>
              <AntDesign name="setting" size={scale(30)} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.userInfoContainer}>
            <Text style={styles.userName} screenHeight screenWidth>{displayName}</Text>
          
          <Text style={styles.name} screenHeight screenWidth>
            {name}
            {": est. "}
            {memberDate}
          </Text>

         
          <Rating style={styles.rating} rated={3.5} screenHeight screenWidth
            totalCount={5}
            size={20}
            ratingColor={"gold"}/>

            <View style={styles.reportContainer}screenHeight screenWidth>          
          <TouchableOpacity onPress={() => navigation.navigate("ReportScreen")}>
          <MaterialIcons style={styles.reportIconContainer} name="report" size={scale(14)} color="white" />
          
          <Text style={styles.reportText}screenHeight screenWidth>Report User</Text>
          </TouchableOpacity>
           </View>  
          </View>
        </View>
      </View>
</View>

  {/* <View style={[styles.shape,styles.shape2]}/> */}

<View style={styles.bioContainer}>
          <Text style={styles.bioText}>
          A senior computer science looking to sell old textbooks that were
          never opened.
        </Text>
</View>
        <View style={styles.lowerContainer} screenHeight screenWidth >

        <View style={styles.container}>
          <View style={styles.row}screenHeight screenWidth >
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewScreen")}
            >
              <Circle creenHeight screenWidth text="Read Reviews" s/>
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
              onPress={() => navigation.navigate("ActiveListingScreen")}
            >
              <Circle screenHeight screenWidth text="Active Listings"  />
            </TouchableOpacity>
          
          </View>
          <View style={styles.space} />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LeaveReviewScreen")}
            >
              <Circle screenHeight screenWidt text="Leave a Review" h/>
            </TouchableOpacity>
            
            <View style={styles.space} />
            <TouchableOpacity onPress={() => navigation.navigate(" ")}>
              <Circle screenHeight screenWidth text="Message User" />
            </TouchableOpacity>
          </View>
        </View>



        </View>
        
      
    </SafeAreaView>
  );
};

export default ProfilePage;
