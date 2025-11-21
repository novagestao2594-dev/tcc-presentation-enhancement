"use client"

import { useEffect, useState } from "react"
import { AnimatedBlock, ScaleIn } from "../animations"

const menuItems = [
  { icon: "📌", text: "Introdução", color: "from-cyan-500 to-blue-500" },
  { icon: "🎯", text: "Justificativa", color: "from-blue-500 to-purple-500" },
  { icon: "❓", text: "Problema", color: "from-purple-500 to-pink-500" },
  { icon: "🎯", text: "Objetivos", color: "from-pink-500 to-orange-500" },
  { icon: "🔬", text: "Metodologia", color: "from-orange-500 to-red-500" },
  { icon: "📈", text: "Resultados", color: "from-red-500 to-pink-500" },
  { icon: "🧠", text: "Discussão", color: "from-pink-500 to-purple-500" },
  { icon: "✅", text: "Conclusão", color: "from-purple-500 to-blue-500" },
  { icon: "📖", text: "Referências", color: "from-blue-500 to-cyan-500" },
]

export default function MenuSlide() {
  const [visibleItems, setVisibleItems] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        if (prev < menuItems.length) return prev + 1
        return prev
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex flex-col justify-center gap-8">
      <AnimatedBlock delay={200}>
        <h2 className="text-6xl font-bold text-black mb-4">🧭 Estrutura da Apresentação</h2>
        <div className="h-3 w-48 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full shadow-lg" />
      </AnimatedBlock>

      <div className="grid grid-cols-3 gap-6 mt-8">
        {menuItems.map((item, idx) => (
          <ScaleIn
            key={idx}
            delay={300 + idx * 80}
            className={`transition-all duration-500 ${idx < visibleItems ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="p-6 rounded-xl bg-white border-3 border-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group text-center">
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
              <span className="font-bold text-black text-lg block">{item.text}</span>
            </div>
          </ScaleIn>
        ))}
      </div>

      <AnimatedBlock delay={1500} className="mt-6">
        <p className="text-2xl text-black leading-relaxed text-center">
          Uma apresentação estruturada abordando cada etapa do trabalho com{" "}
          <span className="font-bold text-blue-600">dados, gráficos e análises profundas</span>.
        </p>
      </AnimatedBlock>
    </div>
  )
}
