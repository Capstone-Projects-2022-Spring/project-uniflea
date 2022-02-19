import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../components/ProductDetails';
import { SafeAreaView, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';

const Stack = createStackNavigator();

const HeaderComponent = ({search, setSearch}) => {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.mainBackground }}>
            <View style={{ padding: 5, margin: 10, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="search" size={24} color="black" />
                <TextInput style={{ height: 40, marginLeft: 10}} placeholder='Search...' value={search} onChangeText={setSearch}/>
            </View>
        </SafeAreaView>
    );
}

const HomeStack = () => {
    const [search, setSearch] = useState('');
    return (

        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' options={{
                    title:'Home', 
                    header: () => <HeaderComponent search={search} setSearch={setSearch}/> 
                }}>
                {
                    () => <HomeScreen searchValue={search}/>
                }
            </Stack.Screen>
            <Stack.Screen name='ProductScreen' component={ProductDetails} options={{ title: '' }} />
        </Stack.Navigator>

    );
}

export default HomeStack;