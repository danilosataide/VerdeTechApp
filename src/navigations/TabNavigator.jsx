import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button, StyleSheet } from 'react-native';
import Home from '../screens/Home';

import { MainStackNavigator, CalendarStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
            initialRouteName: 'Home',
            tabBarActiveTintColor: '#4F6F46',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: true,
            tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#fff',
            borderTopWidth: 0,

            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
            height: 50,

            shadowColor: "black",
            shadowOffset: {
            width: 0,
            height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 30,

            elevation: 0,
        }
        }}
        >
            <Tab.Screen 
                name="Home" 
                component={MainStackNavigator} 
                options={{
                tabBarLabel: "Início",
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused) {
                    return <FontAwesome5 name='home' size={size} color={color} />
                    }

                    return <FontAwesome5 name='home' size={size} color={color} />
                }
                }}  
            />
            <Tab.Screen 
                component={CalendarStackNavigator}
                name="Caeldário"
                options={{
                tabBarLabel: "Calendário",
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused) {
                    return <FontAwesome5 name='calendar-alt' size={size} color={color} />
                    }

                    return <FontAwesome5 name='calendar-alt' size={size} color={color} />
                }
                }}
            />
          {/* <Tab.Screen name="Calendars" component={Calendars} /> */}
        </Tab.Navigator>
    );
}

export default TabNavigator;