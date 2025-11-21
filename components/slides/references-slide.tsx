export default function ReferencesSlide() {
  const references = [
    "Sociedade Brasileira de Diabetes. Diretrizes da SBD 2023. Sao Paulo: SBD, 2023.",
    "Brasil. Ministerio da Saude. Politica Nacional de Educacao Permanente em Saude. Brasilia: MS, 2018.",
    "Sousa MA et al. Pe diabetico: lacunas entre conhecimento e pratica na atencao basica. Rev Saude Publica, 51(4), 2017.",
    "Paes MC et al. Grupos educativos e letramento em saude. Rev Bras Promocao da Saude, 35(1), 2022.",
    "Benites AC et al. Adesao ao autocuidado em diabetes na atencao primaria. Rev Bras Enfermagem, 77(1), 2024.",
  ]

  return (
    <div className="h-full flex flex-col justify-center gap-6 overflow-y-auto max-w-6xl">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
          Referencias
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {references.map((ref, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border border-slate-200 bg-white shadow-sm hover:border-cyan-400 transition-colors"
          >
            <p className="text-sm text-slate-800 leading-relaxed">
              <span className="text-cyan-600 font-semibold mr-2">[{idx + 1}]</span>
              {ref}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-500 italic">
        Referencias completas disponiveis na versao final do TCC.
      </p>
    </div>
  )
}
