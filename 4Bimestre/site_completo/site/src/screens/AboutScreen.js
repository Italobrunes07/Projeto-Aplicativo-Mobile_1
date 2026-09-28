import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import { colors } from '../styles/colors';

export default function AboutScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Sobre o projeto
                </Text>

                <Text style={styles.subtitulo}>
                    Projeto Aplicativo Mobile
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>
                        Objetivo
                    </Text>

                    <Text style={styles.texto}>
                        Este aplicativo foi desenvolvido como projeto
                        do 4º bimestre da disciplina de Projeto
                        Aplicativo Mobile.
                    </Text>

                    <Text style={styles.texto}>
                        A proposta é apresentar os projetos,
                        tecnologias e conhecimentos adquiridos
                        durante as aulas de desenvolvimento mobile.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>
                        Tecnologias utilizadas
                    </Text>

                    <Text style={styles.lista}>
                        • React Native
                    </Text>

                    <Text style={styles.lista}>
                        • Expo
                    </Text>

                    <Text style={styles.lista}>
                        • JavaScript
                    </Text>

                    <Text style={styles.lista}>
                        • React Navigation
                    </Text>

                    <Text style={styles.lista}>
                        • SQLite
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>
                        Desenvolvimento
                    </Text>

                    <Text style={styles.texto}>
                        O projeto foi organizado utilizando uma
                        estrutura de pastas para separar telas,
                        componentes, dados, estilos e funções
                        auxiliares.
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        width: '100%',
        maxWidth: 1000,
        alignSelf: 'center',
        padding: 30,
    },

    titulo: {
        color: colors.text,
        fontSize: 36,
        fontWeight: '900',
        marginBottom: 8,
    },

    subtitulo: {
        color: colors.primary,
        fontSize: 16,
        marginBottom: 30,
    },

    card: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 20,
        marginBottom: 18,
    },

    cardTitulo: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },

    texto: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 23,
        marginBottom: 12,
    },

    lista: {
        color: colors.textSecondary,
        fontSize: 15,
        marginBottom: 8,
    },
});