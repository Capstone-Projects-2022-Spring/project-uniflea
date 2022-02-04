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
    signUpContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
      
    },
    signUpText: {
        textDecorationLine:'underline',
    }
});

export default styles;