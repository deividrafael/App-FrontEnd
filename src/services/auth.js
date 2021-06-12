import React, {useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import api from '../services/api'



export async function Login (email, pass) {    

    const navigation = useNavigation();
    console.log(email)
    api.post('/auth',
            {
                "email": email,
                "password": pass
            }).then(
                async res => {
                    try {
                        await AsyncStorage.multiSet([
                            ['@QrApi:token', res.data.token],
                            ['@QrApi:user', JSON.stringify(res.data.user)]
                        ])
                        console.log('token ok')
                        signed(true)
                        navigation.navigate('DashboardUser')
                    } catch (error) {
                        console.log(error)
                    }
                }
            ).catch(error => {
                Alert.alert(
                    "Erro",
                    "Usuario ou senha inválidos",
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            })
}

export default Login

