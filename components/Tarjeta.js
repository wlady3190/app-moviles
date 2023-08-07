import { View, Text , Image , StyleSheet , Button} from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta(prop) {
 const [num, setnum] = useState(0)
    
  return (
    <View style={styles.container}>
      <View >
            <View>
            <Image 
                />
            </View>
            <View>
                <Text>
                    {prop.datos.marca} {"\n"}
                    {prop.datos.modelo}   {prop.datos.precio}
                </Text>

            </View>
        </View>
        <View style={styles.container}>
      
      <View style={styles.cont}>
        <Button title="disminuir" onPress={() => setnum(num-1)} />
        <Text style={{ fontSize: 25 }}> {num} </Text>
        <Button title="aumentar" onPress={() => setnum(num+1)}></Button>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    cont: {
      flexDirection: "row",
      marginBottom: 10,
    },
  });