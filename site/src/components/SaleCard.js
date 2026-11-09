import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../styles/colors';

export default function TechCard({
    numero,
    nome,
    descricao
}) {
    return (
        <View style={styles.card}>

            <View style={styles.numero}>
                <Text style={styles.numeroTexto}>
                    {numero}
                </Text>
            </View>

            <View style={styles.conteudo}>

                <Text style={styles.nome}>
                    {nome}
                </Text>

                <Text style={styles.descricao}>
                    {descricao}
                </Text>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
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
        fontWeight: '900',
        fontSize: 13,
    },

    conteudo: {
        flex: 1,
    },

    nome: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 14,
        lineHeight: 21,
    },
});