
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SavedProduct } from '../../models';
import { DataStore } from 'aws-amplify';

const SavedProductItem = ({ id, image, title, price, productId, items, setItems }) => {
    const navigation = useNavigation();

    const deleteItemById = async(id) => {
        const todelete = await DataStore.query(SavedProduct, id);
        console.log("Item to delete =", todelete);
        if(todelete.length===0){
            console.warn("couldn't find item to delete");
            return
        }
        await DataStore.delete(todelete);
        const filteredData = items.filter(item => item.id !== id);
        setItems(filteredData)
    };

    return (
        // need to send product id, not savedProduct id
        <Pressable onPress={() => navigation.navigate("ProductScreen", { id: productId })}>
            <View style={styles.root}>
                <View style={styles.row}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={3}>{title}</Text>

                        <Text style={styles.price}>${price}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Pressable onPress={() => deleteItemById(id)}><Text>Delete</Text></Pressable>
                </View>
            </View>
        </Pressable>

    );
}



export default SavedProductItem;