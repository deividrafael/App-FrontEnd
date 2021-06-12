import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserIdentification } from '../screens/UserIdentification'
import { DashboardUser } from '../screens/DashboardUser'
import { Qr } from '../screens/Qr'
import { LoginUser } from '../screens/LoginUser'
import { CadUser } from '../screens/CadUser'
import { Welcome } from '../screens/Welcome'
import { LoadingScreen } from '../screens/LoadingScreen'

const AuthStack = createStackNavigator();

export function AuthRoutes() {

  const [isloggedin, setLogged] = useState(false)

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('@QrApi:token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }

  }

  useEffect(() => {

    detectLogin()

  }, [])


  return (
    <AuthStack.Navigator headerMode="none">

      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="LoginUser" component={LoginUser} />
      <AuthStack.Screen name="LoadingScreen" component={LoadingScreen} />
      <AuthStack.Screen name="CadUser" component={CadUser} />
      <AuthStack.Screen name="DashboardUser" component={DashboardUser} />  
      <AuthStack.Screen name="Qr" component={Qr} />     

    </AuthStack.Navigator>


  )
}

export default AuthRoutes;

/*




*/