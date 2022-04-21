import { scale, ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",

  
  
  },
  space: {
    width: 20,
    height: 20,
  },
  titleContainer: {
 
    padding:scale(5),
    alignItems:'center',
  
},
    title: {
        fontSize: scale(18),
        fontWeight:'bold'
    },
    imageContainer:{
      marginTop:scale(3),
      padding:scale(5),
      alignItems: 'center',
      width:scale(225),
      height:scale(225),
      borderColor:'lightgray',
      borderWidth:.3,
      alignSelf:'center',
      alignContent:'center',
    
    },
    imageButton:{
      width:scale(225),
      height:scale(225),
      backgroundColor:'transparent'
    },
    image: {
      width:scale(225),
      height:scale(225),
      resizeMode: 'contain',
    }, 
    price: {
  
      color:'black'
    },
    text:{
  textAlign:'center',
  color:'gray'
    },

    textBox:{
      top:scale(6),
      borderWidth:.3,
      borderColor: 'gray',
      height: '5%',
      width: '80%', 
      alignSelf:'center',
    },
    priceTextBox:{
      top:scale(6),
      borderWidth:.3,
      borderColor: 'gray',
      height: '5%',
      width: '30%', 
      alignSelf:'center',
    },
    DescriptionTextBox:{
      // flexDirection: 'row',
      top:scale(6),
      borderWidth:.3,
      borderColor: 'gray',
      height: '15%',
      width: '80%', 
      alignSelf:'center',
      justifyContent:'center'
     },
     buttonContainer:{
      top:'2%',
      alignSelf:'center',

    },
    
  });

  export default styles;