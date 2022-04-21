import { useNavigation } from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import { Text, Pressable, Alert} from 'react-native'
import { useChatContext } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';
import CustomButton from '../CustomButton';
import ScaledCustomButton from "../ScaledCustomButton";
const SendMessageItem = ({userToMessage}) => {
    const {user} = useContext(AuthContext);
    const {client} = useChatContext();
    const navigation = useNavigation();

    const onUserPress = async () => {
        if (!userToMessage.id || !user.attributes.sub){
            return;
        }
        try{
                    // can create a private channel between two users by passing their respective id's
        const channel = client.channel("messaging", {
            members: [userToMessage.id, user.attributes.sub],
        });
        await channel.watch();
        navigation.navigate("Chat", {channel});
        } catch(e) {
            Alert.alert("Error creating chat", e.message);
        }

    }
    return(
        <CustomButton onPress={onUserPress} text={"Message "+userToMessage.name}  />
        
    );
}   

export default SendMessageItem;