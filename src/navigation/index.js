import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';

import AuthStack from './AuthStack';
import HomeScreen from '../screens/HomeScreen';
import { Auth, Hub } from 'aws-amplify';
import {View, Text} from 'react-native';
const Root = createStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
            // bypasse cache to query the database and make certain the user does not exist
            const currentAuthenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            setUser(currentAuthenticatedUser);
        } catch (e) {
            console.log("No current authenticated user");
            setUser(null);
        }

    }
    useEffect(() => {
        checkUser();
    }, []);

    // Sign up/sign in events get logged to amplify hub.
    // We can set up a listener on this hub to enable us to detect if a user is signed in
    // listen to amplify events to react in real time to user activities sign in/out
    useEffect(() => {
        const listener = (data) => {
            if (data.payload.event === "signIn" || data.payload.event === "signOut") {
                checkUser();
            }
        }

        Hub.listen('auth', listener);

        // remove listener when component unmounts to avoid memory leaks
        return () => Hub.remove('auth', listener);

    }, []);
    if (user === undefined) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading ...</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <Root.Navigator screenOptions={{ headerShown: false }}>
                {user ? (
                    <Root.Screen name="Home" component={HomeScreen} />
                ) : (
                    <Root.Screen name="AuthScreens" component={AuthStack} />
                )}
                
                
            </Root.Navigator>

        </NavigationContainer>
    );
};
// add amplification from amplify

export default Navigation;
