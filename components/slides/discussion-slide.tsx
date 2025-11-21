export default function DiscussionSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8 overflow-y-auto max-w-6xl">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
          Discussao
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-5 rounded-lg border border-cyan-200 bg-white shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            A <strong>principal dificuldade</strong> relatada e a <strong>baixa adesao dos pacientes</strong> mesmo com
            orientacoes frequentes, o que limita o impacto das acoes educativas.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-blue-200 bg-white shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            A <strong>formacao academica</strong> e a educacao permanente mostram lacunas; ha necessidade de capacitacoes
            continuas e metodologias ativas alinhadas ao perfil do usuario.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-indigo-200 bg-white shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            Enfermeiros reconhecem a importancia da <strong>educacao em saude</strong>, mas citam falta de tempo,
            recursos e suporte institucional para sistematizar rotinas.
          </p>
        </div>

        <div className="p-5 rounded-lg border border-emerald-200 bg-white shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            As <strong>sugestoes da equipe</strong> convergem com recomendacoes oficiais (SBD, 2023; Brasil, 2024) e
            reforcam investir em materiais, protocolos claros e acompanhamento periodico.
          </p>
        </div>
      </div>
    </div>
  )
}
