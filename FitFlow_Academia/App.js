import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, Alert, StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const COLORS = {
  bg: '#101411', panel: '#1B211D', panel2: '#242D27',
  green: '#B7F36B', white: '#F4F7F2', muted: '#A4AEA5',
  border: '#303B33', red: '#FF8D83'
};

function Button({ title, onPress, secondary = false }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, secondary && styles.buttonSecondary]}
      activeOpacity={0.82}
    >
      <Text style={[styles.buttonText, secondary && styles.buttonTextSecondary]}>{title}</Text>
    </TouchableOpacity>
  );
}

function SectionTitle({ title, action }) {
  return (
    <View style={styles.sectionRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.smallMuted}>{action}</Text> : null}
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.topLine}>
          <View>
            <Text style={styles.eyebrow}>SEU ESPAÇO DE EVOLUÇÃO</Text>
            <Text style={styles.brand}>fit<Text style={styles.brandAccent}>flow</Text></Text>
          </View>
          <View style={styles.avatar}><Text style={styles.avatarText}>FF</Text></View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroLabel}>SEGUNDA-FEIRA • FOCO NO PROCESSO</Text>
          <Text style={styles.heroTitle}>Um treino de cada vez.</Text>
          <Text style={styles.heroCopy}>Organize sua rotina, acompanhe seus treinos e construa consistência.</Text>
          <View style={styles.heroFooter}>
            <View><Text style={styles.statNumber}>03</Text><Text style={styles.statLabel}>planos prontos</Text></View>
            <View style={styles.statDivider} />
            <View><Text style={styles.statNumber}>100%</Text><Text style={styles.statLabel}>no seu ritmo</Text></View>
          </View>
        </View>

        <SectionTitle title="Acesso rápido" />
        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Treinos')}>
            <Text style={styles.menuIcon}>↗</Text><Text style={styles.menuTitle}>Treinos</Text>
            <Text style={styles.menuCopy}>Explore sua rotina</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('NovoTreino')}>
            <Text style={styles.menuIcon}>＋</Text><Text style={styles.menuTitle}>Novo treino</Text>
            <Text style={styles.menuCopy}>Monte seu registro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.menuIcon}>◎</Text><Text style={styles.menuTitle}>Meu perfil</Text>
            <Text style={styles.menuCopy}>Seus dados pessoais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuCard} onPress={() => navigation.navigate('Sobre')}>
            <Text style={styles.menuIcon}>✦</Text><Text style={styles.menuTitle}>Sobre o app</Text>
            <Text style={styles.menuCopy}>Conheça o FitFlow</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>LEMBRETE DO DIA</Text>
          <Text style={styles.tipText}>Aquecimento, hidratação e descanso também fazem parte do treino.</Text>
        </View>
        <Text style={styles.footer}>FITFLOW • MOVA-SE NO SEU RITMO</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const workoutData = [
  { day: 'A', name: 'Corpo inteiro', duration: '35–45 min', level: 'Iniciante', description: 'Uma rotina geral para conhecer os movimentos com calma.' },
  { day: 'B', name: 'Cardio leve', duration: '20–30 min', level: 'Leve', description: 'Caminhada, bicicleta ou outra atividade confortável.' },
  { day: 'C', name: 'Mobilidade', duration: '10–15 min', level: 'Recuperação', description: 'Movimentos suaves para mobilidade e relaxamento.' }
];

function WorkoutsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.eyebrow}>SUA ROTINA</Text>
        <Text style={styles.pageTitle}>Biblioteca de treinos</Text>
        <Text style={styles.pageSubtitle}>Sugestões gerais para organizar sua semana. Adapte com orientação profissional.</Text>
        {workoutData.map(item => (
          <TouchableOpacity key={item.day} style={styles.workoutCard}
            onPress={() => navigation.navigate('DetalheTreino', { workout: item })}>
            <View style={styles.workoutLetter}><Text style={styles.workoutLetterText}>{item.day}</Text></View>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutName}>{item.name}</Text>
              <Text style={styles.workoutMeta}>{item.duration}  ·  {item.level}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
        <Button title="＋  Criar meu treino" onPress={() => navigation.navigate('NovoTreino')} />
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>IMPORTANTE</Text>
          <Text style={styles.tipText}>Os exemplos não substituem um plano individual feito por profissional de educação física.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function WorkoutDetailScreen({ route, navigation }) {
  const workout = route.params?.workout || workoutData[0];
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.detailBadge}><Text style={styles.detailBadgeText}>TREINO {workout.day}</Text></View>
        <Text style={styles.pageTitle}>{workout.name}</Text>
        <Text style={styles.pageSubtitle}>{workout.duration} · {workout.level}</Text>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Sobre esta atividade</Text>
          <Text style={styles.bodyText}>{workout.description}</Text>
        </View>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Antes de começar</Text>
          <Text style={styles.bodyText}>• Faça um aquecimento adequado.</Text>
          <Text style={styles.bodyText}>• Use uma intensidade confortável.</Text>
          <Text style={styles.bodyText}>• Interrompa se sentir dor ou mal-estar.</Text>
          <Text style={styles.bodyText}>• Peça orientação a um profissional.</Text>
        </View>
        <Button title="Registrar um treino parecido" onPress={() => navigation.navigate('NovoTreino', { name: workout.name })} />
      </ScrollView>
    </SafeAreaView>
  );
}

