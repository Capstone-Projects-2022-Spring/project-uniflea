import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    rightContainer: {
      padding: 10,
      width: '100%',
      flex: 3,
      alignItems:'flex-start'
    },
    row: {
      flexDirection: 'row',
    },
    root: {
      
      borderColor: '#d1d1d1',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#fff',
      marginVertical: 5,
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