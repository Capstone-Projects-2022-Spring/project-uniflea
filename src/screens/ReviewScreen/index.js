import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Text, FlatList, Alert } from 'react-native';
import styles from './styles';
import ReviewItem from '../../components/Review';
import AuthContext from '../../contexts/Authentication';
import { DataStore } from 'aws-amplify';
import { Review } from '../../models';
import { useRoute } from '@react-navigation/native';

const ReviewScreen = () => {
    const {user, otherUser} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const route = useRoute();

    const fetchReviews = async () => {
        
        try{
            console.log("MY USER =========== ", user.attributes.sub);
            console.log("OTHER USER ============", otherUser);
            let allReviews;
            if (route.params?.fromScreen == "OtherProfileScreen"){
                console.log("FROM OTHER PROFILE SCREEN");
                allReviews = (await DataStore.query(Review)).filter(review => review.user.userSub === otherUser);
            } else {
                console.log("FROM MY PROFILE SCREEN");
                allReviews = (await DataStore.query(Review)).filter(review => review.user.userSub === user.attributes.sub);
            }
             
            
            setReviews(allReviews);
        } catch(e){
            Alert.alert("Oops", e.message + " in review screen");
        }
    }

    useEffect(() => {
        fetchReviews();
        const subscription = DataStore.observe(Review).subscribe(() => {
            fetchReviews()
          });
          // close subscription to prevent memory leaks
          return () => subscription.unsubscribe();
    }, []);
    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                data={reviews}
                style={styles.reviewList}
                contentContainerStyle={{ alignItems: 'center' }}
                renderItem={({ item }) =>

                    <ReviewItem
                        title={item.title}
                        body={item.message}
                        rating={item.rating}
                        reviewerSub={item.reviewerSub}
                    />


                }
                keyExtractor={review => review.id}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>



    );
}


export default ReviewScreen;
