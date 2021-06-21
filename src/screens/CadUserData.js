import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage'

import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import api from '../services/api'


export function CadUserData() {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const [nasc, setNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [tel, setTel] = useState('');
    const [cns, setCns] = useState('');
    const [gender, setGender] = useState('');
    const [typeblood, setType] = useState('');
    const [load, setLoad] = useState(true);

    const [user, setUser] = useState('');

    useEffect(() => {
        const res = AsyncStorage.getItem('@QrApi:user').then((value) => {
            const data = JSON.parse(value);
            setUser(data._id);
        })

    }, [])

    console.log(user)

    const handleCadData = () => {

        api.put(`/api/users/${user}`,
            {
                "dateNasc": nasc,
                "cpf": cpf,
                "cns": cns,
                "tel": tel,
                "gender": gender,
                "type": typeblood

            }).then(
                response => {

                    Alert.alert(
                        "Sucesso",
                        "Dados salvos com sucesso",
                        [

                            { text: "OK", onPress: () => navigation.goBack(setLoad(true)) }
                        ],
                        { cancelable: false }
                    )
                },
            ).catch(error => {
                Alert.alert(
                    "Erro",
                    "Usuario ou senha inválidos",
                    [

                        { text: "OK", onPress: () => console.log() }
                    ],
                    { cancelable: false }
                );
                setLoad(true)
            })
    }



    console.log(gender)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    console.log(date)

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
                        <Text style={styles.positionText}>Precisamos de alguns dados para preencher sua ficha.{'\n'} Lembre-se que esses dados serão utilizados na ficha cadastral do hospital {'\n'} </Text>
                    </View>

                    <TextInput
                        placeholder='Data de nascimento'
                        style={styles.form}
                        autoCapitalize='none'
                        keyboardType='default'
                        onChangeText={setNasc}
                    />

                    <TextInput
                        placeholder='CPF'
                        style={styles.form}
                        autoCapitalize='none'
                        keyboardType='numeric'
                        onChangeText={setCpf}
                    />


                    <TextInput
                        placeholder='Telefone'
                        style={styles.form}
                        autoCapitalize='none'
                        keyboardType='numeric'
                        onChangeText={setTel}
                    />

                    <TextInput
                        placeholder='CNS'
                        style={styles.form}
                        keyboardType='numeric'
                        onChangeText={setCns}

                    />

                    <View style={styles.labelText}>
                        <Text style={styles.textCad} >Genero:</Text>
                    </View>


                    <Picker
                        style={styles.pickerComponent}
                        selectedValue={gender}
                        mode='dialog'
                        onValueChange={
                            (itemValor, itemIndex) => {
                                setGender(itemValor)

                            }
                        }
                    >
                        <Picker.Item label="-" value="" />
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Feminino" value="Feminino" />

                    </Picker>

                    <View style={styles.labelText}>
                        <Text style={styles.textCad} >Tipo de Sangue:</Text>
                    </View>

                    <Picker
                        style={styles.pickerComponent}
                        selectedValue={typeblood}
                        mode='dialog'
                        onValueChange={
                            (itemValor, itemIndex) => {
                                setType(itemValor)

                            }
                        }
                    >

                        <Picker.Item label="-" value="" />
                        <Picker.Item label="A" value="A" />
                        <Picker.Item label="B" value="B" />
                        <Picker.Item label="AB" value="AB" />
                        <Picker.Item label="O" value="O" />

                    </Picker>

                    <View style={styles.positionBtn}>
                        <Button
                            title='Confirmar'
                            onPress={handleCadData}
                        />
                    </View >




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
        marginVertical: 30,
        paddingVertical: 10,
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
        marginVertical: 10

    },
    textCad: {
        fontFamily: fonts.text,
        fontSize: 15,

    },
    input: {
        width: '100%',
        color: '#999'
    },
    pickerComponent: {
        borderWidth: 1,
        borderColor: '#999',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        marginHorizontal: 40,

    },
    labelText: {
        marginVertical: 5,
        paddingVertical: 5,
        textAlign: 'left',
        fontFamily: fonts.heading,
        paddingLeft: 40
    },
    btnBack: {
        margin: 1,
        marginTop: 50,
        marginBottom: 1,
        backgroundColor: '#DCDCDC',
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'flex-start',
        height: 60,
        width: '100%',
        paddingLeft: 15
    }
})

