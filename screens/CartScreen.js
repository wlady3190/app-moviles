import { View, Text, FlatList, StyleSheet, Button, Image, ImageBackground, Alert, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import Tarjeta from '../components/Tarjeta'
import motosData from '../assets/data/motos.json'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons';

import * as FileSystem from 'expo-file-system'
import { useCarritoContext } from '../context/CarritoContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import ModalCart from '../components/ModalCart'
import { MaterialIcons } from '@expo/vector-icons';

export default function CartScreen(props) {
  // console.log(props.route.params);
  const navigation = useNavigation()


  const [items, setItems] = useState([])
  const [cantidades, setCantidades] = useState(items.map(() => 0))


  useEffect(() => {
    setItems(props.route.params.carrito)


  }, [])

  useEffect(() => {
    setCantidades(new Array(items.length).fill(0));
  }, [items]);

  // useEffect(() => {


  // }, [])
  


  const aumentar = (index) => {
    const nuevasCantidades = [...cantidades];
    nuevasCantidades[index] += 1;
    setCantidades(nuevasCantidades);
    console.log(typeof cantidades);
  };

  const reducir = (index) => {
    if (cantidades[index] > 0) {
      const nuevasCantidades = [...cantidades];
      nuevasCantidades[index] -= 1;
      setCantidades(nuevasCantidades);
    } else {
      Alert.alert('Limite mínimo alcanzado');
    }
  };

  const comprar = () => {
    console.log(items);
  }

  function cancelar (){
    navigation.navigate('Account')

  }




  return (
    <ImageBackground source={require('../assets/images/fondo2.jpg')} style={styles.container}>
      <Text style={styles.textTitle}>Carrito</Text>
      <FlatList
        data={items}
        // keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.modelName}>{item.modelo}</Text>
              <Text style={styles.price}>Precio: ${item.precio}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.buttonText} onPress={() => (aumentar(index))}>
                    <Entypo name="triangle-up" size={18} color="#333333" />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.buttonText}>{cantidades[index]}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={() => (reducir(index))}>
                  <Text style={styles.buttonText}>
                    <Entypo name="triangle-down" size={18} color="#333333" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      // keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <ModalCart items={items} cantidades={cantidades} />
        <TouchableOpacity style={styles.footerButtonCancel} onPress={() => (setItems([]))} >
          <Text style={styles.footerButtonText}>CANCELAR </Text>
          <MaterialIcons name="remove-shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <Button title='Salir' color='red' onPress={()=>(cancelar())}/>
      </View>



    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: '6%',
    elevation: 4,
    width: '90%',
    height: 140,
    alignSelf: 'center',

  },
  image: {
    width: 150,
    height: 100,
    marginRight: 16,
    borderRadius: 4,
    objectFit: 'contain'


  },
  content: {
    flex: 1,
  },
  modelName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#555555',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 15
    // backgroundColor:'white',


  },
  footerButtonBuy: {
    backgroundColor: '#41d98a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row'
  },
  footerButtonCancel: {
    backgroundColor: '#d96f41',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom:15

  },
  footerButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textTitle: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  }
});