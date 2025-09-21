interface ProgressIndicatorProps {
    passoAtual: number;
    totalPassos: number;
}

export function ProgressIndicator({ passoAtual, totalPassos }: ProgressIndicatorProps) {
    return (
        <div className="flex justify-center mb-6">
            <div className="flex space-x-2">
                {Array.from({ length: totalPassos }, (_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i + 1 === passoAtual ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}