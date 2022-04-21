import { Text, View, TouchableOpacity, TextInput, SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState, useEffect } from 'react';
import { DataStore, Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { S3Image } from "aws-amplify-react-native/dist/Storage";
import { Product } from "../../models";
import CustomButton from "../../components/CustomButton";

const EditProductScreen = ({ route, navigation }) => {

    const { id, title, price, description } = route.params;
    console.log("edit screen: " + id)
    console.log("edit screen: " + title)
    console.log("edit screen: " + price)
    console.log("edit screen: " + description)

    const [image, setImage] = useState(null);

    const downloadImage = async () => {

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

    const saveChanges = async () => {
        const product = await DataStore.query(Product, s => s.id("eq", id));
        await DataStore.save(
            Product.copyOf(product[0], updated => {
                updated.title = title
                updated.price = parseFloat(price)
                updated.description = description
            })
        )
        console.log("++++ changes saved ++++");
        navigation.goBack(null);
    };

    useEffect(() => { downloadImage() }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibile={false}>
            <SafeAreaView style={styles.container}>

                {/**screens title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Edit Your Product</Text>
                </View>

                {/* Item image */}

                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
                        <S3Image style={styles.image} imgKey={image} />
                    </TouchableOpacity>
                </View>

                {/* title */}
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.text}
                        placeholder={title}
                        defaultValue={title}
                        onChangeText={newTitle => navigation.setParams({
                            title: newTitle
                        })}
                    />
                </View>
                {/*Price */}
                <View style={styles.space} />
                <View style={styles.priceTextBox}>
                    <TextInput
                        style={styles.text}

                        placeholder={'$' + JSON.stringify(price)}
                        defaultValue={price}
                        onChangeText={newPrice => navigation.setParams({
                            price: newPrice
                        })}
                    />
                </View>
                {/* Description */}
                <View style={styles.space} />
                <View style={styles.DescriptionTextBox}>

                    <TextInput
                        textAlign='center'
                        color='gray'
                        placeholder={description}
                        defaultValue={description}
                        onChangeText={newDescription => navigation.setParams({
                            description: newDescription
                        })}
                        multiline={true}
                    />

                </View>
                <View style={styles.space} />
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={saveChanges} text={"Save Changes"} />
                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default EditProductScreen