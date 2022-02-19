import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useContext } from 'react';
import BottomTabNav from './BottomTabNav';
import AuthStack from './AuthStack';
import { Auth, Hub } from 'aws-amplify';
import {View, Text} from 'react-native';
import AuthContext from '../contexts/Authentication';
import { useChatContext } from 'stream-chat-expo';


const Root = createStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState(undefined);
    // decouple authentication from navigation using context api
    const {userId, setUserId} = useContext(AuthContext);

    const {client} = useChatContext();
    const checkUser = async () => {
        try {
            // bypasse cache to query the database and make certain the user does not exist
            const currentAuthenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            
    
            if (userId.length > 0) {
                return;
            }
            await client.connectUser(
                {
                    id: currentAuthenticatedUser.attributes.sub,
                    name: currentAuthenticatedUser.attributes.name,
                },
                client.devToken(currentAuthenticatedUser.attributes.sub) // authentication token that I receive from backend
            );

            // create a messages channel on user connection
            // const channel = client.channel("livestream", "live", { name: "Test Live" });

            // // watch loads the initial state, and automatically subscribes for updates when new events occur
            // await channel.watch();
            console.log('connected user in navigation screen');
            setUser(currentAuthenticatedUser);
            setUserId(currentAuthenticatedUser.attributes.sub)
        } catch (e) {
            console.log("No current authenticated user");
            setUser(null);
            setUserId(null)
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
            <Root.Navigator >
                {user ? (
                    <>
                        <Root.Screen name="HomeTabs" component={BottomTabNav} />
                        {/* <Root.Screen name="Home" component={HomeScreen} />
                        <Root.Screen name="Messages" component={MessagesScreen} />
                        <Root.Screen name="Users" component={UsersScreen} />
                        <Root.Screen name="Chat" component={ChatScreen} /> */}
                        
                    </>
                    
                ) : (
                    <Root.Screen name="AuthScreens" component={AuthStack} options={{ headerShown: false }}/>
                )}
                
                
            </Root.Navigator>

        </NavigationContainer>
    );
};
// add amplification from amplify

export default Navigation;
