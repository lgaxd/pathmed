interface ChatHeaderProps {
    nomePaciente: string;
    nomeAssistente: string;
    status: string;
}

export function ChatHeader({ nomePaciente, nomeAssistente, status }: ChatHeaderProps) {
    return (
        <div className="bg-white shadow-sm p-4 border-b">
            <h1 className="text-2xl font-bold text-gray-800">{nomePaciente}</h1>
            <div className="flex items-center mt-1">
                <h2 className="text-lg text-gray-600 mr-2">{nomeAssistente}</h2>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-green-600 ml-1">{status}</span>
            </div>
        </div>
    );
}