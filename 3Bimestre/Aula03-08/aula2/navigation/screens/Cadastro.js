import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { cadastrarUsuario } from "../database/database";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    if (!nome || !email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      cadastrarUsuario(nome, email, senha);

      Alert.alert(
        "Cadastro realizado!",
        "Usuário cadastrado com sucesso.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        "Esse e-mail já pode estar cadastrado."
      );
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Criar conta</Text>

      <Text style={styles.subtitulo}>
        Preencha os dados abaixo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
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

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.textoBotao}>
          CADASTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.voltar}>
          Já tenho uma conta
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    marginTop: 8,
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
    marginBottom: 18,
  },

  botao: {
    height: 55,
    backgroundColor: "#0066FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  voltar: {
    textAlign: "center",
    color: "#0066FF",
    marginTop: 25,
    fontSize: 15,
    fontWeight: "600",
  },
});