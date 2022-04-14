import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 12,
        flex: 1
    },
    welcomeText:{
        flex: 1,
        padding: 5,
        fontSize: 16,
        color: 'darkgrey',
        textAlign: 'center',
    },
    titleText:{
        flex: 1,
        padding: 5,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    descriptionText:{
        flex: 1,
        padding: 5,
        fontSize: 16,
        color: 'darkgrey',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    headerText:{
        flex: 1,
        padding: 5,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    infoText:{
        flex: 1,
        padding: 5,
        fontSize: 16,
        color: 'darkgrey',
        textAlign: 'center',
    },
    iconView:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 7
    },
});
export default styles;