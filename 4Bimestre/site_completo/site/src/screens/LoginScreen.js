import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import { colors } from '../styles/colors';

export default function AboutScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.content}>

                <Text style={styles.logo}>
                    PAM
                </Text>

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
                        Este aplicativo foi desenvolvido como
                        projeto do 4º bimestre da disciplina de
                        Projeto Aplicativo Mobile.
                    </Text>

                    <Text style={styles.texto}>
                        O objetivo é apresentar os projetos,
                        tecnologias e conhecimentos adquiridos
                        durante as aulas de Desenvolvimento
                        de Sistemas.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        Desenvolvimento
                    </Text>

                    <Text style={styles.texto}>
                        O aplicativo foi desenvolvido utilizando
                        React Native e Expo, seguindo uma
                        organização de pastas para separar as
                        telas, componentes, dados e estilos.
                    </Text>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        Tecnologias
                    </Text>

                    <View style={styles.item}>
                        <Text style={styles.itemNumero}>
                            01
                        </Text>

                        <Text style={styles.itemTexto}>
                            React Native
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemNumero}>
                            02
                        </Text>

                        <Text style={styles.itemTexto}>
                            Expo
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemNumero}>
                            03
                        </Text>

                        <Text style={styles.itemTexto}>
                            JavaScript
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemNumero}>
                            04
                        </Text>

                        <Text style={styles.itemTexto}>
                            React Navigation
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={styles.itemNumero}>
                            05
                        </Text>

                        <Text style={styles.itemTexto}>
                            SQLite
                        </Text>
                    </View>

                </View>

                <View style={styles.card}>

                    <Text style={styles.cardTitulo}>
                        Organização
                    </Text>

                    <Text style={styles.codigo}>
                        src/
                    </Text>

                    <Text style={styles.codigo}>
                        ├── components/
                    </Text>

                    <Text style={styles.codigo}>
                        ├── data/
                    </Text>

                    <Text style={styles.codigo}>
                        ├── screens/
                    </Text>

                    <Text style={styles.codigo}>
                        ├── styles/
                    </Text>

                    <Text style={styles.codigo}>
                        └── utils/
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

    scrollContent: {
        paddingBottom: 30,
    },

    content: {
        width: '100%',
        maxWidth: 1000,
        alignSelf: 'center',
        padding: 30,
    },

    logo: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: 4,
        marginBottom: 10,
    },

    titulo: {
        color: colors.text,
        fontSize: 36,
        fontWeight: '900',
        marginBottom: 8,
    },

    subtitulo: {
        color: colors.textSecondary,
        fontSize: 15,
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
        marginBottom: 15,
    },

    texto: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 23,
        marginBottom: 12,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },

    itemNumero: {
        color: colors.primary,
        fontWeight: '900',
        width: 35,
    },

    itemTexto: {
        color: colors.text,
        fontSize: 15,
    },

    codigo: {
        color: colors.primary,
        fontFamily: 'monospace',
        fontSize: 14,
        lineHeight: 24,
    },

});