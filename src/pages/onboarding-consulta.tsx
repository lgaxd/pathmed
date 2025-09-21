// pages/onboarding-consulta.tsx
import { OnboardingContainer } from '../components/onboarding/onboarding-container';
import { OnboardingHeader } from '../components/onboarding/onboarding-header';
import { OnboardingStep } from '../components/onboarding/etapa-onboarding';
import { ProgressIndicator } from '../components/onboarding/indicador-progresso';
import { OnboardingButtons } from '../components/onboarding/botoes-onboarding';
import { useOnboarding } from '../hooks/usar-onboardings';
import { onboardingSteps } from '../utils/lista-etapas-onboarding';

export function OnboardingConsulta() {
  const totalPassos = onboardingSteps.length;
  const { passoAtual, avancarPasso, voltarPasso } = useOnboarding({ totalPassos });

  const handleIniciarConsulta = () => {
    console.log('Iniciando tele consulta...');
    // Lógica para iniciar a consulta
  };

  const passoAtualData = onboardingSteps[passoAtual - 1];

  return (
    <OnboardingContainer>
      <OnboardingHeader
        nomePaciente="Nelson"
      />

      <div className="mb-6">
        <OnboardingStep
          icone={passoAtualData.icone}
          titulo={passoAtualData.titulo}
          descricao={passoAtualData.descricao}
          corFundo={passoAtualData.corFundo}
        />
      </div>

      <ProgressIndicator
        passoAtual={passoAtual}
        totalPassos={totalPassos}
      />

      <OnboardingButtons
        passoAtual={passoAtual}
        totalPassos={totalPassos}
        onVoltar={voltarPasso}
        onAvancar={avancarPasso}
        onIniciarConsulta={handleIniciarConsulta}
      />
    </OnboardingContainer>
  );
}