import { StyleSheet } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import {Colors} from '../../styles/Colors'
const styles = ScaledSheet.create({
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
    buttonText: {
        fontSize: '18@s',
        color: '#FFFFFF',
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
      }
});

export default styles;