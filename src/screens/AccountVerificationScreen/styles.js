import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    buttonContainer: {
        padding: 20,
        height: '30%',
        marginVertical: 10,
        justifyContent: 'flex-end',
    },
    inputContainer: {
        padding: 20,
        height: '40%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    forgotHeader: {
        fontSize: 28,
        marginBottom: 10,
        color: '#403d3d',
        fontFamily: 'Arial',  
        padding: 20,
    },
    forgotText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#403d3d',
        fontFamily: 'Arial', 
        justifyContent: 'center', 
        lineHeight: 30,
        padding: 20,
    },
    textContainer: {

        padding: 10,
        height: '30%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    resendContainer: {
        flexDirection: 'row'
    },
    resendText: {
        textDecorationLine: 'underline',
    },

});

export default styles;