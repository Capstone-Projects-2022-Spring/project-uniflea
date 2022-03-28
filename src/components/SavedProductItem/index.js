import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SavedProduct } from "../../models";
import { DataStore } from "aws-amplify";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const SavedProductItem = ({ id, image, title, price, displayName }) => {
  const navigation = useNavigation();
  const onPress = () => {
    // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
    navigation.navigate("ProductScreen", { id: id });
  };

  const deleteItemById = async (id) => {
    const todelete = await DataStore.query(SavedProduct, id);
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
    // need to send product id, not savedProduct id
    <Pressable onPress={onPress} style={styles.root}>
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

        {/*price and price icon*/}
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            <Ionicons name="ios-pricetags-outline" size={18} color="black" /> $
            {price.toFixed(2)}
          </Text>
        </View>
      </View>

      <View style={styles.deletePressContainer}>
        <TouchableOpacity
          style={styles.deletePress}
          onPress={() => deleteItemById(id)}
        >
          <MaterialCommunityIcons
            name="book-remove-multiple"
            size={28}
            color="#bf1b36"
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default SavedProductItem;
