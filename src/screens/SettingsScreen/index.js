import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { User } from "../../models";
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { Component } from "react";


const SettingsScreen = ()  => {
  const navigation = useNavigation();
  const onChangePassword = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log(user )
      await Auth.forgotPassword(user.attributes.email);
      navigation.navigate("ResetPassword", {fromScreen:"Settings"});

      
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  

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

  //Upload to DB
  const Uploadnewdata = async(data)  => {
    console.log(data.name, data.displayName, data.phone);

    //upload to amplify
    const myUser = await Auth.currentAuthenticatedUser();
    const original = await DataStore.query(User, s => s.userSub("eq", myUser.attributes.sub)); 

    //Case 1 - name is filled
    if (data.name !== undefined && data.displayName === undefined &&  data.phone === undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.name = data.name;
        })
      )  
    }

    //Case 2 - displayName is filled
    else if (data.name === undefined && data.displayName !== undefined &&  data.phone === undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.displayName = data.displayName;
        })
      )  
    }

    //Case 3 - phone is filled
    else if (data.name === undefined && data.displayName === undefined &&  data.phone !== undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.phone = data.phone
        })
      )  
    }

    //Case 4 - name & displayName filled
    else if (data.name !== undefined && data.displayName !== undefined &&  data.phone === undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.name = data.name;
          updated.displayName = data.displayName;
        })
      )  
    }

    //Case 5 - name & phone filled
    else if (data.name !== undefined && data.displayName === undefined &&  data.phone !== undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.name = data.name;
          updated.phone = data.phone
        })
      )  
    }

    //Case 6 - displayName & phone filled
    else if (data.name === undefined && data.displayName !== undefined &&  data.phone !== undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.displayName = data.displayName;
          updated.phone = data.phone
        })
      )  
    }

    //Case 7 - 3 fields are filled
    else if (data.name !== undefined && data.displayName !== undefined &&  data.phone !== undefined){
      await DataStore.save(
        User.copyOf(original[0], updated => {
          updated.name = data.name;
          updated.displayName = data.displayName;
          updated.phone = data.phone
        })
      )  
    }
      

      }



  useEffect(() => {
    UserPlaceholder();
  }, []);

  const { control, handleSubmit } = useForm();

  return (
    <ScrollView>
      <View style={styles.root}>
        {/*<Text style={styles.settingsText}>Settings</Text>*/}
        <View style={styles.pageContainer}>
          <View style={styles.inputContainer}>
            {/* user name input */}

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Name
              </Text>
            </View>

            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="user"
                size={24}
                color="#black"
              />
              <CustomInput control={control} name="name" placeholder={name}/>
             
            </View>
            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Student Details
              </Text>
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
                {school} {grad}
              </Text>
            </View>

            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Email
              </Text>
            </View>
            {/* email display */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="mail"
                size={24}
                color="#black"
              />
              <Text style={styles.containerText}>{email} </Text>
            </View>

            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Birthday
              </Text>
            </View>

            <View style={styles.iconStyle}>
              <FontAwesome5
                style={styles.icon}
                name="birthday-cake"
                size={24}
                color="black"
              />
              <Text style={styles.containerText}>{dob} </Text>
            </View>

            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Username
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
                name="displayName"
                placeholder={displayName}
              />
              
              
            </View>

            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Phone Number
              </Text>
            </View>
            {/* user phone input */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="phone"
                size={24}
                color="black"
              />
              <CustomInput control={control} name="phone" placeholder={phone} />
             
            </View>
            <View style={styles.space} />

            <View style={styles.lableContainer}>
              <Text style={styles.lableText} textAlign="right">
                Change Password
              </Text>
            </View>

          
            {/* Text is onPress to redirect user to forget password */}
            <View style={styles.iconStyle}>
              <AntDesign
                style={styles.icon}
                name="lock"
                size={24}
                color="black"
              />
              <TouchableOpacity
                 onPress={onChangePassword} 
              >
                <Text style={styles.containerPassword}>
                  {"\u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24 \u2B24"}
                </Text>
              </TouchableOpacity>
            </View>
           
          </View>
          {/* button */}
          <View style={styles.space} />
          <View style={styles.buttonContainer}>
            <CustomButton text="Save Changes" onPress={handleSubmit(Uploadnewdata)}/>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;