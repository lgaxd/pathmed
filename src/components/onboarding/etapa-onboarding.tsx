interface OnboardingStepProps {
    icone: string;
    titulo: string;
    descricao: string;
    corFundo: string;
}

export function OnboardingStep({ icone, titulo, descricao, corFundo }: OnboardingStepProps) {
    return (
        <div className="text-center">
            <div className={`w-16 h-16 ${corFundo} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{icone}</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {titulo}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
                {descricao}
            </p>
        </div>
    );
}