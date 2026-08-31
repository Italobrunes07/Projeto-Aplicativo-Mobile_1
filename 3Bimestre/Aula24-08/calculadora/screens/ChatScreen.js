import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function ChatScreen({ usuario, onVoltar }) {

  const [mensagem, setMensagem] = useState('');

  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      tipo: 'ia',
      texto: `Olá, ${usuario.nome}! 👋

Eu sou seu assistente de IA.

Já sei algumas coisas sobre você e posso conversar sobre seus objetivos, estudos, jogos e muito mais.

Como posso ajudar?`,
    },
  ]);

  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem() {

    if (mensagem.trim() === '' || carregando) {
      return;
    }

    const textoUsuario = mensagem.trim();

    setMensagem('');

    const novaMensagem = {
      id: Date.now(),
      tipo: 'usuario',
      texto: textoUsuario,
    };

    setMensagens((lista) => [
      ...lista,
      novaMensagem,
    ]);

    setCarregando(true);

    try {

      const resposta = await fetch(
        'https://crispy-space-orbit-5vq97xp4xxwqfv74x-3000.app.github.dev/chat',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            mensagem: textoUsuario,
            usuario: usuario,
          }),
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.erro);
      }

      setMensagens((lista) => [
        ...lista,
        {
          id: Date.now() + 1,
          tipo: 'ia',
          texto: dados.resposta,
        },
      ]);

    } catch (error) {

      console.log('Erro:', error);

      setMensagens((lista) => [
        ...lista,
        {
          id: Date.now() + 1,
          tipo: 'ia',
          texto:
            'Ops! Não consegui falar com a inteligência artificial agora. Verifique se o servidor está funcionando.',
        },
      ]);

    } finally {
      setCarregando(false);
    }
  }

  function sugestao(texto) {
    setMensagem(texto);
  }

  return (
    <View style={styles.container}>

      {/* TOPO */}

      <View style={styles.topo}>

        <TouchableOpacity
          style={styles.voltar}
          onPress={onVoltar}
        >
          <Text style={styles.voltarTexto}>
            ←
          </Text>
        </TouchableOpacity>

        <View style={styles.topoInfo}>

          <View style={styles.iaIcon}>
            <Text style={styles.iaIconTexto}>
              ✦
            </Text>
          </View>

          <View>

            <Text style={styles.titulo}>
              Assistente IA
            </Text>

            <Text style={styles.status}>
              ● Online
            </Text>

          </View>

        </View>

      </View>


      {/* CHAT */}

      <ScrollView
        style={styles.chat}
        contentContainerStyle={styles.chatContent}
        showsVerticalScrollIndicator={false}
      >

        {mensagens.map((item) => (

          <View
            key={item.id}
            style={[
              styles.mensagemContainer,
              item.tipo === 'usuario'
                ? styles.mensagemUsuario
                : styles.mensagemIA,
            ]}
          >

            {item.tipo === 'ia' && (

              <View style={styles.miniIcon}>

                <Text style={styles.miniIconTexto}>
                  ✦
                </Text>

              </View>

            )}

            <View
              style={[
                styles.balao,
                item.tipo === 'usuario'
                  ? styles.balaoUsuario
                  : styles.balaoIA,
              ]}
            >

              <Text
                style={[
                  styles.textoMensagem,
                  item.tipo === 'usuario'
                    ? styles.textoUsuario
                    : styles.textoIA,
                ]}
              >
                {item.texto}
              </Text>

            </View>

          </View>

        ))}


        {/* CARREGANDO */}

        {carregando && (

          <View style={styles.mensagemContainer}>

            <View style={styles.miniIcon}>

              <Text style={styles.miniIconTexto}>
                ✦
              </Text>

            </View>

            <View style={styles.balaoIA}>

              <ActivityIndicator
                size="small"
                color="#818cf8"
              />

            </View>

          </View>

        )}

      </ScrollView>


      {/* SUGESTÕES */}

      {!carregando && mensagens.length <= 1 && (

        <View style={styles.sugestoes}>

          <TouchableOpacity
            style={styles.sugestao}
            onPress={() =>
              sugestao('Me ajude com meu objetivo')
            }
          >
            <Text style={styles.sugestaoTexto}>
              🚀 Meu objetivo
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.sugestao}
            onPress={() =>
              sugestao('O que você sabe sobre mim?')
            }
          >
            <Text style={styles.sugestaoTexto}>
              👤 Sobre mim
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.sugestao}
            onPress={() =>
              sugestao('Me dê uma ideia para estudar')
            }
          >
            <Text style={styles.sugestaoTexto}>
              📚 Estudar
            </Text>
          </TouchableOpacity>

        </View>

      )}


      {/* INPUT */}

      <View style={styles.areaInput}>

        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#64748b"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />

        <TouchableOpacity
          style={[
            styles.enviar,
            mensagem.trim() === ''
              && styles.enviarDesativado,
          ]}
          onPress={enviarMensagem}
          disabled={
            mensagem.trim() === '' || carregando
          }
        >

          <Text style={styles.enviarTexto}>
            ↑
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },

  topo: {
    height: 80,
    backgroundColor: '#1e293b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },

  voltar: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  voltarTexto: {
    color: '#ffffff',
    fontSize: 25,
  },

  topoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iaIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  iaIconTexto: {
    color: '#ffffff',
    fontSize: 22,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  status: {
    color: '#4ade80',
    fontSize: 12,
    marginTop: 2,
  },

  chat: {
    flex: 1,
  },

  chatContent: {
    padding: 20,
    paddingBottom: 30,
  },

  mensagemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-end',
  },

  mensagemUsuario: {
    justifyContent: 'flex-end',
  },

  mensagemIA: {
    justifyContent: 'flex-start',
  },

  miniIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  miniIconTexto: {
    color: '#ffffff',
    fontSize: 16,
  },

  balao: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 17,
  },

  balaoIA: {
    backgroundColor: '#1e293b',
    borderBottomLeftRadius: 5,
  },

  balaoUsuario: {
    backgroundColor: '#6366f1',
    borderBottomRightRadius: 5,
    marginLeft: 'auto',
  },

  textoMensagem: {
    fontSize: 15,
    lineHeight: 21,
  },

  textoIA: {
    color: '#e2e8f0',
  },

  textoUsuario: {
    color: '#ffffff',
  },

  sugestoes: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },

  sugestao: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 20,
  },

  sugestaoTexto: {
    color: '#cbd5e1',
    fontSize: 12,
  },

  areaInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 15,
    backgroundColor: '#1e293b',
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },

  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 100,
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 15,
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
  },

  enviar: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  enviarDesativado: {
    opacity: 0.4,
  },

  enviarTexto: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

});