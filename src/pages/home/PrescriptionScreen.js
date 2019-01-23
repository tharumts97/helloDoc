import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class PrescriptionScreen extends Component{
    render() {
        return (
            <View>
                <Text> This is Third Screen</Text>
            </View>
        )
    }
}

PrescriptionScreen.navigationOptions = {
    tabBarIcon : ({tintColor, focused}) => (
        <Icon 
            name={focused ? 'ios-list-box' : 'ios-list-box'}
            size={28}
            color={tintColor}
        />
            
    )
}