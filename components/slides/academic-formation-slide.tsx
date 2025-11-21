"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"

const data = [
  { name: "Boa", value: 18.2 },
  { name: "Parcial", value: 63.6 },
  { name: "Insuficiente", value: 18.2 },
]

const COLORS = ["#22c55e", "#2563eb", "#dc2626"]

export default function AcademicFormationSlide() {
  return (
    <div className="h-full flex flex-col justify-center gap-8">
      <div>
        <h2 className="text-4xl font-bold text-black mb-2">Avaliacao da Formacao Academica</h2>
        <div className="h-1.5 w-28 bg-blue-600 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="lg:w-2/3 w-full bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#444" />
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
            63,6% avaliam a formacao como parcial, evidenciando carencia de conteudos praticos sobre diabetes. Apenas
            18,2% consideram boa e 18,2% insuficiente.
          </p>
        </div>
      </div>
    </div>
  )
}
