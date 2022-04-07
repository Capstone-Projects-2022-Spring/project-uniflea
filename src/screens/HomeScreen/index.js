import { Auth } from "aws-amplify";
import { Text, View, FlatList, Modal, Picker, Alert, TextComponent } from "react-native";
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
  const [sortedProducts, setSortedProducts] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  console.log(searchValue);
  

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen);
  };
  const [selectedValue, setSelectedValue] = useState("None");


  const resetDatastore = async () => {
    try {
      await DataStore.stop();
      await DataStore.start();
      console.warn("successfully stopped, started");
      const products = await DataStore.query(Product);

   
    } catch (e) {
      Alert.alert("oops", e.message);
    }
  };

  

  const fetchProducts = () => {
    // if (categories.length == 1)
    
    if(categories.length >= 1) {

      DataStore.query((Product), (product) => product.or(product => product
        .category("eq", categories[0])
        .category("eq", categories[1])
        .category("eq", categories[2])
        .category("eq", categories[3])
        .category("eq", categories[4])
        .category("eq", categories[5])
        .category("eq", categories[6])))
        .then(setSortedProducts);
    } else {
      console.log("Categories is null");
      DataStore.query(Product).then(setProducts);
      //console.log("products ============== ", products);
      DataStore.query(Product).then(setSortedProducts);
    }
  }


  useEffect(() => {
    console.log("Running useEffect");
    
    if (categories.length >= 1) {

      console.log("notCategories before querying: " + notCategories);

      removeCategory(categories[0]);
      removeCategory(categories[1]);

      console.log("notCategories after splicing: " + notCategories[0] + notCategories[1]);
      // DataStore.query(Product, (product) => product.or(product => product.category("ne", notCategories[0])).category("ne" + notCategories[1])).then(setSortedProducts);
      // console.log(sortedProducts);
      DataStore.query((Product), (product) => product.or(product => product
      .category("eq", categories[0])
      .category("eq", categories[1])
      .category("eq", categories[2])
      .category("eq", categories[3])
      .category("eq", categories[4])
      .category("eq", categories[5])
      .category("eq", categories[6])))
      .then(setSortedProducts);
    
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
    {label: 'Books', value: 'Books'},
    {label: 'Supplies & Equipment', value: 'Supplies & Equipment'},
    {label: 'Electronics', value: 'Electronics'},
    {label: 'Clothes', value: 'Clothes'},
    {label:  'Food & Nutrition', value: 'Food & Nutrition'},
    {label: 'Handmade', value: 'Handmade'},
    {label: 'Service', value: 'Service'},
    {label: 'Other', value: 'Other'}
  ]);
  var [categories, setCategories] = useState([]);
  var [notCategories, setNotCategories] = useState(["art", "protein", "test", "textbook"]);
  

  const applyCategories = (value) => {
    categories=value;
    console.log("Categories in applyCategories: " + categories);
    
    
    if (categories.length >= 1) {
      DataStore.query((Product), (product) => product.or(product => product
        .category("eq", categories[0])
        .category("eq", categories[1])
        .category("eq", categories[2])
        .category("eq", categories[3])
        .category("eq", categories[4])
        .category("eq", categories[5])
        .category("eq", categories[6])))
        .then(setSortedProducts);
      // setSortedProducts(categorizedProducts);
      // DataStore.query(Product, (product) => product.or(product => product.category("ne", notCategories[0])).category("ne" + notCategories[1])).then(setSortedProducts);
      // console.log(sortedProducts);


    } else {
      console.log("Categories is null");
      DataStore.query(Product).then(setProducts);
      //console.log("products ============== ", products);
      DataStore.query(Product).then(setSortedProducts);
    }
  }



  const filterSort = (sortedProducts, itemValue) => {
    setSelectedValue(itemValue);
    console.log("Changed sort setting to " + itemValue);
    console.log("Categories in filterSort: " + categories)

    switch (itemValue) {
      case "none":
        console.log("No sort required");
        //No need to sort
        setSortedProducts(products);
        applyCategories(categories);
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





  useEffect(() => {
    // wait 2 seconds after user finishes typing to query results
    const delayDebounceFn = setTimeout(() => {
      console.log(searchValue)
      // Send Axios request here
      DataStore.query(Product, (product) => product.title("contains", searchValue)).then(setProducts);
      DataStore.query(Product, (product) => product.title("contains", searchValue)).then(setSortedProducts);
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchValue])

  useEffect(() => {

    // resetDatastore();
    
  }, []);
  useEffect(() => {
    fetchProducts();
    const subscription = DataStore.observe(Product).subscribe(() => {
      fetchProducts()
    });
    // close subscription to prevent memory leaks
    return () => subscription.unsubscribe();
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
            max={7}
            onChangeValue={(value) => {
              setCategories(value);
              applyCategories(value);
              filterSort(sortedProducts, 'none');
              console.log("value: " + value);
              console.log("Categories after setting in dropdown: " + categories);
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

    </View>
  );
};

export default HomeScreen;
