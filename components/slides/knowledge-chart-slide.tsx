"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { AnimatedBlock, ScaleIn, SlideIn } from "../animations"
import { Award, BookOpen } from "lucide-react"

const data = [
  { name: "Conhecimento Bom", value: 90.91 },
  { name: "Conhecimento Excelente", value: 9.09 },
]

const COLORS = ["#6366f1", "#f43f5e"]

export default function KnowledgeChartSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-10 max-w-7xl mx-auto px-6">
      <AnimatedBlock delay={100}>
        <div className="flex items-center gap-4 mb-2">
          <BookOpen className="w-10 h-10 text-purple-500 drop-shadow-md" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Nível de Conhecimento dos Profissionais
          </h2>
        </div>
        <div className="h-2 w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg" />
      </AnimatedBlock>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center animate-fade-in">
        <ScaleIn delay={300} className="flex-1 flex items-center justify-center">
          <div className="bg-white/80 rounded-3xl shadow-2xl p-6 border border-purple-100 backdrop-blur-sm">
            <ResponsiveContainer width={320} height={320}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
                  outerRadius={120}
                  fill="#6366f1"
                  dataKey="value"
                  animationDuration={900}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => `${value.toFixed(1)}%`}
                  contentStyle={{
                    background: "#fff",
                    border: "2px solid #a21caf",
                    borderRadius: "10px",
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                  labelStyle={{ color: "#a21caf", fontWeight: 700 }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: "15px", fontWeight: 600, marginTop: 16 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ScaleIn>

        <SlideIn direction="right" delay={500} className="flex-1 flex items-center">
          <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50/60 p-8 rounded-3xl border border-purple-100 shadow-xl flex flex-col justify-center space-y-6 w-full max-w-lg animate-float-up">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-2 mb-2">
              <Award className="w-7 h-7 text-pink-500" /> Interpretação
            </h3>
            <div className="border-t-2 border-purple-200" />

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-l-4 border-indigo-500 pl-5 hover:translate-x-2 transition-transform bg-indigo-50/40 rounded-lg py-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse-glow" />
                <div>
                  <p className="text-lg md:text-xl font-bold text-indigo-600 mb-1">Conhecimento Bom: 90,91%</p>
                  <p className="text-base text-gray-700">Grande maioria com boa base técnica</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l-4 border-pink-500 pl-5 hover:translate-x-2 transition-transform bg-pink-50/40 rounded-lg py-2">
                <span className="w-3 h-3 rounded-full bg-pink-500 animate-pulse-glow" />
                <div>
                  <p className="text-lg md:text-xl font-bold text-pink-600 mb-1">Conhecimento Excelente: 9,09%</p>
                  <p className="text-base text-gray-700">Pequeno percentual com expertise avançada</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-xl border border-purple-200 mt-4 shadow">
                <p className="text-base text-gray-800">
                  <strong className="text-indigo-600">Conclusão:</strong> Boa base de conhecimento, porém espaço para capacitações contínuas.
                </p>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </div>
  )
}
