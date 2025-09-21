import { useState } from 'react';
import primeiroPassoImg from '/src/assets/imgs/onboarding/paciente-passo-1.png';

export function OnboardingConsulta() {
  const [passoAtual, setPassoAtual] = useState(1);
  const totalPassos = 3; // Exemplo com 3 passos

  const avancarPasso = () => {
    if (passoAtual < totalPassos) {
      setPassoAtual(passoAtual + 1);
    }
  };

  const voltarPasso = () => {
    if (passoAtual > 1) {
      setPassoAtual(passoAtual - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Olá, Nelson!
          </h1>
          <p className="text-gray-600 text-lg">
            Vamos nos preparar para consulta?
          </p>
        </div>

        {/* Conteúdo do passo atual */}
        <div className="mb-8">
          {renderizarPasso(passoAtual)}
        </div>

        {/* Indicador de progresso */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {Array.from({ length: totalPassos }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 === passoAtual ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        <div className="flex space-x-4">
          <button
            onClick={voltarPasso}
            disabled={passoAtual === 1}
            className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
          >
            Voltar
          </button>
          <button
            onClick={avancarPasso}
            className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            {passoAtual === totalPassos ? 'Finalizar' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Função para renderizar o conteúdo de cada passo
function renderizarPasso(passo: number) {
  switch (passo) {
    case 1:
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <img src={primeiroPassoImg} alt="Paciente no primeiro passo" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Boas-vindas!
          </h2>
          <p className="text-gray-600">
            Vamos guiá-lo através do processo de preparação para sua consulta.
          </p>
        </div>
      );

    case 2:
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">📋</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Preparação
          </h2>
          <p className="text-gray-600">
            Verifique se você tem todos os documentos e exames necessários.
          </p>
        </div>
      );

    case 3:
      return (
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✅</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Pronto!
          </h2>
          <p className="text-gray-600">
            Tudo preparado para sua consulta. Boa sorte!
          </p>
        </div>
      );

    default:
      return null;
  }
}