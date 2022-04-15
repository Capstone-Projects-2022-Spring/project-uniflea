import { View, Text, Pressable, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
const AccountVerificationScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    const email = watch('email');
    const onSubmitPressed = async (data) => {
        try {
            await Auth.confirmSignUp(data.email, data.code);
            navigation.navigate('SplashInfo');
        } catch(e) {
            Alert.alert("Oops", e.message);
        }
        
    }
    const onResendPress = async () => {
        try{
            await Auth.resendSignUp(email);
            Alert.alert('Success', 'check email for code');
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
    }
    return (
        <View style={styles.root}>
            <View style={styles.textContainer}>
                <Text style={styles.forgotHeader}>Account Verification</Text>
                <Text style={styles.forgotText}>Verification code sent to email. Please enter the code below</Text>
            </View>



            <View style={styles.inputContainer}>
                <CustomInput
                    control={control}
                    name="email"
                    placeholder="Enter email"
                    secureTextEntry={false}
                    rules={{ required: 'Email required' }}
                />
                <CustomInput
                    control={control}
                    name="code"
                    placeholder="Enter code"
                    secureTextEntry={false}
                    rules={{ required: 'Code required' }}
                />
                <View style={styles.resendContainer}>
                    <Text>Didn't receive a code? </Text>
                    <Pressable onPress={onResendPress}><Text style={styles.resendText}>RESEND_CODE</Text></Pressable>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <CustomButton text='Submit' onPress={handleSubmit(onSubmitPressed)} />
            </View>




        </View>
    );
}

export default AccountVerificationScreen;