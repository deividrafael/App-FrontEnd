import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';



import { LoginUser } from '../screens/LoginUser'
import { CadUser } from '../screens/CadUser'
import { Welcome } from '../screens/Welcome'
import { DashboardUser } from '../screens/DashboardUser'
import { Qr } from '../screens/Qr'
import { CadUserData } from '../screens/CadUserData'
import {Logout} from '../screens/Logout'
import {CadUserConsult} from '../screens/CadUserConsult'


export function Routes() {

  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const res = AsyncStorage.getItem('@QrApi:token').then((value) => {
      const data = value;
      setUserToken(data);
    })

  }, [])

  const StackApp = createStackNavigator();
  const AppStack = createBottomTabNavigator();

  function Tabs() {
    return (
      <AppStack.Navigator screenOptions={({route}) => ({
        tabBarIcon:({color, size}) =>{
          let iconName
          if(route.name == 'Dashboard')
          {
            iconName = 'home'
          }
          else if(route.name == 'QrCode')
          {
            iconName = 'qr-code'
          }
          else if(route.name == 'Dados')
          {
            iconName = 'settings-outline'
          }
          else if(route.name == 'Logout')
          {
            iconName = 'exit-outline'
          }
          return<Ionicons name={iconName} size={24} color={color} />
        }
      })}>
        <AppStack.Screen name="Dashboard" component={DashboardUser} />
        <AppStack.Screen name="QrCode" component={Qr} />
        <AppStack.Screen name="Dados" component={CadUserData} />
        <AppStack.Screen name="Logout" component={Logout} />
      </AppStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <StackApp.Navigator headerMode="none">
        <StackApp.Screen name="Welcome" component={Welcome} />
        <StackApp.Screen name="LoginUser" component={LoginUser} />
        <StackApp.Screen name="CadUser" component={CadUser} headerMode="Login"/>
        <StackApp.Screen name="DashboardUser" component={DashboardUser} />
        <StackApp.Screen name="Qr" component={Qr} />
        <StackApp.Screen name="CadUserData" component={CadUserData} />
        <StackApp.Screen name="CaduserConsult" component={CadUserConsult} />
        <StackApp.Screen name="Tabs" component={Tabs} />
      </StackApp.Navigator>
    </NavigationContainer>
  )

}

export default Routes;

/**userToken ? <AppRoutes/> :  <AuthRoutes/> */