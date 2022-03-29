import React from "react";
import { Pressable, Text } from "react-native";
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const NotificationsButton = ({onPress, text}) => {
    const navigation = useNavigation()
    const notificationPress =()=>{navigation.navigate("Notifications")}
    return(
            
        <Pressable onPress={notificationPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
            <FontAwesome name="bell-o" size={24} color="black" />     
             
        </Pressable>
    );
}

export default NotificationsButton;