import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingTop:60,
        paddingBottom:90,
        
    },
    pageContainer: {
        padding: 20,
        paddingBottom: "25%",
      
      },
      space: {
        width: 20,
        height: 20,
      },
      iconContainer:{
        marginVertical: 10,
        alignItems: "center",

      },
    buttonContainer: {
        marginVertical: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordInfo: {
        color: 'red',
    },
    resetHeader: {
        fontSize: 28,
        marginBottom: 30,
        color: '#474747',
        fontFamily: 'Arial',
        textAlign:'center', 

    },
    resetText: {
        fontSize: 12,
        marginBottom: 10,
        color: '#474747',
        fontFamily: 'Arial', 
         
    },

});

export default styles;