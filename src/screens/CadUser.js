import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert, ScrollView, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import api from '../services/api'

export function CadUser() {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confemail, setConfEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confpass, setConfPass] = useState('');
    const [load, setLoad] = useState(true);

    const handleCad = () => {
        if (name === "") {
            alert("O campo nome é obrigatório");
            return false;
        }

        if (email === '') {
            alert("O campo email é obrigatório, insira um email válido");
            return false;
        }

        if (confemail != email) {
            alert("Os emails estão diferentes :(");
            return false;
        }

        if (confpass != pass) {
            alert("As senhas não conferem :(");
            return false;
        }
        console.log(email)
        console.log(pass)
        console.log(name)

        api.post('/api/users',
            {
                "email": confemail,
                "password": confpass,
                "name": name,
            }).then(
                response => {

                    Alert.alert(
                        "Sucesso",
                        "Dados salvos com sucesso",
                        [

                            { text: "OK", onPress: () => navigation.navigate('LoginUser') }
                        ],
                        { cancelable: false }
                    )
                },
                setLoad(false)

            ).catch(error => {
                Alert.alert(
                    "Erro",
                    "Usuario ou senha inválidosss",
                    [

                        { text: "OK", onPress: () => console.log() }
                    ],
                    { cancelable: false }
                );
                setLoad(true)
            })
    }

    const handleLogin = () => {
        navigation.navigate('LoginUser')
    }

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

                    <View >
                        <Text style={styles.positionText}>Cadastre se no QR Saude e ganhe{'\n'} mais tempo no seu atendimento!</Text>
                    </View>


                    <TextInput
                        placeholder='Nome'
                        style={styles.form}
                        autoCapitalize='words'
                        onChangeText={setName}

                    />

                    <TextInput
                        placeholder='Email'
                        style={styles.form}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={setEmail}
                    />


                    <TextInput
                        placeholder='Confirme se email'
                        style={styles.form}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={setConfEmail}
                    />

                    <TextInput
                        placeholder='Senha'
                        style={styles.form}
                        secureTextEntry
                        onChangeText={setPass}

                    />

                    <TextInput
                        placeholder='Confirme a senha'
                        style={styles.form}
                        secureTextEntry
                        onChangeText={setConfPass}

                    />


                    <View style={styles.positionBtn}>
                        <Button
                            title='Confirmar'
                            onPress={handleCad}
                        />
                    </View >

                    <View style={styles.positionBtnSocial}>
                        <TouchableOpacity
                            onPress={handleLogin}
                        >
                            <Text style={styles.textCad}>Faça Login!</Text>
                        </TouchableOpacity>
                    </View>





                </View >

            </ScrollView >

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
    positionText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
        paddingVertical: 30,
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: fonts.heading,
        fontSize: 20

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
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderColor: '#1877F2',
        height: 50,
        marginVertical: 30

    },
    textCad: {
        fontFamily: fonts.text,
        fontSize: 15
    },
    input: {
        width: '100%',
        color: '#999'
    }

})

