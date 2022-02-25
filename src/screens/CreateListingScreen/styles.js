import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    input2: {
        height: 100,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    centerTitle: {
        fontSize: 20,
    },
    cameraFrame: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 200,
        width: 200,
        margin: 8,
        borderWidth: 2,
        padding: 10,
    },
    draftSave: {
        height: 60,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    space:{
        width:20,
        height:20
    },
});

export default styles;