import { View, Text, Modal, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'


import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ModalCart(props) {
    console.log(props.items[0]);

    const [modal, setModal] = useState(false)
    const [productos, setProductos] = useState([])
    const [cantidadProductos, setcantidadProductos] = useState([])
    const [suma, setSuma] = useState()


    useEffect(() => {
        setProductos(props.items)
        setcantidadProductos(props.cantidades)
    }, [])
    
    const calcularSumaTotal = () => {

        let sumaTotal = 0;
        for (let i = 0; i < productos.length; i++) {
            sumaTotal += productos[i].precio * cantidadProductos[i];
            console.log(productos[i].precio);
            console.log(cantidadProductos[i]);
        }
        setSuma(sumaTotal)
        setModal(true)
    };

    return (
        <View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonBuy} onPress={() => calcularSumaTotal()}>
                    <Text style={styles.footerButtonText}>COMPRAR </Text>
                    <MaterialCommunityIcons name="cart-check" size={24} color="black" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButtonCancel}>
                    <Text style={styles.footerButtonText}>CANCELAR </Text>
                    <MaterialIcons name="remove-shopping-cart" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Modal transparent={true} visible={modal} >
                <View style={styles.container}>
                    <Text style={styles.textTitle}>DETALLE DE FACTURA</Text>
                    <Text style={styles.footerButtonText}>Total a Pagar: USD {suma}</Text>
                    <Text style={styles.footerButtonText}>Gracias por su compra!</Text>
                    <Button title='Finalizar' onPress={()=>(setModal(false))} />
                </View>
            </Modal>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingTop: 32,
        opacity:0.75,
        backgroundColor:'#ccc',
        alignItems:'center',
        justifyContent:'center'
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
        flexDirection: 'row'

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
        color: 'black'
    }
});