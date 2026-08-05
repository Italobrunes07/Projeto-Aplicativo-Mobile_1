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

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.subtitulo}>
        Faça login para continuar
      </Text>

      <TextInput
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >
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
    width: 170,
    height: 170,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 30,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111",
  },

  subtitulo: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 40,
  },

  input: {
    backgroundColor: "#F5F5F5",
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 18,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#0066FF",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  esqueceu: {
    textAlign: "center",
    color: "#0066FF",
    marginTop: 25,
    fontSize: 15,
  },
});