import { useNavigate } from 'react-router-dom';

interface OnboardingButtonsProps {
    passoAtual: number;
    totalPassos: number;
    onVoltar: () => void;
    onAvancar: () => void;
}

export function OnboardingButtons({
    passoAtual,
    totalPassos,
    onVoltar,
    onAvancar
}: OnboardingButtonsProps) {
    const navigate = useNavigate();

    const handleIniciarConsulta = () => {
        navigate('/teleconsulta');
    };

    return (
        <div className="flex space-x-4">
            {passoAtual > 1 && (
                <button
                    onClick={onVoltar}
                    className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium cursor-pointer"
                >
                    Voltar
                </button>
            )}

            {passoAtual < totalPassos ? (
                <button
                    onClick={onAvancar}
                    className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium cursor-pointer"
                >
                    Continuar
                </button>
            ) : (
                <button
                    onClick={handleIniciarConsulta}
                    className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium cursor-pointer"
                >
                    Entrar na tele consulta
                </button>
            )}
        </div>
    );
}