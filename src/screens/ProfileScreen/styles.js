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
      width:110,
      height:110,
      borderRadius:110,
      borderWidth: 1,
      backgroundColor: "lightgray"
    },
    image:{
      resizeMode: "contain",
      width:100, 
      height:100, 
      borderRadius:100
    },
    
  });

  export default styles;