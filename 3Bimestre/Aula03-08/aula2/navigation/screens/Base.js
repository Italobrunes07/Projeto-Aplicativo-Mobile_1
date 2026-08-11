import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Base({ navigation }) {
  const [email, setEmail] = useState("");

  function recuperarSenha() {
    if (email.trim() === "") {
      Alert.alert("Atenção", "Digite seu e-mail para continuar.");
      return;
    }

    Alert.alert(
      "E-mail enviado",
      "Se o e-mail estiver cadastrado, você receberá as instruções para recuperar sua senha."
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Esqueceu sua senha?</Text>

      <Text style={styles.subtitulo}>
        Não se preocupe! Digite seu e-mail e enviaremos
        as instruções para recuperar sua senha.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={recuperarSenha}
      >
        <Text style={styles.textoBotao}>
          RECUPERAR SENHA
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.voltar}>
          ← Voltar para o login
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
    paddingHorizontal: 30,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111111",
    textAlign: "center",
    marginBottom: 15,
  },

  subtitulo: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 35,
  },

  input: {
    height: 55,
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 20,
  },

  botao: {
    height: 55,
    backgroundColor: "#0066FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  voltar: {
    color: "#0066FF",
    textAlign: "center",
    marginTop: 25,
    fontSize: 15,
    fontWeight: "600",
  },
});