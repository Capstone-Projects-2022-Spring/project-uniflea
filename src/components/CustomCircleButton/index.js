import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import styles from './styles';

const CustomCircleButton = ({onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.circleButton}>
            {/*<Image style = {styles.circleButtonPic} source = {require("/Users/tj/IdeaProjects/project-uniflea/assets/logo.png")}/>*/}
        </TouchableOpacity>
    );
};

export default CustomCircleButton;
