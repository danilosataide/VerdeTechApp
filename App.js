import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigations/StackNavigator';
import TabNavigator from './src/navigations/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'light-content'} />
      
      {/* <StackNavigator /> */}
      <TabNavigator />
     
    </NavigationContainer>
  );
}
export default App;
