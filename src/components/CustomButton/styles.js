import { StyleSheet } from "react-native";
import {Colors} from '../../styles/Colors'
const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#99182e',
        // backgroundColor: Colors.buttonbackgroundPrimary,
        height: 40,
        width: 250,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.buttonBorderPrimary,
        margin: 10,

    },
    buttonText: {
        fontSize: 20,
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