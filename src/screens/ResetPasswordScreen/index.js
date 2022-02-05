import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { TextInput } from 'react-native-web';

const ResetPasswordScreen = () => {

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
            <View style={styles.code}>
                <Text style={styles.resetHeader}>Create a new password</Text>
                <Text style={styles.resetText}>Enter the code sent to your email to reset your password</Text>
                <View style={styles.inputContainer}>
                    <CustomInput
                        control={control}
                        name="username"
                        placeholder="Enter username"
                        secureTextEntry={false}
                        rules={{ required: 'Username required' }}
                    />
                    <CustomInput
                        control={control}
                        name="code"
                        placeholder="Enter code"
                        secureTextEntry={false}
                        rules={{ required: 'Code required' }}
                    />
                    <CustomInput
                        control={control}
                        name="password"
                        placeholder='password'
                        rules={{
                            required: "Pasword required"
                        }}
                        secureTextEntry={true}
                    />

                    <CustomInput
                        control={control}
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        rules={{
                            required: "Pasword confirmation required"
                        }}
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    <CustomButton text='Submit' onPress={handleSubmit(onSubmit)} />
                </View>


            </View>

        </View>
    );
}

export default ResetPasswordScreen;