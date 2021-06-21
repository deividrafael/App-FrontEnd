import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { DashboardUser } from '../screens/DashboardUser'
import { Qr } from '../screens/Qr'
import { CadUserData } from '../screens/CadUserData'
import { createStackNavigator } from '@react-navigation/stack';
const AppStack = createBottomTabNavigator();
//const AppStack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="DashboardUser" component={DashboardUser} />
      <AppStack.Screen name="Qr" component={Qr} />
      <AppStack.Screen name="CadUserData" component={CadUserData} />
    </AppStack.Navigator>
    </NavigationContainer>


  )
}

export default AppRoutes;