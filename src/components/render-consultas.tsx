export function RenderConsultas() {
    // Dados de exemplo para as consultas
    const consultas = [
        { id: 1, data: '25/09/2025', hora: '14:00', medico: 'Dr. Silva', especialidade: 'Fisioterapia' },
        { id: 2, data: '21/09/2025', hora: '09:30', medico: 'Dra. Costa', especialidade: 'Psicologia' },
        { id: 3, data: '17/09/2025', hora: '11:00', medico: 'Dr. Pereira', especialidade: 'Nutrição' },
        { id: 4, data: '15/09/2025', hora: '15:00', medico: 'Dra. Almeida', especialidade: 'Terapia Ocupacional' },
        { id: 5, data: '05/09/2025', hora: '10:00', medico: 'Dr. Fernandes', especialidade: 'Fonoaudiologia' },
    ];
    return (
        <div className="space-y-4">
            {consultas.map((consulta) => (
                <div key={consulta.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Consulta com {consulta.medico} ({consulta.especialidade})
                    </h3>
                    <p className="text-gray-600">
                        Data: {consulta.data} às {consulta.hora}
                    </p>
                </div>
            ))}
        </div>
    );
}