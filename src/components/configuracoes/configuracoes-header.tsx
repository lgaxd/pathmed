interface ConfiguracoesHeaderProps {
    titulo: string;
}

export function ConfiguracoesHeader({ titulo }: ConfiguracoesHeaderProps) {
    return (
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
            {titulo}
        </h1>
    );
}