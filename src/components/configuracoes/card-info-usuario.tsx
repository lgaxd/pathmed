interface UserInfoCardProps {
    nome: string;
    idade: string;
    tipoSanguineo: string;
}

export function UserInfoCard({ nome, idade, tipoSanguineo }: UserInfoCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {nome}
            </h2>
            <div className="flex space-x-4 text-gray-600">
                <span>{idade} anos</span>
                <span className="font-medium">{tipoSanguineo}</span>
            </div>
        </div>
    );
}