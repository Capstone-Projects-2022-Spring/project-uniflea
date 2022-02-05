import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const AccountVerificationScreen = () => {

    const onSubmit = (data) => {
        console.warn("submit");
    }

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
                <Text style={styles.forgotHeader}>Forgot Password</Text>
                <Text style={styles.forgotText}>If an account exists for this username, you'll be emailed a code to reset your password</Text>
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