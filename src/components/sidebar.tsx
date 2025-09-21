interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const menuItems = [
    "Painel principal",
    "Lembretes",
    "Consultas",
    "Perfil",
    "Assistente virtual",
    "Configurações",
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-blue-500 text-white transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg z-40`}
    >
      {/* Botão de fechar */}
      <div className="flex justify-end p-4">
        <button
          className="text-3xl font-light cursor-pointer hover:bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
          onClick={onClose}
          aria-label="Fechar menu"
        >
          ✕
        </button>
      </div>

      {/* Lista de itens */}
      <nav className="mt-6 px-6 space-y-4 font-primary">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className="flex items-center gap-2 text-lg font-medium cursor-pointer p-2 rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-200 group"
            >
              <span className="text-sm font-semibold group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="group-hover:font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}