import { container } from 'aws-amplify';
import { scale, ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  root: {
    flex: 1,
    backgroundColor: "gray",
  },
  space: {
    width: 20,
    height: 20,
  },

  topBannerContainer: {
    width: "100%",
    height: '30%',
  },
  topBannerrRow: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
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
    fontSize: '14@s',
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
    justifyContent: "center",
    alignContent: "flex-start",
    flexWrap: "wrap",
    bottom: "3%",
  },
  userName: {
    fontSize: '24@s',
    fontWeight: "bold",
    color: "white",
  },
  name: {
    fontSize: '16@s',
    color: "white",
  },
  //******************************** */
   lowerContainer: {
    flex: 1,
    width: "100%",
    height:'100%',
    top: "41%",
    alignContent: "center",
    position: "absolute",
    // backgroundColor:'pink'

    //  backgroundColor: 'transparent',
  }, 
  
  bioContainer: {
    
    width: "80%",
    left: "10%",
    alignItems:'center',
    justifyContent:'center',
    padding: 5,
    borderRadius: 15,
    // backgroundColor: 'red',

  },
  bioText: {
    fontSize: "16@s",
    color: "white",
    textAlign: "center",
  
  },

  shape: {
    position: "absolute",
    width: "80%",
    bottom: "60%",
    left: "10%",
    height: "10%",
    alignContent: "center",
    padding: 5,
    borderRadius: 15,



    // width: scale(500),
    // height: scale(500),
    // // right: "50@s",
    // top: "-5@s",
    // borderRadius: scale(500 / 2),
    // backgroundColor: "#99182e",
    // // opacity:.8,
  },
  shape2: {
    position: "absolute",
    width: scale(700),
    height: scale(700),
    borderRadius: scale(700 / 2),
    // backgroundColor: "#D5D8DC",
    // opacity:.8,
    backgroundColor: "yellow",
  },

  circle: {
    borderColor: "#99182e",
    borderWidth: 6.5,
    width: scale(130),
    height: scale(130),
    borderRadius: scale(130 / 2),
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
    top:"10%",
    // backgroundColor:'red',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: '16@s',
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

  // modalView: {
  //   // margin: 20,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: "center",
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 2
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5
  // },
  // button: {
  //   position:'absolute',
  //   top:'100%',

  //   borderRadius: 5,
  //   padding: 10,
  //   elevation: 2,
  //   backgroundColor:'green'
  // },
  // buttonOpen: {
  //   backgroundColor: "pink",
  // },
  // buttonClose: {
  //   backgroundColor: "#2196F3",
  // },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center"
  // }
});




export default styles;

