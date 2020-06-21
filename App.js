import React , { useState, useEffect }from 'react';
import { 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  Image, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated,
  Keyboard
} from 'react-native';
import { AppLoading } from 'expo'
import { Rancho_400Regular, useFonts } from '@expo-google-fonts/rancho'

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 90}))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({x: 300, y: 300}))

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 130,
        duration: 100,
      }),
    ]).start()
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 300,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 300,
        duration: 100,
      }),
    ]).start()
  }

  const [fontsLoaded] = useFonts({
    Rancho_400Regular
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <KeyboardAvoidingView style = {styles.background}>
      <View style={styles.containerLogo}>
          <Animated.Image 
            source={require('./src/assets/logo.png')} 
            style={{ 
              width: logo.x,
              height: logo.y 
            }}
          />
      </View>

      <Animated.View 
        style={[
          styles.container, 
          {
            opacity: opacity,
            transform: [ 
              { translateY: offset.y }
            ]
          }
          ]}
        >
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
        
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity >
          <Text style={styles.textRegister}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
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
    alignItems: "center",
    paddingTop: 100
  },
  nomeLogo: {
    fontFamily: 'Rancho_400Regular',
    fontSize: 100,
    color: '#fff'
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    paddingBottom: 30
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
  },
  btnSubmit: {
    backgroundColor: '#1C96F9',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginBottom: 15
  },
  submitText: {
    color:'#fff',
    fontSize: 18
  },
  textRegister: {
    color: '#fff',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
  }
})