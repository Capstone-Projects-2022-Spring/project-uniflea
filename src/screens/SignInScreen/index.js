import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
const SignInScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
                    
                    <CustomButton onPress={() => console.warn('log in')} text="Login"/>
                    <Pressable onPress={() => console.warn('Forgot password')}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </Pressable>
                </View>


            </View>
            <View style={styles.signUpContainer}>
                <Text>Don't have an account?</Text>
                <Pressable onPress={() => console.warn('Sign Up')}><Text style={styles.signUpText}> SIGN UP</Text></Pressable>
                    
                
            </View>

        </View>
    );
}

export default SignInScreen;