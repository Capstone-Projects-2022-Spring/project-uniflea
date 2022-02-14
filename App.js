import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { StreamChat } from 'stream-chat';
import { OverlayProvider, Chat } from 'stream-chat-expo';

import Navigation from './src/navigation';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'

import AuthContext from './src/contexts/Authentication';
Amplify.configure(awsconfig)

const API_KEY = '4gqynpstsrwm';
const client = StreamChat.getInstance(API_KEY);

export default function App() {
  const [userId, setUserId] = useState('');
  useEffect(() => {
    /*
      Amplify provides a unique user identifier (userSub),
      which can be passed as userToken to create a link between the user in the stream database
      and the user in the amplify database.
    */
      
    // stream only allows one client connected at a time. On dismount, disconnect user
    console.log(client);
    return () => client.disconnectUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AuthContext.Provider value={{userId, setUserId}}>

        <OverlayProvider>
          {/* 
        Could encapsulate only the message screen with the chat component
        However, this may effect notifications from coming through when the user is on another screen
         */}
          <Chat client={client}>
            <StatusBar />
            {/* Navigation will go here */}
            <Navigation />
          </Chat>

        </OverlayProvider>
      </AuthContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
