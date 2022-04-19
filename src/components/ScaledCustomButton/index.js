import React from 'react';
import { Text, Animated, TouchableOpacity } from 'react-native';
import GetSchool from '../GetSchool';
import styles from './styles';
const animated = new Animated.Value(1);
const CustomButton = async ({ onPress, text }) => {
    
    // console.log("Custom button true or false: ") 
    // console.log(GetSchool == 'Temple');
    // console.log("GetSchool Function call: " + GetSchool())
    
    return (
        
        <TouchableOpacity onPress={onPress} style={[styles.button, (GetSchool() === 'Temple') ? styles.TempleBackgroundColor : styles.DrexelBackgroundColor]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;