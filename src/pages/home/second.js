import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class Second extends Component{
    render() {
        return (
            <View>
                <Text> This is second screen</Text>
            </View>
        )
    }
}

Second.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'md-flame' : 'ios-flame'}
            size={28}
            color={tintColor}
        />
            
    )
}