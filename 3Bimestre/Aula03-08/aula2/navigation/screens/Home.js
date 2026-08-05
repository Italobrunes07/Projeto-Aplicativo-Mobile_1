import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login realizado com sucesso!
      </Text>

      <Text style={styles.texto}>
        Seja bem-vindo ao aplicativo.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textoBotao}>
          SAIR
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
  },

  texto: {
    fontSize: 18,
    color: "#666",
    marginTop: 10,
    marginBottom: 40,
  },

  botao: {
    backgroundColor: "#0066FF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});