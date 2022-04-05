import React, { useEffect, useState, useContext, useCallback } from "react";
import { Storage, Auth, DataStore } from "aws-amplify";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
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
import { scale } from "react-native-size-matters";
import { useChatContext } from 'stream-chat-expo';


const OtherProfilePage = () => {

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
    const uploadedImage = await Storage.put(myuuid, blob, {contentType: "image/png"});
    console.log("UPLOADED YOUR IMAGE");
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
  const [schoolName, setSchoolName] = useState(null);
  const [gradYear, setSchoolyYear] = useState(null);
  const [bio, setBio] = useState(null);

  const placeholder = async () => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const userRecord = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );
    //setting all the data for the users
    const displayName = userRecord[0].displayName;
    const name = userRecord[0].name;
    const schoolName = userRecord[0].university;
    const gradYear = userRecord[0].gradYear;
    const bio = userRecord[0].userBio;
    setDisplayName(displayName);
    setName(name);
    setSchoolName(schoolName);
    setSchoolyYear(gradYear);
    setBio(bio);

    // setMemberDate(memberDate.split("-", 1).toString());
  };

  //for the circle buttons
  const Circle = ({ text }) => (
    <View style={styles.circle}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );

  const iconPress = () => {
    navigation.navigate("SettingsScreen");
  };

  useEffect(() => {
    downloadImage();
    placeholder();
  }, []);

  //***************************************************************************************RETURN() */
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.shape} />

      <View style={styles.topBannerContainer}>
        <View style={styles.topBannerrRow}>
          {/*The profile image */}
          <View style={styles.profilePicContainer}>
            <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
              <S3Image style={styles.image} imgKey={image} />
            </TouchableOpacity>
          </View>

          <View style={styles.rightInfoContainer}>
            

            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>{displayName}</Text>

              <Text style={styles.name}>{name}</Text>
              <Text style={styles.name}>
                {schoolName} {gradYear}
              </Text>

              <Rating
                style={styles.rating}
                rated={3.5}
                totalCount={5}
                size={20}
                ratingColor={"gold"}
              />

              <View style={styles.reportContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ReportScreen")}
                >
                  <MaterialIcons
                    style={styles.reportIconContainer}
                    name="report"
                    size={scale(14)}
                    color="white"
                  />

                  <Text style={styles.reportText}>Report User</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          {bio}
        </Text>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewScreen")}
            >
              <Circle text="Read Reviews" s />
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
              onPress={() => navigation.navigate("ActiveListingScreen")}
            >
              <Circle text="Active Listings" />
            </TouchableOpacity>
          </View>
          <View style={styles.space} />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("LeaveReviewScreen")}
            >
              <Circle text="Leave a Review" h />
            </TouchableOpacity>

            <View style={styles.space} />
            <TouchableOpacity onPress={() => navigation.navigate(" ")}>
              <Circle text="Message User" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtherProfilePage;
