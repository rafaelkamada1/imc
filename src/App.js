import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
      setImc(resultadoIMC.toFixed(2));
      classificarIMC(resultadoIMC);
    } else {
      setImc(null);
      setClassificacao('');
    }
  };

  const classificarIMC = (valorIMC) => {
    if (valorIMC < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (valorIMC < 24.9) {
      setClassificacao('Peso normal');
    } else if (valorIMC < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <form>
        <div>
          <label htmlFor="altura">Altura (em cm): </label>
          <input
            id="altura"
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            onBlur={calcularIMC}
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (em kg): </label>
          <input
            id="peso"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            onBlur={calcularIMC}
          />
        </div>
      </form>
      {imc !== null && (
        <div>
          <h2>Resultado</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
