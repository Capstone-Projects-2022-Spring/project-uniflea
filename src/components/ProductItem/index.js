import { Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
// import moment from "moment";

const ProductItem = ({ id, image, title, price, displayName, createdAt }) => {
  const navigation = useNavigation();
  const onPress = () => {
    // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
    navigation.navigate("ProductScreen", { id: id });
  };
  {
    /* This is getting the current date and setting it to a string*/
  }
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  // will look like "23-03-2022"
  let dateString = currentDayOfMonth + "-" + currentMonth + "-" + currentYear;

  //getting the item timestamp and splting the sting just to get the date
  const ampString = createdAt;
  let dateAmp = ampString.split("T", 1);

  const compareDate = (dateAmp, dateString) => {
    
    if (dateString === dateAmp) {
      return (
        <Text style={styles.time}>
          NEW
          <FontAwesome name="exclamation" size={17} color="green" />
        </Text>
      );
      console.log(
        "current date = dateAmp **********"
      );
    } else {
      return <Text style={styles.time}></Text>;
      console.log(
        "current date != itedateAmpmdate**********"
      );
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      {/* Is the image onpress -- directs to product screen*/}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
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
