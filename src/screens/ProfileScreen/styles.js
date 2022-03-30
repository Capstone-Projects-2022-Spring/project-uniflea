import { StyleSheet } from "react-native";
import { Gallery } from "stream-chat-expo";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    color: "#4c669f",
  },
  shape: {
    position: "absolute",
    width: 600,
    height: 600,
    right: "-23%",
    bottom: "55%",
    borderRadius: 600 / 2,
    backgroundColor: "#99182e",
    // opacity:.8,
  },

  space: {
    width: 20,
    height: 20,
  },

  topBannerContainer: {
    flex: 1,
    width: "100%",
    height: "25%",
    position: "absolute",
  },
  lowerContainer: {
    flex: 1,
    width: "100%",
    top: "48%",
    bottom: 5,
    alignContent: "center",
    position: "absolute",

    //  backgroundColor: 'transparent',
  },

  topRightPosition: {
    top: 5,
    alignItems: "flex-end",
    width: "10%",
    padding: 5,
    position: "absolute",
    right: 1,
  },
  profilePicContainer: {
    width: "40%",
    paddingLeft: 12,
    top: "18%",
  },
  profileButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderWidth: 6,
    borderRadius: 150 / 2,
    borderColor: "white",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: 143,
    height: 143,
    borderRadius: 143 / 2,
  },
  userNameContainer: {
    alignContent: "flex-end",
    bottom: "60%",
    width: "57%",
    left: "41%",
  },
  userName: {
    alignContent: "flex-end",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  nameContainer: {
    paddingTop: 2,
    bottom: "60%",
    width: "57%",
    left: "41%",
  },
  name: {
    fontSize: 16,
    color: "white",
  },
  ratingContainer: {
    paddingTop: 2,
    bottom: "60%",
    width: "57%",
    left: "41%",
  },
  bioContainer: {
    position: "absolute",
    width: "80%",
    top: "28%",
    left: "10%",
    height: "10%",
    alignContent: "center",
    padding: 5,
    borderRadius: 15,
  },
  bioText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signOutContainer: {
    flex: 1,
    bottom: 5,
    position: "absolute",
    width: "100%",
    height: 20,
  },
  signOutText: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
  reportContainer: {
    justifyContent: "center",

    bottom: "70%",
    width: "57%",
    left: "41%",
    height: "15%",
  },
  reportOther: {
    left: "8%",
    top: "35%",
  },
  report: {
    fontSize: 14,
    color: "white",
  },
  reportIcon: {
    bottom: "30%",
    width: "10%",
  },

  square: {
    borderColor: "#99182e",
    borderWidth: 6.5,
    width: 140,
    height: 140,
    borderRadius: 3,

    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 18,
    color: "#99182e",
    fontWeight: "bold",
  },
});

export default styles;
