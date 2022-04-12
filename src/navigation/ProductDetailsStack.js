import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../components/ProductDetails';
import EditProductScreen from '../screens/EditProductScreen';
import ChatScreen from '../screens/ChatScreen';

import OtherProfileStack from './OtherProfileNavStack';


const ProductStack = createStackNavigator();

const ProductDetailScreenStack = () => {

    return (
        <ProductStack.Navigator screenOptions={{headerShown: false}}>
            <ProductStack.Screen name="ProductDetails" component={ProductDetails} options={{title:'Back to Listing'}}/>
            <ProductStack.Screen name="EditProductScreen" component={EditProductScreen} options={{title:'Edit Product'}}/>
            <ProductStack.Screen name="Chat" component={ChatScreen} options={{title:'Chat'}}/>

            <ProductStack.Screen name="OtherProfileStack" component={OtherProfileStack} options={{ title:''}}/>

        </ProductStack.Navigator>
    )
}

export default ProductDetailScreenStack;