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
        descricao: 'Framework utilizado para desenvolver aplicativos utilizando JavaScript.'
    },
    {
        nome: 'Expo',
        descricao: 'Ferramenta utilizada para facilitar o desenvolvimento e testes dos aplicativos.'
    },
    {
        nome: 'JavaScript',
        descricao: 'Linguagem utilizada na programação dos projetos.'
    },
    {
        nome: 'SQLite',
        descricao: 'Banco de dados utilizado para armazenar informações localmente.'
    },
    {
        nome: 'React Navigation',
        descricao: 'Biblioteca utilizada para criar a navegação entre as telas.'
    },
    {
        nome: 'Google GenAI',
        descricao: 'Tecnologia utilizada para integração com recursos de inteligência artificial.'
    }
];

export default function TechnologiesScreen() {

    return (

        <ScrollView style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Tecnologias
                </Text>

                <Text style={styles.descricao}>
                    Tecnologias e ferramentas utilizadas
                    durante o desenvolvimento dos projetos.
                </Text>

                {technologies.map((technology, index) => (

                    <View
                        key={index}
                        style={styles.card}
                    >

                        <Text style={styles.nome}>
                            {technology.nome}
                        </Text>

                        <Text style={styles.texto}>
                            {technology.descricao}
                        </Text>

                    </View>

                ))}

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
        marginBottom: 10,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 30,
    },

    card: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
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