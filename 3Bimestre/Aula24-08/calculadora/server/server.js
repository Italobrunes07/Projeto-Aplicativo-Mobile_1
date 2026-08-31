require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { GoogleGenAI } = require('@google/genai');

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


app.get('/', (req, res) => {
  res.send('Servidor da IA funcionando! 🤖');
});


app.post('/chat', async (req, res) => {

  console.log('📩 Mensagem recebida!');

  try {

    const { mensagem, usuario } = req.body;

    console.log('👤 Usuário:', usuario?.nome);
    console.log('💬 Mensagem:', mensagem);

    if (!mensagem) {
      return res.status(400).json({
        erro: 'Mensagem vazia.',
      });
    }

    const contexto = `
Você é um assistente virtual pessoal.

Informações do usuário:

Nome: ${usuario?.nome || 'Não informado'}
Idade: ${usuario?.idade || 'Não informado'}
Cidade: ${usuario?.cidade || 'Não informado'}
Jogo favorito: ${usuario?.jogo || 'Não informado'}
Objetivo: ${usuario?.objetivo || 'Não informado'}

Use essas informações para personalizar suas respostas.

Regras:

- Responda sempre em português do Brasil.
- Seja amigável.
- Chame o usuário pelo nome quando fizer sentido.
- Não invente informações sobre ele.
- Responda de maneira clara.
- Não precisa fazer respostas enormes.

Mensagem do usuário:

${mensagem}
`;

    console.log('🤖 Enviando para o Gemini...');


    const interaction = await ai.interactions.create({
      model: 'gemini-3.7-flash',
      input: contexto,
    });


    console.log('✅ Gemini respondeu!');


    const resposta =
      interaction.output_text ||
      'Não consegui gerar uma resposta.';


    console.log('📤 Enviando resposta para o aplicativo.');


    res.json({
      resposta: resposta,
    });


  } catch (error) {

    console.error('❌ ERRO NO GEMINI:');
    console.error(error);

    res.status(500).json({
      erro: 'Erro ao conversar com o Gemini.',
      detalhes: error.message,
    });

  }

});


const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {

  console.log('');
  console.log('================================');
  console.log('🤖 SERVIDOR DA IA FUNCIONANDO');
  console.log('================================');
  console.log(`🚀 Porta: ${PORT}`);
  console.log('');

});