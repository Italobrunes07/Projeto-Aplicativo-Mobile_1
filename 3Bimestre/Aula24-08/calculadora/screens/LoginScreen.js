import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function LoginScreen({ onContinuar }) {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [jogo, setJogo] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [cor, setCor] = useState('');

  const [erro, setErro] = useState('');

  function continuar() {
    if (
      nome.trim() === '' ||
      idade.trim() === '' ||
      cidade.trim() === '' ||
      jogo.trim() === '' ||
      objetivo.trim() === ''
    ) {
      setErro('Preencha todos os campos antes de continuar.');
      return;
    }

    setErro('');

    onContinuar({
      nome,
      idade,
      cidade,
      jogo,
      objetivo,
      cor: cor || '#6366f1',
    });
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>✦</Text>
          </View>

          <Text style={styles.titulo}>
            Crie seu perfil
          </Text>

          <Text style={styles.subtitulo}>
            Conte um pouco sobre você
          </Text>
        </View>

        <View style={styles.card}>

          <Text style={styles.label}>SEU NOME</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#64748b"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>IDADE</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade"
            placeholderTextColor="#64748b"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />

          <Text style={styles.label}>CIDADE</Text>

          <TextInput
            style={styles.input}
            placeholder="Onde você mora?"
            placeholderTextColor="#64748b"
            value={cidade}
            onChangeText={setCidade}
          />

          <Text style={styles.label}>JOGO FAVORITO</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: GTA V, FIFA, Minecraft..."
            placeholderTextColor="#64748b"
            value={jogo}
            onChangeText={setJogo}
          />

          <Text style={styles.label}>SEU OBJETIVO</Text>

          <TextInput
            style={[styles.input, styles.inputGrande]}
            placeholder="O que você quer alcançar?"
            placeholderTextColor="#64748b"
            multiline
            value={objetivo}
            onChangeText={setObjetivo}
          />

          <Text style={styles.label}>COR FAVORITA</Text>

          <View style={styles.cores}>

            <TouchableOpacity
              style={[styles.cor, { backgroundColor: '#6366f1' }]}
              onPress={() => setCor('#6366f1')}
            />

            <TouchableOpacity
              style={[styles.cor, { backgroundColor: '#22c55e' }]}
              onPress={() => setCor('#22c55e')}
            />

            <TouchableOpacity
              style={[styles.cor, { backgroundColor: '#ef4444' }]}
              onPress={() => setCor('#ef4444')}
            />

            <TouchableOpacity
              style={[styles.cor, { backgroundColor: '#f59e0b' }]}
              onPress={() => setCor('#f59e0b')}
            />

            <TouchableOpacity
              style={[styles.cor, { backgroundColor: '#ec4899' }]}
              onPress={() => setCor('#ec4899')}
            />

          </View>

          {erro !== '' && (
            <Text style={styles.erro}>
              {erro}
            </Text>
          )}

          <TouchableOpacity
            style={styles.botao}
            onPress={continuar}
          >
            <Text style={styles.botaoTexto}>
              Criar meu perfil
            </Text>

            <Text style={styles.seta}>
              →
            </Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.rodape}>
          Seu perfil será criado com as informações acima.
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scroll: {
    flexGrow: 1,
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    padding: 25,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 25,
  },

  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 20,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  icon: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  titulo: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 8,
  },

  card: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 25,
  },

  label: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 8,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 12,
  },

  inputGrande: {
    height: 85,
    paddingTop: 15,
    textAlignVertical: 'top',
  },

  cores: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 5,
    marginBottom: 20,
  },

  cor: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  erro: {
    color: '#f87171',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },

  botao: {
    height: 58,
    backgroundColor: '#6366f1',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoTexto: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  seta: {
    color: '#ffffff',
    fontSize: 25,
    marginLeft: 12,
  },

  rodape: {
    color: '#475569',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },

});