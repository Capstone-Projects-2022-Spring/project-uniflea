import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonbackgroundPrimary,
        height: 40,
        width: 300,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.buttonBorderPrimary,
        margin: 10,

    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});

export default styles;