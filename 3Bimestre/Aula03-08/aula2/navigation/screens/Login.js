import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    navigation.navigate("Dashboard");
  }

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.logoTexto}>APP</Text>
      </View>

      <Text style={styles.titulo}>
        Bem-vindo!
      </Text>

      <Text style={styles.subtitulo}>
        Faça login para continuar
      </Text>

      <Text style={styles.label}>
        E-mail
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

      <Text style={styles.label}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrar}
      >
        <Text style={styles.textoBotao}>
          ENTRAR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Base")}
      >
        <Text style={styles.esqueceu}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      <View style={styles.linha} />

      <Text style={styles.pergunta}>
        Ainda não possui uma conta?
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.cadastro}>
          Criar uma conta
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 25,
  },

  logoTexto: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#111111",
  },

  subtitulo: {
    textAlign: "center",
    color: "#777777",
    fontSize: 16,
    marginTop: 8,
    marginBottom: 35,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 7,
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
    marginTop: 5,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  esqueceu: {
    textAlign: "center",
    color: "#0066FF",
    marginTop: 22,
    fontSize: 15,
    fontWeight: "600",
  },

  linha: {
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 25,
  },

  pergunta: {
    textAlign: "center",
    color: "#777777",
    fontSize: 14,
  },

  cadastro: {
    textAlign: "center",
    color: "#0066FF",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

