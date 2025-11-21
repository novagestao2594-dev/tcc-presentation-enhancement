"use client"

import { useEffect, useState } from "react"

interface CardProps {
  icon: string
  title: string
  items: { icon: string; text: string }[]
  color: string
}

function MethodologyCard({ icon, title, items, color }: CardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`p-6 rounded-xl border-2 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${isVisible ? "animate-scale-in" : ""}`}
      style={{
        borderImage: `linear-gradient(135deg, ${color}) 1`,
      }}
    >
      <h3
        className={`font-bold text-lg mb-4 flex items-center gap-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        <span className="text-2xl">{icon}</span> {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-300 text-sm group hover:translate-x-1 transition-transform">
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function MethodologySlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-6 overflow-y-auto">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent mb-3">
          🔬 Metodologia
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <MethodologyCard
          icon="📋"
          title="Tipo e Abordagem"
          color="from-cyan-500 to-blue-500"
          items={[
            { icon: "✓", text: "Estudo quantitativo, descritivo e transversal" },
            { icon: "✓", text: "Questionário semiestruturado" },
          ]}
        />

        <MethodologyCard
          icon="👥"
          title="Participantes"
          color="from-purple-500 to-pink-500"
          items={[
            { icon: "→", text: "11 enfermeiros" },
            { icon: "→", text: "Atenção Primária" },
            { icon: "→", text: "Jacutinga e Ouro Fino (MG)" },
          ]}
        />

        <MethodologyCard
          icon="📊"
          title="Coleta de Dados"
          color="from-orange-500 to-red-500"
          items={[
            { icon: "✓", text: "Abril a julho de 2025" },
            { icon: "✓", text: "Análise descritiva" },
          ]}
        />

        <MethodologyCard
          icon="⚖️"
          title="Aspectos Éticos"
          color="from-green-500 to-emerald-500"
          items={[
            { icon: "✓", text: "Aprovação CEP" },
            { icon: "✓", text: "TCLE assinado" },
            { icon: "✓", text: "Confidencialidade garantida" },
          ]}
        />
      </div>
    </div>
  )
}
