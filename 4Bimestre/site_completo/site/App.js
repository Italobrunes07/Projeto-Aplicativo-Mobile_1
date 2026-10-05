import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import TechnologiesScreen from './src/screens/TechnologiesScreen';
import CommandsScreen from './src/screens/CommandsScreen';
import AboutScreen from './src/screens/AboutScreen';

import { colors } from './src/styles/colors';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.backgroundSecondary,
                    },

                    headerTintColor: colors.text,

                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },

                    headerShadowVisible: false,
                }}
            >

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'DevHub',
                    }}
                />

                <Stack.Screen
                    name="Projetos"
                    component={ProjectsScreen}
                    options={{
                        title: 'Meus Projetos',
                    }}
                />

                <Stack.Screen
                    name="Tecnologias"
                    component={TechnologiesScreen}
                    options={{
                        title: 'Tecnologias',
                    }}
                />

                <Stack.Screen
                    name="Comandos"
                    component={CommandsScreen}
                    options={{
                        title: 'Comandos',
                    }}
                />

                <Stack.Screen
                    name="Sobre"
                    component={AboutScreen}
                    options={{
                        title: 'Sobre o DevHub',
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}