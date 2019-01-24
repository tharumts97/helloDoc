import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import style from '../pages/styles/style';

export default class RadioButton extends Component{
    state={
        data:[
            {
                label:'Doctor 1',
                color:'green',
                value:"Cardiologist"
            },
            {
                label:'Doctor 2',
                color:'green',
                value:"Ent surgeon"
            },
            {
                label:'Doctor 3',
                color:'green',
                value:"Physician"
            },
            {
                label:'Doctor 4',
                color:'green',
                value:"Ent surgeon"
            },
        ]
    };
       // update state
       onPress = data => this.setState({ data });

       render() {
        const { parent , container,valueText} = style

           let selectedButton = this.state.data.find(e => e.selected == true);
           selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
           return (
               <View style={container}>
                   <Text style={valueText}>
                   </Text>
                   <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
               </View>
           );
       }
   }
