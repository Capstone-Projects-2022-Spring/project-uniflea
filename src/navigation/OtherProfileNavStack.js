import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ReportScreen from '../screens/ReportScreen';
import ReviewItem from '../components/Review';
import ReviewScreen from '../screens/ReviewScreen';
import ActiveListingScreen from '../screens/ActiveListingScreen';
import LeaveReviewScreen from '../screens/LeaveReviewScreen';
import OtherProfilePage from '../screens/OtherProfileScreen'
import MessagesStack from './MessagesStack';
import MessagesScreen from '../screens/MessagesScreen';

const OtherProfileNavStack = createStackNavigator();

const OtherProfileStack = () => {

    return(
        <OtherProfileNavStack.Navigator>
        <OtherProfileNavStack.Screen name='OtherProfileScreen' component={OtherProfilePage} options= {{title: 'Other Profile'}}/>
        <OtherProfileNavStack.Screen name='ReportScreen' component={ReportScreen}/>
        <OtherProfileNavStack.Screen name='ReviewScreen' component={ReviewScreen}/>
        <OtherProfileNavStack.Screen name='ActiveListingScreen' component={ActiveListingScreen}/>
        <OtherProfileNavStack.Screen name='LeaveReviewScreen' component={LeaveReviewScreen}/>
        <OtherProfileNavStack.Screen name='Messages' component={MessagesScreen}/>
        {/* <OtherProfileNavStack.Screen name=''/> */}
    </OtherProfileNavStack.Navigator>
    )

}
export default OtherProfileStack;