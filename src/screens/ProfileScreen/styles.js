import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  space: {
    width: 20,
    height: 20,
  },
 topBannerContainer:{
  flex: 1,
   width:"100%",
   height:'20%',
   position: "absolute",
  


 },
 lowerContainer:{
  flex: 1,
   width:'100%',
   top:'40%',
   bottom:5,
  
   position:'absolute',
 },

  topRightPosition: {
    top: 5,
    alignItems:'flex-end',
    width:'10%',
    padding:5,
    position: "absolute",
  
    right:1,
  },
profilePicContainer:{
  backgroundColor:'green',
  width:'27%',
  paddingLeft:3,
  top:5,
},
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height: 100,
    borderWidth: 3,
    borderRadius: 100/ 2,
   
  },
  image: {
    justifyContent:'center',
    alignItems: 'center',
    width:99,
    height: 99,
    borderRadius: 99/ 2,
  },
  userNameContainer:{
    top:-95,
    width:'64%',
    left: '29%',
  },
  userName:{
    fontSize: 30,
  },
  nameContainer:{
    paddingTop:3,
    top:-95,
    width:'64%',
    left: '29%',
  },
  name:{
    fontSize:20 ,
  },

  ratingContainer:{
    paddingTop:3,
    top:-95,
    width:'64%',
    left: '29%',
  },
  bioContainer:{
    position: "absolute",
    width:'100%',
    top:"20%",
    height:'20%',
    borderColor:'gray',
    padding:5,
    backgroundColor:'#F4F4F4',
    borderRadius:20
  },
  bioText:{
    fontSize:24
  },

  buttonContainer:{
    justifyContent: "center",
  }, 
  signOutContainer:{
    flex: 1,
    bottom:5,
    position: "absolute",
    width: "100%",
    height: 20,
  },
  signOutText:{
    width: "100%",
    textAlign: "center",
    fontWeight:'bold'
  },


});

export default styles;
