import { readDirectoryAsync } from "expo-file-system";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },
  pageContainerIcon: {
    padding: 10,
  },
  icon: {
    paddingRight:28,

  },
  iconStyle: {
    flexDirection: 'row',
    padding:1,

    justifyContent:'space-around',
    alignItems:'center',
  },

  inputStyle: {
    flex: 1,
    padding:20,

  },
  settingsText: {
    fontSize: 24,
    marginBottom: 10,
    color: '#403d3d',
    fontFamily: 'Arial',
 
  },
  containerText: {
    fontSize: 14,
    height:50,
    width: '100%',
    paddingTop:18,
    paddingLeft:10,
    color: 'gray',
    fontFamily: 'Arial', 
    borderBottomWidth:1,
    borderColor:'gray',
  },
  inputContainer: {
    justifyContent:'flex-end',
    alignItems:'center',
  }, 
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
},

});
export default styles;