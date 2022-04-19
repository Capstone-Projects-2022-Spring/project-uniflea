import React from 'react';
import { Text, Animated, TouchableOpacity } from 'react-native';
import styles from './styles';
import GetSchool from '../GetSchool';

const animated = new Animated.Value(1);
const CustomButton = ({ onPress, text }) => {
    // const {user, setUser} = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, (GetSchool()) ? styles.TempleBackgroundColor : styles.DrexelBackgroundColor]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;