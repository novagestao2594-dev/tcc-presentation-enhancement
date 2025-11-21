export default function IntroductionSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8 max-w-5xl">
      <div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2">
          Introducao
        </h2>
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
      </div>

      <div className="space-y-5 text-slate-800 text-justify leading-relaxed text-lg md:text-xl">
        <p className="bg-white/70 p-4 rounded-lg shadow-sm border border-slate-200">
          O <strong>Diabetes Mellitus (DM)</strong> e considerado um dos maiores desafios de saude publica na atualidade
          devido a sua alta prevalencia e as complicacoes decorrentes do controle inadequado da doenca. Estima-se que
          milhoes de brasileiros convivam com o diagnostico, numero que tende a crescer em funcao do envelhecimento
          populacional e do aumento de fatores de risco como <strong>obesidade e sedentarismo</strong>.
        </p>

        <p className="bg-white/70 p-4 rounded-lg shadow-sm border border-slate-200">
          A <strong>educacao em saude</strong> surge como um dos pilares fundamentais para o controle do diabetes e a
          prevencao de complicacoes. Acoes educativas estruturadas tem mostrado resultados importantes na melhora da
          glicemia e na diminuicao das complicacoes, e o enfermeiro exerce papel essencial na Atencao Primaria a Saude
          como educador.
        </p>

        <p className="border-l-4 border-cyan-500 pl-5 py-3 bg-cyan-50 rounded-lg shadow-sm text-slate-900">
          No entanto, desafios persistem, como a <strong>baixa adesao ao tratamento</strong>, a insuficiencia de recursos
          e a formacao academica que muitas vezes nao aprofunda temas relacionados ao cuidado cronico.
        </p>
      </div>
    </div>
  )
}
