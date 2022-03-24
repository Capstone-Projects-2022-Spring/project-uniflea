import { Auth } from "aws-amplify";
import { Text, View, FlatList, Modal, Picker, Alert } from "react-native";
import styles from "./styles";
import ProductItem from "../../components/ProductItem";
import React, { useEffect, useState, useContext } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Product } from "../../models";
import AuthContext from "../../contexts/Authentication";
import { useChatContext } from "stream-chat-expo";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ searchValue }) => {
  const { client } = useChatContext();
  const [products, setProducts] = useState([]);
  var [sortedProducts, setSortedProducts] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  console.log(searchValue);
  console.log("user id homescreen= ", user);
  const signOut = () => {
    setUser(undefined);
    client.disconnectUser();
    Auth.signOut();
  };

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const [selectedValue, setSelectedValue] = useState("None");

  const filterSort = (sortedProducts, itemValue) => {
    setSelectedValue(itemValue);
    console.log("Changed sort setting");
    console.log(itemValue);

    switch (itemValue) {
      case "none":
        console.log("No sort required");
        //No need to sort
        setSortedProducts(products);
        applyCategory(category);
        return;

      case "price":
        console.log("Sorted by price");
        //sort by price
        sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
        //console.log("Sorted products after sort:")
        //console.log(sortedProducts);
        return;

      case 'dateNewest':
        console.log("Sorted by Date: Newest");
        //sort by price
        sortedProducts.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
        return;
        
      case 'dateOldest':
        console.log("Sorted by Date: Oldest");
        //sort by price
        sortedProducts.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
        return;  

      default:
        console.log("Default switch case, not sorting.");
        return;
    }
  };

  var [category, setCategory] = useState(null);
  const [categoryText, setCategoryText] = useState(
    "CURRENT SELECTED CATEGORY: NONE"
  );
  const applyCategory = (category) => {
    setCategory(category);
    if (category !== null){
      setCategoryText("CURRENT SELECTED CATEGORY: " + category);
      DataStore.query(Product, c => c.category("contains", category)).then(setSortedProducts);
    } else {
      setCategoryText("CURRENT SELECTED CATEGORY: NONE");
      DataStore.query(Product).then(setSortedProducts);
    }
  };
  const resetDatastore = async () => {
    try {
      await DataStore.stop();
      await DataStore.start();
      console.warn("successfully stopped, started");
      const products = await DataStore.query(Product);

      console.log("Products in useffect ========= ", products);
    } catch (e) {
      Alert.alert("oops", e.message);
    }
  };
  useEffect(() => {
    resetDatastore();
    // query the products in the product list on rendering the page

    if (category !== null) {
      DataStore.query(Product).then(setProducts);
      DataStore.query(Product, (c) => c.category("contains", category)).then(
        setSortedProducts
      );
    } else {
      DataStore.query(Product).then(setProducts);
      console.log("products ============== ", products);
      DataStore.query(Product).then(setSortedProducts);
    }
  }, []);
  return (
    
    <View style={styles.page}>
      {/*Modal used to display filter tab*/}
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <View style={{ alignItems: "flex-end", height: 40 }}>
            <Feather
              name="check"
              size={40}
              color="gray"
              onPress={toggleModalOpen}
            />
          </View>

          <View style={{ alignItems: "flex-start" }}>
            <Picker
              style={{ width: "100%", borderTopWidth: 0 }}
              itemStyle={{ fontSize: 20 }}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                filterSort(sortedProducts, itemValue)
              }
            >
              <Picker.Item label ="None" value="none"/>
              <Picker.Item label ="Price" value="price"/>
              <Picker.Item label ="Date: Newest" value="dateNewest"/>
              <Picker.Item label ="Date: Oldest" value="dateOldest"/>

          </Picker>
          </View>

          <View style={{ width: "100%", height: 15 }}>
            <Text
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
              }}
            >
              {categoryText}
            </Text>

            <Text
              onPress={() => applyCategory("a")}
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
              }}
            >
              Filter by Category A
            </Text>

            <Text
              onPress={() => applyCategory("b")}
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
              }}
            >
              Filter by Category B
            </Text>

            <Text
              onPress={() => applyCategory("c")}
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
              }}
            >
              Filter by Category C
            </Text>

            <Text
              onPress={() => applyCategory(null)}
              style={{
                width: "100%",
                height: 30,
                textAlign: "center",
              }}
            >
              Clear Category
            </Text>
          </View>
        </View>
      </Modal>

      {/*Filter Button*/}
      <View style={{ alignItems: "flex-end" }}>
        <AntDesign
          name="filter"
          size={28}
          color="gray"
          onPress={toggleModalOpen}
        />
      </View>

      <FlatList
        data={sortedProducts}
        renderItem={({ item }) => (
          <ProductItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
            displayName={item.displayName}
            createdAt={item.createdAt}
          />
        )}
        keyExtractor={(product) => product.id}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ marginBottom: "auto", width: "100%", height: 15 }}>
        <Text
          onPress={signOut}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        >
          Sign Out
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
