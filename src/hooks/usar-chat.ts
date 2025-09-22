import { useState } from 'react';

interface Mensagem {
    id: number;
    texto: string;
    bot: boolean;
}

export function useChat(mensagensIniciais: Mensagem[] = []) {
    const [mensagens, setMensagens] = useState<Mensagem[]>(mensagensIniciais);
    const [novaMensagem, setNovaMensagem] = useState('');

    const enviarMensagem = () => {
        if (novaMensagem.trim()) {
            const novaMensagemObj = {
                id: Date.now(),
                texto: novaMensagem.trim(),
                bot: false
            };

            setMensagens([...mensagens, novaMensagemObj]);
            setNovaMensagem('');
        }
    };

    return {
        mensagens,
        novaMensagem,
        setNovaMensagem,
        enviarMensagem
    };
}