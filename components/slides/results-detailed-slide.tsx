"use client"

export default function ResultsDetailedSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold text-black mb-2">Resultados - Achados Principais</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
      </div>

      <div className="space-y-4 animate-slide-in flex-1" style={{ animationDelay: "0.2s" }}>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-black mb-1">População Estudada:</p>
          <p className="text-gray-800">
            11 enfermeiros (7 de Jacutinga/MG e 4 de Ouro Fino/MG) que atuam diretamente na Atenção Primária à Saúde
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-black mb-1">Período de Coleta:</p>
          <p className="text-gray-800">
            Abril a Julho de 2025, através de questionário semiestruturado presencial ou online
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-black mb-1">Principal Dificuldade:</p>
          <p className="text-gray-800 font-bold">Baixa adesão dos pacientes ao tratamento: 81,8%</p>
          <p className="text-gray-700 text-sm mt-1">
            Além disso: 9,1% apontaram falta de recursos e 9,1% falta de conhecimento dos pacientes
          </p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-black mb-1">Reconhecimento dos Profissionais:</p>
          <p className="text-gray-800">
            100% dos enfermeiros afirmaram que educação em saúde é fundamental para controle do Diabetes Mellitus
          </p>
        </div>
      </div>
    </div>
  )
}
