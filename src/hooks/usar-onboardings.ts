import { useState } from 'react';

interface UseOnboardingProps {
    totalPassos: number;
}

export function useOnboarding({ totalPassos }: UseOnboardingProps) {
    const [passoAtual, setPassoAtual] = useState(1);

    const avancarPasso = () => {
        if (passoAtual < totalPassos) {
            setPassoAtual(passoAtual + 1);
        }
    };

    const voltarPasso = () => {
        if (passoAtual > 1) {
            setPassoAtual(passoAtual - 1);
        }
    };

    const reiniciar = () => {
        setPassoAtual(1);
    };

    return {
        passoAtual,
        avancarPasso,
        voltarPasso,
        reiniciar
    };
}