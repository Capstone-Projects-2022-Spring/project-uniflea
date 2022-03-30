import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        padding: 15,
        width:'75%',
        backgroundColor: '#99182e',
        borderRadius: 15,
        paddingVertical:12,
        elevation:6
        
    },
    text:{
        color: 'white',
        fontSize: 15,

    },
    space:{
        width:20,
        height:20
    }
  });

  export default styles;