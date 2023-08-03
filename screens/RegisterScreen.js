import { View, Text, ImageBackground, StyleSheet, Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {

    function navigateLogin() {
        navigation.navigate('LoginStack')
    }
  return (
    <ImageBackground style={styles.container} source={require('../assets/images/fondo2.jpg')}>
    <Text style={{fontSize:40, color:'white'}}> Create Account</Text>
    <Image style={styles.imageprofile} source={require('../assets/images/usuariodefault.jpg')} ></Image>
    <TextInput style={styles.txtInput}  placeholder='Nombre'></TextInput>
    <TextInput  style={styles.txtInput} placeholder='Apellido'></TextInput>
    <TextInput  style={styles.txtInput} placeholder='Correo'></TextInput>
    <TextInput  style={styles.txtInput} placeholder='Contraseña' secureTextEntry></TextInput>
    <TextInput  style={styles.txtInput} placeholder='Repita la contraseña' secureTextEntry></TextInput>

    <TouchableOpacity style={styles.buttonEnter} onPress={()=>(navigateLogin())}>
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
    imageprofile:{
        width:100,
        height:100,
        borderRadius:50,
        marginVertical:25

    },
    txtInput:{
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
    buttonEnter:{
        backgroundColor: '#007BFF', // Button background color
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButon:{
        color: '#FFFFFF', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
    }

})