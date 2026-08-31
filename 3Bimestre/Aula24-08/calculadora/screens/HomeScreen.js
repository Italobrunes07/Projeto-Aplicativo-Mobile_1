import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function HomeScreen({ usuario, onEditar, onChat }) {

  const primeiraLetra =
    usuario.nome.trim().charAt(0).toUpperCase();

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>

        {/* TOPO */}

        <View style={styles.topo}>

          <View>
            <Text style={styles.pequeno}>
              MEU PERFIL
            </Text>

            <Text style={styles.titulo}>
              Olá, {usuario.nome}! 👋
            </Text>
          </View>

          <TouchableOpacity
            style={styles.editar}
            onPress={onEditar}
          >
            <Text style={styles.editarTexto}>
              Editar
            </Text>
          </TouchableOpacity>

        </View>


        {/* PERFIL */}

        <View
          style={[
            styles.perfil,
            { borderColor: usuario.cor },
          ]}
        >

          <View
            style={[
              styles.avatar,
              { backgroundColor: usuario.cor },
            ]}
          >
            <Text style={styles.avatarTexto}>
              {primeiraLetra}
            </Text>
          </View>

          <View style={styles.perfilInfo}>

            <Text style={styles.nome}>
              {usuario.nome}
            </Text>

            <Text style={styles.descricao}>
              Explorando novos objetivos 🚀
            </Text>

          </View>

        </View>


        {/* OBJETIVO */}

        <View
          style={[
            styles.frase,
            { backgroundColor: usuario.cor },
          ]}
        >

          <Text style={styles.fraseEmoji}>
            ✨
          </Text>

          <View style={styles.fraseConteudo}>

            <Text style={styles.fraseTitulo}>
              Seu objetivo
            </Text>

            <Text style={styles.fraseTexto}>
              "{usuario.objetivo}"
            </Text>

          </View>

        </View>


        {/* INFORMAÇÕES */}

        <Text style={styles.secao}>
          SOBRE VOCÊ
        </Text>

        <View style={styles.grid}>

          {/* IDADE */}

          <View style={styles.infoCard}>

            <Text style={styles.infoEmoji}>
              🎂
            </Text>

            <Text style={styles.infoLabel}>
              IDADE
            </Text>

            <Text style={styles.infoValor}>
              {usuario.idade} anos
            </Text>

          </View>


          {/* CIDADE */}

          <View style={styles.infoCard}>

            <Text style={styles.infoEmoji}>
              📍
            </Text>

            <Text style={styles.infoLabel}>
              CIDADE
            </Text>

            <Text style={styles.infoValor}>
              {usuario.cidade}
            </Text>

          </View>


          {/* JOGO */}

          <View style={styles.infoCard}>

            <Text style={styles.infoEmoji}>
              🎮
            </Text>

            <Text style={styles.infoLabel}>
              JOGO FAVORITO
            </Text>

            <Text style={styles.infoValor}>
              {usuario.jogo}
            </Text>

          </View>


          {/* COR */}

          <View style={styles.infoCard}>

            <Text style={styles.infoEmoji}>
              🎨
            </Text>

            <Text style={styles.infoLabel}>
              COR FAVORITA
            </Text>

            <View
              style={[
                styles.corEscolhida,
                { backgroundColor: usuario.cor },
              ]}
            />

          </View>

        </View>


        {/* CHATBOT */}

        <TouchableOpacity
          style={[
            styles.chatButton,
            { backgroundColor: usuario.cor },
          ]}
          onPress={onChat}
        >

          <View style={styles.chatIcon}>

            <Text style={styles.chatIconTexto}>
              ✦
            </Text>

          </View>

          <View style={styles.chatInfo}>

            <Text style={styles.chatTitulo}>
              Converse com a IA
            </Text>

            <Text style={styles.chatDescricao}>
              Seu assistente conhece o seu perfil
            </Text>

          </View>

          <Text style={styles.chatSeta}>
            →
          </Text>

        </TouchableOpacity>


        {/* RODAPÉ */}

        <View style={styles.final}>

          <Text style={styles.finalEmoji}>
            🚀
          </Text>

          <Text style={styles.finalTitulo}>
            Pronto para começar?
          </Text>

          <Text style={styles.finalTexto}>
            Esse perfil foi criado usando as
            informações que você digitou.
          </Text>

        </View>

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

  /* TOPO */

  topo: {
    width: '100%',
    maxWidth: 700,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  pequeno: {
    color: '#6366f1',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 5,
  },

  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  editar: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#334155',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  editarTexto: {
    color: '#cbd5e1',
    fontWeight: 'bold',
  },

  /* PERFIL */

  perfil: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#1e293b',
    borderRadius: 24,
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarTexto: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },

  perfilInfo: {
    marginLeft: 20,
    flex: 1,
  },

  nome: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  descricao: {
    color: '#94a3b8',
    fontSize: 14,
    marginTop: 5,
  },

  /* OBJETIVO */

  frase: {
    width: '100%',
    maxWidth: 700,
    borderRadius: 20,
    padding: 22,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  fraseEmoji: {
    fontSize: 32,
    marginRight: 15,
  },

  fraseConteudo: {
    flex: 1,
  },

  fraseTitulo: {
    color: '#e0e7ff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  fraseTexto: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  /* INFORMAÇÕES */

  secao: {
    width: '100%',
    maxWidth: 700,
    color: '#64748b',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 30,
    marginBottom: 12,
  },

  grid: {
    width: '100%',
    maxWidth: 700,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  infoCard: {
    width: '48%',
    minWidth: 150,
    flexGrow: 1,
    backgroundColor: '#1e293b',
    borderRadius: 18,
    padding: 20,
    minHeight: 140,
  },

  infoEmoji: {
    fontSize: 25,
    marginBottom: 15,
  },

  infoLabel: {
    color: '#64748b',
    fontSize: 10,
    fontWeight: 'bold',
  },

  infoValor: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
  },

  corEscolhida: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginTop: 7,
  },

  /* CHATBOT */

  chatButton: {
    width: '100%',
    maxWidth: 700,
    minHeight: 85,
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  chatIcon: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  chatIconTexto: {
    color: '#ffffff',
    fontSize: 25,
  },

  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },

  chatTitulo: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  chatDescricao: {
    color: '#e0e7ff',
    fontSize: 12,
    marginTop: 4,
  },

  chatSeta: {
    color: '#ffffff',
    fontSize: 28,
  },

  /* FINAL */

  final: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
  },

  finalEmoji: {
    fontSize: 35,
  },

  finalTitulo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },

  finalTexto: {
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },

});