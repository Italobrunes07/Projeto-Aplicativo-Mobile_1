import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { updateEmail, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';

export default function ProfileScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setNome(user.displayName || '');
      setEmail(user.email || '');
    }
  }, []);

  async function salvar() {
    const user = auth.currentUser;
    if (!user) return Alert.alert('Sessão expirada', 'Entre novamente na sua conta.');
    if (!nome.trim() || !email.trim()) return Alert.alert('Atenção', 'Preencha o nome e o e-mail.');

    setLoading(true);
    try {
      if (email.trim() !== user.email) {
        await updateEmail(user, email.trim());
      }
      await updateProfile(user, { displayName: nome.trim() });
      await setDoc(doc(db, 'users', user.uid), {
        name: nome.trim(),
        email: email.trim(),
        updatedAt: new Date().toISOString(),
      }, { merge: true });
      Alert.alert('Sucesso', 'Seus dados foram atualizados.');
    } catch (error) {
      const message = error.code === 'auth/requires-recent-login'
        ? 'Por segurança, saia da conta e entre novamente antes de alterar o e-mail.'
        : error.code === 'auth/email-already-in-use'
          ? 'Este e-mail já está sendo utilizado por outra conta.'
          : error.code === 'auth/invalid-email'
            ? 'Digite um endereço de e-mail válido.'
            : 'Não foi possível atualizar seus dados. Verifique sua conexão e as regras do Firestore.';
      Alert.alert('Erro ao salvar', message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={s.page} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
      <Text style={s.title}>Meus dados</Text>
      <Text style={s.subtitle}>Edite as informações da sua conta.</Text>
      <View style={s.card}>
        <Text style={s.label}>Nome completo</Text>
        <TextInput style={s.input} value={nome} onChangeText={setNome} placeholder="Seu nome" placeholderTextColor="#94A3B8" autoCapitalize="words" />
        <Text style={s.label}>E-mail</Text>
        <TextInput style={s.input} value={email} onChangeText={setEmail} placeholder="voce@email.com" placeholderTextColor="#94A3B8" keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
        <TouchableOpacity style={[s.button, loading && s.disabled]} onPress={salvar} disabled={loading}>
          <Text style={s.buttonText}>{loading ? 'Salvando...' : 'Salvar alterações'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={s.note}>As alterações serão salvas na sua conta.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0F172A' },
  content: { padding: 22, width: '100%', maxWidth: 850, alignSelf: 'center' },
  title: { fontSize: 30, fontWeight: '900', color: '#FFFFFF' },
  subtitle: { fontSize: 15, color: '#94A3B8', marginTop: 5, marginBottom: 22 },
  card: { backgroundColor: '#1E293B', borderColor: '#334155', borderWidth: 1, borderRadius: 14, padding: 20 },
  label: { color: '#FFFFFF', fontWeight: '700', marginBottom: 8 },
  input: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#334155', borderRadius: 10, padding: 14, color: '#FFFFFF', marginBottom: 18 },
  button: { backgroundColor: '#4ADE80', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 4 },
  disabled: { opacity: 0.65 },
  buttonText: { fontWeight: '900', color: '#020617', fontSize: 16 },
  note: { color: '#94A3B8', fontSize: 13, marginTop: 16, textAlign: 'center' },
});
