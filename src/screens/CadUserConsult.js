import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage'

import fonts from '../styles/fonts';
import { Button } from '../components/Button'
import api from '../services/api'


export function CadUserConsult() {

    const navigation = useNavigation();

    const [nasc, setNasc] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [tel, setTel] = useState('');
    const [cns, setCns] = useState('');
    const [gender, setGender] = useState('');
    const [typeblood, setType] = useState('');
    const [email, setEmail] = useState('');
    const [data, setData] = useState('');


    useEffect(() => {
        const res = AsyncStorage.getItem('@QrApi:user').then((value) => {
            const data = JSON.parse(value);
            setEmail(data.email);
            loadData();


        })

    }, [loadData()])

    async function loadData() {
        try {
            const response = await api.get(`/users/tes@tes`)
                .then(response => {
                    const res = response.data
                    setName(res.name)
                    setType(res.type)
                    setCns(res.cns)
                    console.log(email)
                })



        } catch (err) {
            console.log(err)
        }


    }

    useEffect(() => {
        loadData();
    }, [])



    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.positionText}>Aqui estão seus dados! </Text>
            </View>

            <Text style={styles.labelText}>Nome:</Text>

            <View style={styles.form}>
                <Text style={styles.textCad}>{name}</Text>
            </View>

            <Text style={styles.labelText}>CNS:</Text>

            <View style={styles.form}>
                <Text>{cns}</Text>
            </View>

            <Text style={styles.labelText}>Tipo Sanguíneo:</Text>

            <View style={styles.form}>
                <Text>{typeblood}</Text>
            </View>






            <View style={styles.positionBtn}>
                <Button
                    onPress={() => navigation.navigate('Tabs')}
                    title="Voltar"
                />
            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    positionText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
        paddingVertical: 30,
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: fonts.heading,
        fontSize: 20,
        paddingTop: 100

    },
    positionBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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
        marginVertical: 5

    },
    textCad: {
        fontFamily: fonts.text,
        fontSize: 15,

    },
    labelText: {
        marginVertical: 1,
        paddingVertical: 1,
        textAlign: 'left',
        fontFamily: fonts.heading,
        paddingLeft: 45
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


/**
 *  <ScrollView style={styles.container}>
                <View style={styles.container}>

                    <View >
                        <Text style={styles.positionText}>Precisamos de alguns dados para preencher sua ficha.{'\n'} Lembre-se que esses dados serão utilizados na ficha cadastral do hospital {'\n'} </Text>
                    </View>

                    <View style={styles.btnBack}>
                        <TouchableOpacity onPress={handleDash}>
                            <Entypo name="home" size={30} color="black" />
                            <Text>Home</Text>
                        </TouchableOpacity>
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
 */
