interface ConfigSectionProps {
    titulo: string;
    children: React.ReactNode;
}

export function ConfigSection({ titulo, children }: ConfigSectionProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{titulo}</h2>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    );
}