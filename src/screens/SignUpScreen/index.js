import { ScrollView, View, Text, Pressable } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import { useNavigation } from '@react-navigation/native';
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
    { id: '2027', name: '2027' },
    { id: '2028', name: '2028' },
    { id: '2029', name: '2029' },
    { id: '2030', name: '2030' },
    { id: '2031', name: '2031' },
    { id: '2032', name: '2032' },
]

const SignUpScreen = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onConfirmPressed = (data) => {
        navigation.navigate('VerifyAccount');
    }
    const onSignInPressed = (data) => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView>
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
                        itemToSelect='University'
                    />
                    <CustomSelect
                        control={control}
                        items={GRAD_YEARS}
                        name="gradYear"
                        rules={{ required: 'Must select grad year' }}
                        itemToSelect='Graduation Year'
                    />
                    <View style={styles.buttonContainer}>
                     
                        <CustomButton onPress={handleSubmit(onConfirmPressed)} text="Confirm" />

                    </View>


                </View>
                <View style={styles.signInContainer}>
                    <Text>Already have an account?</Text>
                    <Pressable onPress={onSignInPressed}><Text style={styles.signInText}> SIGN IN</Text></Pressable>
                </View>

            </View>
        </ScrollView>

    );
}

export default SignUpScreen;