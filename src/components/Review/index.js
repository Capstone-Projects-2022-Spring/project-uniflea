import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';
import { DataStore } from "aws-amplify";
import { User } from "../../models";
import { S3Image } from 'aws-amplify-react-native';
const STOCK_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
const ReviewItem = ({ title, body, rating, reviewerSub }) => {
    const [user, setUser] = useState();
    const [userImage, setUserImage] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const fetchReviewerProfile = async () => {
        try {
            // console.log("REVIEWER SUB ========", reviewerSub);
            const reviewingUser = await DataStore.query(User, u => u.userSub("eq", reviewerSub))
            
            if (reviewingUser.length > 0) {
             
                setUser(reviewingUser[0]);
            } else {
                console.warn("No such reviewing user found");
                return;
            }

            // console.log("USER =========", user);

            setUserImage(reviewingUser[0].image);
            console.log("USER IMAGE = ", userImage);
            setUserName(reviewingUser[0].name);
            console.log("USER NAME = ", userName);

        } catch (e) {
            console.log('error fetching reviewing user');
        }

    }
    useEffect(() => {
        fetchReviewerProfile();
    }, []);
    return (

        <View style={styles.container}>
            <View style={styles.profileContainer}>
                {userImage != null ? (<S3Image
                    style={styles.tinyLogo}
                    imgKey={userImage}
                />) : (

                    <Image style={styles.tinyLogo} source={{ uri: STOCK_IMAGE }} />
                )}

                <Text style={styles.username}>{userName}</Text>
            </View>


            <View style={styles.ratingsContainer}>
                {
                    [0, 1, 2, 3, 4].map((el, i) => {
                        let starName = "";
                        if (i < Math.floor(rating)) {
                            starName = "star"
                        } else if (i < rating) {
                            starName = "star-half-empty"
                        } else { starName = "star-o" }
                        return (<FontAwesome
                            style={styles.star}
                            name={starName}
                            size={16}
                            color="#bf1b36"
                            key={el} />
                        )
                    }

                    )}
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.body}>{body}</Text>
        </View>


    );
}

export default ReviewItem;