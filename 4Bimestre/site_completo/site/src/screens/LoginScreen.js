import React, { useState } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

import {
    signInWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../utils/firebase';
import { colors } from '../styles/colors';

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function entrar() {

        if (!email.trim() || !senha) {
            Alert.alert(
                'Atenção',
                'Digite seu e-mail e sua senha.'
            );

            return;
        }

        try {

            setCarregando(true);

            await signInWithEmailAndPassword(
                auth,
                email.trim(),
                senha
            );

            navigation.replace('Home');

        } catch (error) {

            let mensagem = 'Não foi possível entrar.';

            if (
                error.code === 'auth/invalid-credential' ||
                error.code === 'auth/wrong-password' ||
                error.code === 'auth/user-not-found'
            ) {
                mensagem = 'E-mail ou senha incorretos.';
            }

            if (error.code === 'auth/invalid-email') {
                mensagem = 'Digite um e-mail válido.';
            }

            Alert.alert(
                'Erro no login',
                mensagem
            );

        } finally {

            setCarregando(false);

        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={
                Platform.OS === 'ios'
                    ? 'padding'
                    : undefined
            }
        >

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >

                <View style={styles.content}>

                    <Text style={styles.logo}>
                        VENDAHUB
                    </Text>

                    <Text style={styles.titulo}>
                        Bem-vindo de volta
                    </Text>

                    <Text style={styles.descricao}>
                        Entre na sua conta para gerenciar
                        suas vendas.
                    </Text>

                    <Text style={styles.label}>
                        E-mail
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="seu@email.com"
                        placeholderTextColor={colors.textSecondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        placeholderTextColor={colors.textSecondary}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={entrar}
                        disabled={carregando}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.botaoTexto}>
                            {carregando
                                ? 'Entrando...'
                                : 'Entrar'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkBotao}
                        onPress={() => navigation.navigate('Cadastro')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.linkTexto}>
                            Ainda não possui uma conta?{' '}
                            <Text style={styles.linkDestaque}>
                                Cadastre-se
                            </Text>
                        </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 30,
    },

    content: {
        width: '100%',
        maxWidth: 500,
        alignSelf: 'center',
    },

    logo: {
        color: colors.primary,
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: 4,
        marginBottom: 35,
        textAlign: 'center',
    },

    titulo: {
        color: colors.text,
        fontSize: 34,
        fontWeight: '900',
        marginBottom: 10,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 30,
    },

    label: {
        color: colors.text,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    input: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        color: colors.text,
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 14,
        marginBottom: 18,
    },

    botao: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 5,
    },

    botaoTexto: {
        color: colors.black,
        fontSize: 15,
        fontWeight: '900',
    },

    linkBotao: {
        alignItems: 'center',
        marginTop: 20,
    },

    linkTexto: {
        color: colors.textSecondary,
        fontSize: 14,
    },

    linkDestaque: {
        color: colors.primary,
        fontWeight: 'bold',
    },

});