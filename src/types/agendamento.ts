import type { Especialidade } from "./especialidade";

export interface Agendamento {
    id: string;
    rghcPaciente: string;
    especialidade: Especialidade;
    data: string; // ISO 8601
    horario: string; // Formato "HH:mm"
    status: "Agendado" | "Cancelado" | "Concluído";
    medicoNome: string;
}