import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import CalculatorScreen from './screens/CalculatorScreen';

export default function App() {
  const [logado, setLogado] = useState(false);

  if (!logado) {
    return (
      <LoginScreen
        onLogin={() => setLogado(true)}
      />
    );
  }

  return (
    <CalculatorScreen
      onLogout={() => setLogado(false)}
    />
  );
}