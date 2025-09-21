export interface OnboardingStep {
    icone: string;
    titulo: string;
    descricao: string;
    corFundo: string;
}

export const onboardingSteps: OnboardingStep[] = [
    {
        icone: "🎥",
        titulo: "Permissão da Câmera",
        descricao: "Quando solicitado clique em Permitir, para habilitar sua câmera",
        corFundo: "bg-blue-100"
    },
    {
        icone: "🎤",
        titulo: "Permissão do Microfone",
        descricao: "Quando solicitado clique em Permitir, para habilitar seu microfone",
        corFundo: "bg-green-100"
    },
    {
        icone: "💡",
        titulo: "Ambiente Adequado",
        descricao: "Certifique-se de estar em um ambiente bem iluminado",
        corFundo: "bg-yellow-100"
    },
    {
        icone: "✅",
        titulo: "Tudo Pronto!",
        descricao: "Você está preparado para a consulta. Clique abaixo para iniciar.",
        corFundo: "bg-purple-100"
    }
];