import { useNavigation } from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View, Image, StyleSheet, Pressable} from 'react-native'
import { useChatContext } from 'stream-chat-expo';
import AuthContext from '../../contexts/Authentication';

const UserItem = ({user}) => {
    const {userId} = useContext(AuthContext);
    const {client} = useChatContext();
    const navigation = useNavigation();

    const onUserPress = async () => {
        if (!user.id || !userId){
            return;
        }
        // can create a private channel between two users by passing their respective id's
        const channel = client.channel("messaging", {
            members: [user.id, userId],
        });
        await channel.watch();
        navigation.navigate("Chat", {channel});
    }
    return(
        <Pressable onPress={onUserPress} style={styles.root}>
            <Image style={styles.image} source={{uri: user.image}}/>
            <Text style={styles.name}>{user.name}</Text>
        </Pressable>
        
    );
}   

const UsersScreen = () => {

    const [users, setUsers] = useState([]);

    const {client} = useChatContext();

    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        setIsLoading(true)
        // can filter users based on some param
        const response = await client.queryUsers({});
        console.log(response);
        setUsers(response.users);
        setIsLoading(false);
    }

    useEffect(() => {
        
        fetchUsers();
    }, []);
    return (
        <View>
            <FlatList 
                data={users}
                renderItem={({item}) => <UserItem user={item}/>}
                refreshing={isLoading}
                onRefresh={fetchUsers}
            />
            
        </View>

    );
}
const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },  
    name: {
        marginLeft: 5,
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: "gray",
        borderRadius: 50,
    }
});
export default UsersScreen;
