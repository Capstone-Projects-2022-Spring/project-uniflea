import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
       alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    dot: {
        width: 15,
        height: 15, 
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c8c8c8',
        margin: 10,        
   },
   dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
   },
});

export default styles;