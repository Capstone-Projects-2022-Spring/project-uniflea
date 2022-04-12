import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#99182e',
        // backgroundColor: Colors.buttonbackgroundPrimary,
        height: 40,
        width: 250,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.buttonBorderPrimary,
        margin: 10,

    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});

export default styles;