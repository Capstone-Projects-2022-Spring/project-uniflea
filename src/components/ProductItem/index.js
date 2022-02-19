
import { Text, View, Image, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ProductItem = ({ id, image, title, price }) => {
    const navigation = useNavigation();
    const onPress = () => {
        // which exact product, passing params lets us send data, but we must also receive data in product details screen for proper function
        navigation.navigate('ProductScreen', {id: id})
    }   
    return (
        <Pressable onPress={onPress} style={styles.root}>

            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{title}</Text>
    
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
       
        </Pressable>
    );
}



export default ProductItem;