import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    code: {
        padding: 10,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotHeader: {
        fontSize: 28,
        marginBottom: 30,
        color: '#403d3d',
        fontFamily: 'Arial',  
    },
    forgotText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#403d3d',
        fontFamily: 'Arial', 
        justifyContent: 'center', 
    },
    textContainer: {
        padding: 10,
        height: 150,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

});

export default styles;