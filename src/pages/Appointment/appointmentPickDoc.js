import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import DropdownMenu from 'react-native-dropdown-menu';
import style from '../styles/style';
import RadioButton from '../../components/radioButton';
import ModalTester from '../../components/modalTester';

export default class AppPickDoc extends Component {

    render() {

        const { parent, headText, drpView, drpDown, radText, modalView,
            iconView, iconimg, radView } = style

        var data = [["All", "Cardiologist", "Surgeon", "Physician", "Psychiastrist"]];
        return (
            <View style={parent}>

                <View style={radView}>
                    <Text style={radText}>Available Doctors</Text>
                    <RadioButton />
                </View>
                <View style={modalView}>
                        <ModalTester />
                    </View>
                <View style={iconView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("viewpres")}>
                        <Icon name='md-arrow-dropright-circle' size={40} style={iconimg} />
                    </TouchableOpacity>
                </View>


            </View>

        )
    }
}
