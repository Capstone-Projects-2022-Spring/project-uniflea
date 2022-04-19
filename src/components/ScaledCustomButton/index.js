import React, { useEffect, useState } from 'react';
import { Text, Animated, TouchableOpacity, View } from 'react-native';
import GetSchool from '../GetSchool';
import styles from './styles';

const animated = new Animated.Value(1);
const ScaledCustomButton = ({ onPress, text }) => {
    
    // console.log("Custom button true or false: ") 
    // console.log(GetSchool() == 'Temple');
    // console.log("GetSchool Function call: " + GetSchool())
    
    const[value , setValue] = useState('');
    const setSchoolValue = () => {
        setValue(GetSchool());
    }
    useEffect( () => {
        setSchoolValue()
    }, []);

    return (
        
        <TouchableOpacity onPress={onPress} style={[styles.button, (user.attributes['custom:University'] == 'Temple') ? styles.TempleBackgroundColor : styles.DrexelBackgroundColor]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
  
    );
};

export default ScaledCustomButton;