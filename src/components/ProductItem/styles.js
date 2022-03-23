import { StyleSheet } from "react-native";
import Position from "react-native/Libraries/Components/Touchable/Position";
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderColor: "#d1d1d1",
    borderWidth: 1.5,
    backgroundColor: "#fff",
    marginVertical: 0.5,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  rightContainer: {
    padding: 10,
    width: "100%",
    flex: 3,
    alignItems: "flex-start",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  titleContainer: {

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  userContainer: {
    paddingTop:6,

  },
  priceContainer: {
    top: 125,
    right: 160,
    position: "absolute",
  },
  timeContainer: {
    top: 125,
    left: 180,
    position: "absolute",
  },
  image: {
    borderRadius: 3,
    right: 2.5,
    borderColor: "gray",
    flex: 2,
    height: 150,
    resizeMode: "cover",
  },
  time:{
    fontSize: 18,
    fontWeight:'bold',
    color:'green'
  },

  price: {
    fontSize: 18,
  },
});

export default styles;
