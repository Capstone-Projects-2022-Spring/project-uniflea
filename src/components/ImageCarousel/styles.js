import {StyleSheet} from 'react-native';
import { scale, ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    root: {
       alignItems: 'center',
    },
    image: {
        width: scale(225),
        height: scale(225),
        borderWidth: 1.25,
        resizeMode: 'contain',
    },
    dot: {
        width: scale(15),
        height: scale(15),
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c8c8c8',
        margin: scale(10),
   },
   dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
   },
});

export default styles;