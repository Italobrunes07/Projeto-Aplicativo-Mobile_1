
import React,{useCallback,useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Alert} from 'react-native';
import {collection,getDocs,query,where} from 'firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import {auth,db} from '../utils/firebase';
export default function SalesScreen({navigation}){
 const [items,setItems]=useState([]);const [loading,setLoading]=useState(true);
 const load=async()=>{const u=auth.currentUser;if(!u)return;try{const snap=await getDocs(query(collection(db,'sales'),where('ownerId','==',u.uid)));setItems(snap.docs.map(d=>({id:d.id,...d.data()})));}catch(e){Alert.alert('Erro','Não foi possível carregar as vendas. Confira as regras do Firestore.');}finally{setLoading(false);}};
 useFocusEffect(useCallback(()=>{load();},[]));
 const total=items.reduce((sum,i)=>sum+Number(i.total||0),0);
 return <ScrollView style={s.page} contentContainerStyle={s.content}><Text style={s.title}>Vendas</Text><Text style={s.sub}>Total registrado: R$ {total.toFixed(2)}</Text><TouchableOpacity style={s.button} onPress={()=>navigation.navigate('NovaVenda')}><Text style={s.buttonText}>+ Registrar venda</Text></TouchableOpacity>{loading?<Text style={s.muted}>Carregando...</Text>:items.length===0?<Text style={s.empty}>Nenhuma venda registrada ainda.</Text>:items.map(i=><View style={s.card} key={i.id}><Text style={s.name}>{i.productName}</Text><Text style={s.muted}>Quantidade: {i.quantity} • Total: R$ {Number(i.total||0).toFixed(2)}</Text><Text style={s.muted}>Cliente: {i.clientName||'Não informado'}</Text><Text style={s.muted}>{i.createdAt?new Date(i.createdAt).toLocaleDateString('pt-BR'):''}</Text></View>)}</ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#0F172A'},content:{padding:22,width:'100%',maxWidth:850,alignSelf:'center'},title:{fontSize:30,fontWeight:'900',color:'#FFFFFF'},sub:{fontSize:15,color:'#94A3B8',marginTop:5,marginBottom:22},button:{backgroundColor:'#4ADE80',padding:14,borderRadius:10,alignItems:'center',marginBottom:20},buttonText:{fontWeight:'900',color:'#020617'},card:{backgroundColor:'#1E293B',borderColor:'#334155',borderWidth:1,borderRadius:12,padding:17,marginBottom:12},name:{fontSize:18,fontWeight:'800',color:'#FFFFFF'},muted:{color:'#94A3B8',marginTop:8},empty:{color:'#CBD5E1',backgroundColor:'#1E293B',padding:20,borderRadius:12}});
