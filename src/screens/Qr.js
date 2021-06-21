import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import fonts from '../styles/fonts';




export function Qr() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const res = AsyncStorage.getItem('@QrApi:user').then((value) => {
            const data = JSON.parse(value);
            setUser([data._id]);
        })
    
    }, [])

    console.log(user)

    const navigation = useNavigation();

    const [qrValue, setQrValue] = useState('');    
        
    async function dataUser(){        
            setQrValue(user)
    }   

    function handleDash() {
        navigation.navigate('DashboardUser');

    }
        
        return (

            <View style={styles.container}>
    
                <View style={styles.areaQr}>   
               
                    <QRCode
                        value={qrValue ? qrValue : 'NA'}
                        size={300}
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
                    onPress={() => navigation.navigate('Tabs')}
                    title="Voltar"
                />
            </View>               

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
            padding: 10,
            width: 350,
            height: 400,
            margin: 20,
            marginTop: 30


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
        btnBack:{
            margin: 1,
            marginTop:50,
            marginBottom:1,
            backgroundColor: '#DCDCDC',
            flexDirection:'row',
            paddingTop: 10,
            justifyContent:'flex-start',
            height: 60,
            width:'100%',
            paddingLeft: 15
        },
        textCad: {
            fontFamily: fonts.text,
            fontSize: 15,   
        }

    })

    /*
    
    
    async function loadData() {

        const res = await AsyncStorage.getItem('@QrApi:token').then((value) => {
            const data = JSON.parse(value);
            console.log('name is ', data.name);
          })

        console.log(res)

        console.warn(response)
    }
    */