import React from 'react';
import { createMaterialTopTabNavigator, StackNavigator} from 'react-navigation';

//importing the screens
import HomeScreen from '../pages/home';
import AppointmentScreen from '../pages/home/appointmentScreen';
import PrescriptionScreen from '../pages/home/PrescriptionScreen';
import NotificationScreen from '../pages/home/notificationScreen';
import ChatScreen from '../pages/home/chatScreen';
import CurrentStateScreen from '../pages/home/currentStateScreen';
import AppDatePicker from '../pages/Appointment/appointmentPickDate';

const AppNavigator = createMaterialTopTabNavigator(
    {
        //connecting pages
        Home: HomeScreen,
        Second: AppDatePicker, //AppointmentScreen,
        Third: PrescriptionScreen,
        Fourth:CurrentStateScreen,
        Fifth: NotificationScreen,
        Sixth: ChatScreen,
        
    },
    {
        //tab styling
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#b3cce6',
            showIcon : true,
            showLabel: false,
            style: {
                backgroundColor : '#204060'
            }
        },
        
    }
)

export default AppNavigator;
