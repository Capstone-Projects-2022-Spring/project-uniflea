import React, { useEffect, useState, useContext } from "react";
import { Storage, Auth, DataStore } from "aws-amplify";
import { Text, SafeAreaView, TouchableOpacity, View } from "react-native";
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

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.shape2} /> 
      <View style={styles.shape} />
     
      <View style={styles.topBannerContainer}>
        {/* The onpress settings icon */}
        <TouchableOpacity style={styles.topRightPosition} onPress={iconPress}>
          <AntDesign name="setting" size={30} color="white" />
        </TouchableOpacity>

        {/*The profile image */}
        <View style={styles.profilePicContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
            <S3Image style={styles.image} imgKey={image} />
          </TouchableOpacity>
        </View>

        {/*Display name */}
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{displayName}</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {name}
            {": est. "}
            {memberDate}
          </Text>
        </View>

        {/*start of rating*/}
        <View style={styles.ratingContainer}>
          <Rating
            style={styles.rating}
            rated={3.5}
            totalCount={5}
            size={20}
            ratingColor={"gold"}
          />
        </View>

        {/* memeber date*/}
        <View style={styles.memberContainer}>
          <Text style={styles.memberText}></Text>
        </View>

        <View style={styles.reportContainer}>
          <View style={styles.reportOther}>
            <Text
              style={styles.report}
              onPress={() => navigation.navigate("ReportScreen")}
            >
              Report User
            </Text>
          </View>
          <View style={styles.reportIcon}>
            <MaterialIcons name="report" size={18} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
          A senior computer science looking to sell old textbooks that were
          never opened.{" "}
        </Text>
      </View>

      <View style={styles.lowerContainer}>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewScreen")}
            >
              <Circle text="Read Reviews" />
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
              <Circle text="Leave a Review" />
            </TouchableOpacity>
            
            <View style={styles.space} />
            <TouchableOpacity onPress={() => navigation.navigate(" ")}>
              <Circle text="Message User" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.signOutContainer}>
        <Text onPress={signOut} style={styles.signOutText}>
          Sign Out
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;
