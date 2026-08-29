import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    if (usuario === 'admin' && senha === '1234') {
      setErro('');
      onLogin();
    } else {
      setErro('Usuário ou senha incorretos');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>🧮</Text>

        <Text style={styles.titulo}>Calculadora</Text>

        <Text style={styles.subtitulo}>
          Faça login para continuar
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#94a3b8"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#94a3b8"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {erro !== '' && (
          <Text style={styles.erro}>{erro}</Text>
        )}

        <TouchableOpacity
          style={styles.botao}
          onPress={entrar}
        >
          <Text style={styles.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.dica}>
          Usuário: admin | Senha: 1234
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#1e293b',
    padding: 30,
    borderRadius: 20,
  },

  emoji: {
    fontSize: 55,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#334155',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  erro: {
    color: '#f87171',
    textAlign: 'center',
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dica: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 12,
  },
});