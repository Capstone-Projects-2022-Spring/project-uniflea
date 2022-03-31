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
import DropDownPicker from "react-native-dropdown-picker";
import { ConsoleLogger } from "@aws-amplify/core";

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
        return;

      case "priceLow":
        console.log("Sorted by price: low to high");
        //sort by price
        sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
        return;

      
      case "priceHigh":
        console.log("Sorted by price: high to low");
        //sort by price
        sortedProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
        return;  

      case 'dateNewest':
        console.log("Sorted by Date: Newest");
        sortedProducts.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
        return;
        
      case 'dateOldest':
        console.log("Sorted by Date: Oldest");
        sortedProducts.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1);
        return;  

      default:
        console.log("Default switch case, not sorting.");
        return;
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
    console.log("Running useEffect");
    resetDatastore();
    if(categories.length>0){
      console.log("Categories is NOT null");
      console.log("Categories: " + categories);
      DataStore.query(Product).then(setProducts);
      // setSortedProducts of categories
      DataStore.query(Product, c => c.category("contains", categories)).then(setSortedProducts);
    } else {
      console.log("Categories is null");
      DataStore.query(Product).then(setProducts);
      //console.log("products ============== ", products);
      DataStore.query(Product).then(setSortedProducts);
    }

  }, [categories]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Books', value: 'book'},
    {label: 'Equipment', value: 'equipment'}
  ]);
  var [categories, setCategories] = useState([])
  const applyCategories = (value) => {
    console.log("value in applyCategories: " + value);
    categories=value;
    console.log("Categories in applyCategories: " + categories);

    resetDatastore();
    if(categories.length>0){
      console.log("Categories is NOT null");
      console.log("Categories: " + categories);
      DataStore.query(Product).then(setProducts);
      // setSortedProducts of categories
      DataStore.query(Product, c => c.category("IN", category)).then(setSortedProducts);
    } else {
      console.log("Categories is null");
      DataStore.query(Product).then(setProducts);
      //console.log("products ============== ", products);
      DataStore.query(Product).then(setSortedProducts);
    }
  }



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
              <Picker.Item label ="Price: Low to High" value="priceLow"/>
              <Picker.Item label ="Price: High to Low" value="priceHigh"/>
              <Picker.Item label ="Date: Newest" value="dateNewest"/>
              <Picker.Item label ="Date: Oldest" value="dateOldest"/>

          </Picker>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            multiple={true}
            min={0}
            max={5}
            onChangeValue={(value) => {
              // categories = value;
              var [temp] = value;
              console.log("temp: " + temp);
              applyCategories(value);
              console.log("value: " + value);
              console.log("Categories: " + categories);
            }}
          />


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
