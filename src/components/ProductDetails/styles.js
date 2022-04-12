import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        height: '100%',
        padding: '4%',
        backgroundColor: "#f2f2f2",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        padding: '1%',
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
        marginVertical: '5%',
        lineHeight: 20,
        alignSelf: 'center',
    },
    buttonContainer: {
        height:'80%',
        alignItems: 'center',
        marginVertical: '5%',
    },
    profileContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '4%',
    },
    profileText: {
        fontSize: 14,
        fontWeight: 'bold',
        padding: '4%',
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