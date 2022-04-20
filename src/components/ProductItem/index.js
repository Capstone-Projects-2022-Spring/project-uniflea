import { Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { S3Image } from "aws-amplify-react-native/dist/Storage";


const ProductItem = ({ id, image, title, price, displayName, createdAt }) => {
  const navigation = useNavigation();
  const onPress = () => {
    // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
    navigation.navigate("ProductDetails", {id: id, title: title, price: price});
  };
  const compareDate = () => {
    
    /* This is getting the current date and setting it to a string*/
    
    const currentDate = new Date();
    const currentDayOfMonth = ("0" + currentDate.getDate()).slice(-2);
    const currentMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const currentYear = currentDate.getFullYear();
    // will look like "2022-03-23"
    const dateString =
      currentYear + "-" + currentMonth + "-" + currentDayOfMonth;
    const newDateString = dateString.toString();
   

    //getting the item timestamp and splting the sting just to get the date
    try{
      
      const ampString = createdAt;
      const dateAmp = ampString.split("T", 1);
      
      const newDateAmp = dateAmp.toString();
  
      if (newDateAmp === newDateString) {
        return (
          <Text style={styles.time}>
            NEW
            <FontAwesome name="exclamation" size={17} color="green" />
          </Text>
        );
      } else {
        return;
      }
    }
    catch (e){
      console.log(e.msg)
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      {/* Is the image onpress -- directs to product screen*/}
      <View style={styles.imageContainer}>
        <S3Image style={styles.image} imgKey={ image } />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>

        {/* displayName and user icon*/}
        <View style={styles.userContainer}>
          <Text>
            <AntDesign name="user" size={18} color="black" /> {displayName}
          </Text>
        </View>

        {/* New alert*/}
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{compareDate()}</Text>
        </View>

        {/*price and price icon*/}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            <Ionicons name="ios-pricetags-outline" size={18} color="black" /> $
            {price.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;
