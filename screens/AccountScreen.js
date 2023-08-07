import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function AccountScreen(prop) {
    
  return (
    <View style={styles.container}>


    
    <Image style={styles.img_profile} source={require('../assets/images/profile.jpg')}/>
    <View style={styles.box}>
        <View>
        <AntDesign style={styles.icon} name="idcard" size={24} color="black" />
        </View>
        <View>
            <Text style={styles.label}>Nombre Completo</Text>
            <Text style={styles.info}>Phylip J. Fry</Text>
        </View>
    </View>
    <View style={styles.box}>
        <View>
        <AntDesign style={styles.icon} name="user" size={24} color="black" />

        </View>
        <View>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.info}>fry_01</Text>
        </View>
    </View>


    <View styles={styles.categories}>

    
    <View style={styles.box}>
        <View>
        <MaterialIcons style={styles.icon}  name="phone-android" size={24} color="black" />

        </View>
        <View>
            <Text style={styles.label}>Número de celular</Text>
            <Text style={styles.info}>0912345678</Text>
        </View>
    </View>

    <View style={styles.box}>
        <View>
        <AntDesign style={styles.icon} name="mail" size={24} color="black" />
        </View>
        <View>
            <Text style={styles.label}>Correo electrónico</Text>
            <Text style={styles.info}>phylip.fry@planetexpress.com</Text>
        </View>
    </View>
    </View>



</View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
      alignItems: 'flex-start',
      justifyContent: 'center',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
  },
  subtitle: {
      fontSize: 18,

      marginVertical: 25

  },
  label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
      paddingTop:25
  },
  info: {
      fontSize: 16,
      marginBottom: 8,
  },
  message: {
      fontSize: 14,
      marginBottom: 8,
      fontWeight:'bold',
      paddingTop:20
  },
  box: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  icon: {
      margin: 20,
      alignSelf:'center'
  },
  autorizado:{
      backgroundColor:'white',
      width:100,
      color:'green',
      backgroundColor:'#87d69c',
      fontSize: 16,
      color: 'green',
      marginBottom: 8,
      borderRadius: 20, // Add borderRadius for rounded corners
      borderWidth: 2, // Add borderWidth to display a border
      borderColor: 'green', // Border color
      paddingVertical: 4, // Add padding to give some space around the text and the border
      paddingHorizontal: 8,
      flexDirection: 'row', // Align icon and text in a row
      alignItems: 'center', // Center the items vertically
      
  },
  categories:{
      borderWidth:2,
      borderColor:'black',
      padding:8
      
  },
  img_profile:{
    width:150,
    height:150,
    borderRadius:100, 
    alignSelf:'center'

  }

})