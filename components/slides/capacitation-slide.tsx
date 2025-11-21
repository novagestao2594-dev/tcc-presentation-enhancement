"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Capacitado", value: 63.6 },
  { name: "Parcialmente Preparado", value: 27.3 },
  { name: "Nao Capacitado", value: 9.1 },
]

const COLORS = ["#2563eb", "#22c55e", "#f97316"]

export default function CapacitationSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-6">
      <div className="animate-slide-in-up">
        <h2 className="text-4xl font-bold text-black mb-2">Capacitacao para Identificar Complicacoes</h2>
        <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value.toFixed(1)}%`}
              outerRadius={100}
              fill="#2563eb"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="text-gray-700 text-sm">
        <p className="font-semibold mb-2">Analise:</p>
        <p>
          63,6% dos enfermeiros sentem-se capacitados para identificar sinais precoces de complicacoes nos pes. Porem,
          27,3% estao parcialmente preparados e 9,1% nao se sentem capacitados, indicando necessidade de educacao
          permanente.
        </p>
      </div>
    </div>
  )
}
