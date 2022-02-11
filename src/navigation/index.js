import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuthStack from './AuthStack';
import HomeScreen from '../screens/HomeScreen';

const Root = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{headerShown:false}}>
                <Root.Screen name="AuthScreens" component={AuthStack}/>
                <Root.Screen name="Home" component={HomeScreen} />
            </Root.Navigator>

        </NavigationContainer>
    );
};
// add amplification from amplify

export default Navigation;
