"use client"

import { useEffect, useState } from "react"
import { Typewriter, AnimatedBlock, ScaleIn } from "../animations"

export default function CoverSlide() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="h-full flex flex-col justify-center items-center text-center gap-8 py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-20 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        />
        <div
          className={`absolute bottom-20 right-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl transition-all duration-1000 delay-500 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        />
      </div>

      <div className="relative z-10">
        <AnimatedBlock delay={200} className="mb-6">
          <div className="text-xl font-semibold text-blue-600">Trabalho de Conclusão de Curso – Enfermagem</div>
        </AnimatedBlock>

        <ScaleIn delay={400}>
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-3">
            <Typewriter text="O PAPEL DO" speed={40} />
          </h1>
        </ScaleIn>

        <ScaleIn delay={1500}>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-3">
            <Typewriter text="ENFERMEIRO" speed={40} />
          </h1>
        </ScaleIn>

        <ScaleIn delay={2600}>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            <Typewriter text="NA PREVENÇÃO DE DIABETES MELLITUS" speed={30} />
          </h1>
        </ScaleIn>

        <AnimatedBlock delay={3400} className="flex justify-center gap-2 my-10">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-dot" />
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-dot" />
        </AnimatedBlock>

        <AnimatedBlock delay={3800}>
          <p className="text-2xl text-black font-light">
            Conhecimento e práticas educativas na{" "}
            <span className="font-bold text-blue-600">Atenção Primária à Saúde</span>
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={4200} className="mt-16 text-lg text-gray-700 space-y-3">
          <p>
            <strong className="text-black">Autoras:</strong> Letícia Pereira das Flores • Regiane Aparecida Soares
          </p>
          <p>
            <strong className="text-black">Orientadora:</strong> Prof.ª Débora Silva Brandão Santos
          </p>
          <p className="pt-4 text-base">UNISEPE – Faculdades Integradas ASMEC • Ouro Fino (MG) • 2025</p>
        </AnimatedBlock>
      </div>
    </div>
  )
}
