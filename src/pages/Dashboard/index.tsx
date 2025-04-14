import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'

export default function Dashboard(){
  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>()
  const [number, setNumber] = useState('')

  async function openOrder() {
    if (number === '') {
      return
    }

    // Fazer a requisição, abrir a mesa e navegar para a próxima tela
    navigation.navigate('Order', { number: number, order_id: '1d0c4af1-74ce-4189-8e39-5dc41cf102b1' })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo pedido</Text>

      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='Numero da mesa'
        placeholderTextColor={"#F0F0F0"}
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir Mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1d1d2e'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24
  },

  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 22,
    color: '#fff'
  },
  
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: '#101026',
    fontWeight: 'bold'
  }
})