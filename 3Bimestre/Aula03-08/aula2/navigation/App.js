import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import logo from "../assets/icon2.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo} />

      <Text style={styles.titulo}>Bem-vindo</Text>

      <Text style={styles.subtitulo}>
        Faça login para continuar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.esqueceu}>
          Esqueceu sua senha?
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

  logo: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 25,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginBottom: 40,
    marginTop: 8,
  },

  input: {
    backgroundColor: "#F7F7F7",
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  botao: {
    backgroundColor: "#007AFF",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  esqueceu: {
    color: "#007AFF",
    textAlign: "center",
    marginTop: 25,
    fontSize: 15,
    fontWeight: "600",
  },
});