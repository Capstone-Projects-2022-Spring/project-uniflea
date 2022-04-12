import { scale, ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = ScaledSheet.create({
  root: {
    flex: 1,
  },
  space: {
    width: 20,
    height: 20,
  },

  topBannerContainer: {
    width: "100%",
    height: "30%",
    bottom:'2%',
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
    height:scale(20),
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'green',
  },
  reportText: {
    left: scale(15),
    fontSize: "14@s",
    color: "white",
    paddingLeft:15,
  },
  reportIconContainer: {
    position: "absolute",
    width: scale(20),
    height:scale(20),
    top: "-4%",
    left: "1%",
    bottom: "1%",
    justifyContent: "center",
    // backgroundColor:'pink', 
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
    bottom: "4.5%",
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
    width: scale(115),
    height: scale(115),
    borderRadius: scale(115 / 2),
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

//start of user bio
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "37%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 350,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    max:{
      fontSize:'10@s', 
      color:'#D8D8D8'
    },



});

export default styles;
