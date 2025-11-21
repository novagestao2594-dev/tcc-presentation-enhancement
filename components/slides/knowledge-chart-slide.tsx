"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { AnimatedBlock, ScaleIn, SlideIn } from "../animations"

const data = [
  { name: "Conhecimento Bom", value: 90.91 },
  { name: "Conhecimento Excelente", value: 9.09 },
]

const COLORS = ["#2563eb", "#dc2626"]

export default function KnowledgeChartSlide() {
  return (
    <div className="h-full flex flex-col justify-between gap-6">
      <AnimatedBlock delay={100}>
        <h2 className="text-5xl font-bold text-black mb-3">Nível de Conhecimento dos Profissionais</h2>
        <div className="h-2 w-40 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />
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
                <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "500" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ScaleIn>

        <SlideIn direction="right" delay={500} className="flex-1 flex items-stretch">
          <div className="bg-white p-8 rounded-lg border-3 border-gray-300 flex flex-col justify-center space-y-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-black mb-2">Interpretação</h3>
            <div className="border-t-2 border-blue-200" />

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-blue-600 mb-2">Conhecimento Bom: 90,91%</p>
                <p className="text-lg text-gray-700">Grande maioria com boa base técnica</p>
              </div>

              <div className="border-l-4 border-red-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-red-600 mb-2">Conhecimento Excelente: 9,09%</p>
                <p className="text-lg text-gray-700">Pequeno percentual com expertise avançada</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300 mt-4">
                <p className="text-base text-gray-800">
                  <strong className="text-blue-600">Conclusão:</strong> Boa base de conhecimento, porém espaço para
                  capacitações contínuas.
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
