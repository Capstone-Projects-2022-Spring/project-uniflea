
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Product } from "../../models";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const ActiveProductItem = ({ id, image, title, price, items, setItems }) => {
  const navigation = useNavigation();
  const onPress = () => {
    // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
    navigation.navigate("ProductScreen", { id: id });
  };

  const deleteItemById = async (id) => {
    const todelete = await DataStore.query(Product, id);
    console.log("Item to delete =", todelete);
    if (todelete.length === 0) {
      console.warn("couldn't find item to delete");
      return;
    }
    await DataStore.delete(todelete);
    const filteredData = items.filter((item) => item.id !== id);
    setItems(filteredData);
  };

  return (
    // Need to change navigation for profile page
<View style={styles.root}>


   
      
        <View style={styles.imageContainer}>
           <Pressable onPress={onPress} >  
          <Image style={styles.image} source={{ uri: image }} />
         </Pressable>
        </View>
       

        <View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {title}
            </Text>
          </View>

          <View style={styles.actionContainer}>

          {/*price and price icon*/}
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              <Ionicons name="ios-pricetags-outline" size={18} color="black" />{" "}
              ${price.toFixed(2)}
            </Text>
          </View>

          <View style={styles.eyeContainer}> 
              <Text style={styles.eye}><MaterialIcons name="visibility" size={24} color="black" /></Text>
              <Text style={styles.eyeText}>30</Text>             
          </View>

          <View style={styles.editContainer}>
              <Text><AntDesign name="edit" size={24} color="black" />Edit Listing</Text>

          </View>
          
        
        <View style={styles.trashContainer}>
          <TouchableOpacity style={styles.trash} onPress={() => deleteItemById(id)}>
            <FontAwesome name="trash-o" size={24} color="#bf1b36" />
          </TouchableOpacity>
        </View>
        </View>
      </View>
      </View>
  );
};
export default ActiveProductItem;
