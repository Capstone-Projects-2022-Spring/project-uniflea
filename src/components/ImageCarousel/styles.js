import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
       
    },
    image: {
        height: 300,
        resizeMode: 'contain',
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