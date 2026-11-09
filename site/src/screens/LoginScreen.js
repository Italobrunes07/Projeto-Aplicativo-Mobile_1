
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function entrar() {
    if (!email.trim() || !senha) return Alert.alert('Atenção', 'Informe o e-mail e a senha.');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      navigation.replace('Home');
    } catch (e) {
      Alert.alert('Não foi possível entrar', e.code === 'auth/invalid-credential' ? 'E-mail ou senha incorretos.' : 'Confira os dados e verifique sua conexão com o Firebase.');
    } finally { setLoading(false); }
  }

  return <ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled">
    <View style={s.card}>
      <Text style={s.logo}>VendaHub</Text>
      <Text style={s.title}>Suas vendas, organizadas.</Text>
      <Text style={s.sub}>Entre para gerenciar produtos, clientes e vendas em um só lugar.</Text>
      <Text style={s.label}>E-mail</Text>
      <TextInput style={s.input} value={email} onChangeText={setEmail} placeholder="voce@email.com" placeholderTextColor="#94A3B8" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
      <Text style={s.label}>Senha</Text>
      <TextInput style={s.input} value={senha} onChangeText={setSenha} placeholder="Sua senha" placeholderTextColor="#94A3B8" secureTextEntry />
      <TouchableOpacity style={s.button} onPress={entrar} disabled={loading}><Text style={s.buttonText}>{loading ? 'Entrando...' : 'Entrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={s.link}><Text style={s.linkText}>Ainda não tem conta? <Text style={{ color: '#4ADE80', fontWeight: 'bold' }}>Criar conta</Text></Text></TouchableOpacity>
    </View>
  </ScrollView>;
}
const s = StyleSheet.create({
 page:{flexGrow:1,justifyContent:'center',padding:22,backgroundColor:'#0F172A'},
 card:{width:'100%',maxWidth:480,alignSelf:'center',padding:28,backgroundColor:'#1E293B',borderRadius:20,borderWidth:1,borderColor:'#334155'},
 logo:{fontSize:30,fontWeight:'900',color:'#4ADE80',marginBottom:20},
 title:{fontSize:28,fontWeight:'800',color:'#FFFFFF',marginBottom:8},
 sub:{fontSize:15,lineHeight:22,color:'#94A3B8',marginBottom:26},
 label:{fontSize:14,fontWeight:'700',color:'#FFFFFF',marginBottom:8},
 input:{backgroundColor:'#0F172A',borderWidth:1,borderColor:'#334155',borderRadius:10,padding:14,color:'#FFFFFF',marginBottom:18},
 button:{backgroundColor:'#4ADE80',padding:15,borderRadius:10,alignItems:'center',marginTop:4},
 buttonText:{fontWeight:'900',color:'#020617',fontSize:16},
 link:{alignItems:'center',paddingTop:22},linkText:{color:'#CBD5E1'}
});
