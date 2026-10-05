import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import { colors } from '../styles/colors';

const technologies = [
    {
        nome: 'React Native',
        descricao:
            'Framework utilizado para desenvolver aplicativos mobile utilizando JavaScript.'
    },
    {
        nome: 'Expo',
        descricao:
            'Plataforma que facilita o desenvolvimento, testes e execução de aplicativos React Native.'
    },
    {
        nome: 'JavaScript',
        descricao:
            'Linguagem de programação utilizada na criação da lógica e funcionalidades dos projetos.'
    },
    {
        nome: 'React Navigation',
        descricao:
            'Biblioteca utilizada para criar a navegação entre as diferentes telas do aplicativo.'
    },
    {
        nome: 'SQLite',
        descricao:
            'Banco de dados utilizado para armazenar informações localmente nos aplicativos.'
    },
    {
        nome: 'Google GenAI',
        descricao:
            'Tecnologia utilizada em projetos que possuem integração com recursos de inteligência artificial.'
    }
];

export default function TechnologiesScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Tecnologias
                </Text>

                <Text style={styles.descricao}>
                    Ferramentas, linguagens e tecnologias
                    utilizadas durante o desenvolvimento dos
                    projetos.
                </Text>

                <View style={styles.lista}>
                    {technologies.map((technology, index) => (
                        <View
                            key={index}
                            style={styles.card}
                        >
                            <View style={styles.numero}>
                                <Text style={styles.numeroTexto}>
                                    {String(index + 1).padStart(2, '0')}
                                </Text>
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.nome}>
                                    {technology.nome}
                                </Text>

                                <Text style={styles.texto}>
                                    {technology.descricao}
                                </Text>
                            </View>
                        </View>
                    ))}
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

    titulo: {
        color: colors.text,
        fontSize: 36,
        fontWeight: '900',
        marginBottom: 10,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 23,
        marginBottom: 30,
        maxWidth: 700,
    },

    lista: {
        width: '100%',
    },

    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
    },

    numero: {
        width: 45,
        height: 45,
        borderRadius: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },

    numeroTexto: {
        color: colors.black,
        fontSize: 13,
        fontWeight: '900',
    },

    cardContent: {
        flex: 1,
    },

    nome: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    texto: {
        color: colors.textSecondary,
        fontSize: 14,
        lineHeight: 21,
    },
});