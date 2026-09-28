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
                }}
            >

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'PAM',
                    }}
                />

                <Stack.Screen
                    name="Projetos"
                    component={ProjectsScreen}
                />

                <Stack.Screen
                    name="Tecnologias"
                    component={TechnologiesScreen}
                />

                <Stack.Screen
                    name="Comandos"
                    component={CommandsScreen}
                />

                <Stack.Screen
                    name="Sobre"
                    component={AboutScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}