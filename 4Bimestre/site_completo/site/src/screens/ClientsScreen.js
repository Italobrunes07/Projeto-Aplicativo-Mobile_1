import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';

import { colors } from '../styles/colors';
import { commands } from '../data/commands';

export default function CommandsScreen() {

    function selecionarComando(comando) {
        Alert.alert(
            'Comando selecionado',
            comando
        );
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Comandos
                </Text>

                <Text style={styles.descricao}>
                    Principais comandos utilizados durante a
                    criação, execução e manutenção dos projetos.
                </Text>

                {commands.map((item) => (
                    <View
                        key={item.id}
                        style={styles.card}
                    >

                        <View style={styles.topo}>

                            <View style={styles.numero}>
                                <Text style={styles.numeroTexto}>
                                    {String(item.id).padStart(2, '0')}
                                </Text>
                            </View>

                            <Text style={styles.cardTitulo}>
                                {item.titulo}
                            </Text>

                        </View>

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
                            onPress={() =>
                                selecionarComando(item.comando)
                            }
                            activeOpacity={0.7}
                        >
                            <Text style={styles.botaoTexto}>
                                Ver comando
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

    card: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 20,
        marginBottom: 18,
    },

    topo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },

    numero: {
        width: 40,
        height: 40,
        borderRadius: 9,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    numeroTexto: {
        color: colors.black,
        fontWeight: '900',
        fontSize: 12,
    },

    cardTitulo: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
    },

    cardDescricao: {
        color: colors.textSecondary,
        fontSize: 14,
        lineHeight: 21,
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
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },

    botaoTexto: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 13,
    },

});