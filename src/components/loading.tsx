export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-4">
      {/* Círculo de loading animado */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent rounded-full border-t-blue-500 animate-spin"></div>
      </div>
      
      {/* Texto com animação suave */}
      <p className="text-blue-500 font-medium animate-pulse">Carregando...</p>
    </div>
  );
}