function NewWorkoutScreen({ route, navigation }) {
  const [name, setName] = useState(route.params?.name || '');
  const [activity, setActivity] = useState('');
  const [minutes, setMinutes] = useState('');
  const [notes, setNotes] = useState('');

  function saveWorkout() {
    if (!name.trim() || !activity.trim() || !minutes.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha o nome, a atividade e a duração.');
      return;
    }
    Alert.alert(
      'Treino registrado!',
      `Nome: ${name}\nAtividade: ${activity}\nDuração: ${minutes} minutos${notes ? '\nObservações: ' + notes : ''}`,
      [{ text: 'Continuar', onPress: () => navigation.navigate('Treinos') }]
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <Text style={styles.eyebrow}>NOVO REGISTRO</Text>
        <Text style={styles.pageTitle}>Como foi seu treino?</Text>
        <Text style={styles.pageSubtitle}>Preencha os campos para registrar sua atividade.</Text>
        <Text style={styles.inputLabel}>Nome do treino *</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName}
          placeholder="Ex.: Treino de segunda" placeholderTextColor={COLORS.muted} />
        <Text style={styles.inputLabel}>Atividade *</Text>
        <TextInput style={styles.input} value={activity} onChangeText={setActivity}
          placeholder="Ex.: caminhada, musculação" placeholderTextColor={COLORS.muted} />
        <Text style={styles.inputLabel}>Duração em minutos *</Text>
        <TextInput style={styles.input} value={minutes} onChangeText={setMinutes}
          placeholder="Ex.: 30" placeholderTextColor={COLORS.muted} keyboardType="numeric" />
        <Text style={styles.inputLabel}>Observações</Text>
        <TextInput style={[styles.input, styles.multiline]} value={notes} onChangeText={setNotes}
          placeholder="Como você se sentiu? (opcional)" placeholderTextColor={COLORS.muted}
          multiline numberOfLines={4} textAlignVertical="top" />
        <Button title="Salvar registro" onPress={saveWorkout} />
        <Button title="Cancelar" secondary onPress={() => navigation.goBack()} />
        <Text style={styles.formHint}>* Campos obrigatórios. Os dados ficam nesta sessão e não são enviados a um servidor.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Criar consistência');
  const [frequency, setFrequency] = useState('3 vezes por semana');
  const [saved, setSaved] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.eyebrow}>SUA JORNADA</Text>
        <Text style={styles.pageTitle}>Meu perfil</Text>
        <Text style={styles.pageSubtitle}>Personalize suas informações para organizar sua rotina.</Text>
        <Text style={styles.inputLabel}>Como podemos te chamar?</Text>
        <TextInput style={styles.input} value={name} onChangeText={v => {setName(v); setSaved(false);}}
          placeholder="Seu nome" placeholderTextColor={COLORS.muted} />
        <Text style={styles.inputLabel}>Objetivo atual</Text>
        <TextInput style={styles.input} value={goal} onChangeText={v => {setGoal(v); setSaved(false);}}
          placeholder="Seu objetivo" placeholderTextColor={COLORS.muted} />
        <Text style={styles.inputLabel}>Frequência desejada</Text>
        <TextInput style={styles.input} value={frequency} onChangeText={v => {setFrequency(v); setSaved(false);}}
          placeholder="Ex.: 3 vezes por semana" placeholderTextColor={COLORS.muted} />
        <Button title="Salvar perfil" onPress={() => {setSaved(true); Alert.alert('Perfil salvo', 'Suas informações foram atualizadas nesta tela.');}} />
        {saved ? <Text style={styles.success}>✓ Informações atualizadas</Text> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

function AboutScreen() {
  const topics = [
    ['1º bimestre', 'Componentes, estrutura de telas, View, Text e StyleSheet.'],
    ['2º bimestre', 'Inputs, TextInput, useState, eventos, botões e validação simples.'],
    ['3º bimestre', 'React Navigation, Stack Navigator, rotas e passagem de parâmetros.']
  ];
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.eyebrow}>PROJETO ESCOLAR</Text>
        <Text style={styles.pageTitle}>Sobre o FitFlow</Text>
        <Text style={styles.pageSubtitle}>Um aplicativo de organização de atividades físicas, desenvolvido para praticar conceitos de React Native.</Text>
        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Objetivo do projeto</Text>
          <Text style={styles.bodyText}>Reunir em um único aplicativo componentes visuais, formulários com entrada de dados e navegação entre diferentes telas.</Text>
        </View>
        <SectionTitle title="Conteúdos aplicados" />
        {topics.map((item, index) => (
          <View style={styles.topicCard} key={item[0]}>
            <View style={styles.topicNumber}><Text style={styles.topicNumberText}>0{index + 1}</Text></View>
            <View style={styles.topicTextWrap}><Text style={styles.topicTitle}>{item[0]}</Text><Text style={styles.bodyText}>{item[1]}</Text></View>
          </View>
        ))}
        <Text style={styles.formHint}>A lista representa uma organização sugerida dos conceitos. Confira com o professor se corresponde ao conteúdo exato de cada bimestre.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.bg },
  page: { padding: 22, paddingBottom: 38 },
  topLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 },
  eyebrow: { color: COLORS.green, fontSize: 10, fontWeight: '800', letterSpacing: 2, marginBottom: 8 },
  brand: { color: COLORS.white, fontSize: 35, fontWeight: '900', letterSpacing: -1.5 },
  brandAccent: { color: COLORS.green },
  avatar: { width: 48, height: 48, borderRadius: 16, backgroundColor: COLORS.panel2, borderWidth: 1, borderColor: COLORS.border, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: COLORS.green, fontWeight: '900', fontSize: 14 },
  hero: { backgroundColor: COLORS.green, borderRadius: 25, padding: 22, marginBottom: 28 },
  heroLabel: { color: '#27351D', fontSize: 9, fontWeight: '900', letterSpacing: 1.3, marginBottom: 18 },
  heroTitle: { color: '#101411', fontSize: 29, fontWeight: '900', lineHeight: 34, maxWidth: 260 },
  heroCopy: { color: '#35432B', fontSize: 13, lineHeight: 20, marginTop: 10, maxWidth: 285 },
  heroFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 24, gap: 22 },
  statNumber: { fontSize: 23, fontWeight: '900', color: '#101411' },
  statLabel: { color: '#35432B', fontSize: 10, marginTop: 3 },
  statDivider: { width: 1, height: 38, backgroundColor: '#8EBE4D' },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, marginTop: 2 },
  sectionTitle: { color: COLORS.white, fontSize: 18, fontWeight: '800' },
  smallMuted: { color: COLORS.muted, fontSize: 11 },
  menuGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 24 },
  menuCard: { width: '48%', flexGrow: 1, minHeight: 135, backgroundColor: COLORS.panel, borderRadius: 19, padding: 16, borderWidth: 1, borderColor: COLORS.border },
  menuIcon: { color: COLORS.green, fontSize: 24, fontWeight: '700', marginBottom: 14 },
  menuTitle: { color: COLORS.white, fontSize: 14, fontWeight: '800' },
  menuCopy: { color: COLORS.muted, fontSize: 11, marginTop: 5 },
  tipCard: { padding: 18, backgroundColor: COLORS.panel, borderRadius: 18, borderWidth: 1, borderColor: COLORS.border, marginBottom: 18 },
  tipTitle: { color: COLORS.green, fontSize: 10, fontWeight: '900', letterSpacing: 1.5, marginBottom: 8 },
  tipText: { color: COLORS.white, fontSize: 13, lineHeight: 20 },
  footer: { color: '#657066', fontSize: 9, letterSpacing: 2, textAlign: 'center', marginTop: 5 },
  pageTitle: { color: COLORS.white, fontSize: 29, fontWeight: '900', letterSpacing: -0.7, marginBottom: 8 },
  pageSubtitle: { color: COLORS.muted, fontSize: 13, lineHeight: 20, marginBottom: 24 },
  workoutCard: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: COLORS.panel, borderRadius: 18, borderWidth: 1, borderColor: COLORS.border, marginBottom: 12 },
  workoutLetter: { width: 46, height: 46, borderRadius: 15, backgroundColor: COLORS.panel2, alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  workoutLetterText: { color: COLORS.green, fontWeight: '900', fontSize: 18 },
  workoutInfo: { flex: 1 },
  workoutName: { color: COLORS.white, fontSize: 15, fontWeight: '800', marginBottom: 5 },
  workoutMeta: { color: COLORS.muted, fontSize: 11 },
  arrow: { color: COLORS.green, fontSize: 28, paddingLeft: 8 },
  button: { backgroundColor: COLORS.green, borderRadius: 15, minHeight: 52, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 18, marginTop: 8, marginBottom: 8 },
  buttonSecondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.border },
  buttonText: { color: '#101411', fontWeight: '900', fontSize: 14 },
  buttonTextSecondary: { color: COLORS.white },
  panel: { backgroundColor: COLORS.panel, borderRadius: 19, borderWidth: 1, borderColor: COLORS.border, padding: 18, marginBottom: 14 },
  panelTitle: { color: COLORS.white, fontSize: 15, fontWeight: '800', marginBottom: 10 },
  bodyText: { color: COLORS.muted, fontSize: 13, lineHeight: 21, marginBottom: 5 },
  detailBadge: { alignSelf: 'flex-start', backgroundColor: COLORS.panel2, borderRadius: 8, paddingHorizontal: 11, paddingVertical: 7, marginBottom: 15 },
  detailBadgeText: { color: COLORS.green, fontWeight: '900', fontSize: 10, letterSpacing: 1 },
  inputLabel: { color: COLORS.white, fontSize: 12, fontWeight: '800', marginBottom: 8, marginTop: 10 },
  input: { backgroundColor: COLORS.panel, borderWidth: 1, borderColor: COLORS.border, borderRadius: 14, color: COLORS.white, paddingHorizontal: 15, paddingVertical: 14, fontSize: 14, marginBottom: 8 },
  multiline: { minHeight: 100 },
  formHint: { color: COLORS.muted, fontSize: 11, lineHeight: 17, marginTop: 10, marginBottom: 8 },
  success: { color: COLORS.green, fontWeight: '800', marginTop: 8, textAlign: 'center' },
  topicCard: { flexDirection: 'row', backgroundColor: COLORS.panel, borderRadius: 16, borderWidth: 1, borderColor: COLORS.border, padding: 15, marginBottom: 11 },
  topicNumber: { width: 39, height: 39, borderRadius: 12, backgroundColor: COLORS.panel2, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  topicNumberText: { color: COLORS.green, fontWeight: '900', fontSize: 12 },
  topicTextWrap: { flex: 1 },
  topicTitle: { color: COLORS.white, fontSize: 14, fontWeight: '800', marginBottom: 5 }
});

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.bg },
          headerTintColor: COLORS.white,
          headerTitleStyle: { fontWeight: '800' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.bg }
        }}
      >
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ title: 'FitFlow', headerShown: false }} />
        <Stack.Screen name="Treinos" component={WorkoutsScreen} options={{ title: 'Treinos' }} />
        <Stack.Screen name="DetalheTreino" component={WorkoutDetailScreen} options={{ title: 'Detalhes do treino' }} />
        <Stack.Screen name="NovoTreino" component={NewWorkoutScreen} options={{ title: 'Registrar treino' }} />
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{ title: 'Meu perfil' }} />
        <Stack.Screen name="Sobre" component={AboutScreen} options={{ title: 'Sobre o projeto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}