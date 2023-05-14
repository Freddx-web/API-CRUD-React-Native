/**
 * View From Users / Formulario de Usuario
 */
import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

export default ({route, navigation}) => {
  return (
    <>
      <View style={style.form}>
      <Text>Ingrese Email</Text>
        <TextInput
          style={style.input}
          placeholder="Email"
        /><Text>Ingrese Contraseña</Text>
        <TextInput
          style={style.input}
          placeholder="Contraseña"
        />
        <Button style={style.button} title="Iniciar Session"/>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  form: {
    padding: 12,
  }, 
  button:{
    borderWidth: 1,
    margin: 10,
    marginBottom: 10, 
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10, padding: 10
  }
})