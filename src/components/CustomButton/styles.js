import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.buttonbackgroundPrimary,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.buttonBorderPrimary,
        
    },
    buttonText: {
        fontSize: 20,
    },
});

export default styles;