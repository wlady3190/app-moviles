import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import MainNavigation from '../Navigators/MainNavigator';
import { ScrollView } from 'react-native-gesture-handler';

export default function OptionsLoginScreen() {
    return (
        <ScrollView>


            <View style={styles.container}>
                <Text style={styles.title}>
                    Nosotros
                </Text>


                <View style={styles.container}>
                    <View style={styles.section}>
                        <Image source={require('../assets/images/imagenhome1.png')} style={styles.image} />
                        <Text style={styles.title}>Misión</Text>
                        <Text style={styles.description}>
                            Nuestra misión es proporcionar a nuestros clientes las mejores motocicletas y accesorios
                            de alta calidad, brindando un excelente servicio y garantizando la satisfacción total del
                            cliente.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Image source={require('../assets/images/imagenhome2.png')} style={styles.image} />
                        <Text style={styles.title}>Visión</Text>
                        <Text style={styles.description}>
                            Ser la empresa líder en la industria de motocicletas, reconocida por su calidad,
                            innovación y compromiso con el cliente, y expandir nuestra presencia a nivel nacional e
                            internacional.
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
        alignContent: 'center',
        justifyContent: 'center'
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        alignSelf:'center'
    },
    description: {
        fontSize: 16,
        color: '#333',
    },
});
