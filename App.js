import React from 'react';
import { View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo'
import { Rancho_400Regular, useFonts } from '@expo-google-fonts/rancho'

export default function App() {
  const [fontsLoaded] = useFonts({
    Rancho_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <KeyboardAvoidingView style = {styles.background}>
      <View style={styles.containerLogo}>
          <Image source={require('./src/assets/Group.png')} style={styles.logo}/>
      </View>

      <View style={styles.containerLogo}>
          <Text style={styles.nomeLogo}>Avante!</Text>
      </View>

      <View style={styles.container}>
        <TextInput 
          placeholder="E-mail" 
          placeholderTextColor="#fff"
          autoCorrect={false}
          onChangeText={ () => {} } 
          style={styles.input}>
        </TextInput>
        <TextInput 
          placeholder="Senha"
          placeholderTextColor="#fff" 
          autoCorrect={false} 
          onChangeText={ () => {} }
          style={styles.input}>
        </TextInput>
        
        <TouchableOpacity>
          <Text>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar conta gratuita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1A2D41'
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    top: 70,
    width: 300,
    height: 300
  },
  nomeLogo: {
    fontFamily: 'Rancho_400Regular',
    fontSize: 80,
    color: '#fff'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '90%'
  },
  input: {
    backgroundColor: '#27E19D',
    width: '90%',
    height: 50,
    marginBottom: 15,
    color: '#fff',
    fontSize: 15,
    borderRadius: 2,
    padding: 15
  }
})