import React, { useEffect, useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, FlatList, Alert } from 'react-native';
import styles from './styles';
import ReviewItem from '../../components/Review';
import AuthContext from '../../contexts/Authentication';
import { DataStore } from 'aws-amplify';
import { Review } from '../../models';

const REVIEW_DATA = [
    { id: 1, img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', username: "josh", title: "item 1 title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 1.5 },
    { id: 3, img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', username: "nate", title: "item 2 title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 2.6 },
    { id: 5, img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', username: 'caleb', title: "item 3 title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 3.7 },
    { id: 2, img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', username: 'jude', title: "item 4 title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 4.8 },
    { id: 6, img: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', username: 'ri', title: "item 5 title", body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", rating: 5 },
]

const ReviewScreen = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const fetchReviews = async () => {
        
        try{
            console.log("MY USER =========== ", user.attributes.sub);
            const allReviews = (await DataStore.query(Review)).filter(review => review.user.userSub === user.attributes.sub);
            // console.log("AllReviews !!!!!!!!!!!!=", allReviews);
            setReviews(allReviews);
        } catch(e){
            Alert.alert("Oops", e.message);
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
