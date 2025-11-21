"use client"

export default function SuggestionsSlide() {
  const suggestions = [
    "Ampliação de capacitações continuadas e atualizadas sobre diabetes e suas complicações",
    "Intensificação de atividades educativas com pacientes, incluindo grupos de apoio estruturados",
    "Acompanhamento sistemático e longitudinal dos pacientes diabéticos",
    "Fortalecimento das ações de conscientização sobre fatores de risco e prevenção",
    "Inclusão mais robusta do tema diabetes na formação acadêmica de enfermeiros",
    "Implementação de protocolos padronizados de atendimento ao paciente diabético",
    "Melhor articulação entre serviços de saúde para garantir continuidade do cuidado",
  ]

  return (
    <div className="h-full flex flex-col justify-center gap-8">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold text-black mb-2">Sugestões para Aprimoramento</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
      </div>

      <ul className="space-y-3 animate-slide-in flex-1" style={{ animationDelay: "0.2s" }}>
        {suggestions.map((suggestion, idx) => (
          <li
            key={idx}
            className="flex gap-3 text-gray-800 text-sm group hover:translate-x-2 transition-transform duration-300"
          >
            <span className="w-2 h-2 mt-1.5 bg-blue-600 rounded-full flex-shrink-0" />
            <span className="leading-relaxed">{suggestion}</span>
          </li>
        ))}
      </ul>

      <div className="text-gray-700 text-sm border-t border-gray-300 pt-4">
        <p className="font-semibold text-black">Conclusão:</p>
        <p>
          Essas propostas convergem para fortalecer a formação continuada, melhorar o cuidado preventivo e fortalecer o
          papel da enfermagem na atenção primária.
        </p>
      </div>
    </div>
  )
}
