"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { AnimatedBlock, ScaleIn, SlideIn } from "../animations"

const data = [
  { name: "Conversa Individual", value: 63.6 },
  { name: "Palestra em Grupo", value: 18.2 },
  { name: "Fichas Educativas", value: 9.1 },
  { name: "Outros", value: 9.1 },
]

const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#ea580c"]

export default function EducativeStrategiesSlide() {
  return (
    <div className="h-full flex flex-col justify-between gap-6">
      <AnimatedBlock delay={100}>
        <h2 className="text-5xl font-bold text-black mb-3">Estratégias Educativas Utilizadas</h2>
        <div className="h-2 w-48 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full" />
      </AnimatedBlock>

      <div className="flex gap-10 flex-1 items-stretch">
        <ScaleIn delay={300} className="flex-1 flex items-center">
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  outerRadius={130}
                  fill="#2563eb"
                  dataKey="value"
                  animationDuration={800}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${value.toFixed(1)}%`}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "3px solid #2563eb",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  labelStyle={{ color: "#000", fontWeight: "600" }}
                />
                <Legend wrapperStyle={{ fontSize: "13px", fontWeight: "500" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ScaleIn>

        <SlideIn direction="right" delay={500} className="flex-1 flex items-stretch">
          <div className="bg-white p-8 rounded-lg border-3 border-gray-300 flex flex-col justify-center space-y-5 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-black mb-2">Análise das Estratégias</h3>
            <div className="border-t-2 border-blue-200" />

            <div className="space-y-5">
              <div className="border-l-4 border-blue-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-blue-600 mb-1">Conversa Individual: 63,6%</p>
                <p className="text-base text-gray-700">Estratégia predominante - diálogo personalizado</p>
              </div>

              <div className="border-l-4 border-red-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-red-600 mb-1">Palestra em Grupo: 18,2%</p>
                <p className="text-base text-gray-700">Complementa a abordagem individual</p>
              </div>

              <div className="border-l-4 border-green-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-green-600 mb-1">Fichas Educativas: 9,1%</p>
                <p className="text-base text-gray-700">Material de apoio e consulta</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-orange-600 mb-1">Outros: 9,1%</p>
                <p className="text-base text-gray-700">Metodologias diversas e inovadoras</p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
