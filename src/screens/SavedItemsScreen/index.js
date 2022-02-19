import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import SavedProductItem from '../../components/SavedProductItem';
import styles from './styles';
const prodData = [
  {
    id: 1,
    product: {
      id: 1,
      title: 'Test1',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
      price: 19.99,
    }
  
  },
  {
    id: 2,
    product: {
      id: 3,
      title: 'Test3',
      image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac1.jpg',
      price: 19.99,
    }
  },
]
  const SavedItemScreen = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
      setItems(prodData);

    }, []);
      return (
        <SafeAreaView style={styles.page}>
            
            <FlatList 
              data={items}
              renderItem={({item}) =>
               
                <SavedProductItem 
                  id={item.id}
                  title={item.product.title} 
                  image={item.product.image} 
                  price={item.product.price} 
                  items={items}
                  setItems={setItems}
                />

            }
              keyExtractor={product => product.id}
              showsVerticalScrollIndicator={false}
              
            />
          
        </SafeAreaView>
        
      );
  }

  export default SavedItemScreen;