import { StyleSheet } from "react-native";

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
        fontSize: 24,
        marginBottom: 10,
        color: '#403d3d',
        fontFamily: 'Arial',  
    },
    passwordInfo: {
        color: 'blue',
    },
    pageContainer: {
        padding: 10,
    },
    
    forgotText: {
        textAlign: 'right',
        marginVertical: 10,
        textDecorationLine: 'underline',
    },
    buttonContainer: {
        marginVertical: 10,
    },
    signInContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10,
    },
    signInText: {
        textDecorationLine:'underline',
    },
    space: {
        width: 20,
        height: 20,
      },
});

export default styles;