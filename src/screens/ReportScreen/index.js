import React, { useState, useEffect } from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import { Dropdown } from 'react-native-element-dropdown';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import email from 'react-native-email'

const ReportScreen = () => {

    const REPORT = [{id:'User', value:'User'}, {id:'Item', value:'Item'}];
    const[value, setValue] = useState('');
    const[text, setText] = useState('');

    const sendEmail = ({value, description}) => {
        const to = 'unifleareport@gmail.com'
        email(to,{
            subject: value,
            body: description
        }).catch(console.error)
        
        console.log("Successfully send email\n")
    }

    useEffect(()=> {
        sendEmail(value, text);
    })
    return(
        <SafeAreaView style={styles.container}>
            <Text>Thank you for your report, we will review it</Text>
            
            {/* <Dropdown style={styles.dropdown}
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
                onChangeText={newText => setText(newText)}
                defaultValue={text}
                multiline= {true}
            />
            <View style={styles.space}/> */}
            {/* <ProfileScreenButton onPress={sendEmail(value, text)} text="Submit Report"/> */}
        </SafeAreaView>
    )
}

export default ReportScreen;