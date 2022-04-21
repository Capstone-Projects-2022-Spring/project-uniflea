import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useContext } from 'react';
import BottomTabNav from './BottomTabNav';
import AuthStack from './AuthStack';
import { Auth, Hub } from 'aws-amplify';
import { View, Text, Alert } from 'react-native';
import AuthContext from '../contexts/Authentication';
import { useChatContext } from 'stream-chat-expo';
import { DataStore, Storage } from 'aws-amplify';
import { User } from '../models';

const Root = createStackNavigator();

const Navigation = () => {
    // const [user, setUser] = useState(undefined);
    // decouple authentication from navigation using context api
    const { user, setUser } = useContext(AuthContext);
    // console.log(user);
    const { client } = useChatContext();
    const checkUser = async () => {
        try {
            // bypasse cache to query the database and make certain the user does not exist
            const currentAuthenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

            // if user is already signed in, we don't connect another
            if (user) {
                return;
            }
            // query user in database to and set image to user's image
            const userProfile = await DataStore.query(User, (s) =>
                s.userSub("eq", currentAuthenticatedUser.attributes.sub)
            );
            let signedUrl = null;
            if (userProfile.length > 0 && userProfile[0].image != null) {
                
                signedUrl = await Storage.get(userProfile[0].image, { contentType: "image/png", expires: 604000 })
            }

            if (signedUrl != null) {
                await client.connectUser(
                    {
                        id: currentAuthenticatedUser.attributes.sub,
                        name: currentAuthenticatedUser.attributes.name,
                        image: signedUrl,
                    },
                    client.devToken(currentAuthenticatedUser.attributes.sub) // authentication token that I receive from backend
                );
            } else {
                await client.connectUser(
                    {
                        id: currentAuthenticatedUser.attributes.sub,
                        name: currentAuthenticatedUser.attributes.name,
                    },
                    client.devToken(currentAuthenticatedUser.attributes.sub) // authentication token that I receive from backend
                );
            }


            // console.log('connected user in navigation screen');
            setUser(currentAuthenticatedUser);


        } catch (e) {
            console.log("oops", e.message);
            console.log("No current authenticated user");
            setUser(null);

        }

    }
    useEffect(() => {
        checkUser();
        return () => {
            setUser(null);
        }
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
            <Root.Navigator screenOptions={{ headerShown: false }} >
                {user ? (
                    <>
                        <Root.Screen name="HomeTabs" component={BottomTabNav} />

                    </>

                ) : (
                    <Root.Screen name="AuthScreens" component={AuthStack} options={{ headerShown: false }} />
                )}


            </Root.Navigator>

        </NavigationContainer>
    );
};
// add amplification from amplify

export default Navigation;
