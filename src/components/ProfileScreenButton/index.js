import React from "react";
import { Pressable, Text } from "react-native";
import styles from './styles';

const ProfileScreenButton = ({onPress, text}) => {
    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

export default ProfileScreenButton;