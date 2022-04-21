import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { scale, ScaledSheet } from "react-native-size-matters"; 

const styles = ScaledSheet.create({
  page: {
    // flexDirection: "column",
    flex: 1,
    width: '100%',
    // backgroundColor: Colors.mainBackground,
  },



  modalContainer: {
    position: "absolute",
    height: "65%",
    width: "75%",
    alignContent: "center",
    left: "13%",
    top: "20%",
    backgroundColor: "white",
    borderRadius: 8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopColor: "black"
  },

  sortStyle: {
    width: "80%", 
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 20
  },

  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
},

TempleBackgroundColor:{
  backgroundColor: '#99182e',
},
DrexelBackgroundColor: {
  backgroundColor: '#11294f',

},
});

export default styles;
