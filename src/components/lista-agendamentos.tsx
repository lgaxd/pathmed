import type { Agendamento } from "./../types/agendamento";

interface ListaAgendamentosProps {
    agendamentos: Agendamento[];
    titulo: string;
}

export function ListaAgendamentos({ agendamentos, titulo }: ListaAgendamentosProps) {
    const formatarData = (dataISO: string, horario: string) => {
        const data = new Date(dataISO);
        return `${data.toLocaleDateString('pt-BR')} ${horario}`;
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Agendado":
                return "text-blue-600 bg-blue-100";
            case "Cancelado":
                return "text-red-600 bg-red-100";
            case "Concluído":
                return "text-green-600 bg-green-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {titulo}
            </h2>

            {agendamentos.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Nenhum agendamento encontrado</p>
            ) : (
                <div className="space-y-4">
                    {agendamentos.map((agendamento) => (
                        <div
                            key={agendamento.id}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-medium text-gray-800">
                                    {agendamento.especialidade}
                                </h3>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(agendamento.status)}`}>
                                    {agendamento.status}
                                </span>
                            </div>

                            <div className="text-gray-600 space-y-1">
                                <p className="text-sm">
                                    <span className="font-medium">Médico:</span> {agendamento.medicoNome}
                                </p>
                                <p className="text-sm">
                                    <span className="font-medium">Data:</span> {formatarData(agendamento.data, agendamento.horario)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}