import { View, Text, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { FontAwesome5 } from '@expo/vector-icons';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const onSubmit = async (data) => {
        try{
            await Auth.forgotPassword(data.email)
            navigation.navigate('ResetPassword');
        } catch(e) {
            Alert.alert('Oops', e.message);
        }
        

    }

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();
    return (
        <View style={styles.root}>
        <View style={styles.pageContainer}>
            <View style={styles.textContainer}>
           < View style={styles.iconContainer}>
            <FontAwesome5 name="exclamation-circle" size={65} color="#474747" />
                </View>
                <Text style={styles.forgotHeader}>Forgot Password</Text>
                <Text style={styles.forgotText}>If an account exists for this username, you'll be emailed a code to reset your password</Text>
            </View>
            <View style={styles.space} />   

            <View style={styles.code}>

                <View style={styles.inputContainer}>
                    <CustomInput
                        control={control}
                        name="email"
                        placeholder="Enter email"
                        secureTextEntry={false}
                        rules={{ required: 'Email required' }}
                    />
                </View>
                <View style={styles.space} />   

                <View style={styles.buttonContainer}>
                    <CustomButton text='Submit' onPress={handleSubmit(onSubmit)} />
                </View>


            </View>
            </View>
        </View>
    );
}

export default ForgotPasswordScreen