interface lembreteCardProps {
    titulo: string;
    descricao: string;
    dataHora: string;
}

export function LembreteCard({ titulo, descricao, dataHora }: lembreteCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{titulo}</h3>
            <p className="text-gray-600 mb-4">{descricao}</p>
            <span className="text-sm text-gray-500">{dataHora}</span>
        </div>
    );
}