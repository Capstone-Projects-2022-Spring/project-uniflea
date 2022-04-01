import { useNavigation } from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import { Text, Pressable} from 'react-native'
import { useChatContext } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';

const SendMessageItem = ({userToMessage}) => {
    const {user} = useContext(AuthContext);
    const {client} = useChatContext();
    const navigation = useNavigation();

    const onUserPress = async () => {
        if (!userToMessage.id || !user.attributes.sub){
            return;
        }
        // can create a private channel between two users by passing their respective id's
        const channel = client.channel("messaging", {
            members: [userToMessage.id, user.attributes.sub],
        });
        await channel.watch();
        navigation.navigate("Chat", {channel});
    }
    return(
        <Pressable onPress={onUserPress}>
            <Text>Message {userToMessage.name}</Text>
        </Pressable>
        
    );
}   

export default SendMessageItem;