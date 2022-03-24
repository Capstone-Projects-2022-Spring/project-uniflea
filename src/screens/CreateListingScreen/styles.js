import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
        height: 100,
        width: 300,
        margin: 10,
        borderWidth: 1,
        padding: 10,
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
        width:40,
        height:20
    },
});

export default styles;