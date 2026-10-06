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
    createUserWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../utils/firebase';
import { colors } from '../styles/colors';

export default function RegisterScreen({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function cadastrar() {

        if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
            Alert.alert(
                'Atenção',
                'Preencha todos os campos.'
            );

            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert(
                'Atenção',
                'As senhas não são iguais.'
            );

            return;
        }

        if (senha.length < 6) {
            Alert.alert(
                'Atenção',
                'A senha deve ter pelo menos 6 caracteres.'
            );

            return;
        }

        try {

            setCarregando(true);

            await createUserWithEmailAndPassword(
                auth,
                email.trim(),
                senha
            );

            Alert.alert(
                'Cadastro realizado!',
                `Bem-vindo ao VendaHub, ${nome.trim()}!`,
                [
                    {
                        text: 'Continuar',
                        onPress: () => navigation.replace('Home')
                    }
                ]
            );

        } catch (error) {

            let mensagem = 'Não foi possível criar sua conta.';

            if (error.code === 'auth/email-already-in-use') {
                mensagem = 'Este e-mail já está cadastrado.';
            }

            if (error.code === 'auth/invalid-email') {
                mensagem = 'Digite um e-mail válido.';
            }

            if (error.code === 'auth/weak-password') {
                mensagem = 'A senha precisa ter pelo menos 6 caracteres.';
            }

            Alert.alert(
                'Erro no cadastro',
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
                        Criar conta
                    </Text>

                    <Text style={styles.descricao}>
                        Crie sua conta para começar a
                        organizar suas vendas.
                    </Text>

                    <Text style={styles.label}>
                        Nome
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome"
                        placeholderTextColor={colors.textSecondary}
                        value={nome}
                        onChangeText={setNome}
                        autoCapitalize="words"
                    />

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
                        placeholder="Mínimo de 6 caracteres"
                        placeholderTextColor={colors.textSecondary}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <Text style={styles.label}>
                        Confirmar senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite a senha novamente"
                        placeholderTextColor={colors.textSecondary}
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={cadastrar}
                        disabled={carregando}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.botaoTexto}>
                            {carregando
                                ? 'Criando conta...'
                                : 'Criar conta'}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.linkBotao}
                        onPress={() => navigation.navigate('Login')}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.linkTexto}>
                            Já possui uma conta?{' '}
                            <Text style={styles.linkDestaque}>
                                Entrar
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
        marginBottom: 25,
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