import {View, Text, } from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { AntDesign} from '@expo/vector-icons';
import { User } from '../../models';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Auth, DataStore} from "aws-amplify";




// import CustomInput from '../../components/CustomInput';



const SettingsScreen = () => {
// get info from DB



  const [displayName, setName] = useState(null);
  const [userSub, setuserSub] = useState(null);
  const UserPlaceholder = async()  => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const userRecord = await DataStore.query(User, s => s.userSub("eq", myUser.attributes.sub));
    //i want the pfp of that user
    const displayName = userRecord[0].displayName;
    const userSub = userRecord[0].userSub;
      
    setName(displayName);
    setuserSub(userSub);
    

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

    useEffect(  () => {UserPlaceholder()}, []);

  const {
    control
  } = useForm();

  return(
      
    <SafeAreaView>
       
      <View style={styles.root}>
        <View style={styles.pageContainerIcon}>
          <Text style={styles.settingsText}>Settings</Text>
          <View style={styles.inputContainer}>

          <View style={styles.iconStyle }>
            <AntDesign style={styles.icon} name="user" size = {24} color="#black"  />
            <CustomInput
              control={control}
                name="name"
                 placeholder={displayName}    
            /> 
            </View>

            <View style={styles.iconStyle }>
            <AntDesign style={styles.icon} name="mail" size = {24} color="#black"  />
            <Text style={styles.containerText}>{displayName} </Text>
            </View>


            <View style={styles.iconStyle}>
            <AntDesign style={styles.icon} name="aliwangwang-o1" size = {24} color="#black"  />
            <CustomInput
              control={control}
              name="username"
              placeholder={userSub}
            /></View>
{/* call amp to password call signin func *************************/}
            <View style={styles.iconStyle}>
            <AntDesign style={styles.icon} name="lock" size={24} color="black" />
            <CustomInput
              control={control}
              name="password"
              placeholder={'Change Password'} 
            />
            </View>
{/* Need to change***************************************/}
            
            
            <View style={styles.iconStyle}>
            <AntDesign style={styles.icon} name="phone" size={24} color="black" />
            <CustomInput
              control={control}
              name="phone"
              placeholder={'Change Phone Number'}
            />
            </View>

            </View>
            {/* button */}
            <View style={styles.buttonContainer}>

              <CustomButton text="Save Changes" />

              </View>
              
            {/* onpress pass in Uploadnewdata this will update user record */}


          
          
          </View>
        
        </View>

     
        

    </SafeAreaView>

  

);


}

export default SettingsScreen