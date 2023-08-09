import { View, Text, FlatList, StyleSheet, Button, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Tarjeta from '../components/Tarjeta'
import motosData from '../assets/data/motos.json'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function CartScreen() {

  return (
    <ImageBackground source={require('../assets/images/fondo2.jpg')} style={styles.container}>
      <Text style={styles.textTitle}>Carrito</Text>
      <FlatList
        data={motosData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <View style={styles.content}>
              <Text style={styles.modelName}>{item.modelo}</Text>
              <Text style={styles.price}>Precio: ${item.precio}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.buttonText}>
                    <Entypo name="triangle-up" size={18} color="#333333" />
                  </Text>
                </TouchableOpacity>
                <Text style={styles.buttonText}>1</Text>
                <TouchableOpacity style={styles.quantityButton}>
                  <Text style={styles.buttonText}>
                    <Entypo name="triangle-down" size={18} color="#333333" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />


      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButtonBuy}>
          <Text style={styles.footerButtonText}>COMPRAR </Text>
          <MaterialCommunityIcons name="cart-check" size={24} color="black" />

        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButtonCancel}>
          <Text style={styles.footerButtonText}>CANCELAR </Text>
          <MaterialIcons name="remove-shopping-cart" size={24} color="black" />
        </TouchableOpacity>
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
    justifyContent:'center',
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
    objectFit:'contain'


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
    marginBottom:15
    // backgroundColor:'white',


  },
  footerButtonBuy: {
    backgroundColor: '#41d98a',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection:'row'
  },
  footerButtonCancel: {
    backgroundColor: '#d96f41',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection:'row'

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
    color:'white'
  }
});