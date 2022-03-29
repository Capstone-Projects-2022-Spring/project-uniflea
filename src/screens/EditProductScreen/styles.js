import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    title: {
        fontSize: 18,
    },
    image: {
      flex: 2,
      height: 150,
      resizeMode: 'contain',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    ratingsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    star: {
      margin: 1,
    },

    textBox:{
      borderWidth:1,
      borderColor: 'black',
      height: 100,
      width: 300, 
    },

    image:{
      width:100, 
      height:100,
      borderWidth: 1
    },
  
    profileButton:{
      width:100, 
      height:100,
      borderWidth: 1,
      backgroundColor: "lightgray"
    },
  });

  export default styles;