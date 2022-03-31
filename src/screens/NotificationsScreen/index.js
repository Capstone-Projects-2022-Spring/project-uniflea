import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import styles from '../NotificationsScreen/styles';

const Notification = () => {
    const data=[
        {
            id: '1',
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
            username: 'Sameera',
            notification: 'sent you a message',
        },

        {
            id: '2',
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
            username: 'Josh',
            notification: 'left you a review',
        },

        {
            id: '3',
            picture: 'https://clipart.world/wp-content/uploads/2021/06/Chair-clipart-free.png',
            notification: 'Your saved listing "Chair" has had a price change',
        },

        {
            id: '4',
            picture: 'https://clipart.world/wp-content/uploads/2021/06/Chair-clipart-free.png',
            notification: 'Your saved listing "Chair" has been getting a lot of views. Act fast!',
        },

        {
            id: '5',
            picture: 'https://clipart.world/wp-content/uploads/2021/06/Chair-clipart-free.png',
            notification: 'Your saved listing "Chair" has been sold. Better luck next time!',
        },

        {
            id: '6',
            picture: 'https://clipart.world/wp-content/uploads/2021/06/Chair-clipart-free.png',
            notification: 'Your saved listing "Chair" has been deleted by its seller',
        },

        {
            id: '7',
            picture: 'https://clipart.world/wp-content/uploads/2021/01/Laptop-clipart-transparent-1.png',
            notification: 'Your listing "laptop" is getting lots of activity!',
        }

    ]
    return (
        <View style={styles.container}>
            <FlatList
            data={data}
            keyExtractor={(item,index)=>{return index.toString()}}
            renderItem={({item})=>{
                return (
                    <View style={styles.container}>
                        <View style={styles.HeaderLeftImageView}>
                            <Image
                                style={styles.HeaderLeftImage}
                                source={{uri: item.picture}}
                            />
                        </View>

                        <View style={{flexDirection: 'row', marginLeft: 10}}>
                            <View>
                                <Text style={{color:'#1B6ADF', fontSize:15}}>{item.username}</Text>
                            </View>
                            <View>
                                <Text style={{color: '#64676B', marginLeft:3}}>{item.notification}</Text>
                                </View>
                        </View>
                    </View>
                );
            }}/>
        </View>
    );
    };

export default Notification; 

