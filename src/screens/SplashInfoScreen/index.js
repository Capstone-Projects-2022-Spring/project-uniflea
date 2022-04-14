import { View, Text, ScrollView } from "react-native";
import styles from "./styles"; 
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';
//import { Colors } from '../styles/Colors';

const SplashInfoScreen = () => {
    const navigation = useNavigation();
    const onContinuePressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.root}>
                    <Text style={styles.welcomeText}>Welcome To</Text>
                    <Text style={styles.titleText}>Uniflea</Text>
                    <Text style={styles.descriptionText}>A mobile marketplace platform exclusively designed for verified university students.</Text>
                    <Text style={styles.descriptionText}>Here are some of our key features:</Text>

                    <View style={styles.iconView}>
                        <Entypo name="home" size={24} color={'black'} alignment='center'/>
                    </View>
                    <Text style={styles.headerText}>Home page</Text>
                    <Text style={styles.infoText}>Explore, search, filter, all active listings. Access notifications</Text>

                    <View style={styles.iconView}>
                        <Entypo name="bookmark" size={24} color={'black'} alignment='center'/>
                    </View>
                    <Text style={styles.headerText}>Saved Listings</Text>
                    <Text style={styles.infoText}>View all listings saved for later</Text>

                    <View style={styles.iconView}>
                        <Entypo name="squared-plus" size={24} color={'black'} alignment='center'/>
                    </View>
                    <Text style={styles.headerText}>Add Listing</Text>
                    <Text style={styles.infoText}>Create a new listing for all to see</Text>

                    <View style={styles.iconView}>
                        <Entypo name="message" size={24} color={'black'} alignment='center'/>
                    </View>
                    <Text style={styles.headerText}>Messages</Text>
                    <Text style={styles.infoText}>Talk to other users about products</Text>

                    <View style={styles.iconView}>
                        <Entypo name="user" size={24} color={'black'} alignment='center'/>
                    </View>
                    <Text style={styles.headerText}>Profile</Text>
                    <Text style={styles.infoText}>Edit info, view revies, and see your listings</Text>
                    
                    <View style={styles.iconView}>
                        <CustomButton text="Continue" onPress={onContinuePressed}></CustomButton>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SplashInfoScreen