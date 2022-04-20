import { scale, ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = ScaledSheet.create({

imageSize:{
height:45, 
width:45, 

},
imageContainer:{
    height:50, 
    width:50, 
    backgroundColor:'blue'
    },

});
export default styles;