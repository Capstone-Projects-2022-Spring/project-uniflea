import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 28,
        marginBottom: 30,
        color: '#403d3d',
        fontFamily: 'Arial',  
    },
    pageContainer: {
        padding: 20,
    },
    inputField: {
        height: 50,
        width: '100%',
        padding: 10,
        margin: 20,
        borderWidth: 1,
        justifyContent: 'center',
    },
    forgotText: {
        textAlign: 'right',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
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
    buttonContainer: {
        marginVertical: 20,
    },
    signUpContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 40,
    },
    signUpText: {
        textDecorationLine:'underline',
    }
});

export default styles;