"use client"

import { useEffect, useState } from "react"

interface ConclusionBoxProps {
  emoji: string
  title: string
  color: string
  content: string
  delay: number
}

function ConclusionBox({ emoji, title, color, content, delay }: ConclusionBoxProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`p-6 rounded-xl border-2 bg-gradient-to-br backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
        isVisible ? "animate-scale-in" : "opacity-0"
      }`}
      style={{
        borderImage: `linear-gradient(135deg, ${color}) 1`,
        backgroundImage: `linear-gradient(135deg, var(--start-color) 0%, var(--end-color) 100%)`,
      }}
    >
      <p
        className={`font-bold text-lg mb-3 flex items-center gap-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        <span className="text-2xl">{emoji}</span> {title}
      </p>
      <p className="text-slate-200 leading-relaxed">{content}</p>
    </div>
  )
}

export default function ConclusionSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-6 overflow-y-auto">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent mb-3">
          ✅ Conclusão
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50" />
      </div>

      <div className="space-y-5 mt-6">
        <ConclusionBox
          emoji="📍"
          title="Papel do Enfermeiro"
          color="from-cyan-500 to-blue-500"
          content="O enfermeiro desempenha papel fundamental na educação em saúde e na prevenção de complicações do Diabetes Mellitus, atuando como mediador do autocuidado e promotor de hábitos saudáveis."
          delay={0}
        />

        <ConclusionBox
          emoji="🎯"
          title="Desafios Identificados"
          color="from-purple-500 to-pink-500"
          content="A maioria dos profissionais apresenta conhecimento satisfatório, porém a efetividade das ações ainda é limitada por baixa adesão dos pacientes, carência de recursos e tempo reduzido para atividades educativas."
          delay={150}
        />

        <ConclusionBox
          emoji="🚀"
          title="Recomendações Futuras"
          color="from-orange-500 to-red-500"
          content="Necessário investir na formação permanente, aprimorar a estrutura dos serviços de saúde e desenvolver estratégias interdisciplinares que fortaleçam o vínculo e a corresponsabilização dos pacientes."
          delay={300}
        />
      </div>
    </div>
  )
}
