import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { User } from "../../models";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";

// import CustomInput from '../../components/CustomInput';

const SettingsScreen = () => {
  // get info from DB
  const [displayName, setDisplayName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDOB] = useState(null);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);
  const [grad, setGrad] = useState(null);
  const [school, setSchool] = useState(null);

  const UserPlaceholder = async () => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const userRecord = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );
    //setting all the data for the users 
    const displayName = userRecord[0].displayName;
    const email = userRecord[0].email;
    const dob = userRecord[0].dob;
    const phone = userRecord[0].phone;
    const name = userRecord[0].name;
    const grad = userRecord[0].gradYear;
    const school = userRecord[0].university;

    setDisplayName(displayName);
    setEmail(email);
    setDOB(dob);
    setPhone(phone);
    setName(name);
    setGrad(grad),
    setSchool(school);
  };

  // //Upload to DB
  // const Uploadnewdata = async()  => {
  //  //upload to amplify
  //  const myUser = await Auth.currentAuthenticatedUser();
  //  const original = await DataStore.query(User, s => s.userSub("eq", myUser.attributes.sub));

  //  await DataStore.save(
  //      User.copyOf(original[0], updated => {
  //          updated.image = uploadedImage.key
  //      })
  //  )
  //     }

  useEffect(() => {
    UserPlaceholder();
  }, []);

  const { control } = useForm();

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.settingsText}>Settings</Text>
        <View style={styles.pageContainer}>
          <View style={styles.inputContainer}>
            {/* user name input */}

            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="user"
                size={24}
                color="#black"
              />
              <CustomInput
                control={control}
                name="name"
                placeholder={name}
              />
            </View>
            {/* email display */}
            <View style={styles.iconStyle}>
              <FontAwesome5
                style={styles.icon}
                name="user-graduate"
                size={24}
                color="#black"
              />
              <Text style={styles.containerText}>
                {school}{" "}{grad}
              </Text>
            </View>

            <View style={styles.space} />
                        {/* email display */}
                        <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="mail"
                size={24}
                color="#black"
              />
              <Text style={styles.containerText}>
                {email}{" "}
              </Text>
            </View>

            <View style={styles.space} />

            <View style={styles.iconStyle}>
              <FontAwesome5
                style={styles.icon}
                name="birthday-cake"
                size={24}
                color="black"
              />
              <Text style={styles.containerText}>
                {dob}{" "}
              </Text>
            </View>

            {/* user's username */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="aliwangwang-o1"
                size={24}
                color="#black"
              />
              <CustomInput
                control={control}
                name="username"
                placeholder={displayName}
              />
            </View>
            {/* user phone input */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="phone"
                size={24}
                color="black"
              />
              <CustomInput
                control={control}
                name="phone"
                placeholder={phone}
              />
            </View>

            {/* call amp to password call signin func Needs to be changed *************************/}
            {/* Text is onPress to redirect user to forget password */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="lock"
                size={24}
                color="black"
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordScreen")}
              >
                <Text style={styles.containerPassword}>
                  {"\u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24"}{" "}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Need to change***************************************/}

            
          </View>
          {/* button */}

          <View style={styles.buttonContainer}>
            <CustomButton text="Save Changes" />
          </View>

          {/* onpress pass in Uploadnewdata this will update user record */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
