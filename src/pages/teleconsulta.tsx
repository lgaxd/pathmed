import { useNavigate } from 'react-router-dom';

export function TeleConsultaEncaminhamento() {
    const navigate = useNavigate();

    const handleSair = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
                {/* Animação de carregamento */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-transparent rounded-full border-b-blue-400 animate-spin reverse-spin"></div>
                    </div>
                </div>

                {/* Mensagem de encaminhamento */}
                <div className="mb-8">
                    <p className="text-gray-600 text-lg font-medium leading-relaxed">
                        Encaminhando para<br />
                        sua tele consulta...
                    </p>
                </div>

                {/* Botão de sair */}
                <button
                    onClick={handleSair}
                    className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium w-full cursor-pointer"
                >
                    Sair
                </button>
            </div>
        </div>
    );
}