import React from 'react';
import { createMaterialTopTabNavigator, StackNavigator} from 'react-navigation';

//importing the screens
import HomeScreen from '../pages/home';
import AppointmentScreen from '../pages/home/appointmentScreen';
import PrescriptionScreen from '../pages/home/PrescriptionScreen';
import NotificationScreen from '../pages/home/notificationScreen';
import ChatScreen from '../pages/home/chatScreen';


const AppNavigator = createMaterialTopTabNavigator(
    {
        //connecting pages
        Home: HomeScreen,
        Second: AppointmentScreen,
        Third: PrescriptionScreen,
        Fourth: NotificationScreen,
        Fifth: ChatScreen,
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
