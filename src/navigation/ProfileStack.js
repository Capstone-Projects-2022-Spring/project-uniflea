import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfileScreen';
import SavedItemScreen from '../screens/SavedItemsScreen';
import SavedItemStack from './SavedItemStack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const ProfileStack = createStackNavigator();


const ProfileScreenStack = () => {

    return (

        <ProfileStack.Navigator screenOptions={{headerShown: true}}>
            <ProfileStack.Screen name='ProfileScreen' component={ProfilePage} options= {{title: 'Profile'}}/>
            <ProfileStack.Screen name='SaveItemScreen' component={SavedItemScreen} options={{title: 'Active Listings',}}/>
            <ProfileStack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} options={{title:'Change Password'}}/>
            {/* <.Screen name='ProductScreen' component={ProductDetails} options={{ title: '' }} /> */}
        </ProfileStack.Navigator>

    );
}

export default ProfileScreenStack;