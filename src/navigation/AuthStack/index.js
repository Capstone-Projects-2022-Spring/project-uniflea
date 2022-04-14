import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';
import AccountVerificationScreen from '../../screens/AccountVerificationScreen';
import SplashInfoScreen from '../../screens/SplashInfoScreen';

const Auth = createStackNavigator();

const AuthStack = () => {
    return (

        <Auth.Navigator>
            <Auth.Screen name="SignIn" component={SignInScreen} />
            <Auth.Screen name="SignUp" component={SignUpScreen} />
            <Auth.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Auth.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <Auth.Screen name="VerifyAccount" component={AccountVerificationScreen} />
            <Auth.Screen name="SplashInfo" component={SplashInfoScreen} />
        </Auth.Navigator>


    );
};

export default AuthStack;