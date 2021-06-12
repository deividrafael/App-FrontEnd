import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api';


export function DashboardUser() {

    const navigation = useNavigation();

    function handleQr() {
        navigation.navigate('Qr');

    }


    

  

    const handleLogout = async () => {
        await AsyncStorage.removeItem('@QrApi:token').then(() => {
            navigation.replace('LoginUser');
            //console.log(AsyncStorage.getItem('@QrApi:token'))
        })

    }

    function handleQr() {
        navigation.replace('Qr');

    }

    return (

        <View style={styles.container}>

            <View style={styles.dashboard}>

                <TouchableOpacity onPress={handleLogout}>
                    <Text> Logout </Text>

                </TouchableOpacity>
                <View>

                    <TouchableOpacity>
                        <Image
                            style={styles.image}
                            source={require('../assets/Ellipse.png')}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>

                </View>

                <View>
                    <Text style={styles.dashLegendaHome}>Bem vindo { }</Text>
                </View>

            </View>



            <View style={styles.dashBack}>

                <View style={styles.dashArea}>

                    <View style={styles.dashAreaIcons}>

                        <TouchableOpacity >
                            <Image
                                style={styles.image}
                                source={require('../assets/card.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                        <Text style={styles.dashLegenda}>
                            Dados
                        </Text>


                    </View>


                    <View style={styles.dashAreaIcons}>

                        <TouchableOpacity onPress={handleQr}>
                            <Image
                                style={styles.image}
                                source={require('../assets/QRCode.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>

                        <Text style={styles.dashLegenda}>
                        Gerar QR
                        </Text>

                    </View>


                </View>
            </View>
        </View>

    )
}

export default DashboardUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    dashboard: {
        justifyContent: 'center',
        backgroundColor: '#1877F2',
        height: 350,
        alignItems: 'center',

    },
    imageLogin: {
        width: 150,
        height: 150,
        marginTop: 60

    },
    dashLegenda: {
        fontSize: 18,
        marginTop: 5,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: fonts.heading,
        color: '#000',
    },
    dashLegendaHome: {
        fontSize: 18,
        marginTop: 30,
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: fonts.heading,
        color: '#fff',
    },
    dashBack: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 480,

    },
    dashArea: {
        backgroundColor: '#EDEAEA',
        margin: 10,
        height: 450,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashAreaIcons: {
        width: 226,
        height: 170,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        padding: 10,
        borderRadius: 10

    },


})
