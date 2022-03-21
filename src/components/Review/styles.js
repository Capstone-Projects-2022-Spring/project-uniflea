import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginLeft: 5,
    },
    body: {
        paddingTop: 10,
        fontSize: 16,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    username: {
        marginLeft: 5,
        fontSize: 16,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    ratingsContainer: {
        flexDirection: 'row',

    },
    star: {
        paddingTop: 7,
        paddingRight: 2,
        alignItems: 'center'
    },
    container: {
        margin: 5,
        padding: 14,
        // backgroundColor:'#dfe6e0',
        borderRadius: 10,
        borderColor: '#c6ccc8',
        width: Dimensions.get('window').width,
    }
});

export default styles;