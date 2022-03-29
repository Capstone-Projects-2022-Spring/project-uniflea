import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  root: {
    borderColor: "#d1d1d1",
    borderWidth: 1.5,
    backgroundColor: "#fff",
    marginVertical: 0.5,
    width: "100%",
    height: 303,
    alignItems:'center',
  },
  bottomContainer: {
    width: '100%',
    height: 100,
    top:207,
    alignItems:'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titleContainer: {
    padding:2,
    
    width: "100%",
    flexDirection: "row",
    justifyContent:'center'

  },
  actionContainer:{
    width: '100%',
    height: 35,
    position: "absolute",
    bottom:9,
    alignItems:'center',
    justifyContent:'center'
    
  },
  priceContainer: {
    bottom: 5,
    padding:5,
    left:'3%',
    alignItems:'flex-start',
    position: "absolute",
  
  },
  price: {
    fontSize: 18,
  },
 
  imageContainer: {
    padding: 5,
    flexDirection:'column',
    position: "absolute",

  },
  image: {
    borderRadius: 3,
    width: 200,
    height: 200,
    resizeMode: "cover",
    alignItems: "center",
  },
   trashContainer: {
    bottom: 5,
    padding:5,
    right:'3%',
    position: "absolute",
    alignItems:'flex-end',
    
  },
  trash: {
    fontSize: 15,
    fontWeight: "bold",
    
  },
  eyeContainer:{
    bottom: 5,
    padding:5,
    left:'40%',
    position: "absolute",
  },
  eye:{
    right:25,
    top:5,
  },
  eyeText:{
    fontSize:15,
    justifyContent:'center',
    marginTop: -14 ,
    marginStart: -1,
  },
  editContainer:{
    bottom: 5,
    padding:5,
    left:'55%',
    position: "absolute",
  },


});

  export default styles;