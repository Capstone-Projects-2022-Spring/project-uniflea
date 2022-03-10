import { View, Text, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import React, {useRef} from 'react';

const ResetPasswordScreen = () => {
    const password = useRef({});
    const navigation = useNavigation();
    const onSubmit = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.email, data.code, data.password);
            navigation.navigate("SignIn");
        } catch (e) {
            Alert.alert('Oops', e.message);
        }

    }

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    password.current = watch("password");
    const validatePassword = (confirmedPassword) => {
        return confirmedPassword === password.current;
    };

    return (
        <View style={styles.root}>
            <View style={styles.code}>
                <Text style={styles.resetHeader}>Create a new password</Text>
                <Text style={styles.resetText}>Enter the code sent to your email to reset your password</Text>
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
                    <View>
                        <Text style={styles.passwordInfo}>Minimum 8 characters</Text>
                        <Text style={styles.passwordInfo}>Must include special characters</Text>
                        <Text style={styles.passwordInfo}>Must include upper and lower case characters</Text>
                        <Text style={styles.passwordInfo}>Must include numerals</Text>
                    </View>
                    <CustomInput
                        control={control}
                        name="password"
                        placeholder='password'
                        rules={{
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            },
                            required: "Pasword required"
                        }}
                        secureTextEntry={true}
                    />

                    <CustomInput
                        control={control}
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        rules={{
                            required: "Pasword confirmation required",
                            validate: {
                                checkEmail: v => validatePassword(v) || "Passwords not equivalent"
                            },
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