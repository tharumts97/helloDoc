import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from 'react-native-dropdown-menu';
import style from '../styles/style';
import RadioButton from '../../components/radioButton';
import ModalTester from '../../components/modalTester';

export default class AppointmentScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {

        const { parent, headText, drpView, drpDown, radText, modalView } = style

        var data = [["All", "Cardiologist", "Surgeon", "Physician", "Psychiastrist"]];
        return (
            <View style={parent}>
                <View>
                    <Text style={headText}>Search Doctor</Text>
                    <View style={{ height: 64 }} />
                    <DropdownMenu
                        style={drpDown}
                        bgColor={'grey'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}

                        // arrowImg={}      
                        // checkImage={}   
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}} 
                        // maxHeight={300} 
                        handler={(selection, row) => this.setState({ text: data[selection][row] })}
                        data={data}
                    >
                    </DropdownMenu>
                </View>
                <View style={drpView}>
                    <Text style={radText}>Available Doctors</Text>
                    <RadioButton />
                    <View style={modalView}>
                        <ModalTester />
                    </View>
                </View>

            </View>

        )
    }
}

AppointmentScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'md-calendar' : 'ios-calendar'}
            size={28}
            color={tintColor}
        />

    )
}