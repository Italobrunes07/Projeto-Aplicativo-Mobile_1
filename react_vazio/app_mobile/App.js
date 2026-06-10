import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>História da Internet</Text>

      <Text style={styles.subtitulo}>
        Conheça um dos principais responsáveis pela criação da Web
      </Text>

      <Text style={styles.texto}>
        Tim Berners-Lee é um cientista da computação britânico conhecido por
        criar a World Wide Web (WWW) em 1989. Seu objetivo era facilitar o
        compartilhamento de informações entre pesquisadores ao redor do mundo.
      </Text>

      <Text style={styles.texto}>
        Em 1991, o primeiro site da história foi colocado no ar, marcando o
        início da revolução digital que transformou a comunicação, os estudos,
        os negócios e o entretenimento.
      </Text>

      <Text style={styles.texto}>
        Graças ao trabalho de Tim Berners-Lee e de muitos outros pesquisadores,
        hoje bilhões de pessoas utilizam a internet diariamente para acessar
        informações, estudar, trabalhar e se conectar com outras pessoas.
      </Text>

      <Text style={styles.rodape}>
        Desenvolvido por Vinicius de Sousa Barbosa
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f6f9',
    padding: 25,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
  },

  texto: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 15,
  },

  rodape: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
});