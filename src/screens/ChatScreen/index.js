import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { Channel, MessageList, MessageInput } from 'stream-chat-expo';
const ChatScreen = () => {
    const route = useRoute();
    const channel = route.params?.channel;
    if (!channel){
        return <Text>Channel not found</Text>;
    }
    return (
        <Channel channel={channel} >
            <MessageList />
            <MessageInput />
        </Channel>
    );
}

export default ChatScreen;