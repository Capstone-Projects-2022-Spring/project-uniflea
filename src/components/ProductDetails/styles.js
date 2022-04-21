import { scale, ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    root: {
        
        height: '100%',
        padding: '4%',
        backgroundColor: "#f2f2f2",
        marginBottom: '20%',
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
        backgroundColor: 'yellow',
        padding: '0.5%',
        alignItems: 'center',
    },
    description: {
    
        fontSize: '14@s',
        marginVertical: '5%',
        lineHeight: '20@s',
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: '4%',
    
        bottom: '4%',
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
    TempleBackgroundColor: {
        backgroundColor: '#99182e'
      },
    TempleBorderColor: {
        borderColor: '#99182e'
      },
      TempleTextColor: {
        color: '#99182e'
      },
      DrexelBackgroundColor: {
        backgroundColor: '#11294f',
      },
      DrexelBorderColor: {
        borderColor: '#11294f'
      },
      DrexelTextColor: {
        color: '#11294f'
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#99182e',
        // backgroundColor: Colors.buttonbackgroundPrimary,
        height: '15%',
        width: '65%',
        borderRadius: 5,
        borderWidth: 1,
        // borderColor: Colors.buttonBorderPrimary,
        margin: '2%',
    },
    text: {
        fontSize: 18,
        color: 'white'
    }
});

export default styles;