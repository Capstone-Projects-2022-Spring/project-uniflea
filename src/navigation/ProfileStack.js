import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OtherProfilePage from '../screens/OtherProfileScreen';
import SavedItemScreen from '../screens/SavedItemsScreen';
import SavedItemStack from './SavedItemStack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import ReviewScreen from '../screens/ReviewScreen';
import LeaveReviewScreen from '../screens/LeaveReviewScreen';
import ReportScreen from '../screens/ReportScreen';
import ActiveListingScreen from '../screens/ActiveListingScreen';

const ProfileStack = createStackNavigator();


const OtherProfileScreenStack = () => {

    return (

        <ProfileStack.Navigator screenOptions={{headerShown: true}}>
            <ProfileStack.Screen name='ProfileScreen' component={OtherProfilePage} options= {{title: 'Other Profile'}}/>
            <ProfileStack.Screen name='ActiveListingScreen' component={ActiveListingScreen} options={{title: 'Active Listings',}}/>
            <ProfileStack.Screen name="ReviewScreen" component={ReviewScreen} />
            <ProfileStack.Screen name="LeaveReviewScreen" component={LeaveReviewScreen} />
            <ProfileStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} options={{title:'Change Password'}}/>
            <ProfileStack.Screen name='SettingsScreen' component={SettingsScreen} options={{title:'Back '}}/>
            <ProfileStack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <ProfileStack.Screen name="SignIn" component={SignInScreen} />
            <ProfileStack.Screen name='ReportScreen' component={ReportScreen}/>
             {/*<.Screen name='ProductScreen' component={ProductDetails} options={{ title: '' }} /> */}
        </ProfileStack.Navigator>

    );
}

export default OtherProfileScreenStack;