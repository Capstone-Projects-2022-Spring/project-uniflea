import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const MessagesStack = () => {

    return (

        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="MessagesScreen" component={MessagesScreen} options={{title: 'Messages'}} />

            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{title:"Chat"}}/>
        </Stack.Navigator>

    );
}

export default MessagesStack;