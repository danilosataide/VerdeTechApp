import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Calendars from "../screens/Calendars";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerBackTitle: "Back",
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
  headerStyle:{
      backgroundColor: '#14750D'
  }
};

const handleSignOut = ({navigation}) => {
  auth  
    .signOut()
    .then(() => {
      navigation.navigate('Welcome')
    })
    .catch(error => alert(error.message))
}

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const CalendarStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen options={{ headerShown: false }} name="Calendars" component={Calendars} />
    </Stack.Navigator>
  );
}


export { handleSignOut, StackNavigator, MainStackNavigator, CalendarStackNavigator};