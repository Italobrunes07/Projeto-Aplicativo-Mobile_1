import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../styles/colors';

export default function Header({ titulo, subtitulo }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                {titulo}
            </Text>

            {subtitulo && (
                <Text style={styles.subtitulo}>
                    {subtitulo}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    },

    titulo: {
        color: colors.text,
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 8,
    },

    subtitulo: {
        color: colors.textSecondary,
        fontSize: 15,
        lineHeight: 22,
    },
});