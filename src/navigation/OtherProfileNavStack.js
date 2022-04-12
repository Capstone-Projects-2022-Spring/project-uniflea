import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ReportScreen from '../screens/ReportScreen';
import ReviewItem from '../components/Review';
import ReviewScreen from '../screens/ReviewScreen';
import ActiveListingScreen from '../screens/ActiveListingScreen';
import LeaveReviewScreen from '../screens/LeaveReviewScreen';
import OtherProfileScreen from '../screens/OtherProfileScreen'
import MessagesScreen from '../screens/MessagesScreen';

const OtherProfileNavStack = createStackNavigator();

const OtherProfileStack = () => {

    return(
        <OtherProfileNavStack.Navigator screenOptions={{headerShown: true, title:''}}>
        <OtherProfileNavStack.Screen name='OtherProfileScreen' component={OtherProfileScreen} options= {{title: ''}}/>
        <OtherProfileNavStack.Screen name='ReportScreen' component={ReportScreen}/>
        <OtherProfileNavStack.Screen name='ReviewScreen' component={ReviewScreen}/>
        <OtherProfileNavStack.Screen name='ActiveListingScreen' component={ActiveListingScreen}/>
        <OtherProfileNavStack.Screen name='LeaveReviewScreen' component={LeaveReviewScreen} />
        <OtherProfileNavStack.Screen name='Messages' component={MessagesScreen}/>
        {/* <OtherProfileNavStack.Screen name=''/> */}
    </OtherProfileNavStack.Navigator>
    )

}
export default OtherProfileStack;