import { View, Text, ScrollView } from "react-native";
import styles from "./styles"; 
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";

const SplashInfoScreen = () => {

    return (
        <ScrollView>
            <Text>Welcome To</Text>
            <Text>Uniflea</Text>
            <Text>A mobile marketplace platform exclusively</Text>
            <Text>designed for verified university students.</Text>
            <Text>Here are some of our key features</Text>

            {/*Home Icon*/}
            <Text>Home page</Text>
            <Text>Explore, search, filter, all active</Text>
            <Text>listings. Access notifications</Text>

            {/*Bookmark Icon*/}
            <Text>Saved Listings</Text>
            <Text>View all listings saved for later</Text>

            {/*Plus Sign Icon*/}
            <Text>Add Listing</Text>
            <Text>Create a new listing for all to see</Text>

            {/*Text Bubble Icon*/}
            <Text>Messages</Text>
            <Text>Talk to other users about products</Text>

            {/*Profile Icon*/}
            <Text>Profile</Text>
            <Text>Edit info, view revies, and see your listings</Text>
            
            <CustomButton text="Continue"></CustomButton>

        </ScrollView>
    );
}
export default SplashInfoScreen