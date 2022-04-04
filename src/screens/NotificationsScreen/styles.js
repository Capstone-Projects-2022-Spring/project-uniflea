import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
      padding: 15,
      backgroundColor: 'white',
      flexDirection: 'row',
  },
  HeaderLeftImage: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
  },
  HeaderLeftImageView: {
      width: 40,
      height: 40,
      borderRadius: 40/2,
      marginLeft: -15,
  }
});

export default styles;