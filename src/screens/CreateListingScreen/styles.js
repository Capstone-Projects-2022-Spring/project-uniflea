import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 130,
        width: 300,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        // textAlign: 'center',
    },
    centerTitle: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 10,
        width: 200,
    },
    cameraFrame: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 200,
        width: 200,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    space:{
        width:300,
        height:300
    },
    categoryFrame: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 40,
        width: 300,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
    },
});

export default styles;