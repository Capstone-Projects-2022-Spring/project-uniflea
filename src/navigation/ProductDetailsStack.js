import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../components/ProductDetails';
import EditProductScreen from '../screens/EditProductScreen';
import ChatScreen from '../screens/ChatScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen';
const ProductStack = createStackNavigator();

const ProductDetailScreenStack = () => {

    return (
        <ProductStack.Navigator screenOptions={{headerShown: false}}>
            <ProductStack.Screen name="ProductDetails" component={ProductDetails} options={{title:'Product Detail'}}/>
            <ProductStack.Screen name="EditProductScreen" component={EditProductScreen} options={{title:'Edit Product'}}/>
            <ProductStack.Screen name="Chat" component={ChatScreen} options={{title:'Chat'}}/>
            <ProductStack.Screen name="OtherProfileScreen" component={OtherProfileScreen} options={{title:'Other Profile'}}/>
        </ProductStack.Navigator> 
    )
}

export default ProductDetailScreenStack;
