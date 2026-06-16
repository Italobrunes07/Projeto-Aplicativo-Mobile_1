import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  return (
    <>
      <ConfettiCannon
        count={120}
        origin={{ x: -10, y: 0 }}
        fadeOut={true}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo}>🌐 História da Internet</Text>

          <Text style={styles.subtitulo}>
            Conheça a evolução da World Wide Web
          </Text>

          <Text style={styles.destaque}>
            👨‍💻 Tim Berners-Lee
          </Text>

          <Text style={styles.texto}>
            Tim Berners-Lee é um cientista da computação britânico conhecido por
            criar a World Wide Web (WWW) em 1989. Seu objetivo era facilitar o
            compartilhamento de informações entre pesquisadores ao redor do mundo.
          </Text>

          <View style={styles.timeline}>
            <Text style={styles.timelineTitulo}>📅 Linha do Tempo</Text>

            <Text style={styles.item}>🔹 1989 - Criação da WWW</Text>
            <Text style={styles.item}>🔹 1991 - Primeiro site publicado</Text>
            <Text style={styles.item}>🔹 2000 - Popularização mundial</Text>
            <Text style={styles.item}>🔹 Hoje - Bilhões de usuários conectados</Text>
          </View>

          <Text style={styles.texto}>
            Em 1991, o primeiro site da história foi colocado no ar,
            marcando o início da revolução digital que transformou a
            comunicação, os estudos, os negócios e o entretenimento.
          </Text>

          <Text style={styles.texto}>
            Graças ao trabalho de Tim Berners-Lee e de muitos outros
            pesquisadores, hoje bilhões de pessoas utilizam a internet
            diariamente para acessar informações, estudar, trabalhar e
            se conectar com outras pessoas.
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoTitulo}>📌 Curiosidade</Text>

            <Text style={styles.infoTexto}>
              O primeiro site da história ainda pode ser acessado e foi
              criado para explicar como funcionava a World Wide Web.
            </Text>
          </View>

          <Text style={styles.rodape}>
            Desenvolvido por Vinicius de Sousa Barbosa
          </Text>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eaf4ff',
    padding: 20,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },

  destaque: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    textAlign: 'center',
    marginBottom: 20,
  },

  texto: {
    fontSize: 16,
    lineHeight: 28,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },

  timeline: {
    backgroundColor: '#f1f5f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  timelineTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e40af',
  },

  item: {
    fontSize: 15,
    marginBottom: 8,
    color: '#333',
  },

  infoBox: {
    backgroundColor: '#dbeafe',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },

  infoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 5,
  },

  infoTexto: {
    color: '#333',
    lineHeight: 22,
  },

  rodape: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
});