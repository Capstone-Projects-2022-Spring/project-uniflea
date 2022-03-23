import { Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";

const ProductItem = ({ id, image, title, price }) => {
  const navigation = useNavigation();
  const onPress = () => {
    // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
    navigation.navigate("ProductScreen", { id: id });
  };

  const [displayName, setDisplayName] = useState(null);
 
  const seller = async () => {
    const myUser = await Auth.currentAuthenticatedUser();
    //i want the single user in the DB with the correct userSUB
    const userRecord = await DataStore.query(User, (s) =>
      s.userSub("eq", myUser.attributes.sub)
    );
    //setting all the data for the users
    const displayName = userRecord[0].displayName;
   
    setDisplayName(displayName);
  
  };

  
  useEffect(() => {
    seller();
  }, []);

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.rightContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
        </View>

        <View style={styles.userContainer}>
          <Text>
            <AntDesign name="user" size={18} color="black" />{" "}
            {displayName}
          </Text>
        </View>
        
        <View style={styles.timeContainer}>
        <Text style={styles.time}>NEW<FontAwesome name="exclamation" size={17} color="green" /></Text>
        </View>
        <View style={styles.priceContainer}>
          
            <Text style={styles.price}>
              <Ionicons name="ios-pricetags-outline" size={18} color="black" />{" "}
              ${price.toFixed(2)}
            </Text>
          </View>
        </View>
      
    </Pressable>
  );
};

export default ProductItem;
