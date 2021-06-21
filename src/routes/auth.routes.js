import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { LoginUser } from '../screens/LoginUser'
import { CadUser } from '../screens/CadUser'
import { Welcome } from '../screens/Welcome'


const AuthStack = createStackNavigator();

export function AuthRoutes() { 

  return (
    <NavigationContainer>
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="LoginUser" component={LoginUser} />
      <AuthStack.Screen name="CadUser" component={CadUser} />
    </AuthStack.Navigator>
    </NavigationContainer>
  )
}

export default AuthRoutes;
