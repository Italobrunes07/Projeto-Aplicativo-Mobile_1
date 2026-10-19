
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import NewProductScreen from './src/screens/NewProductScreen';
import SalesScreen from './src/screens/SalesScreen';
import NewSaleScreen from './src/screens/NewSaleScreen';
import ClientsScreen from './src/screens/ClientsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerStyle: { backgroundColor: '#111827' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: '#0F172A' },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ title: 'Criar conta' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'VendaHub', headerBackVisible: false }} />
        <Stack.Screen name="Produtos" component={ProductsScreen} options={{ title: 'Produtos' }} />
        <Stack.Screen name="NovoProduto" component={NewProductScreen} options={{ title: 'Cadastrar produto' }} />
        <Stack.Screen name="Vendas" component={SalesScreen} options={{ title: 'Vendas' }} />
        <Stack.Screen name="NovaVenda" component={NewSaleScreen} options={{ title: 'Registrar venda' }} />
        <Stack.Screen name="Clientes" component={ClientsScreen} options={{ title: 'Clientes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
