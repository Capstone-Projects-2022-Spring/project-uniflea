import { scale, ScaledSheet } from "react-native-size-matters"; 

const styles = ScaledSheet.create({

  root: {
    borderColor: "#d1d1d1",
    borderWidth: 1.5,
    backgroundColor: "#fff",
    marginVertical: 0.5,
    width: "100%",
    height: scale(280),
    alignItems:'center',
  },
  bottomContainer: {
    width: '100%',
    height: scale(75),
    top:scale(207),
    alignItems:'center',
  },
  title: {
    fontSize: '18@s',
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
    height: scale(35),
    position: "absolute",
    bottom:scale(9),
    alignItems:'center',
    justifyContent:'center',
 
    
  },
  priceContainer: {
    bottom: scale(5),
    padding:scale(5),
    left:'3%',
    alignItems:'flex-start',
    position: "absolute",
  
  },
  price: {
    fontSize: '16@s',
  },
 
  imageContainer: {
    padding: 5,
    flexDirection:'column',
    position: "absolute",

  },
  image: {
    borderRadius: 3,
    width: scale(200),
    height:scale( 200),
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
    fontSize: '15@s',
    fontWeight: "bold",
    
  },
  eyeContainer:{
    bottom:scale( 5),
    padding:5,
    left:'40%',
    position: "absolute",
  },
  eye:{
    right:scale(25),
    top:scale(5),
  },
  eyeText:{
    fontSize:'15@s',
    justifyContent:'center',
    marginTop: scale(-14) ,
    marginStart: scale(-1),
  },
  editContainer:{
    bottom:scale(5),
    padding:5,
    left:'55%',
    position: "absolute",
  },


});

  export default styles;