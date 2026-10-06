import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

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
                initialRouteName="Login"
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
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={RegisterScreen}
                    options={{
                        title: 'Criar conta',
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'VendaHub',
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
                        title: 'Sobre o VendaHub',
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}