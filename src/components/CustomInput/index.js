import { Controller } from 'react-hook-form';
import styles from './styles';
import { View, TextInput, Text, Pressable } from 'react-native';

const CustomInput = ({control, name, placeholder, secureTextEntry=false, rules={}}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View style={styles.inputField}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            style={styles.input}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                    )}


                </>
            )}


        />
    );
}

export default CustomInput;