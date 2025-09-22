interface OnboardingHeaderProps {
    nomePaciente: string;
}

export function OnboardingHeader({ nomePaciente }: OnboardingHeaderProps) {
    return (
        <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Olá, {nomePaciente}!
            </h1>
            <p className="text-gray-600 text-lg">
                Vamos se preparar para consulta?
            </p>
        </div>
    );
}