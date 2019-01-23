import React from 'react';
import { StackNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation';
import ViewPrescription from '../pages/Prescription/viewPrescription';
import PrescriptionScreen from '../pages/home/PrescriptionScreen';

const StackNavi = createStackNavigator(
    {
        prescription: {
            screen: PrescriptionScreen
        },

        viewpres: {
            screen: ViewPrescription
        }
    }
)

export default StackNavi;