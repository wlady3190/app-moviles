import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import MainNavigation from '../Navigators/MainNavigator';

export default function OptionsLoginScreen() {
    return (
        <View style={styles.container}>
            <Text>
                Bienvenidos a la tienda virtual
            </Text>
            <View style={styles.containerImg}>


                <Image style={styles.img} source={require('../assets/images/imagenhome1.png')} />
                <Text style={styles.txt}>
                    Nuestra empresa se dedica a la compra y ventra de motos, actualmente contamos con una sucursal en la ciuda de Quito.
                </Text>

            </View>
            <View style={styles.containerImg}>

                <Text style={styles.txt}>
                    Contamos con motos nacionales e internacionales, así como accesorios para todos los gustos
                </Text>
                <Image style={styles.img} source={require('../assets/images/imagenhome2.png')} />

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    containerImg: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    img: {
        width: 100,
        height: 150,
        borderRadius: 8,
        marginRight: 20,
        backgroundColor: '#ccc',
    },
    txt: {
        flex: 1,

        color: 'white',
        fontSize: 16,
    },
});
