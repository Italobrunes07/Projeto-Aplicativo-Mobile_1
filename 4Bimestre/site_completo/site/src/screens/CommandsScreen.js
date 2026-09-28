import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import { colors } from '../styles/colors';

const commands = [
    {
        titulo: 'Criar um projeto Expo',
        comando: 'npx create-expo-app meu-app',
        descricao: 'Cria um novo projeto utilizando Expo.'
    },
    {
        titulo: 'Entrar na pasta do projeto',
        comando: 'cd meu-app',
        descricao: 'Entra na pasta criada para o projeto.'
    },
    {
        titulo: 'Instalar dependências',
        comando: 'npm install',
        descricao: 'Instala as dependências necessárias do projeto.'
    },
    {
        titulo: 'Iniciar o Expo',
        comando: 'npx expo start',
        descricao: 'Inicia o servidor de desenvolvimento do Expo.'
    },
    {
        titulo: 'Executar na Web',
        comando: 'npm run web',
        descricao: 'Executa o projeto no navegador.'
    },
    {
        titulo: 'Executar no Android',
        comando: 'npm run android',
        descricao: 'Inicia o projeto utilizando o Android.'
    },
    {
        titulo: 'Verificar o código',
        comando: 'npx expo lint',
        descricao: 'Verifica possíveis problemas no código.'
    }
];

export default function CommandsScreen() {

    function copiarComando(comando) {
        Alert.alert(
            'Comando',
            `Comando selecionado:\n\n${comando}`
        );
    }

    return (

        <ScrollView style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Comandos
                </Text>

                <Text style={styles.descricao}>
                    Principais comandos utilizados durante
                    o desenvolvimento dos projetos.
                </Text>

                {commands.map((item, index) => (

                    <View
                        key={index}
                        style={styles.card}
                    >

                        <Text style={styles.cardTitulo}>
                            {item.titulo}
                        </Text>

                        <Text style={styles.cardDescricao}>
                            {item.descricao}
                        </Text>

                        <View style={styles.codigoContainer}>

                            <Text style={styles.codigo}>
                                {item.comando}
                            </Text>

                        </View>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => copiarComando(item.comando)}
                        >

                            <Text style={styles.botaoTexto}>
                                Copiar comando
                            </Text>

                        </TouchableOpacity>

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
        marginBottom: 18,
    },

    cardTitulo: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    cardDescricao: {
        color: colors.textSecondary,
        fontSize: 14,
        marginBottom: 15,
    },

    codigoContainer: {
        backgroundColor: colors.black,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },

    codigo: {
        color: colors.primary,
        fontFamily: 'monospace',
        fontSize: 13,
    },

    botao: {
        backgroundColor: colors.primary,
        paddingVertical: 11,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },

    botaoTexto: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 13,
    },

});