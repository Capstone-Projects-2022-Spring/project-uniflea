import React from 'react';
import {Text, View} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import {Controller} from 'react-hook-form';
import styles from './styles';

const CustomSelect = ({control, rules={}, name, items}) => {

        return (
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({field: {value, onChange}, fieldState: {error}}) => (
                    
                    <View style={styles.root}>
                        <View style={styles.ms}>
                            <MultiSelect 
                                items={items}
                                uniqueKey='id'
                                onSelectedItemsChange={onChange}
                                selectItems={value}
                                selectText='Choose your university'
                                single={true} 
                                             
                            />
                        </View>
                        <View style={styles.result}>
                            <View>
                                <Text>Selected University: {value ? value : "none"}</Text>
                            </View>
                            {error && (
                                <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                            )}
                        </View>
                        
                    </View>
                    
                )}
                
            />
            
            
        );
};



export default CustomSelect;
