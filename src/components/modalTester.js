import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../pages/styles/style';
 
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
 
  render() {

    const { iconimg} = style

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal} style={styles.buttonAboutdoctor}>
          <Text style={styles.buttonText}>About Doctor</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Doctor 1</Text>
            <Text style={styles.buttonText}>Cardiologist</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Icon name='md-close-circle-outline' size={40} style={iconimg} />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:'#b3cce6',
        width:250,
        height:250,
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12,
        justifyContent:'center'
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    buttonAboutdoctor:{
        backgroundColor:'#1c313a',
        width:300,
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12,
        
    }
});