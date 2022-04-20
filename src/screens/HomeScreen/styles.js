import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    flex: 1,
    padding: 10,
    // backgroundColor: Colors.mainBackground,
  },

  modalContent: {
    padding: 10,
    // backgroundColor: Colors.mainBackground,
    borderTopColor: Colors.mainBackground,
    borderTopWidth: 50,
    borderBottomColor: Colors.mainBackground,
    borderBottomWidth: 700,
    borderRightWidth: 30,
    borderRightColor: Colors.mainBackground,
    borderLeftWidth: 20,
    borderLeftColor: Colors.mainBackground,
  },

TempleBackgroundColor:{
  backgroundColor: '#99182e',
},
DrexelBackgroundColor: {
  backgroundColor: '#11294f',

},
});

export default styles;
