import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 5,
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: 5,
        // margin: 8,
        alignSelf: 'center'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    description: {
        fontSize: 14,
        marginVertical: 10,
        lineHeight: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 50,
    },
    profileContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    profileText: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10,
    },
    circleButtonPic: {
        width: 38,
        height: 38,
        borderRadius: 100,
    },
    circleButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default styles;