import React from 'react'

import { StyleSheet, Text, SafeAreaView, Image, Pressable, View } from 'react-native';
import { Colors } from '../../styles/Colors';

import { Text, SafeAreaView, Image, View, TouchableOpacity, Pressable } from 'react-native';
import ProfileScreenButton from '../../components/ProfileScreenButton';
import styles from './styles'
import { Rating } from 'react-native-rating-element';

const SettingsPage = () => {

    return(
        <SafeAreaView>
            <Pressable>
                <Image/>
            </Pressable>

            <Text styles={}>Settings</Text>

            <View>
                {/* Change Name */}
                <View>
                    {/* Change Name Button */}
                    <View>

                    </View>

                    {/* Change Name Container */}
                    <View>

                    </View>
                </View>

                {/* Chagne Display Name */}
                <View>
                    {/* Change Display Name Button */}
                    <View>

                    </View>

                    {/* Change Dispaly Name Container */}
                    <View>

                    </View>
                </View>

                {/* Change Pronouns */}
                <View>
                    {/* Change Pronouns Button */}
                    <View>

                    </View>

                    {/* Change Pronouns Container */}
                    <View>

                    </View>
                </View>

                {/* Change Profile Picture */}
                <View>
                    {/* Change Profile Picture Button */}
                    <View>

                    </View>

                    {/* Change Profile Picture Container */}
                    <View>

                    </View>
                </View>

                {/* Change Password */}
                <View>
                    {/* Change Password Button */}
                    <View>

                    </View>

                    {/* Change Password Container */}
                    <View>

                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}