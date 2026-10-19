
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

export default function RegisterScreen({ navigation }) {
 const [nome,setNome]=useState(''); const [email,setEmail]=useState(''); const [senha,setSenha]=useState(''); const [confirmar,setConfirmar]=useState(''); const [loading,setLoading]=useState(false);
 async function cadastrar(){
  if(!nome.trim()||!email.trim()||!senha||!confirmar) return Alert.alert('Atenção','Preencha todos os campos.');
  if(senha.length<6) return Alert.alert('Senha inválida','Use pelo menos 6 caracteres.');
  if(senha!==confirmar) return Alert.alert('Atenção','As senhas não coincidem.');
  setLoading(true);
  try{
   const cred=await createUserWithEmailAndPassword(auth,email.trim(),senha);
   await updateProfile(cred.user,{displayName:nome.trim()});
   await setDoc(doc(db,'users',cred.user.uid),{name:nome.trim(),email:email.trim(),createdAt:new Date().toISOString()});
   navigation.replace('Home');
  }catch(e){Alert.alert('Erro no cadastro',e.code==='auth/email-already-in-use'?'Este e-mail já está cadastrado.':e.code==='auth/invalid-email'?'Digite um e-mail válido.':'Não foi possível criar a conta. Confira as regras do Firestore e o Authentication.');}
  finally{setLoading(false);}
 }
 return <ScrollView contentContainerStyle={s.page} keyboardShouldPersistTaps="handled"><View style={s.card}>
  <Text style={s.logo}>VendaHub</Text><Text style={s.title}>Criar sua conta</Text><Text style={s.sub}>Comece a organizar seu negócio.</Text>
  <Text style={s.label}>Nome</Text><TextInput style={s.input} value={nome} onChangeText={setNome} placeholder="Seu nome" placeholderTextColor="#94A3B8" />
  <Text style={s.label}>E-mail</Text><TextInput style={s.input} value={email} onChangeText={setEmail} placeholder="voce@email.com" placeholderTextColor="#94A3B8" keyboardType="email-address" autoCapitalize="none" autoCorrect={false}/>
  <Text style={s.label}>Senha</Text><TextInput style={s.input} value={senha} onChangeText={setSenha} placeholder="Mínimo de 6 caracteres" placeholderTextColor="#94A3B8" secureTextEntry/>
  <Text style={s.label}>Confirmar senha</Text><TextInput style={s.input} value={confirmar} onChangeText={setConfirmar} placeholder="Repita a senha" placeholderTextColor="#94A3B8" secureTextEntry/>
  <TouchableOpacity style={s.button} onPress={cadastrar} disabled={loading}><Text style={s.buttonText}>{loading?'Criando conta...':'Criar conta'}</Text></TouchableOpacity>
  <TouchableOpacity style={s.link} onPress={()=>navigation.navigate('Login')}><Text style={s.linkText}>Já tem conta? <Text style={{color:'#4ADE80',fontWeight:'bold'}}>Entrar</Text></Text></TouchableOpacity>
 </View></ScrollView>;
}
const s=StyleSheet.create({page:{flexGrow:1,justifyContent:'center',padding:22,backgroundColor:'#0F172A'},card:{width:'100%',maxWidth:480,alignSelf:'center',padding:28,backgroundColor:'#1E293B',borderRadius:20,borderWidth:1,borderColor:'#334155'},logo:{fontSize:30,fontWeight:'900',color:'#4ADE80',marginBottom:18},title:{fontSize:28,fontWeight:'800',color:'#FFFFFF',marginBottom:8},sub:{fontSize:15,color:'#94A3B8',marginBottom:24},label:{fontSize:14,fontWeight:'700',color:'#FFFFFF',marginBottom:8},input:{backgroundColor:'#0F172A',borderWidth:1,borderColor:'#334155',borderRadius:10,padding:14,color:'#FFFFFF',marginBottom:15},button:{backgroundColor:'#4ADE80',padding:15,borderRadius:10,alignItems:'center',marginTop:4},buttonText:{fontWeight:'900',color:'#020617',fontSize:16},link:{alignItems:'center',paddingTop:20},linkText:{color:'#CBD5E1'}});
