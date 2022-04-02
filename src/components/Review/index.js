import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { FontAwesome } from '@expo/vector-icons';

const Review = ({ title, body, rating, username, img }) => {

    return (

        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: img }}
                />
                <Text style={styles.username}>{username}</Text>
            </View>


            <View style={styles.ratingsContainer}>
                {
                    [0, 1, 2, 3, 4].map((el, i) => {
                        let starName = "";
                        if (i < Math.floor(rating)) {
                            starName = "star"
                        //} else if (i < rating) {
                            //starName = "star-half-empty"
                        } else { starName = "star-o" }
                        console.log("Star Name ========= ", starName);
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

export default Review;