import { StyleSheet } from "react-native";
import {Colors} from "../../styles/Colors";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        padding: 10,
        width: '85%',
    },
    input: {
        height: '7%',
        width: '80%',
        margin: '2%',
        borderWidth: 1.25,
        padding: '2%',
        borderRadius: 5,
    },
    input2: {
        height: '20%',
        width: '80%',
        margin: '2%',
        borderWidth: 1.25,
        padding: '2%',
        borderRadius: 5,
    },
    cameraFrame: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 200,
        width: 200,
        margin: '2%',
        borderWidth: 1.25,
        padding: '2%',
        borderRadius: 5,
    },
});

export default styles;