
import { Text, View, Image, Pressable } from 'react-native';
import styles from './styles';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';

const SavedProductItem = ({ id, image, title, price, items, setItems }) => {
    const navigation = useNavigation();
    const deleteItemById = (id) => {
        const filteredData = items.filter(item => item.id !== id);
        setItems(filteredData)
    }

    return (
        <Pressable onPress={() => navigation.navigate("ProductScreen", { id: id })}>
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