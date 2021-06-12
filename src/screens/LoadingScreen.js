import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/core';


export function LoadingScreen() {

    const navigation = useNavigation();


    const detectLogin = async () => {
        const token = await AsyncStorage.getItem('@QrApi:token')
        console.warn(token)
        if (token) {
           navigation.replace('DashboardUser')
        } else {
            navigation.replace('LoginUser')
        }

    }

    useEffect(() => {

        detectLogin()

    }, [])

    return (
        <>
            <View style={styles.container}>
                <ActivityIndicator size='large' color="#1877F2" />
            </View>

        </>
    );
}

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

