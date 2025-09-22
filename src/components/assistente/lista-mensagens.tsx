import { MessageBubble } from './mensagem-bolha';

interface Mensagem {
    id: number;
    texto: string;
    bot: boolean;
}

interface MessageListProps {
    mensagens: Mensagem[];
}

export function MessageList({ mensagens }: MessageListProps) {
    return (
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {mensagens.map((mensagem) => (
                <MessageBubble
                    key={mensagem.id}
                    mensagem={mensagem.texto}
                    isBot={mensagem.bot}
                />
            ))}
        </div>
    );
}