import React, {useState, useRef} from 'react';
import { View, Image, FlatList, useWindowDimensions } from 'react-native';
import styles from './styles';
import { S3Image } from 'aws-amplify-react-native/dist/Storage';

// image carousel recieves an array of images
const ImageCarousel = ({images}) => {
    const windowWidth = useWindowDimensions().width;
    const [imageIndex, setImageIndex] = useState(1);

    const onViewableItemsChanged = ({viewableItems}) => {
        if (viewableItems.length > 0) {
            setImageIndex(viewableItems[0].index || 0);
        }
    }

    const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig: {viewAreaCoveragePercentThreshold: 50}, onViewableItemsChanged }])

    return (
        <View style={styles.root}>
            <FlatList 
                data={images}
                renderItem={({item}) => {
                        return (
                            <S3Image style={styles.image} imgKey={item}/>
                        );
                    }
                    
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                keyExtractor={(item, index) => index.toString()}
            />
            <View  style={styles.dotContainer}>
                {images.map((image, index) => (
                    
                    <View key={image} style={[styles.dot, {backgroundColor: index == imageIndex ? '#c8c8c8' : '#ededed'}]}></View>
                    
                    
                ))}
            </View>
        </View>
    );
}

export default ImageCarousel;