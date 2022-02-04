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
        fontSize: 28,
        marginBottom: 30,
        color: '#403d3d',
        fontFamily: 'Arial',  
    },
    pageContainer: {
        padding: 20,
    },
    
    forgotText: {
        textAlign: 'right',
        marginVertical: 10,
        textDecorationLine: 'underline',
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