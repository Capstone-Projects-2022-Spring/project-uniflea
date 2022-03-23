import React, { useContext } from 'react';
import { ChannelList } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
    const {user} = useContext(AuthContext);
    const navigation = useNavigation();
    const onChannelPressed = (channel) => {
        navigation.navigate('ChatScreen', {channel});
    };
    const filter = {
        members: { $in: [user.attributes.sub] },
    };
    // console.warn("user sub in messages screen = ",user.attributes.sub);
    // show all channels the user is in
    return (
       
        <ChannelList onSelect={onChannelPressed} filters={filter} />
           
    );
}

export default MessagesScreen;