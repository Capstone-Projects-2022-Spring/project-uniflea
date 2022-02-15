import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { ChannelList, Channel, MessageList, MessageInput } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
    const [selectedChannel, setSelectedChannel] = useState(null);
    const {userId} = useContext(AuthContext);
    const navigation = useNavigation();
    const onChannelPressed = (channel) => {
        navigation.navigate('Chat', {channel});
    };
    const filter = {
        members: { $in: [userId] },
    };
    console.warn(userId);
    // show all channels the user is in
    return (
       
        <ChannelList onSelect={onChannelPressed} filters={filter} />
           
    );
}

export default MessagesScreen;