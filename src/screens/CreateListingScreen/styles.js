
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
    TempleBackgroundColor: {
        backgroundColor: '#99182e'
      },
      TempleBorderColor: {
        borderColor: '#99182e'
      },
      TempleTextColor: {
        color: '#99182e'
      },
      DrexelBackgroundColor: {
        backgroundColor: '#11294f',
      },
      DrexelBorderColor: {
        borderColor: '#11294f'
      },
      DrexelTextColor: {
        color: '#11294f'
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#99182e',
        // backgroundColor: Colors.buttonbackgroundPrimary,
        height: '7%',
        width: '65%',
        borderRadius: 5,
        borderWidth: 1,
        // borderColor: Colors.buttonBorderPrimary,
        margin: '2%',
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
});

export default styles;