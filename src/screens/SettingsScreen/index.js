import {ScrollView, View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useForm } from 'react-hook-form';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';



// import CustomInput from '../../components/CustomInput';



const SettingsScreen = () => {


  const {
    control
  } = useForm();


  return(
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.pageContainer}>
          <Text style={styles.settingsText}>Settings</Text>
          <View style={styles.inputContainer}>
            
            <CustomInput
              control={control}
                name="name"
                placeholder='Change Name'
            />
            <CustomInput
              control={control}
              name="username"
              placeholder={'Change Username'}
            />

            <CustomInput
              control={control}
              name="password"
              placeholder={'Change Password'}
            />
            <CustomInput
              control={control}
              name="confirmPassword"
              placeholder={'Confirm Password'}
            />
            <CustomInput
              control={control}
              name="email"
              placeholder={'Change Email'}
            />
            <CustomInput
              control={control}
              name="phone"
              placeholder={'Change Phone Number'}
            />
            </View>
            {/* button */}
            <View style={styles.buttonContainer}>

              <CustomButton text="Save" />

              </View>


          
          
          </View>
        
        </View>

    </ScrollView>

  

);


}

export default SettingsScreen