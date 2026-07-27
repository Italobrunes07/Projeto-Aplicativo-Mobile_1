import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/aurora.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ddd"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ddd"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    marginHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 25,
    borderRadius: 15,
  },

  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});