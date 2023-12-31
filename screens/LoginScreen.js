import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import userJSON from '../assets/data/users.json';
import * as FileSystem from 'expo-file-system'

export default function LoginScreen({ navigation }) {


  const [user, setuser] = useState('')
  const [pass, setpass] = useState('')
  // const [cuenta, setcuenta] = useState([])
  const [lista, setlista] = useState([])
  const [account, setaccount] = useState([])

  // const guardar = async () => {
  //   try {
  //     const file = `${FileSystem.documentDirectory}cuenta.json`
  //     await FileSystem.writeAsStringAsync(file, JSON.stringify(cuenta))
  //     console.log("datos guardados")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  useEffect(() => {
    cargar()
  }, [])

  // console.log(lista);

  function login(usuario, pass) {

    for (let item of lista) {
      if (usuario == item.user) {
        if (pass == item.pass) {
          // setcuenta([{ usuario, pass }]);
          // console.log(item);
          setaccount([item])
          handleLogin();
          break
        } 
      } 


    }

  }

  const cargar = async () => {
    try {
      const file = `${FileSystem.documentDirectory}usuarios.json`
      const existe = await FileSystem.getInfoAsync(file)
      if (existe.exists) {
        const contenido = await FileSystem.readAsStringAsync(file)
        const datos = JSON.parse(contenido)
        setlista(datos)
        // console.log(datos);
      }

    } catch (error) {
      console.log(error);
    }

  }


  const handleLogin = () => {
    navigation.navigate('NavStack', { item:[...account]})
    // console.log(item);
    console.log(account);
    // Implement login functionality here.
  };

  const handleRegister = () => {
    navigation.navigate('Register')

    // Implement navigation to the registration screen.
  };

  return (
    <ImageBackground style={styles.container} source={require('../assets/images/fondo2.jpg')}>
      <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
      <Text style={styles.txtSlogan}>AMERICAN MOTORS</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"

        autoCapitalize="none"
        onChangeText={(text) => setuser(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setpass(text)}
      />

      <TouchableOpacity style={styles.button} onPress={() => login(user, pass)}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.linkText}>¿No tienes una cuenta? Regístrate aquí</Text>
      </TouchableOpacity>

      {/* Footer with contact details or useful links */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contáctanos: correo@example.com</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  txtSlogan: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#67cf6a'
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
  },
  footerText: {
    color: 'gray',
  },
});

