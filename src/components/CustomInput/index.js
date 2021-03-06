import { Controller } from 'react-hook-form';
import styles from './styles';
import { View, TextInput, Text } from 'react-native';

const CustomInput = ({control, name, placeholder, secureTextEntry, rules={}}) => {
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
                            textContentType={'oneTimeCode'}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: 'red', alignSelf: 'stretch', marginBottom: 10 , paddingLeft: 10}}>{error.message || 'Error. Do passwords match?'}</Text>
                    )}


                </>
            )}


        />
    );
}

export default CustomInput;