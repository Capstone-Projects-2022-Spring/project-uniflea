import { View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
const COLLEGES = [
    { id: 'Temple', name: 'Temple' },
    { id: 'Drexel', name: 'Drexel' },
    { id: 'Penn State', name: 'Penn State' },
    { id: 'Upenn', name: 'Upenn' },
    { id: 'Villanova', name: 'Villanova' },
    { id: 'Other', name: 'Other' }
];
const GRAD_YEARS = [
    { id: '2022', name: '2022' },
    { id: '2023', name: '2023' },
    { id: '2024', name: '2024' },
    { id: '2025', name: '2025' },
    { id: '2026', name: '2026' },
    { id: '2027', name: '2027' }
]

const SignUpScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <View style={styles.root}>
            <View style={styles.pageContainer}>
                <Text style={styles.loginText}>Account Creation</Text>
                <View style={styles.inputContainer}>

                    <CustomInput
                        control={control}
                        name="name"
                        placeholder='Name'
                        rules={{
                            required: "Name required"
                        }}
                    />
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
                        name="email"
                        placeholder='Email'
                        rules={{
                            required: "Email required"
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
                    <CustomInput
                        control={control}
                        name="confirmPassword"
                        placeholder='Confirm Password'
                        rules={{
                            required: "Pasword confirmation required"
                        }}
                        secureTextEntry={true}
                    />
                    
                    
                </View>
                <CustomSelect
                        control={control}
                        items={COLLEGES}
                        name="uniSelector"
                        rules={{ required: 'Must select university' }}
                    />
                <CustomSelect
                        control={control}
                        items={GRAD_YEARS}
                        name="gradYear"
                        rules={{ required: 'Must select grad year' }}
                    />
                <View style={styles.buttonContainer}>

                    <CustomButton onPress={() => console.warn('log in')} text="Login" />
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

export default SignUpScreen;