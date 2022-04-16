import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { SafeAreaView, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';
import ReportScreen from '../screens/ReportScreen';
import SchoolLogo from '../components/SchoolLogo';
import ProductDetails from '../components/ProductDetails';
import EditProductScreen from '../screens/EditProductScreen';
import ChatScreen from '../screens/ChatScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ActiveListingScreen from '../screens/ActiveListingScreen';
import LeaveReviewScreen from '../screens/LeaveReviewScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen'
const Stack = createStackNavigator();

const HeaderComponent = ({search, setSearch}) => {
    return (
        <SafeAreaView style={{ backgroundColor: Colors.mainBackground }}>

            <View style={{ borderRadius: 5, padding: 5, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                <Feather name="search" size={24} color="black" />
                <TextInput style={{ height: 40, marginLeft: 10}} placeholder='Search...' value={search} onChangeText={setSearch}/>
            </View>

            <View style={{position: 'absolute', right: 5, top: 5,}}>
               <SchoolLogo/> 
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

            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{title:'Product Detail'}}/>
            <Stack.Screen name="EditProductScreen" component={EditProductScreen} options={{title:'Edit Product'}}/>
            <Stack.Screen name='OtherProfileScreen' component={OtherProfileScreen} options= {{title: ''}}/>
            <Stack.Screen name='ReportScreen' component={ReportScreen}/>
            <Stack.Screen name='ReviewScreen' component={ReviewScreen}/>
            <Stack.Screen name='ActiveListingScreen' component={ActiveListingScreen}/>
            <Stack.Screen name='LeaveReviewScreen' component={LeaveReviewScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{title:'Chat'}}/>
            
            {/* <Stack.Screen component={NotificationsScreen} name={"Notifications"} options={{ title: 'Notifications' }} />  */}
        </Stack.Navigator>


    );
}

export default HomeStack;