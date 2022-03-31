import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../components/ProductDetails';
import EditProductScreen from '../screens/EditProductScreen';

const ProductStack = createStackNavigator();

const ProductDetailScreenStack = () => {

    return (
        <ProductStack.Navigator screenOptions={{headerShown: true}}>
            <ProductStack.Screen name="ProductDetails" component={ProductDetails} options={{title:'Product Detail'}}/>
            <ProductStack.Screen name="EditProductScreen" component={EditProductScreen} options={{title:'Edit Product'}}/>
        </ProductStack.Navigator>
    )
}

export default ProductDetailScreenStack;