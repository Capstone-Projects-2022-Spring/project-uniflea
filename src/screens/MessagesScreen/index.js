import React, { useContext } from 'react';
import { ChannelList } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
    const {userId} = useContext(AuthContext);
    const navigation = useNavigation();
    const onChannelPressed = (channel) => {
        navigation.navigate('ChatScreen', {channel});
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