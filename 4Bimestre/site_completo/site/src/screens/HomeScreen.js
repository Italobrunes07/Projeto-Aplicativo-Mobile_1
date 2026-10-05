import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { colors } from '../styles/colors';

export default function HomeScreen({ navigation }) {

    function abrirProjetos() {
        navigation.navigate('Projetos');
    }

    function abrirTecnologias() {
        navigation.navigate('Tecnologias');
    }

    function abrirComandos() {
        navigation.navigate('Comandos');
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.content}>

                <Text style={styles.logo}>
                    DEVHUB
                </Text>

                <Text style={styles.subtitulo}>
                    GERENCIADOR DE PROJETOS
                </Text>

                <Text style={styles.titulo}>
                    Organize seus projetos
                </Text>

                <Text style={styles.descricao}>
                    Um aplicativo desenvolvido para organizar,
                    acompanhar e gerenciar projetos de
                    Desenvolvimento de Sistemas.
                </Text>

                <View style={styles.dashboard}>

                    <View style={styles.card}>
                        <Text style={styles.numero}>
                            0
                        </Text>

                        <Text style={styles.cardTexto}>
                            Projetos
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.numero}>
                            0
                        </Text>

                        <Text style={styles.cardTexto}>
                            Em andamento
                        </Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.numero}>
                            0
                        </Text>

                        <Text style={styles.cardTexto}>
                            Concluídos
                        </Text>
                    </View>

                </View>

                <Text style={styles.secaoTitulo}>
                    Ações rápidas
                </Text>

                <TouchableOpacity
                    style={styles.botaoPrincipal}
                    onPress={abrirProjetos}
                    activeOpacity={0.7}
                >
                    <Text style={styles.botaoPrincipalTitulo}>
                        Meus projetos
                    </Text>

                    <Text style={styles.botaoPrincipalDescricao}>
                        Visualize e gerencie seus projetos
                    </Text>
                </TouchableOpacity>

                <View style={styles.linhaBotoes}>

                    <TouchableOpacity
                        style={styles.botaoSecundario}
                        onPress={abrirTecnologias}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.botaoIcone}>
                            {'</>'}
                        </Text>

                        <Text style={styles.botaoTitulo}>
                            Tecnologias
                        </Text>

                        <Text style={styles.botaoDescricao}>
                            Ferramentas utilizadas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoSecundario}
                        onPress={abrirComandos}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.botaoIcone}>
                            {'>_'}
                        </Text>

                        <Text style={styles.botaoTitulo}>
                            Comandos
                        </Text>

                        <Text style={styles.botaoDescricao}>
                            Comandos úteis
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.info}>

                    <Text style={styles.infoTitulo}>
                        Projeto Aplicativo Mobile
                    </Text>

                    <Text style={styles.infoTexto}>
                        Desenvolvido com React Native,
                        Expo e JavaScript.
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
        paddingBottom: 40,
    },

    content: {
        width: '100%',
        maxWidth: 1000,
        alignSelf: 'center',
        padding: 30,
    },

    logo: {
        color: colors.primary,
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: 4,
        marginBottom: 6,
    },

    subtitulo: {
        color: colors.textSecondary,
        fontSize: 11,
        letterSpacing: 2,
        marginBottom: 30,
    },

    titulo: {
        color: colors.text,
        fontSize: 38,
        fontWeight: '900',
        marginBottom: 12,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 16,
        lineHeight: 25,
        maxWidth: 700,
        marginBottom: 30,
    },

    dashboard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 35,
    },

    card: {
        flex: 1,
        minWidth: 150,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 14,
        padding: 20,
    },

    numero: {
        color: colors.primary,
        fontSize: 28,
        fontWeight: '900',
        marginBottom: 5,
    },

    cardTexto: {
        color: colors.textSecondary,
        fontSize: 13,
    },

    secaoTitulo: {
        color: colors.text,
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 15,
    },

    botaoPrincipal: {
        backgroundColor: colors.primary,
        borderRadius: 14,
        padding: 22,
        marginBottom: 12,
    },

    botaoPrincipalTitulo: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 5,
    },

    botaoPrincipalDescricao: {
        color: colors.black,
        fontSize: 14,
        opacity: 0.75,
    },

    linhaBotoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginBottom: 30,
    },

    botaoSecundario: {
        flex: 1,
        minWidth: 200,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 14,
        padding: 20,
    },

    botaoIcone: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 12,
    },

    botaoTitulo: {
        color: colors.text,
        fontSize: 17,
        fontWeight: '800',
        marginBottom: 5,
    },

    botaoDescricao: {
        color: colors.textSecondary,
        fontSize: 13,
    },

    info: {
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: 20,
    },

    infoTitulo: {
        color: colors.text,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    infoTexto: {
        color: colors.textSecondary,
        fontSize: 13,
    },

});