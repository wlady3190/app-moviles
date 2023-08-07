import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';


export default function LoginScreen  ({navigation})  {
  
  const handleLogin = () => {
    navigation.navigate('NavStack')
    // Implement login functionality here.
  };

  const handleRegister = () => {
    navigation.navigate('Register')

    // Implement navigation to the registration screen.
  };

  return (
    <ImageBackground style={styles.container} source={require('../assets/images/fondo2.jpg') }>
      <Image source={require('../assets/images/logo1.png')} style={styles.logo} />
      <Text style={styles.txtSlogan}>AMERICAN MOTORS</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={()=>handleLogin()}>
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
    color:'#67cf6a'
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

