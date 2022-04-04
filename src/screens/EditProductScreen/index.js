import { Text, View, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import React, {useState, useEffect} from 'react';
import { DataStore, Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { S3Image } from "aws-amplify-react-native/dist/Storage";
import { Product } from "../../models";
import CustomButton from "../../components/CustomButton";

const EditProductScreen = ({route, navigation}) => {

    const{id, title, price, description} = route.params;
   
    console.log("edit screen: " + id)
    console.log("edit screen: " + title)
    console.log("edit screen: " + price)
    console.log("edit screen: " + description)

    const[image, setImage] = useState(null);
    
    const downloadImage = async()  => {
 
        const product = await DataStore.query(Product, s => s.id("eq", id));
       
        const image = product[0].image;
        setImage(image);
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
        //uploads to s3
        const response = await fetch(result.uri);
        const blob = await response.blob();
        const uploadedImage = await Storage.put(myuuid, blob);
        
        //upload to amplify

        const product = await DataStore.query(Product, s => s.id("eq", id));

        await DataStore.save(
            Product.copyOf(product[0], updated => {
                updated.image = uploadedImage.key
            })
        )

        setImage(uploadedImage.key);
    };

    const saveChanges = async() => {
        const product = await DataStore.query(Product, s => s.id("eq", id));
        await DataStore.save(
            Product.copyOf(product[0], updated => {
                updated.title = title
                updated.price = parseFloat(price)
                updated.description = description
            })
        )
        console.log("++++ changes saved ++++");
    };
    
    useEffect( () => {downloadImage()}, []);

    return (
        <SafeAreaView style={styles.container}>

            {/* Item image */}
            <TouchableOpacity onPress={pickImage} style={styles.profileButton}>
                <S3Image imgKey={image} style={styles.image} />
            </TouchableOpacity>

            {/* title */}
            <TextInput
                textAlignVertical='top'
                style={styles.textBox}
                placeholder={title}
                defaultValue = {title}
                onChangeText = { newTitle =>navigation.setParams({
                    title: newTitle
                })} 
            />

            {/*Price */}
            <TextInput
                styles={styles.textBox}
                placeholder={JSON.stringify(price)}
                defaultValue = {price}
                onChangeText={ newPrice =>navigation.setParams({
                    price: newPrice
                })}                      
            />

            {/* Description */}
            <TextInput
                textAlignVertical='top'
                style={styles.textBox}
                placeholder={description}
                value= {description}
                onChangeText={newDescription => navigation.setParams({
                    description: newDescription
                })}
                multiline={true}
            />

            <CustomButton onPress={saveChanges} text="Save Changes" />


        </SafeAreaView>
    )
}

export default EditProductScreen