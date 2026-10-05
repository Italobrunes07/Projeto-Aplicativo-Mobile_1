export const commands = [
    {
        id: 1,
        titulo: 'Criar projeto Expo',
        comando: 'npx create-expo-app meu-app',
        descricao: 'Cria um novo projeto utilizando Expo.'
    },

    {
        id: 2,
        titulo: 'Entrar na pasta',
        comando: 'cd meu-app',
        descricao: 'Entra na pasta do projeto.'
    },

    {
        id: 3,
        titulo: 'Instalar dependências',
        comando: 'npm install',
        descricao: 'Instala as dependências do projeto.'
    },

    {
        id: 4,
        titulo: 'Iniciar o Expo',
        comando: 'npx expo start',
        descricao: 'Inicia o servidor de desenvolvimento.'
    },

    {
        id: 5,
        titulo: 'Executar na Web',
        comando: 'npm run web',
        descricao: 'Executa o aplicativo no navegador.'
    },

    {
        id: 6,
        titulo: 'Executar no Android',
        comando: 'npm run android',
        descricao: 'Executa o aplicativo no Android.'
    },

    {
        id: 7,
        titulo: 'Verificar o código',
        comando: 'npx expo lint',
        descricao: 'Verifica possíveis problemas no código.'
    }
];