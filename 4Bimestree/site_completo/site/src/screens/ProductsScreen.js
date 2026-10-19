
import React, {useCallback,useState} from 'react';
import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Alert} from 'react-native';
import {collection,getDocs,query,where,deleteDoc,doc} from 'firebase/firestore';
import {useFocusEffect} from '@react-navigation/native';
import {auth,db} from '../utils/firebase';
export default function ProductsScreen({navigation}){
 const [items,setItems]=useState([]); const [loading,setLoading]=useState(true);
 const load=async()=>{const u=auth.currentUser;if(!u)return;try{const snap=await getDocs(query(collection(db,'products'),where('ownerId','==',u.uid)));setItems(snap.docs.map(d=>({id:d.id,...d.data()})));}catch(e){Alert.alert('Erro','Não foi possível carregar produtos. Confira as regras do Firestore.');}finally{setLoading(false);}};
 useFocusEffect(useCallback(()=>{load();},[]));
 async function excluir(id){try{await deleteDoc(doc(db,'products',id));load();}catch(e){Alert.alert('Erro','Não foi possível excluir.');}}
 return <ScrollView style={s.page} contentContainerStyle={s.content}><Text style={s.title}>Produtos</Text><Text style={s.sub}>Seu catálogo de produtos.</Text><TouchableOpacity style={s.button} onPress={()=>navigation.navigate('NovoProduto')}><Text style={s.buttonText}>+ Cadastrar produto</Text></TouchableOpacity>{loading?<Text style={s.muted}>Carregando...</Text>:items.length===0?<Text style={s.empty}>Nenhum produto cadastrado ainda.</Text>:items.map(i=><View style={s.card} key={i.id}><Text style={s.name}>{i.name}</Text><Text style={s.muted}>Estoque: {i.stock ?? 0} • Preço: R$ {Number(i.price||0).toFixed(2)}</Text><TouchableOpacity onPress={()=>Alert.alert('Excluir produto?','Deseja excluir este produto?',[{text:'Cancelar'},{text:'Excluir',style:'destructive',onPress:()=>excluir(i.id)}])}><Text style={s.delete}>Excluir</Text></TouchableOpacity></View>)}</ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#0F172A'},content:{padding:22,width:'100%',maxWidth:850,alignSelf:'center'},title:{fontSize:30,fontWeight:'900',color:'#FFFFFF'},sub:{fontSize:15,color:'#94A3B8',marginTop:5,marginBottom:22},button:{backgroundColor:'#4ADE80',padding:14,borderRadius:10,alignItems:'center',marginBottom:20},buttonText:{fontWeight:'900',color:'#020617'},card:{backgroundColor:'#1E293B',borderColor:'#334155',borderWidth:1,borderRadius:12,padding:17,marginBottom:12},name:{fontSize:18,fontWeight:'800',color:'#FFFFFF',marginBottom:6},muted:{color:'#94A3B8',marginTop:8},empty:{color:'#CBD5E1',backgroundColor:'#1E293B',padding:20,borderRadius:12},delete:{color:'#F87171',marginTop:12,fontWeight:'700'}});
