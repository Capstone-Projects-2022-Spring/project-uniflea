import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circleButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
    },
    textWithButton: {
        alignSelf: 'flex-start',
    },
    circleButtonPic: {
        width: 38,
        height: 38,
        borderRadius: 100,
    },
});

export default styles;