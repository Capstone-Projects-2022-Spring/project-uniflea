import React from "react";
import SchoolImage from "../SchoolImage";
import AuthContext from "../../contexts/Authentication";
import { User } from "../../models";
import { useContext } from "react";
import {Image, View} from "react-native";
import styles from "./styles";

const SchoolLogo =()=>{
    const { user, setUser } = useContext(AuthContext);

uniImg = () => {
  if(user.attributes['custom:University'] == 'Temple'){
  return  (<Image source={SchoolImage.TUImage}/> ) 
    }
    else{
      return ( <Image style={styles.imageSize} source={ SchoolImage.DRImage}/>)
 }
};
return(
   <View >{uniImg()}</View> 
);
};
export default SchoolLogo;