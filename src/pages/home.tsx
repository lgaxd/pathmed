import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Overlay } from "../components/overlay";
import { Header } from "../components/header";
import { RenderAgendamentos } from "../components/render-agendamentos";

export function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    console.log("Usuário deslogado!");
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

        <RenderAgendamentos />
        
      </main>
    </div>
  );
}
