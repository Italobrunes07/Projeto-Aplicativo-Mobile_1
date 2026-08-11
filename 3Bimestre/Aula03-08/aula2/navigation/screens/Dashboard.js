import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View>
          <Text style={styles.ola}>Olá!</Text>
          <Text style={styles.nome}>Bem-vindo de volta 👋</Text>
        </View>

        <TouchableOpacity
          style={styles.perfil}
          onPress={() => alert("Perfil")}
        >
          <Text style={styles.perfilTexto}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>
          Tudo pronto!
        </Text>

        <Text style={styles.bannerTexto}>
          Acesse as funcionalidades do aplicativo.
        </Text>
      </View>

      <Text style={styles.secao}>
        Acesso rápido
      </Text>

      <View style={styles.cards}>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.icone}>📋</Text>
          <Text style={styles.cardTitulo}>Meus dados</Text>
          <Text style={styles.cardTexto}>
            Consulte suas informações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.icone}>🔔</Text>
          <Text style={styles.cardTitulo}>Notificações</Text>
          <Text style={styles.cardTexto}>
            Veja suas notificações
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.icone}>⚙️</Text>
          <Text style={styles.cardTitulo}>Configurações</Text>
          <Text style={styles.cardTexto}>
            Personalize o aplicativo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.icone}>❓</Text>
          <Text style={styles.cardTitulo}>Ajuda</Text>
          <Text style={styles.cardTexto}>
            Precisa de ajuda?
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.sair}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.sairTexto}>
          Sair da conta
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  ola: {
    fontSize: 16,
    color: "#777",
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginTop: 4,
  },

  perfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },

  perfilTexto: {
    fontSize: 24,
  },

  banner: {
    backgroundColor: "#0066FF",
    borderRadius: 18,
    padding: 25,
    marginBottom: 30,
  },

  bannerTitulo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  bannerTexto: {
    color: "#E8F0FF",
    fontSize: 15,
  },

  secao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 15,
  },

  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 2,
  },

  icone: {
    fontSize: 30,
    marginBottom: 12,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },

  cardTexto: {
    fontSize: 13,
    color: "#777",
    lineHeight: 18,
  },

  sair: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 30,
  },

  sairTexto: {
    color: "#E53935",
    fontWeight: "bold",
    fontSize: 15,
  },
});