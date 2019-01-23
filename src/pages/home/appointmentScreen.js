import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class AppointmentScreen extends Component{
    render() {
        return (
            <View>
                <Text> This is second screen</Text>
            </View>
        )
    }
}

AppointmentScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'md-calendar' : 'ios-calendar'}
            size={28}
            color={tintColor}
        />
            
    )
}