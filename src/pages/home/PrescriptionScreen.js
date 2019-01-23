import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import style from '../styles/style'
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

export default class PrescriptionScreen extends Component {

    constructor() {
        super()
        this.state = {
            isVisible: false,
            choosenDate: ''
        }
    }
    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            choosenDate: moment(date).format('MMMM, Do YYYY')
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    render() {
        const { parent, signupTxt, buttonStyle, timeText,
            signupButton, headText, imagepic, iconimg, iconView } = style

        return (
            <View style={parent}>

                <Text style={headText}>
                    View Prescription
                </Text>

                <Image
                    style={imagepic}
                    source={require('../../images/medical-prescription.jpg')}
                />

                <Text style={timeText} >
                    {this.state.choosenDate}
                </Text>

                <TouchableOpacity style={buttonStyle} onPress={this.showPicker}>
                    <Text style={signupTxt}>Pick Date</Text>
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={'date'}
                />

                <View style={iconView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("viewpres")}>
                        <Icon name='md-arrow-dropright-circle' size={40} style={iconimg} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

PrescriptionScreen.navigationOptions = {
    tabBarIcon: ({ tintColor, focused }) => (
        <Icon
            name={focused ? 'ios-list-box' : 'ios-list-box'}
            size={28}
            color={tintColor}
        />

    )
}