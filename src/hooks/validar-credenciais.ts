export function useValidarCredenciais(rghc: string, password: string, setErro: (parameter : any) => void, navigationHandler: () => void) {

    const validar = () => {
        // Validação de formatação de RGHC (exemplo simples)
        if (/^\d{7,10}$/.test(rghc) && password.length >= 6) {
            setErro(null);
            navigationHandler();
        } else {
            setErro('O RGHC deve ter entre 7 e 10 dígitos e a senha deve ter no mínimo 6 caracteres.');
        }
    };

    return {
        validar
    };
}