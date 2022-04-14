import { scale, ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    root: {
        height: '100%',
        padding: '4%',
        backgroundColor: "#f2f2f2",
    },
    titleContainer: {
        padding: '1%',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: '21@s',
        textAlign: 'center',
        // margin: 8,
    },
    price: {
        fontSize: '18@s',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    descriptionContainer: {
        padding: '1%',
        alignItems: 'center',
    },
    description: {
        fontSize: '14@s',
        marginVertical: '5%',
        lineHeight: '20@s',
        textAlign: 'center',
    },
    buttonContainer: {
        height:'80%',
        alignItems: 'center',
        marginVertical: '4%',
    },
    profileContainer: {
        alignSelf: 'center',
        padding: '4%',
    },
    profileContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileText: {
        fontSize: '14@s',
        fontWeight: 'bold',
        padding: '4%',
    },
    circleButtonPic: {
        width: scale(38),
        height: scale(38),
        borderRadius: 100,
        borderWidth: 1.25,
    },
    circleButton: {
        width: scale(40),
        height: scale(40),
        borderRadius: 100,
        borderWidth: 1.25,
        backgroundColor: '#FFFFFF',
    },
    imageContainer: {
        padding: '1%',
        alignItems: 'center',
    },
    imageFrame: {
        width: scale(225),
        height: scale(225),
        borderWidth: 1.25,
        resizeMode: 'contain',
    },
});

export default styles;