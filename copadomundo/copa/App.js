import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🏆 Copa do Mundo</Text>

      <Image
        source={require('./assets/copa.webp')}
        style={styles.imagem}
      />

      <Text style={styles.subtitulo}>
        O Maior Evento de Futebol do Mundo
      </Text>

      <Text style={styles.texto}>
        A Copa do Mundo FIFA é o torneio de futebol mais importante do planeta.
        Ela reúne seleções de diversos países em uma competição realizada a cada
        quatro anos.
      </Text>

      <Text style={styles.texto}>
        A primeira Copa do Mundo aconteceu em 1930, no Uruguai. Desde então,
        o torneio se tornou um dos eventos esportivos mais assistidos do mundo.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🌎 Curiosidades</Text>

        <Text style={styles.item}>
          ⚽ O Brasil é o país com mais títulos mundiais.
        </Text>

        <Text style={styles.item}>
          ⚽ A Copa acontece a cada 4 anos.
        </Text>

        <Text style={styles.item}>
          ⚽ Milhões de pessoas acompanham os jogos.
        </Text>

        <Text style={styles.item}>
          ⚽ A FIFA é a organizadora do torneio.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🏅 Maiores Campeões</Text>

        <Text style={styles.item}>🥇 Brasil - 5 títulos</Text>
        <Text style={styles.item}>🥈 Alemanha - 4 títulos</Text>
        <Text style={styles.item}>🥈 Itália - 4 títulos</Text>
        <Text style={styles.item}>🥉 Argentina - 3 títulos</Text>
      </View>

      <Text style={styles.rodape}>
        Trabalho desenvolvido por Vinicius de Sousa Barbosa
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4fff4',
    padding: 20,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#006400',
    marginBottom: 20,
  },

  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  texto: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 15,
    color: '#444',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },

  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#006400',
  },

  item: {
    fontSize: 16,
    marginBottom: 8,
  },

  rodape: {
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#006400',
  },
});