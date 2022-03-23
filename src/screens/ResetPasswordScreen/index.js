import { View, Text, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import React, {useRef} from 'react';

const ResetPasswordScreen = () => {
    const password = useRef({});
    const navigation = useNavigation();
    const onSubmit = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.email, data.code, data.password);
            navigation.navigate("SettingsScreen");

        
        } catch (e) {
            Alert.alert('Oops', e.message);
        }

    }

    const pwdReqs =() =>{
        <Text>{"Password must have at least 8 characters"} {"\n"} {"Must include special characters"} </Text>
    };

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
            <View style={styles.pageContainer}>
                <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="lock-reset" size={65} color="#474747" />
            </View>
                <Text style={styles.resetHeader}>Reset Your Password</Text>
                <View style={styles.inputContainer}>
                    <CustomInput
                        control={control}
                        name="email"
                        placeholder="Enter Account Email"
                        secureTextEntry={false}
                        rules={{ required: 'Email required' }}
                    />
                    <View style={styles.space} />
                    <CustomInput
                        control={control}
                        name="code"
                        placeholder="Check Email For Validation Code"
                        secureTextEntry={false}
                        rules={{ required: 'Code required' }}
                    />
                     {/* <Text style={styles.resetText}>Enter the code sent to your email.</Text> */}
                     <View style={styles.space} />
                    {/* <View>

                        <Text style={styles.passwordInfo}>Minimum 8 characters</Text>
                        <Text style={styles.passwordInfo}>Must include special characters</Text>
                        <Text style={styles.passwordInfo}>Must include upper and lower case characters</Text>
                        <Text style={styles.passwordInfo}>Must include numerals</Text>
                    </View> */}
                    <CustomInput
                        control={control}
                        name="password"
                        placeholder='Enter New Password'
                        
                        rules={{

                            minLength: {
                                value: 8,
                                message:"Password must have at least 8 characters, special characters, upper and lower case characters and numbers.",
                            },
                            required: "Pasword required"
                        }}
                        secureTextEntry={true}
                    />
                        <View style={styles.space} />
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
                <View style={styles.space} />           
                <View style={styles.buttonContainer}>
                    <CustomButton text='Submit' onPress={handleSubmit(onSubmit)} />
                </View>


            </View>

        </View>
    );
}

export default ResetPasswordScreen;