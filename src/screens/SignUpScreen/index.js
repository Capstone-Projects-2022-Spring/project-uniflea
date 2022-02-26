import { ScrollView, View, Text, Pressable, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import CustomSelect from '../../components/CustomSelect';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React, { useRef, useContext } from 'react';

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
// const client = StreamChat.getInstance('4gqynpstsrwm', 'ee3kx3rc5pmyp58pt5xbnqskttc5fa8b7zha8hzh5su52mv77tgqnksnunqraa9t');
const SignUpScreen = () => {
    const password = useRef({});

    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();
    // use ref hook to track the value of the password field for validation with confirmPassword field
    password.current = watch("password");

    const onConfirmPressed = async (data) => {
        try {
            const response = await Auth.signUp({
                'username': data.email,
                'password': data.password,
                'attributes': {
                    'name': data.name,
                    'email': data.email,
                    'preferred_username': data.username,
                    'custom:University': data.uniSelector[0],
                    'custom:GradYear': data.gradYear[0],
                }
            });


            navigation.navigate('VerifyAccount');

        } catch (e) {
            Alert.alert('Oops', e.message);
        }


    }

    const validatePassword = (confirmedPassword) => {
        return confirmedPassword === password.current;
    };

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
                        <View>
                            <Text style={styles.passwordInfo}>Minimum 8 characters</Text>
                            <Text style={styles.passwordInfo}>Must include special characters</Text>
                            <Text style={styles.passwordInfo}>Must include upper and lower case characters</Text>
                            <Text style={styles.passwordInfo}>Must include numerals</Text>
                        </View>
                        <CustomInput
                            control={control}
                            name="password"
                            placeholder='password'
                            rules={{
                                required: "Pasword required",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                },
                            }}
                            secureTextEntry={true}
                        />

                        <CustomInput
                            control={control}
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            rules={{
                                validate: {
                                    checkEmail: v => validatePassword(v) || "Passwords not equivalent"
                                },
                                required: "Pasword confirmation required"
                            }}
                            secureTextEntry={true}
                        />
                        <CustomInput
                            control={control}
                            name="phone"
                            placeholder='Enter phone number: xxx-xxx-xxxx'
                            rules={{
                                required: "Phone number required"
                            }}
                        />
                        <CustomInput
                            control={control}
                            name="birthdate"
                            placeholder='Enter birthdate: mm/dd/yyyy'
                            rules={{
                                required: "birthdate required"
                            }}
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