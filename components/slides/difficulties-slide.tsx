"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"
import { AnimatedBlock, ScaleIn, SlideIn } from "../animations"

const data = [
  { name: "Baixa Adesão", value: 81.8 },
  { name: "Falta de Recursos", value: 9.1 },
  { name: "Baixo Conhecimento", value: 9.1 },
]

const COLORS = ["#dc2626", "#ea580c", "#7c3aed"]

export default function DifficultiesSlide() {
  return (
    <div className="h-full flex flex-col justify-between gap-6">
      <AnimatedBlock delay={100}>
        <h2 className="text-5xl font-bold text-black mb-3">Principais Dificuldades Enfrentadas</h2>
        <div className="h-2 w-48 bg-gradient-to-r from-red-600 to-purple-600 rounded-full" />
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
                    border: "3px solid #dc2626",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  labelStyle={{ color: "#000", fontWeight: "600" }}
                  cursor={{ fill: "rgba(220, 38, 38, 0.1)" }}
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
            <h3 className="text-3xl font-bold text-black mb-2">Análise dos Desafios</h3>
            <div className="border-t-2 border-red-200" />

            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-red-600 mb-2">Baixa Adesão: 81,8%</p>
                <p className="text-lg text-gray-700">
                  Principal obstáculo - comportamento do paciente inadequado ao tratamento
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-orange-600 mb-2">Falta de Recursos: 9,1%</p>
                <p className="text-lg text-gray-700">Limitações estruturais e materiais</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-5 hover:translate-x-2 transition-transform">
                <p className="text-xl font-bold text-purple-600 mb-2">Baixo Conhecimento: 9,1%</p>
                <p className="text-lg text-gray-700">Capacitação profissional limitada</p>
              </div>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300 mt-2">
              <p className="text-base text-gray-800">
                <strong className="text-red-600">Insight:</strong> Desafios comportamentais superam os estruturais.
              </p>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
