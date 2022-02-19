
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';
import HomeStack from './HomeStack';
import ProfilePage from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SavedItemScreen from '../screens/SavedItemsScreen';
import SellItemScreen from '../screens/SellItemScreen';

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {

    return (

        <Tab.Navigator
            tabBarOptions={{ inactiveTintColor: Colors.tabInactiveColor, activeTintColor: Colors.tabSelectedColor }}
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen
                component={HomeStack}
                name={"Home"}
                options={{
                    headerTitle: 'Home',
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}

            />
            <Tab.Screen component={SavedItemScreen} name={"Saved"}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={SellItemScreen} name={"Sell"}

                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="squared-plus" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={MessagesScreen} name={"Messages"}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="message" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={ProfilePage} name={"Profile"}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" size={24} color={color} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default BottomTabNav;