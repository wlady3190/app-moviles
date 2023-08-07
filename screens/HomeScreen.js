import { View, Text, Image, StyleSheet, Button, ImageBackground } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
// import BottomNavigator from '../Navigators/ButtonNavigator'



export default function HomeScreen() {

  return (

    <Swiper>

      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      {/* <BottomNavigator/> */}
    </Swiper>


  )
}

export function ScreenOne() {
  return (
    <View style={styles.container} >

      <Image source={require('../assets/images/wrapper-img1.jpeg')} />


    </View>
  );
};

export function ScreenTwo() {
  return (
    <View style={styles.container} >
      <Image source={require('../assets/images/wrapper-img2.jpeg')} />
    </View>
  );
};



export function ScreenThree() {


  const navigation = useNavigation()
  function NavegarHome() {
    navigation.navigate('Login')
  }
  return (
    <ImageBackground source={require('../assets/images/wrapper-img-4.jpeg')} style={styles.container}>
      <TouchableOpacity style={styles.navegar} onPress={NavegarHome}>
        <Text style={styles.txt}>Ingresar</Text>
      </TouchableOpacity>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: 'red'

  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },

  txt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',

  },
  navegar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    bottom: 50

  }

});