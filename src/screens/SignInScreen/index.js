import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
const SignInScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPressed = () => {
        navigation.navigate('Home');
    }
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    return (
        <View style={styles.root}>
            <View style={styles.pageContainer}>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.inputContainer}>

                    <CustomInput 
                        control={control}
                        name="username"
                        placeholder='Username'
                        rules={{
                            required: "Username required"
                        }}
                    />
                    <CustomInput 
                        control={control}
                        name="password"
                        placeholder='password'
                        rules={{
                            required: "Pasword required"
                        }}
                        secureTextEntry={true}
                    />

                </View>
                <View style={styles.buttonContainer}>
                    
                    <CustomButton onPress={handleSubmit(onSignInPressed)} text="Login"/>
                    <Pressable onPress={onForgotPasswordPressed}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </Pressable>
                </View>


            </View>
            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={onSignUpPressed}><Text style={styles.signUpText}> SIGN UP</Text></Pressable>
                    
                
            </View>

        </View>
    );
}

export default SignInScreen;