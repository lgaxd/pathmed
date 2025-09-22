interface OnboardingStepProps {
    imagem: string;
    titulo: string;
    descricao: string;
}

export function OnboardingStep({ imagem, titulo, descricao }: OnboardingStepProps) {
    return (
        <div className="text-center">
            <div className="flex justify-center mb-6">
                <img
                    src={imagem}
                    alt={titulo}
                    className="w-64 h-64 object-contain" // Tamanho grande para a imagem
                    onError={(e) => {
                        // Fallback para ícone emoji caso a imagem não carregue
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
              <div class="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span class="text-6xl">${getFallbackEmoji(titulo)}</span>
              </div>
            `;
                    }}
                />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {titulo}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
                {descricao}
            </p>
        </div>
    );
}

// Função fallback para emojis
function getFallbackEmoji(titulo: string): string {
    const emojis: { [key: string]: string } = {
        'Câmera': '🎥',
        'Microfone': '🎤',
        'Ambiente': '💡',
        'Pronto': '✅'
    };

    for (const [key, emoji] of Object.entries(emojis)) {
        if (titulo.includes(key)) return emoji;
    }

    return '📋';
}