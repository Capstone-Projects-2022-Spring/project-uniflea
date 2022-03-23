import React, { useState } from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import { Dropdown } from 'react-native-element-dropdown';
import ProfileScreenButton from '../../components/ProfileScreenButton';

const ReportScreen = () => {

    const REPORT = [{id:'User', value:'User'}, {id:'Item', value:'Item'}];
    const [value, setValue] = useState(null);
    return(
        <SafeAreaView style={styles.container}>
            <Text>Hi from report</Text>
            
            <Dropdown style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={REPORT}
                placeholder="..."
                search
                maxHeight={300}
                labelField="id"
                valueField='value'
                value={value}
                searchPlaceholder='...'
                onChange={item => {setValue(item.value)}}
            />
            
            <View style={styles.space}/>
            <TextInput
                style={styles.textBox}
                placeholder='Type out report...'
                textAlignVertical='top'
                multiline= {true}
            />
            <View style={styles.space}/>
            <ProfileScreenButton onPress={console.log} text="Submit Report"/>
        </SafeAreaView>
    )
}

export default ReportScreen;