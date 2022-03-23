
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { Colors } from '../styles/Colors';
import HomeStack from './HomeStack';
import ProfilePage from '../screens/ProfileScreen';
import MessagesStack from './MessagesStack';
import SavedItemStack from './SavedItemStack';
import SellItemScreen from '../screens/SellItemScreen';
import ProfileScreenStack from './ProfileStack';

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
            <Tab.Screen component={SavedItemStack} name={"Saved"}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="shopping-cart" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={SellItemScreen} name={"Sell"}

                options={{
                    headerShown: true,
                    headerTitle: 'List an item',
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="squared-plus" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={MessagesStack} name={"Messages"}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="message" size={24} color={color} />
                    ),
                }} />
            <Tab.Screen component={ProfileScreenStack} name={"Profile"}
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