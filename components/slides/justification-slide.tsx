"use client"

import { useEffect, useState } from "react"

interface CardProps {
  title: string
  items: string[]
  icon: string
  delay: number
}

function Card({ title, items, icon, delay }: CardProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`p-5 rounded-lg border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm transition-all duration-500 transform hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
        <span className="text-xl">{icon}</span> {title}
      </h3>
      <ul className="space-y-2 text-sm text-slate-300">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-cyan-400 flex-shrink-0">▪</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function JustificationSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-6">
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          🎯 Justificativa
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
      </div>

      <p className="text-slate-300 mb-4">
        Esta pesquisa justifica-se por diferentes dimensões que perpassam o cuidado ao paciente diabético:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          icon="📊"
          title="Dimensão Epidemiológica"
          items={["Alta prevalência de Diabetes Mellitus", "Impacto na morbimortalidade", "Desafios de saúde pública"]}
          delay={100}
        />
        <Card
          icon="👨‍⚕️"
          title="Dimensão Assistencial"
          items={["Centralidade do enfermeiro", "Educação em saúde", "Demandas do cotidiano"]}
          delay={200}
        />
        <Card
          icon="🎓"
          title="Dimensão Acadêmica"
          items={["Evidências para formação", "Educação permanente", "Protocolos de cuidado"]}
          delay={300}
        />
      </div>
    </div>
  )
}
