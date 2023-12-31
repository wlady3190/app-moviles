import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system'
import { useCarritoContext } from '../context/CarritoContext';
import { useNavigation } from '@react-navigation/native';

const MotoCard = ({ item }) => {
  const navigation = useNavigation()
  const { setRutaArchivo } = useCarritoContext();

  const [carrito, setCarrito] = useState([])

  const guardar = async () => {

    try {
      const file = `${FileSystem.documentDirectory}carrito.json`
      await FileSystem.writeAsStringAsync(file, JSON.stringify(carrito))
      setRutaArchivo(file)
      console.log(file);

    } catch (error) {
      console.log(error)
    }

  }

  const agregar = () => {
    setCarrito([...carrito, item])
    // navigation.navigate('Cart', { carrito: carrito })



    guardar()
  }



  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: item.imagen }} style={styles.image} />
        <Text style={styles.modelo}>{item.modelo}</Text>
        <Text style={styles.marca}>{item.marca}</Text>
        <Text style={styles.anio}>{item.anio}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
        <Text style={styles.descripcion}>Precio: {item.precio}$</Text>
      </View>
      {/* <TouchableOpacity style={styles.addToCartButton} onPress={()=>(agregar())}> */}


    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.3)',
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10,
    borderRadius: 5,
    resizeMode: 'contain'
  },
  detailsContainer: {
    flex: 1,
  },
  modelo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  marca: {
    fontSize: 14,
    color: 'white'
  },
  anio: {
    fontSize: 14,
    color: 'white'
  },
  descripcion: {
    fontSize: 14,
    color: 'white'
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MotoCard;