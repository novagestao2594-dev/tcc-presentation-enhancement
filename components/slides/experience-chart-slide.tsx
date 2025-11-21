"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"
import { AnimatedBlock, ScaleIn, SlideIn } from "../animations"

const data = [
  { name: "4-6 anos", value: 18.2 },
  { name: "7-10 anos", value: 63.6 },
  { name: "Mais de 10 anos", value: 18.2 },
]

const COLORS = ["#2563eb", "#dc2626", "#16a34a"]

export default function ExperienceChartSlide() {
  return (
    <div className="h-full flex flex-col justify-between gap-6">
      <AnimatedBlock delay={100}>
        <h2 className="text-5xl font-bold text-black mb-3">Experiência Profissional dos Enfermeiros</h2>
        <div className="h-2 w-40 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />
      </AnimatedBlock>

      <div className="flex gap-10 flex-1 items-stretch">
        <ScaleIn delay={300} className="flex-1 flex items-center">
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 30, right: 30, left: 30, bottom: 80 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" />
                <XAxis
                  dataKey="name"
                  stroke="#000"
                  angle={-20}
                  textAnchor="end"
                  height={100}
                  tick={{ fontSize: 14, fontWeight: "500" }}
                />
                <YAxis
                  stroke="#000"
                  label={{
                    value: "Porcentagem (%)",
                    angle: -90,
                    position: "insideLeft",
                    fontSize: 14,
                    fontWeight: "500",
                  }}
                  tick={{ fontSize: 14, fontWeight: "500" }}
                />
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
                  cursor={{ fill: "rgba(37, 99, 235, 0.1)" }}
                />
                <Bar dataKey="value" radius={[16, 16, 0, 0]} animationDuration={800}>
                  <LabelList dataKey="value" position="top" formatter={(v: number) => `${v.toFixed(1)}%`} />
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScaleIn>

        <SlideIn direction="right" delay={500} className="flex-1 flex items-stretch">
          <div className="bg-white p-8 rounded-lg border-3 border-gray-300 flex flex-col justify-center space-y-6 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-black mb-2">Análise dos Dados</h3>
            <div className="border-t-2 border-blue-200" />

            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-green-600 mb-2">7-10 anos: 63,6%</p>
                <p className="text-lg text-gray-700">Maioria dos enfermeiros com experiência consolidada</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-blue-600 mb-2">4-6 anos: 18,2%</p>
                <p className="text-lg text-gray-700">Profissionais em desenvolvimento de carreira</p>
              </div>

              <div className="border-l-4 border-red-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-red-600 mb-2">Mais de 10 anos: 18,2%</p>
                <p className="text-lg text-gray-700">Equipe com expertise avançada</p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
