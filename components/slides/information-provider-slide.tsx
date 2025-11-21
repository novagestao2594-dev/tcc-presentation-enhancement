"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"

const data = [
  { name: "Alimentacao saudavel", value: 36.4 },
  { name: "Monitoramento da glicemia", value: 27.3 },
  { name: "Uso de medicamentos", value: 18.2 },
  { name: "Cuidados com pes", value: 18.2 },
]

const COLORS = ["#2563eb", "#16a34a", "#f97316", "#a855f7"]

export default function InformationProviderSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8">
      <div>
        <h2 className="text-4xl font-bold text-black mb-2">Informacoes Repassadas aos Pacientes</h2>
        <div className="h-1.5 w-28 bg-blue-600 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="lg:w-2/3 w-full bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" angle={-20} textAnchor="end" stroke="#444" height={70} />
              <YAxis stroke="#444" />
              <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                <LabelList dataKey="value" position="top" formatter={(v: number) => `${v.toFixed(1)}%`} />
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:w-1/3 w-full bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-slate-800 leading-relaxed">
            Foco maior em alimentacao (36,4%) e monitoramento (27,3%), com menor enfase em medicamentos e cuidados com
            pes (18,2% cada). Sugere reforcar materiais praticos sobre manejo diario.
          </p>
        </div>
      </div>
    </div>
  )
}
