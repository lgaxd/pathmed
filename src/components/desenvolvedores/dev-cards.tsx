interface DevCardProps {
    nome: string;
    rm: string;
    foto: string;
    linkedin: string;
    github: string;
}

export function DevCard({ nome, rm, foto, linkedin, github }: DevCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col items-center">
            <img
                src={foto}
                alt={nome}
                className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{nome}</h3>
            <p className="text-gray-600 mb-4">RM: {rm}</p>
            <div className="flex space-x-4">
                <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    LinkedIn
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}