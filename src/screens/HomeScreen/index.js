import styles from './styles';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

  const navigation = useNavigation();
  const signOut = () => {
    Auth.signOut();
  }

  const messagesScreen = () => {
    navigation.navigate('Messages');
  }
  const onUsersPressed = () => {
    navigation.navigate('Users');
  }

  return (
    <View>
        <Text>Home Screen</Text>
        <Pressable onPress={signOut}>
          <Text>Sign out</Text>
        </Pressable>
        <Pressable onPress={messagesScreen}>
          <Text>Go to Messages</Text>
        </Pressable>
        <Pressable onPress={onUsersPressed}>
          <Text>Go to Users</Text>
        </Pressable>
    </View>
  );
}

export default HomeScreen;
