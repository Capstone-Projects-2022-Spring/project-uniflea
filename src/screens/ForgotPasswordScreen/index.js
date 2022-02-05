import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {

    const onSubmit = (data) => {
        console.warn("submit");
    }

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <View style={styles.root}>
            <View style={styles.textContainer}>
                <Text style={styles.forgotHeader}>Forgot Password</Text>
                <Text style={styles.forgotText}>If an account exists for this username, you'll be emailed a code to reset your password</Text>
            </View>

            <View style={styles.code}>

                <View style={styles.inputContainer}>
                    <CustomInput
                        control={control}
                        name="username"
                        placeholder="Enter username"
                        secureTextEntry={false}
                        rules={{ required: 'Username required' }}
                    />
                </View>

                <View>
                    <CustomButton text='Submit' onPress={handleSubmit(onSubmit)} />
                </View>


            </View>

        </View>
    );
}

export default ForgotPasswordScreen