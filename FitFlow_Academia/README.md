# FitFlow — Aplicativo de academia e exercícios

Projeto escolar novo em React Native + Expo. Não depende dos projetos anteriores.

## Recursos
- Tela inicial com painel e atalhos.
- Biblioteca de treinos e tela de detalhes.
- Formulário para registrar treino com `TextInput`.
- Perfil com campos editáveis.
- Tela “Sobre o app” que relaciona conceitos dos três bimestres.
- Navegação entre telas com React Navigation e Native Stack Navigator.
- Interface escura com destaque verde, cards e layout responsivo.

## Conteúdos demonstrados
- **1º bimestre:** componentes `View` e `Text`, `StyleSheet`, organização de layout.
- **2º bimestre:** `TextInput`, `useState`, `onChangeText`, botões, validação simples e `Alert`.
- **3º bimestre:** `NavigationContainer`, `createNativeStackNavigator`, rotas, `navigation.navigate`, `navigation.goBack` e parâmetros de rota.

> A divisão dos conteúdos é uma sugestão. Confirme com o professor quais tópicos foram ensinados em cada bimestre.

## Como executar
1. Instale o Node.js LTS.
2. Extraia a pasta do ZIP.
3. Abra a pasta `FitFlow_Academia` no VS Code.
4. No terminal da pasta, execute:

```bash
npm install
npx expo start
```

5. Escaneie o QR code com o Expo Go ou execute `npx expo start --web` para testar no navegador, se necessário.

## Observação
Este projeto é uma demonstração escolar. Os registros de formulário não são gravados em banco de dados: são validados e exibidos durante a execução. As sugestões de atividade são gerais e não substituem orientação profissional.
