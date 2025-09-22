import { ListaAgendamentos } from "./lista-agendamentos";
import type { Agendamento } from "../types/agendamento";

export function RenderAgendamentos() {
  const agendamentosHoje: Agendamento[] = [
    {
      id: "1",
      rghcPaciente: "123456",
      especialidade: "Fisioterapia",
      data: new Date().toISOString().split('T')[0], // Data de hoje
      horario: "09:30",
      status: "Agendado",
      medicoNome: "Dr. Carlos Silva"
    },
    {
      id: "2",
      rghcPaciente: "123456",
      especialidade: "Fonoaudiologia",
      data: new Date().toISOString().split('T')[0], // Data de hoje
      horario: "13:20",
      status: "Agendado",
      medicoNome: "Dra. Ana Santos"
    }
  ];

  const agendamentosFuturos: Agendamento[] = [
    {
      id: "3",
      rghcPaciente: "123456",
      especialidade: "Nutrição",
      data: "2025-05-26", // Data futura
      horario: "15:00",
      status: "Agendado",
      medicoNome: "Dr. Paulo Costa"
    }
  ];

  return (
    <div className="p-6">
      
      <ListaAgendamentos 
        agendamentos={agendamentosHoje} 
        titulo="Na semana" 
      />
      
      <ListaAgendamentos 
        agendamentos={agendamentosFuturos} 
        titulo="Próximos dias" 
      />

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium cursor-pointer">
          Agendar consulta
        </button>
      </div>
    </div>
  );
}