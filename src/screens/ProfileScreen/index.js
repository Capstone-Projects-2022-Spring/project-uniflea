import React, { useEffect, useState, useContext } from "react";
import { Storage, Auth, DataStore } from "aws-amplify";
import { Text, SafeAreaView, TouchableOpacity, View,
  Modal, ScrollView, ActivityIndicator} from "react-native";
import styles from "./styles";
import { Rating } from "react-native-rating-element";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { S3Image } from "aws-amplify-react-native";
import { User } from "../../models";
import AuthContext from "../../contexts/Authentication";
import CustomTextBox from "../../components/CustomTextBox";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useChatContext } from "stream-chat-expo";


const ProfilePage = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const { client } = useChatContext();
  //to for signing out

  const { user, setUser } = useContext(AuthContext);
  const signOut = () => {
    client.disconnectUser();
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
    setIsLoading(true);
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
    const uploadedImage = await Storage.put(myuuid, blob, {
      contentType: "image/png",
    });
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
    setIsLoading(false);
  };

  /*Setting the name of the user on the page */
  const [displayName, setDisplayName] = useState(null);
  const [name, setName] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [gradYear, setSchoolyYear] = useState(null);
  const [userBio, setUserBio] = useState(null);
  const [memberDate, setMemberDate] = useState(null);
  const pullUserData = async () => {
    setIsLoading(true);
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
    const userBio = userRecord[0].userBio;
    const memberDate = userRecord[0].createdAt;
    setDisplayName(displayName);
    setName(name);
    setSchoolName(schoolName);
    setSchoolyYear(gradYear);
    setUserBio(userBio);
    setMemberDate(memberDate.split("-", 1).toString());

    setIsLoading(false);
  };

  //upload new bio  to amplify
  const updateBio = async (data) => {
    const myUser = await Auth.currentAuthenticatedUser();
    const userRecord = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );

    await DataStore.save(
      User.copyOf(userRecord[0], (update) => {
        update.userBio = data.userBio;
      })
    );
    console.log(userBio);
    console.log("==========changed BIO=============");
    toggleModalVisibility();
  };

  //for the circle buttons
  const Circle = ({ text }) => (
    <View style={styles.circle}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );

  const settingPress = () => {
    navigation.navigate("SettingsScreen");
  };

  const { control, handleSubmit } = useForm();

  useEffect(() => {
    downloadImage();
    pullUserData();
    updateBio();

    const subscription = DataStore.observe(User).subscribe(() => {
      pullUserData();
    });
    // close subscription to prevent memory leaks
    return () => subscription.unsubscribe();
  }, []);

  //*************************************************bio pop-up */
  // This is to manage Modal State

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  if (isLoading) {
    return (
      <SafeAreaView>
        <ScrollView style={styles.root}>
          <ActivityIndicator />
        </ScrollView>
      </SafeAreaView>
    );
  }
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
            {/* The onpress settings icon */}
            {/* <View style={styles.SettingsPosition}>
              <TouchableOpacity onPress={settingPress}>
                <AntDesign name="setting" size={scale(30)} color="white" />
              </TouchableOpacity>
            </View> */}

            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>{displayName}</Text>

              <Text style={styles.name}>{name}</Text>

              <Text style={styles.name}>
                {schoolName} {gradYear}
              </Text>
              <Text style={styles.name}>
                {"Member Since: "}
                {gradYear}{" "}
              </Text>

              <Rating
                style={styles.rating}
                rated={3.5}
                totalCount={5}
                size={20}
                ratingColor={"gold"}
              />

              {/* <View style={styles.reportContainer}>
                <TouchableOpacity
                 title="Show Modal" onPress={toggleModalVisibility} 
                >
                  <AntDesign style={styles.reportIconContainer} name="edit" size={24} color="white" />

                  <Text style={styles.reportText}>Edit Bio</Text>
                </TouchableOpacity>
                </View> */}

              {/**  We are going to create a Modal with Text Input. */}
              {/* <Button title="Show Modal" onPress={toggleModalVisibility} /> */}

              {/** This is our modal component containing textinput and a button */}
              <Modal
                animationType="none"
                transparent
                visible={isModalVisible}
                presentationStyle="overFullScreen"
                onDsimiss={toggleModalVisibility}
              >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.viewWrapper}>
                  <View style={styles.modalView}>
                    <CustomTextBox
                      control={control}
                      name="userBio"
                      placeholder={userBio}
                    />

                    {/** This button is responsible to close the modal */}
                    <Text style={styles.max}> Max character count is 150</Text>
                    <CustomButton
                      text="Save Changes"
                      onPress={handleSubmit(updateBio)}
                    />
                    <CustomButton
                      text="Cancle"
                      onPress={toggleModalVisibility}
                    />
                  </View>
                </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioText}>{userBio}</Text>
      </View>

      {/************************************************Start of lower container */}
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
              onPress={() => navigation.navigate("ActiveListingScreen", {fromScreen:'ProfileScreen'})}
            >
              <Circle text="Active Listings" />
            </TouchableOpacity>
          </View>
          <View style={styles.space} />
          <View style={styles.row}>
            <TouchableOpacity
              title="Show Modal"
              onPress={toggleModalVisibility}
            >
              <Circle text="Edit Bio" />
            </TouchableOpacity>

            <View style={styles.space} />
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <Circle text="Settings" />
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
