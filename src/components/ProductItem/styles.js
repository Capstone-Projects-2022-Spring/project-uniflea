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
    width: 291,
    height: 97,
    left: 97,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
  },

  userContainer: {
    paddingTop: 2,
  },
  priceContainer: {
    bottom: 5,
    flex: 1,
    position: "absolute",
  },
  dateContainer: {
    bottom: 5,
    flex: 1,
    right: 10,
    position: "absolute",
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
  date: {
    fontSize: 15,
    fontWeight: "bold",
    color: "green",
  },

  price: {
    fontSize: 18,
  },
});

export default styles;
