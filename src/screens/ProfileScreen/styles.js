import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    space:{
        width:20,
        height:20
    },
    profileNameText:{
      fontSize: 30
    },
    topRightPosition:{
      top:-140,
      left: 160,
    },
    profileButton:{
      width:100,
      height:100,
      borderRadius:100/2,
      backgroundColor:'lightgrey'
    }
  });

  export default styles;