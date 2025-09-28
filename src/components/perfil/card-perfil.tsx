interface PerfilCardProps {
    nome: string;
    email: string;
    imagemUrl?: string;
    tipoSanguineo: string;
    dataNascimento: string;
    endereco: string;
    telefone: string;
    rghc: string;
}

export function PerfilCard({
    nome,
    email,
    imagemUrl,
    tipoSanguineo,
    dataNascimento,
    endereco,
    telefone,
    rghc,
}: PerfilCardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
            <div className="flex flex-col items-center">
                <img
                    src={imagemUrl || "https://via.placeholder.com/150"}
                    alt={nome}
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h2 className="text-2xl font-semibold text-gray-800">{nome}</h2>
                <p className="text-gray-600">{email}</p>
            </div>
            <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Tipo Sanguíneo:</span>
                    <span className="text-gray-600">{tipoSanguineo}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Data de Nascimento:</span>
                    <span className="text-gray-600">{dataNascimento}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Endereço:</span>
                    <span className="text-gray-600">{endereco}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Telefone:</span>
                    <span className="text-gray-600">{telefone}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">RGHC:</span>
                    <span className="text-gray-600">{rghc}</span>
                </div>
            </div>
        </div>
    );
}