import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    borderColor: "#d1d1d1",
    borderWidth: 1.5,
    backgroundColor: "#fff",
    marginVertical: 0.5,
    width: "100%",
    height: 100,
  },
  rightContainer: {
    width: "100%",
    height: 97,
    left: 97,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  titleContainer: {
    width: "75%",
    flexDirection: "row",
  },

  userContainer: {
    paddingTop: 2,
  },
  imageContainer: {
    padding: 3,
    flexDirection: "row",
    position: "absolute",
  },
  image: {
    borderRadius: 3,
    width: 90,
    height: 90,
    resizeMode: "cover",
    alignItems: "center",
  },
  priceContainer: {
    bottom: 5,
    flex: 1,
    position: "absolute",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deletePress: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
  },
  deletePressContainer: {
    bottom: 5,
    paddingRight: 5,
    right: "2%",
    width: "25%",
    position: "absolute",
    alignItems: "flex-end",
  },
});

export default styles;
