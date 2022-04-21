import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ReportScreen from '../screens/ReportScreen';
import ReviewItem from '../components/Review';
import ReviewScreen from '../screens/ReviewScreen';
import ActiveListingScreen from '../screens/ActiveListingScreen';
import LeaveReviewScreen from '../screens/LeaveReviewScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen'
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';

const OtherProfileNavStack = createStackNavigator();

const OtherProfileStack = () => {

    return(
        <OtherProfileNavStack.Navigator screenOptions={{headerShown: true}}>
            <OtherProfileNavStack.Screen name='OtherProfileScreen' component={OtherProfileScreen} options= {{title: ''}}/>
            <OtherProfileNavStack.Screen name='ReportScreen' component={ReportScreen}/>
            <OtherProfileNavStack.Screen name='ReviewScreen' component={ReviewScreen} options={{title:'Reviews'}}/>
            <OtherProfileNavStack.Screen name='ActiveListingScreen' component={ActiveListingScreen} options={{title:'Active Listings'}}/>
            <OtherProfileNavStack.Screen name='LeaveReviewScreen' component={LeaveReviewScreen} options={{title:'Leave Review'}}/>
            <OtherProfileNavStack.Screen name="Chat" component={ChatScreen} options={{title:'Chat'}}/>
        </OtherProfileNavStack.Navigator>
    )

}
export default OtherProfileStack;