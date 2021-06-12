import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


export function Qr() {

    function handleDash() {
        navigation.navigate('DashboardUser');

    }
 
    async function dataUser(){
        const res= await AsyncStorage.getItem('@QrApi:user')
        setUser(res)
    }

    async function loadData() {

        const response = await api.get('/user')

        console.warn(response)
    }

        const [qrValue, setQrValue] = useState('');

        return (

            <View style={styles.container}>

                <View style={styles.areaQr}>
                    <QRCode
                        value={qrValue ? qrValue : 'NA'}
                        size={250}
                        color="black"
                        backgroundColor="white"
                        logoSize={30}
                        logoMargin={2}
                        logoBorderRadius={15}
                        logoBackgroundColor="yellow"
                    />

                </View>



                <View style={styles.positionBtn}>
                    <Button
                        onPress={() => dataUser()}
                        title="Gerar QR Code"
                    />
                </View>

                <View style={styles.positionBtn}>
                    <Button
                        title='Voltar'
                        onPress={handleDash}

                    />
                </View >


            </View>

        )
    }



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        areaQr: {
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30,
            width: 350,
            height: 375,
            //backgroundColor: 'red',
            margin: 20,
            marginTop: 10


        },
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            marginBottom: 10

        },
        positionBtn: {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
        },





    })
