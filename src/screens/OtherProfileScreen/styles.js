import { scale, ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
  root: {
    flex: 1,
  },
  space: {
    width: scale(20),
    height: scale(20),
  },

  topBannerContainer: {
    width: "100%",
    height: "30%",
    backgroundColor: "transparent",
  },
  topBannerrRow: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  },
  profilePicContainer: {
    width: "45%",
    justifyContent: "center",
    padding: 5,
  },
  profileButton: {
    width: scale(120),
    height: scale(120),
    borderWidth: 5,
    borderRadius: scale(120 / 2),
    borderColor: "white",
    left: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: scale(112),
    height: scale(112),
    borderRadius: scale(112 / 2),
  },
  rightInfoContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-start",
    backgroundColor: "transparent",
  },
  SettingsPosition: {
    position: "absolute",
    right: "1%",
    top: "1%",
    padding: 4,
    justifyContent: "center",
  },
  reportContainer: {
    width: scale(100),
    flexDirection: "row",
    alignItems: "center",
  },
  reportText: {
    left: scale(15),
    fontSize: "14@s",
    color: "white",
  },
  reportIconContainer: {
    position: "absolute",
    width: scale(14),
    top: "1%",
    left: "1%",
    bottom: "1%",
    justifyContent: "center",
  },
  userInfoContainer: {
    paddingTop: 5,
    justifyContent: "center",
    alignContent: "flex-start",
    flexWrap: "wrap",
    bottom: "3%",
  },
  userName: {
    fontSize: "24@s",
    fontWeight: "bold",
    color: "white",
  },
  name: {
    fontSize: "16@s",
    color: "white",
  },
  //******************************** */
  lowerContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    top: "41%",
    alignContent: "center",
    position: "absolute",
  },
  bioContainer: {
    bottom: "3%",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 1,
  },
  bioText: {
    fontSize: "14@s",
    color: "white",
    textAlign: "center",
  },
  shape: {
    position: "absolute",
    width: "80%",
    bottom: "57%",
    height: "10%",
    alignSelf: "center",
    flexDirection: "column",
    width: scale(500),
    height: scale(500),
    borderRadius: scale(500 / 2),
    backgroundColor: "#99182e",
  },
  circle: {

    borderColor: "#99182e",
    borderWidth: 5.5,
    width: scale(115*2),
    height: scale(80),
    borderRadius: scale(8),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 4,
  },
  row: {
    top: "6%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: "14@s",
    color: "#99182e",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(22),
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signOutContainer: {
    flex: 1,
    bottom: "1.5%",
    position: "absolute",
    width: "100%",
    height: "5%",
  },
  signOutText: {
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "14@s",
  },
});

export default styles;
