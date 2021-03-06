import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox:{
        flex:.5,
        borderWidth:1,
        borderColor: 'black',
        height: 100,
        width: 300,      
    },
    space:{
        width:20,
        height:20
    },
    dropdown:{
        margin: 16,
        width:200,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
});

export default styles;