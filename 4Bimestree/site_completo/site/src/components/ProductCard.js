import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../styles/colors';

export default function ProjectCard({
    titulo,
    descricao,
    tecnologia
}) {
    return (
        <View style={styles.card}>

            <Text style={styles.titulo}>
                {titulo}
            </Text>

            <Text style={styles.descricao}>
                {descricao}
            </Text>

            <View style={styles.tag}>
                <Text style={styles.tagTexto}>
                    {tecnologia}
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
        padding: 20,
        marginBottom: 15,
    },

    titulo: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 14,
        lineHeight: 21,
        marginBottom: 15,
    },

    tag: {
        alignSelf: 'flex-start',
        backgroundColor: colors.border,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },

    tagTexto: {
        color: colors.text,
        fontSize: 12,
        fontWeight: 'bold',
    },
});