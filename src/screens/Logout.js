import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fonts from '../styles/fonts';
import { Button } from '../components/Button'


export function Logout() {

    const navigation = useNavigation();

    const handleLogout = async () => {

        await AsyncStorage.removeItem('@QrApi:token').then(() => {
            navigation.navigate('Welcome');
        })

    }

    return (
        <View style={styles.container}>

            <View style={styles.positionBtn}>
                <Button
                    title='Sair'
                    onPress={handleLogout}
                />
            </View>

        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    positionBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
})

/*





                 */