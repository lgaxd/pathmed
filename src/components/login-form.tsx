import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const [rghc, setRghc] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    return (
        // Formulário
        <div className="font-primary flex flex-col items-center w-full px-6 mt-10">
            <h1 className="text-white text-lg font-semibold mb-6">
                Insira seus dados
            </h1>

            {/* Campo RGHC */}
            <div className="relative w-full max-w-sm mb-4">
                <input
                    id="rghc"
                    placeholder="Digite seu RGHC"
                    value={rghc}
                    onChange={(e) => setRghc(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 pr-12 bg-white text-gray-700 placeholder-gray-400 shadow focus:outline-none"
                />
            </div>

            {/* Campo Senha */}
            <div className="relative w-full max-w-sm mb-2">
                <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 pr-12 bg-white text-gray-700 placeholder-gray-400 shadow focus:outline-none"
                />
                <button
                    type="button"
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setPasswordVisible((v: boolean) => !v)}
                    aria-label="Toggle password visibility"
                >
                    <img
                        src={
                            passwordVisible
                                ? "/src/assets/imgs/utils/icon-visibilidade-off.png"
                                : "/src/assets/imgs/utils/icon-visibilidade.png"
                        }
                        alt={passwordVisible ? "Ocultar senha" : "Mostrar senha"}
                        className="w-6 h-6"
                    />
                </button>
            </div>

            {/* Link consultar RGHC */}
            <button className="text-sm text-white underline mb-6 cursor-pointer">
                Consultar RGHC
            </button>

            {/* Botão entrar */}
            <button
                className="w-full max-w-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow cursor-pointer"
                onClick={() => navigate("/")}
            >
                Entrar
            </button>
        </div>
    );
}
