import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { colors } from '../styles/colors';

export default function ProjectsScreen() {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <View style={styles.content}>

                <Text style={styles.titulo}>
                    Meus Projetos
                </Text>

                <Text style={styles.descricao}>
                    Conheça alguns dos projetos desenvolvidos
                    durante minha formação em Desenvolvimento
                    de Sistemas.
                </Text>

                <View style={styles.lista}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            titulo={project.titulo}
                            descricao={project.descricao}
                            tecnologia={project.tecnologia}
                        />
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
});