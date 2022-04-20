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
  ScrollView, ActivityIndicator
} from "react-native";
import styles from "./styles";
import { Rating } from "react-native-rating-element";
import { useNavigation, useRoute } from "@react-navigation/native";
import "react-native-get-random-values";
import { S3Image } from "aws-amplify-react-native";
import { User, Product } from "../../models";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AuthContext from "../../contexts/Authentication";
import { scale } from "react-native-size-matters";
import SendMessageItem from "../../components/SendMessageItem";
import SendMessageButton from "../../components/SendMessageButton";
import { useChatContext } from 'stream-chat-expo';




const OtherProfileScreen = ({route}) => {

  
  const navigation = useNavigation();

  /*Setting the name of the user on the page */
  const [displayName, setDisplayName] = useState(null);
  const [name, setName] = useState(null);
  const [schoolName, setSchoolName] = useState(null);
  const [gradYear, setSchoolyYear] = useState(null);
  const [bio, setBio] = useState(null);
 const [image, setImage] = useState(null);
 const[otherUser, setOtherUser] = useState(null);

 const{client} = useChatContext();
const [isLoading, setIsLoading] = useState(true);
const [product, setProduct] = useState(null);

 const { userSub } = route.params;

//  const pullOtherProduct = async () =>{
//   const prodRecord = await DataStore.query(Product, s => s.userSub("eq", userSub));
//   setProduct(prodRecord);
 
// };
 const pullOtherUserInfo = async () => {

    setIsLoading(true);
    const userRecord = await DataStore.query(User, s => s.userSub("eq", userSub));
    //setting all the data for the users
    const displayName = userRecord[0].displayName;
    const name = userRecord[0].name;
    const schoolName = userRecord[0].university;
    const gradYear = userRecord[0].gradYear;
    const bio = userRecord[0].userBio;
    const image = userRecord[0].image;

    setImage(image);
    setDisplayName(displayName);
    setName(name);
    setSchoolName(schoolName);
    setSchoolyYear(gradYear);
    setBio(bio);
    

    const response = await client.queryUsers({id: {$in: [userSub]}});
    console.log("response: " + response);
    setOtherUser(response.users[0])
    console.log("OtherUser is: " + otherUser)
    setIsLoading(false);
    // setMemberDate(memberDate.split("-", 1).toString());
  }

  //for the circle buttons
  const Circle = ({ text }) => (
    <View style={styles.circle}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );


  useEffect(() => {
    
    pullOtherUserInfo();

  }, []);
  
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
            <View style={styles.profileButton}>
              <S3Image style={styles.image} imgKey={image} />
            </View>
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
      <View style={styles.space} />
      <View style={styles.space} />
        <View style={styles.buttonContainer}>
          
            <TouchableOpacity
              onPress={() => navigation.navigate("ActiveListingScreen",  {fromScreen:"OtherProfileScreen"})}
            >
              <Circle text="Read Reviews"  />
            </TouchableOpacity>

            <View style={styles.space} />

            <TouchableOpacity
              
           onPress={() => navigation.navigate("ReviewScreen", {fromScreen:"OtherProfileScreen"})} >
              <Circle text="Active Listings" />
            </TouchableOpacity>
         
          <View style={styles.space} />
          
            <TouchableOpacity
              onPress={() => navigation.navigate("LeaveReviewScreen")}
            >
              <Circle text="Leave a Review" />
            </TouchableOpacity>

            <View style={styles.space} />

            {/* <SendMessageItem userToMessage={otherUser}/> */}

          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtherProfileScreen;
