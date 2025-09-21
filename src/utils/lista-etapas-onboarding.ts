export interface OnboardingStep {
  imagem: string;
  titulo: string;
  descricao: string;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    imagem: "/src/assets/imgs/onboarding/paciente-passo-1.png",
    titulo: "Vamos começar!",
    descricao: "Siga os passos para preparar sua consulta."
  },
  {
    imagem: "/src/assets/imgs/onboarding/paciente-passo-2.png",
    titulo: "Permissão da Câmera",
    descricao: "Quando solicitado, clique em Permitir para habilitar sua câmera"
  },
  {
    imagem: "/src/assets/imgs/onboarding/paciente-passo-3.png",
    titulo: "Permissão do Microfone",
    descricao: "Quando solicitado, clique em Permitir para habilitar seu microfone"
  },
  {
    imagem: "/src/assets/imgs/onboarding/paciente-passo-4.png",
    titulo: "Ambiente Adequado",
    descricao: "Certifique-se de estar em um ambiente bem iluminado"
  }
];