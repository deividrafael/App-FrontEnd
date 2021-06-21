import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert, ScrollView, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
//import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import api from '../services/api'


export function LoginUser({navigation}) {


    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');
    const [load, setLoad] = useState(true);

    const handleCad = () => {
        navigation.navigate('CadUser')
    }

    const handleLogin = async () => {
        api.post('/auth',
            {
                "email": email,
                "password": pass
            }).then(
                async res => {
                    try {
                        const { user, token } = res.data
                        await AsyncStorage.multiSet([
                            ['@QrApi:token', res.data.token],
                            ['@QrApi:user', JSON.stringify(res.data.user)]

                        ])
                        navigation.navigate('Tabs')
                        //console.log(user)
                        setUser({ user })
                    } catch (res) {
                        console.log(res.data.error)
                    }
                },
                setLoad(false)
            ).catch(error => {
                Alert.alert(
                    "Erro",
                    "Usuario ou senha inválidos",
                    [

                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
                setLoad(true)
            })
            

    };

    if (!load) {
        return (
            <View style={styles.containerLoad}>
                <ActivityIndicator
                    size="large"
                    color='#1877F2'
                />
            </View>
        )


    } else {

        return (

            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <KeyboardAvoidingView
                        behavior='position'>

                        <View style={styles.positionLogo}>
                            <Image style={styles.logo} source={require('../assets/logo.png')} />
                        </View>

                        <TextInput
                            placeholder='Email'
                            style={styles.form}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            value={email}

                        />

                        <TextInput
                            placeholder='Senha'
                            style={styles.form}
                            secureTextEntry
                            onChangeText={setPass}
                            value={pass}

                        />


                        <View style={styles.positionBtn}>
                            <Button
                                title='Login'
                                onPress={handleLogin}

                            />
                        </View >
                    </KeyboardAvoidingView>



                    <View style={styles.positionBtnSocial}>
                        <TouchableOpacity>
                            <Text style={styles.textCad}>Esquci minha senha</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.positionBtnSocial}>
                        <TouchableOpacity onPress={handleCad}>
                            <Text style={styles.textCad}>Não tem uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>

                </View >

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    containerLoad: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    positionLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 254,
        height: 156,
        marginBottom: 20

    },
    positionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    positionBtnSocial: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    form: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 40,
        borderWidth: 1,
        marginTop: 15,
        marginVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderColor: '#1877F2',
        paddingVertical: 2,
        height: 50


    },
    textCad: {
        fontFamily: fonts.text,
        fontSize: 15
    }

})

