import { View, TextInput, Text, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
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

                    <Controller
                        control={control}
                        name='name'
                        rules={{}}
                        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                            <>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={value}
                                        placeholder='Username'
                                        secureTextEntry={false}
                                        style={styles.input}
                                    />
                                </View>
                                {error && (
                                    <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                                )}


                            </>
                        )}


                    />
                    <Controller
                        control={control}
                        name='name'
                        rules={{}}
                        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                            <>
                                <View style={styles.inputField}>
                                    <TextInput
                                        value={value}
                                        placeholder='Username'
                                        secureTextEntry={false}
                                        style={styles.input}
                                    />
                                </View>
                                {error && (
                                    <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                                )}


                            </>
                        )}


                    />

                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => console.warn('log in')} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
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