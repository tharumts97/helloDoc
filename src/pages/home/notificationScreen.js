import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class NotificationScreen extends Component{
    render() {
        return (
            <View>
                <Text> This is fourth screen</Text>
            </View>
        )
    }
}

NotificationScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'ios-notifications-outline' : 'ios-notifications'}
            size={28}
            color={tintColor}
        />
            
    )
}