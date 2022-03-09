import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Pressable, Alert } from 'react-native';
import styles from './styles';
import CustomInput from './components/CustomInput';


const SignUpScreen = () => {

  const {
    control,
    handleSubmit,
  } = useForm();

  return (
    <ScrollView>
       <View style={styles.root}>
        <View style={styles.pageContainer}>
        <Text style={styles.loginText}>Settings Page</Text>
          <View style={styles.inputContainer}>
          
          <CustomInput
            control={control}
            name="Change Name"
            placeholder='Change Name'
          />     
          <CustomInput
            control={control}
            name="Change Display Name"
            placeholder='Change Display Name'
          /> 
          <CustomInput
            control={control}
            name="Change Profile Name"
            placeholder='Change Profile Name'
          />

          <CustomInput
            control={control}
            name="Change Password"
            placeholder='Change Password'
          />           
          

        
        
        
          </View>
        </View>
      </View> 

      </ScrollView>



  );
}