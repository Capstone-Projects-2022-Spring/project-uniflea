import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/ProfileScreen';
import SavedItemScreen from '../screens/SavedItemsScreen';
import SavedItemStack from './SavedItemStack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import CreateListingScreen from '../screens/CreateListingScreen';

const CreateListingStack = createStackNavigator();

const SellItemScreenStack = () => {
    return (
        <CreateListingStack.Navigator screenOptions = {{headerShown: true}} >
            <CreateListingStack.Screen name = 'Create New Listing' component = {CreateListingScreen}>

            </CreateListingStack.Screen>
        </CreateListingStack.Navigator>
        );
}

export default SellItemScreenStack;