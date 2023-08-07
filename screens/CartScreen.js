import { View, Text, FlatList , StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Tarjeta from '../components/Tarjeta'
export default function CartScreen() {
    
    let lista=[
        {modelo: "z400",
        marca:"kawazaki",
        precio:"13500"        
    },
    {modelo: "z650",
        marca:"kawazaki",
        precio:"18000"        
    },
    {modelo: "z900",
        marca:"kawazaki",
        precio:"25000"        
    },
    {modelo: "z1000",
        marca:"kawazaki",
        precio:"33000"        
    },

    ]
  return (
    <View style={styles.container}>
      <FlatList
      data={lista}
      renderItem={({item})=>(
        <Tarjeta datos={item}/>
       
  )}
      
      />
      <View style={styles.cont}>
      <Button title='COMPRAR'/>
      <Button title='CANCELAR' color={'red'}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:250,
    flex: 1,
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont:{
    flexDirection: 'row'
  }
});
