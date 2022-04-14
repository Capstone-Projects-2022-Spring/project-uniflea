import { scale, ScaledSheet } from "react-native-size-matters"; 

const styles = ScaledSheet.create({
    root:{
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 12,
        flex: 1
    },
    welcomeText:{
        flex: 1,
        padding: 5,
        fontSize: '16@s',
        color: 'darkgrey',
        textAlign: 'center',
    },
    titleText:{
        flex: 1,
        padding: 5,
        fontSize: '28@s',
        color: 'black',
        textAlign: 'center',
    },
    descriptionText:{
        flex: 1,
        padding: 5,
        fontSize: '14@s',
        color: 'darkgrey',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    headerText:{
        flex: 1,
        padding: 5,
        fontSize: '20@s',
        color: 'black',
        textAlign: 'center',
    },
    infoText:{
        flex: 1,
        padding: 5,
        fontSize: '14@s',
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