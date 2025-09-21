import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Overlay } from "../components/overlay";
import { Header } from "../components/header";

export function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Usuário deslogado!");
    // Aqui você pode limpar tokens, redirecionar etc.
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Overlay visible={sidebarOpen} onClick={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />

      {/* Main */}
      <main className="p-6">
        <div className="text-lg mb-4">
          Olá, <b>paciente</b>!
        </div>

        <h2 className="text-blue-600 font-semibold mb-2">Consulta de hoje</h2>
        <div
          className="flex justify-between items-center p-4 bg-white rounded-xl shadow cursor-pointer hover:bg-gray-50 transition"
          onClick={() => (window.location.href = "/consulta/etapa01")}
        >
          <div>
            <p className="font-semibold">Nome do Médico</p>
            <p>Data: 2025-05-24 14:30</p>
            <p>Status: Agendada</p>
          </div>
          <div className="text-2xl text-blue-500">➜</div>
        </div>

        <h2 className="text-blue-600 font-semibold mt-6 mb-2">
          Próximas consultas
        </h2>
        <div className="space-y-3">
          <div className="p-4 bg-white rounded-xl shadow">
            <p className="font-semibold">Fisioterapia</p>
            <p>25/05/2025 10:00</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <p className="font-semibold">Psicologia</p>
            <p>28/05/2025 09:00</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow">
            <p className="font-semibold">Reabilitação</p>
            <p>30/05/2025 11:30</p>
          </div>
        </div>
      </main>
    </div>
  );
}
