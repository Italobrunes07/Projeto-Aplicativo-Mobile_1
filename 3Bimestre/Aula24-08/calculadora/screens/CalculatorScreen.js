import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CalculatorScreen({ onLogout }) {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function numero(numero) {
    if (display === '0' || display === 'Erro') {
      setDisplay(numero);
    } else {
      setDisplay(display + numero);
    }
  }

  function limpar() {
    setDisplay('0');
    setValorAnterior(null);
    setOperacao(null);
  }

  function operacaoSelecionada(op) {
    setValorAnterior(parseFloat(display));
    setOperacao(op);
    setDisplay('0');
  }

  function calcular() {
    if (valorAnterior === null || operacao === null) {
      return;
    }

    const atual = parseFloat(display);
    let resultado;

    if (operacao === '+') {
      resultado = valorAnterior + atual;
    }

    if (operacao === '-') {
      resultado = valorAnterior - atual;
    }

    if (operacao === '×') {
      resultado = valorAnterior * atual;
    }

    if (operacao === '÷') {
      if (atual === 0) {
        setDisplay('Erro');
        return;
      }

      resultado = valorAnterior / atual;
    }

    setDisplay(String(resultado));
    setValorAnterior(null);
    setOperacao(null);
  }

  return (
    <View style={styles.container}>

      <View style={styles.topo}>
        <Text style={styles.titulo}>
          🧮 Calculadora
        </Text>

        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.sair}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calculadora}>

        <View style={styles.display}>
          <Text style={styles.displayTexto}>
            {display}
          </Text>
        </View>

        <View style={styles.linha}>

          <Botao
            texto="C"
            vermelho
            onPress={limpar}
          />

          <Botao
            texto="7"
            onPress={() => numero('7')}
          />

          <Botao
            texto="8"
            onPress={() => numero('8')}
          />

          <Botao
            texto="9"
            onPress={() => numero('9')}
          />

          <Botao
            texto="÷"
            azul
            onPress={() => operacaoSelecionada('÷')}
          />

        </View>

        <View style={styles.linha}>

          <Botao
            texto="4"
            onPress={() => numero('4')}
          />

          <Botao
            texto="5"
            onPress={() => numero('5')}
          />

          <Botao
            texto="6"
            onPress={() => numero('6')}
          />

          <Botao
            texto="×"
            azul
            onPress={() => operacaoSelecionada('×')}
          />

          <Botao
            texto="-"
            azul
            onPress={() => operacaoSelecionada('-')}
          />

        </View>

        <View style={styles.linha}>

          <Botao
            texto="1"
            onPress={() => numero('1')}
          />

          <Botao
            texto="2"
            onPress={() => numero('2')}
          />

          <Botao
            texto="3"
            onPress={() => numero('3')}
          />

          <Botao
            texto="+"
            azul
            onPress={() => operacaoSelecionada('+')}
          />

          <Botao
            texto="="
            verde
            onPress={calcular}
          />

        </View>

        <View style={styles.linha}>

          <Botao
            texto="0"
            onPress={() => numero('0')}
          />

        </View>

      </View>
    </View>
  );
}

function Botao({
  texto,
  onPress,
  azul,
  verde,
  vermelho,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.botao,
        azul && styles.azul,
        verde && styles.verde,
        vermelho && styles.vermelho,
      ]}
      onPress={onPress}
    >
      <Text style={styles.botaoTexto}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 20,
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  sair: {
    color: '#60a5fa',
    fontSize: 17,
    fontWeight: 'bold',
  },

  calculadora: {
    width: '100%',
    maxWidth: 650,
    alignSelf: 'center',
  },

  display: {
    backgroundColor: '#020617',
    height: 140,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 25,
    marginBottom: 15,
  },

  displayTexto: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },

  linha: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  botao: {
    flex: 1,
    height: 70,
    backgroundColor: '#334155',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  azul: {
    backgroundColor: '#2563eb',
  },

  verde: {
    backgroundColor: '#16a34a',
  },

  vermelho: {
    backgroundColor: '#dc2626',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});