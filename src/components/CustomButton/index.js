import React from 'react';
import { Text, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
const animated = new Animated.Value(1);
const CustomButton = ({ onPress, text }) => {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;