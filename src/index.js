import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import {createAppContainer} from 'react-navigation'
import AppNavigator from './lib/router'
import StackNavi from './lib/patientStackNav'
import Icon from 'react-native-vector-icons/Ionicons'

const AppIndex = createAppContainer(AppNavigator)

export default class App extends Component{
    render() {
        return (
            <View style={{flex : 1}}>
            <StatusBar
                backgroundColor='#19334d'
                barStyle='light-content'
            />
                <View style = {styles.header}>
                    <TouchableOpacity>
                        <Icon name='md-contact' size={28} color='white' />
                    </TouchableOpacity>
                    <Icon name='ios-menu' size={28} color='white' />
                </View>
                <AppIndex/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1,
    },
    header : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between',
        backgroundColor : '#19334d',
        paddingHorizontal: 10,
        paddingTop:5
    }
})