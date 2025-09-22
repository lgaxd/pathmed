interface MessageBubbleProps {
    mensagem: string;
    isBot: boolean;
}

export function MessageBubble({ mensagem, isBot }: MessageBubbleProps) {
    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
            <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${isBot
                        ? 'bg-blue-100 text-gray-800'
                        : 'bg-blue-500 text-white'
                    }`}
            >
                <p className="text-sm">{mensagem}</p>
            </div>
        </div>
    );
}