import { scale, ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const styles = ScaledSheet.create({

imageSize:{
height:50, 
width:50, 
},
imageContainer:{
    height:20, 
    width:20, 
    },

});
export default styles;