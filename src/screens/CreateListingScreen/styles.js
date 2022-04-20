import { StyleSheet } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";

import {Colors} from "../../styles/Colors";

const styles = ScaledSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        padding: scale(10),
        width: '85%',
    },
    input: {
        height: '7%',
        width: '80%',
        margin: '2%',
        borderWidth: scale(1.25),
        padding: '2%',
        borderRadius: scale(5),
    },
    input2: {
        height: '20%',
        width: '80%',
        margin: '2%',
        borderWidth: scale(1.25),
        padding: '2%',
        borderRadius: scale(5),
    },
    cameraFrame: {
        resizeMode: 'contain',
        alignSelf: 'center',
        height: scale(200),
        width: scale(200),
        margin: '2%',
        borderWidth: scale(1.25),
        padding: '2%',
        borderRadius: scale(5),
    },
});

export default styles;