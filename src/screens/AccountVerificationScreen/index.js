import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const AccountVerificationScreen = () => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmitPressed = () => {
        console.warn('Submit pressed')
    }
    const onResendPress = () => {
        console.warn('resend pressed');
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