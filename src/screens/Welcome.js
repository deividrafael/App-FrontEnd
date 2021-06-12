import React, {useEffect} from 'react';
import { Dimensions, StyleSheet, View, Text, Image, SafeAreaView, Platform, TouchableOpacity } from 'react-native';

import { Button } from '../components/Button'
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';



export function Welcome() {

    const navigation = useNavigation();

   /* const detectLogin = async () => {
        const token = await AsyncStorage.getItem('@QrApi:token')
        if (token) {
          setLogged(true)
        } else {
          setLogged(false)
        }
    
      }
    
      useEffect(() => {
    
        detectLogin()
    
      }, [])*/

    function handleLogin() {
        navigation.navigate('LoginUser');

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.tittle}>
                    Ganhe mais tempo no seu atendimento e evite filas! {'\n'}
                </Text>

                <Image
                    style={styles.image}
                    source={require('../assets/fila.png')}
                    resizeMode='contain'
                />

                <Text style={styles.subtitle}>
                    Cadastre se em nossa plataforma e ganhe mais agilidade no seu atendimento {'\n'}
                </Text>



                <View style={styles.positionBtn}>
                    <Button
                        title='Descubra !'
                        onPress={handleLogin}

                    />
                </View >


            </View>

        </SafeAreaView>

    );
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    fila: {
        height: Dimensions.get('window').width * 0.5

    },
    tittle: {
        fontSize: 32,
        marginTop: 80,
        textAlign: 'center',
        fontFamily: fonts.heading,
        lineHeight: 36
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        fontFamily: fonts.text

    },
    positionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        resizeMode: 'contain',
        ...Platform.select({
            ios: {
                height: Dimensions.get('window').width * 0.5,

            },
            android: {
                height: Dimensions.get('window').width * 0.5,

            },
            default: {
                height: '50%',
                width: '50%',
            }
        })



    }
})

/*
  <Button title='Login' onPress={handleStart} />
                <Button title='Cadastre se!' onPress={handleStart} />


                <Button title='Nubia!' onPress={handleInfo} />


*/