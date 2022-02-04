import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';
const CustomButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;