import { View, Text, Pressable, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {useChatContext} from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';
import React, {useContext} from 'react';
import {StreamChat} from 'stream-chat';

const API_KEY = '4gqynpstsrwm';
const SECRET = 'ee3kx3rc5pmyp58pt5xbnqskttc5fa8b7zha8hzh5su52mv77tgqnksnunqraa9t';
// const client = StreamChat.getInstance(API_KEY, SECRET);
const SignInScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { client } = useChatContext();
    const {setUserId} = useContext(AuthContext);
    // This function requires call to amplify to verify user, making it asynchronous
    const onSignInPressed = async (data) => {
        try {
            console.log("Signing in...");
            const response = await Auth.signIn(data.email, data.password);
            console.log('result = ', response);
        } catch(e){
            Alert.alert('Oops', e.message);
        }
        // navigation.navigate('Home');
    }
    const onSignUpPressed = () => {
        //navigation.navigate('SignUp');
        navigation.navigate('SignUp');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    return (
        <View style={styles.root}>
            <View style={styles.pageContainer}>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.inputContainer}>

                    <CustomInput 
                        control={control}
                        name="email"
                        placeholder='Email'
                        rules={{
                            required: "Email required"
                        }}
                    />
                    <View style={styles.space} />
                    <CustomInput 
                        control={control}
                        name="password"
                        placeholder='password'
                        rules={{
                            required: "Pasword required"
                        }}
                        secureTextEntry={true}
                    />

                </View>
                <View style={styles.buttonContainer}>
                    
                    <CustomButton onPress={handleSubmit(onSignInPressed)} text="Login"/>
                    <Pressable onPress={onForgotPasswordPressed}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </Pressable>
                </View>


            </View>
            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={onSignUpPressed}><Text style={styles.signUpText}> SIGN UP</Text></Pressable>
                    
                
            </View>

        </View>
    );
}

export default SignInScreen;