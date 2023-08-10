import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView, Button } from 'react-native'
import React, { useState } from 'react'
import motosData from '../assets/data/motos.json'
import MotoCard from '../components/MotoCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ProductsScreen({ navigation }) {

  const [carrito, setCarrito] = useState([])

  function agregar(item) {
    setCarrito([...carrito, item])
    console.log(carrito);
  }

  function irAlCarrito() {
    navigation.navigate('Cart', { carrito: [...carrito] })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textC}>
        <Text style={styles.title}>CATALOGO</Text>
        
          <TouchableOpacity  onPress={() => (irAlCarrito())}>
          <View style={styles.iconC}>
          <MaterialCommunityIcons name="cart-variant" size={24} color="white" />
        <Text style={styles.marca}>Ir a pagar</Text>
        </View>
          </TouchableOpacity>
      
      </View>

      <FlatList

        data={motosData}
        renderItem={({ item }) => (
          <View >
            <MotoCard item={item} />
            <TouchableOpacity style={styles.addToCartButton} onPress={() => (agregar(item))} >
              <Text style={styles.addToCartButtonText}>Añadir al carrito</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      

    </SafeAreaView>
  );
}


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
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  textC: {
    margin: 20,
    margin: 30,
    flexDirection:'row'
  },
  iconC:{
  alignItems:'center',
   marginLeft: '30%'

  }
});
