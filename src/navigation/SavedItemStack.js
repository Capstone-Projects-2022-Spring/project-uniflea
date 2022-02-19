import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SavedItemScreen from '../screens/SavedItemsScreen';
import ProductDetails from '../components/ProductDetails';


const Stack = createStackNavigator();


const SavedItemStack = () => {

    return (

        <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name='SaveItemScreen' component={SavedItemScreen} options={{
                title: 'Saved Listings',
            }} />


            <Stack.Screen name='ProductScreen' component={ProductDetails} options={{ title: '' }} />
        </Stack.Navigator>

    );
}

export default SavedItemStack;