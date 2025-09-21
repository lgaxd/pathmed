import type { Agendamento } from "../types/agendamento";
import { ListaAgendamentos } from "./lista-agendamentos";

export function RenderAgendamentos() {
  const agendamentosHoje: Agendamento[] = [
    {
      id: "1",
      rghcPaciente: "123456",
      especialidade: "Psicologia",
      data: "2025-05-24",
      horario: "14:30",
      status: "Agendado",
      medicoNome: "Dr. João Silva"
    }
  ];

  const proximosAgendamentos: Agendamento[] = [
    {
      id: "2",
      rghcPaciente: "123456",
      especialidade: "Fisioterapia",
      data: "2025-05-25",
      horario: "10:00",
      status: "Agendado",
      medicoNome: "Dra. Maria Santos"
    },
    {
      id: "3",
      rghcPaciente: "123456",
      especialidade: "Terapia Ocupacional",
      data: "2025-05-28",
      horario: "09:00",
      status: "Agendado",
      medicoNome: "Dr. Pedro Costa"
    },
    {
      id: "4",
      rghcPaciente: "123456",
      especialidade: "Nutrição",
      data: "2025-05-30",
      horario: "11:30",
      status: "Agendado",
      medicoNome: "Dra. Ana Oliveira"
    }
  ];

  return (
    <div className="p-6">
      <ListaAgendamentos 
        agendamentos={agendamentosHoje} 
        titulo="Consulta de hoje" 
      />
      
      <ListaAgendamentos 
        agendamentos={proximosAgendamentos} 
        titulo="Próximas consultas" 
      />
    </div>
  );
}