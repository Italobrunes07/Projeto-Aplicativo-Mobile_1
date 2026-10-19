
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

export default function HomeScreen({navigation}) {
 const [stats,setStats]=useState({products:0,sales:0,clients:0});
 async function carregar(){
  const user=auth.currentUser; if(!user) return;
  try {
   const [p,v,c]=await Promise.all(['products','sales','clients'].map(name=>getDocs(query(collection(db,name),where('ownerId','==',user.uid)))));
   setStats({products:p.size,sales:v.size,clients:c.size});
  } catch(e) { /* regras do Firestore podem precisar ser configuradas */ }
 }
 useEffect(()=>{const unsub=navigation.addListener('focus',carregar);carregar();return unsub;},[navigation]);
 async function sair(){try{await signOut(auth);navigation.replace('Login');}catch(e){Alert.alert('Erro','Não foi possível sair.');}}
 const action=(route,title,desc)=> <TouchableOpacity style={s.action} onPress={()=>navigation.navigate(route)}><Text style={s.actionTitle}>{title}</Text><Text style={s.actionDesc}>{desc}</Text></TouchableOpacity>;
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
  <View style={s.top}><View><Text style={s.logo}>VendaHub</Text><Text style={s.sub}>PAINEL DO SEU NEGÓCIO</Text></View><TouchableOpacity onPress={sair} style={s.out}><Text style={s.outText}>Sair</Text></TouchableOpacity></View>
  <Text style={s.heading}>Olá, {auth.currentUser?.displayName || 'empreendedor'}!</Text><Text style={s.desc}>Acompanhe seus produtos, clientes e vendas em um só lugar.</Text>
  <View style={s.stats}><View style={s.stat}><Text style={s.num}>{stats.products}</Text><Text style={s.statLabel}>Produtos</Text></View><View style={s.stat}><Text style={s.num}>{stats.sales}</Text><Text style={s.statLabel}>Vendas</Text></View><View style={s.stat}><Text style={s.num}>{stats.clients}</Text><Text style={s.statLabel}>Clientes</Text></View></View>
  <Text style={s.section}>Gerenciar negócio</Text>
  {action('Produtos','📦  Produtos','Cadastre e consulte seu catálogo')}
  {action('Vendas','💰  Vendas','Registre e acompanhe suas vendas')}
  {action('Clientes','👥  Clientes','Consulte os clientes cadastrados')}
  <Text style={s.footer}>VendaHub • Gestão simples para vender melhor</Text>
 </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#0F172A'},content:{padding:22,paddingBottom:40,width:'100%',maxWidth:900,alignSelf:'center'},top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:36},logo:{fontSize:26,fontWeight:'900',color:'#4ADE80'},sub:{fontSize:10,letterSpacing:2,color:'#94A3B8',marginTop:4},out:{borderColor:'#475569',borderWidth:1,borderRadius:9,paddingHorizontal:16,paddingVertical:9},outText:{color:'#FFFFFF',fontWeight:'700'},heading:{fontSize:30,fontWeight:'900',color:'#FFFFFF',marginBottom:8},desc:{fontSize:15,lineHeight:23,color:'#94A3B8',marginBottom:25},stats:{flexDirection:'row',gap:10,marginBottom:30,flexWrap:'wrap'},stat:{flex:1,minWidth:90,padding:18,backgroundColor:'#1E293B',borderColor:'#334155',borderWidth:1,borderRadius:14},num:{fontSize:27,fontWeight:'900',color:'#4ADE80'},statLabel:{fontSize:13,color:'#94A3B8',marginTop:5},section:{fontSize:20,fontWeight:'800',color:'#FFFFFF',marginBottom:14},action:{padding:20,backgroundColor:'#1E293B',borderColor:'#334155',borderWidth:1,borderRadius:13,marginBottom:12},actionTitle:{fontSize:18,fontWeight:'800',color:'#FFFFFF',marginBottom:6},actionDesc:{fontSize:14,color:'#94A3B8'},footer:{color:'#64748B',textAlign:'center',marginTop:25,fontSize:12}});
