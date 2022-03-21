import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfileScreen';
import SavedItemScreen from '../screens/SavedItemsScreen';
import SavedItemStack from './SavedItemStack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import ReportScreen from '../screens/ReportScreen';

const ProfileStack = createStackNavigator();


const ProfileScreenStack = () => {

    return (

        <ProfileStack.Navigator screenOptions={{headerShown: true}}>
            <ProfileStack.Screen name='ProfileScreen' component={ProfilePage} options= {{title: 'Profile'}}/>
            <ProfileStack.Screen name='SaveItemScreen' component={SavedItemScreen} options={{title: 'Active Listings',}}/>
            <ProfileStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} options={{title:'Change Password'}}/>
            <ProfileStack.Screen name='SettingsScreen' component={SettingsScreen} options={{title:'Back '}}/>
            <ProfileStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <ProfileStack.Screen name="SignIn" component={SignInScreen} />
            <ProfileStack.Screen name='ReportScreen' component={ReportScreen}/>
             {/*<.Screen name='ProductScreen' component={ProductDetails} options={{ title: '' }} /> */}
        </ProfileStack.Navigator>

    );
}

export default ProfileScreenStack;