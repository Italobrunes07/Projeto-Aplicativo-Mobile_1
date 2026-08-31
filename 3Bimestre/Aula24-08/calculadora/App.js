import React, { useState } from 'react';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

export default function App() {

  const [usuario, setUsuario] = useState(null);

  const [tela, setTela] = useState('login');


  function criarPerfil(dados) {
    setUsuario(dados);
    setTela('home');
  }


  function editarPerfil() {
    setTela('login');
  }


  function abrirChat() {
    setTela('chat');
  }


  function voltarPerfil() {
    setTela('home');
  }


  if (tela === 'login') {

    return (
      <LoginScreen
        onContinuar={criarPerfil}
      />
    );

  }


  if (tela === 'chat') {

    return (
      <ChatScreen
        usuario={usuario}
        onVoltar={voltarPerfil}
      />
    );

  }


  return (
    <HomeScreen
      usuario={usuario}
      onEditar={editarPerfil}
      onChat={abrirChat}
    />
  );
}