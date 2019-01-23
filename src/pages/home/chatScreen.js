import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class ChatScreen extends Component{
    render() {
        return (
            <View>
                <Text> This is fifth screen</Text>
            </View>
        )
    }
}

ChatScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'md-phone-portrait' : 'ios-phone-portrait'}
            size={28}
            color={tintColor}
        />
            
    )
}