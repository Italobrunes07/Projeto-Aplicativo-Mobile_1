import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { colors } from '../styles/colors';

export default function HomeScreen({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.logo}>
                    PAM
                </Text>

                <Text style={styles.subtitulo}>
                    PROJETO APLICATIVO MOBILE
                </Text>

                <Text style={styles.titulo}>
                    Desenvolvimento Mobile
                </Text>

                <Text style={styles.descricao}>
                    Portfólio dos projetos desenvolvidos
                    durante as aulas de desenvolvimento
                    de aplicativos.
                </Text>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Projetos')}
                >

                    <Text style={styles.botaoTexto}>
                        Ver projetos
                    </Text>

                </TouchableOpacity>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        padding: 30,
    },

    content: {
        maxWidth: 700,
        width: '100%',
        alignSelf: 'center',
    },

    logo: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: '900',
        letterSpacing: 3,
        marginBottom: 10,
    },

    subtitulo: {
        color: colors.textSecondary,
        fontSize: 12,
        letterSpacing: 2,
        marginBottom: 20,
    },

    titulo: {
        color: colors.text,
        fontSize: 42,
        fontWeight: '900',
        marginBottom: 20,
    },

    descricao: {
        color: colors.textSecondary,
        fontSize: 17,
        lineHeight: 26,
        marginBottom: 30,
    },

    botao: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },

    botaoTexto: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 15,
    },

});