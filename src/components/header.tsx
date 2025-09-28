import { useState } from "react";
import iconeUsuario from "../assets/imgs/utils/icone-usuario.png";
import icone80anos from "../assets/imgs/logos/logo-80anos.png";

interface HeaderProps {
    onMenuClick: () => void;
    onLogout?: () => void;
}

export function Header({ onMenuClick, onLogout }: HeaderProps) {
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 py-3 bg-blue-500 text-white shadow relative z-20">
            {/* Botão de menu (abre sidebar) */}
            <button
                className="text-2xl cursor-pointer"
                onClick={onMenuClick}
                aria-label="Abrir menu lateral"
            >
                ☰
            </button>

            {/* Botão com imagem da logotipo, que encaminha à página Home usando navigate. */}
            <div className="flex-grow text-center">
                <img
                    src={icone80anos}
                    alt="Logotipo"
                    className="h-8 mx-auto cursor-pointer"
                    onClick={() => window.location.href = '/'}
                />
            </div>

            {/* Avatar / Dropdown */}
            <div className="relative">
                <button
                    className="cursor-pointer"
                    onClick={() => setProfileOpen((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={profileOpen}
                >
                    <img
                        src={iconeUsuario}
                        alt="Ícone de Usuário"
                        className="w-10 h-10 rounded-full border border-white shadow"
                    />
                </button>

                {profileOpen && (
                    <ul className="absolute right-0 mt-2 w-32 bg-white text-gray-700 rounded-lg shadow-lg">
                        <li>
                            <button
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={onLogout}
                            >
                                Sair
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
}
