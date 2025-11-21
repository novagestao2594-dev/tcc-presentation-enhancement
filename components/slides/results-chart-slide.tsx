"use client"

import { useEffect, useState } from "react"
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

interface AnimatedBarProps {
  value: number
  label: string
  color?: string
  gradient?: boolean
}

function AnimatedBar({ value, label, color = "#a855f7", gradient = false }: AnimatedBarProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100)
  }, [])

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-slate-100">{label}</span>
        <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {value.toFixed(1)}%
        </span>
      </div>
      <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden border border-purple-500/20">
        <div
          className={`h-full rounded-full transition-all duration-1200 ease-out ${
            gradient ? "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" : ""
          }`}
          style={{
            width: animate ? `${value}%` : "0%",
            background: gradient ? undefined : color,
            boxShadow: animate ? `0 0 20px ${color}88` : "none",
          }}
        />
      </div>
    </div>
  )
}

const experienceData = [
  { name: "4-6 anos", value: 18.2, color: "#06b6d4" },
  { name: "7-10 anos", value: 63.6, color: "#2563eb" },
  { name: "Mais de 10 anos", value: 18.2, color: "#7c3aed" },
]

const knowledgeData = [
  { name: "Bom", value: 90.91, fill: "#a855f7" },
  { name: "Excelente", value: 9.09, fill: "#ec4899" },
]

const frequencyData = [
  { name: "Sempre", value: 81.8, color: "#22c55e" },
  { name: "As vezes", value: 9.1, color: "#f59e0b" },
  { name: "Raramente", value: 9.1, color: "#ef4444" },
]

const challengesData = [
  { name: "Baixa adesao dos pacientes as orientacoes", value: 81.8, color: "#ef4444" },
  { name: "Falta de recursos e tempo disponivel", value: 9.1, color: "#f59e0b" },
  { name: "Baixo nivel de conhecimento dos pacientes", value: 9.1, color: "#22c55e" },
]

export default function ResultsChartSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8 overflow-y-auto">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent mb-3">
          Resultados da Pesquisa
        </h2>
        <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
        <div className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-950/60 to-slate-900/60 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
          <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-5">
            Tempo de Experiencia
          </h3>
          <div className="space-y-4">
            {experienceData.map((item, idx) => (
              <AnimatedBar key={idx} value={item.value} label={item.name} color={item.color} />
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-950/60 to-slate-900/60 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
          <h3 className="font-bold text-lg bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-5">
            Nivel de Conhecimento
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={knowledgeData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                animationDuration={1000}
              >
                {knowledgeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value.toFixed(1)}%`}
                contentStyle={{
                  backgroundColor: "rgba(15, 10, 40, 0.9)",
                  border: "1px solid rgba(168, 85, 247, 0.3)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className="p-6 rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-950/60 to-slate-900/60 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 animate-slide-in"
        style={{ animationDelay: "0.4s" }}
      >
        <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-5">
          Frequencia de Orientacoes
        </h3>
        <div className="space-y-4">
          {frequencyData.map((item, idx) => (
            <AnimatedBar key={idx} value={item.value} label={item.name} color={item.color} />
          ))}
        </div>
      </div>

      <div
        className="p-6 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-950/60 to-slate-900/60 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 animate-slide-in"
        style={{ animationDelay: "0.6s" }}
      >
        <h3 className="font-bold text-lg bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-5">
          Principais Dificuldades Encontradas
        </h3>
        <div className="space-y-4">
          {challengesData.map((item, idx) => (
            <AnimatedBar key={idx} value={item.value} label={item.name} color={item.color} />
          ))}
        </div>
      </div>
    </div>
  )
}
