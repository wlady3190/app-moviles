import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as FileSystem from 'expo-file-system'

export default function RegisterScreen({ navigation }) {



    const [user, setuser] = useState('')
    const [email, setemail] = useState('')
    const [url, seturl] = useState('')
    const [pass, setpass] = useState('')
    const [pass2, setpass2] = useState('')

    const [cuenta, setcuenta] = useState()

    const [registros, setregistros] = useState([])

    console.log(registros)

    function navigateLogin() {
        navigation.navigate('Login')
    }

    useEffect(() => {
        cargar()
    }, [])


    const guardar = async () => {
        try {
            const file = `${FileSystem.documentDirectory}usuarios.json`
            await FileSystem.writeAsStringAsync(file, JSON.stringify(registros))
            console.log('Datos guardados');
            const file2 = `${FileSystem.documentDirectory}usuarios.json`
            await FileSystem.writeAsStringAsync(file2, JSON.stringify(registros))
            console.log('Datos guardados');


        } catch (error) {
            console.log(error);
        }
    }

    const cargar = async () => {
        try {
            const file = `${FileSystem.documentDirectory}usuarios.json`
            const existe = await FileSystem.getInfoAsync(file)
            if (existe.exists) {
                const contenido = await FileSystem.readAsStringAsync(file)
                const datos = JSON.parse(contenido)
                setregistros(datos)
                console.log('Datos cargados');
            }


        } catch (error) {
            console.log(error);
        }

    }

    function registrar(user, email, url, pass, pass2) {
        if (pass === pass2) {
            let temp = [...registros, { user, email, url, pass }]
            setregistros(temp)
            setuser('')
            setemail('')
            seturl('')
            setpass('')
            setpass2('')
            guardar()
            navigateLogin()
        } else {
            Alert.alert("ADVERTENCIA", "los campos de password deben ser iguales")
        }
    }


    return (
        <ImageBackground style={styles.container} source={require('../assets/images/fondo2.jpg')}>
            <Text style={{ fontSize: 40, color: 'white' }}> Create Account</Text>
            <Image style={styles.imageprofile} source={require('../assets/images/usuariodefault.jpg')} ></Image>
            <TextInput style={styles.txtInput} placeholder='Usuario'
                onChangeText={(text) => setuser(text)}
                value={user}></TextInput>
            <TextInput style={styles.txtInput} placeholder='Correo'
                onChangeText={(text) => setemail(text)}
                value={email}></TextInput>
            <TextInput style={styles.txtInput} placeholder='Url imagen'
                onChangeText={(text) => seturl(text)}
                value={url}></TextInput>
            <TextInput style={styles.txtInput} placeholder='Contraseña' secureTextEntry
                onChangeText={(text) => setpass(text)}
                value={pass}></TextInput>
            <TextInput style={styles.txtInput} placeholder='Repita la contraseña' secureTextEntry
                onChangeText={(text) => setpass2(text)}
                value={pass2}></TextInput>

            <TouchableOpacity style={styles.buttonEnter} onPress={() => (registrar(user, email, url, pass, pass2))}>
                <Text style={styles.txtButon}>Registrarse</Text>
            </TouchableOpacity>


        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageprofile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 25

    },
    txtInput: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginVertical: 8,
        width: '80%',
        // Add border and shadow properties
        borderWidth: 2,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Only for Android

    },
    buttonEnter: {
        backgroundColor: '#007BFF', // Button background color
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButon: {
        color: '#FFFFFF', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    }

})