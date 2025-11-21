"use client"

import { useEffect, useState } from "react"
import { Typewriter, AnimatedBlock, ScaleIn } from "../animations"

export default function CoverSlide() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="h-full flex flex-col justify-center items-center text-center gap-8 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-20 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        />
        <div
          className={`absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full blur-3xl transition-all duration-1000 delay-500 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl transition-all duration-1000 delay-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <AnimatedBlock delay={200} className="mb-6">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full border border-purple-200/50">
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trabalho de Conclusão de Curso – Enfermagem
            </span>
          </div>
        </AnimatedBlock>

        <ScaleIn delay={400}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              <Typewriter text="O PAPEL DO" speed={40} />
            </span>
          </h1>
        </ScaleIn>

        <ScaleIn delay={1500}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              <Typewriter text="ENFERMEIRO" speed={40} />
            </span>
          </h1>
        </ScaleIn>

        <ScaleIn delay={2600}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Typewriter text="NA PREVENÇÃO DE DIABETES MELLITUS" speed={30} />
            </span>
          </h1>
        </ScaleIn>

        <AnimatedBlock delay={3400} className="flex justify-center gap-3 my-10">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
          <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
        </AnimatedBlock>

        <AnimatedBlock delay={3800}>
          <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
            Conhecimento e práticas educativas na{" "}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Atenção Primária à Saúde
            </span>
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={4200} className="mt-16 space-y-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <p className="text-lg text-gray-800 mb-2">
              <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Autoras:</strong>{" "}
              <span className="text-gray-700">Letícia Pereira das Flores • Regiane Aparecida Soares</span>
            </p>
            <p className="text-lg text-gray-800 mb-4">
              <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Orientadora:</strong>{" "}
              <span className="text-gray-700">Prof.ª Débora Silva Brandão Santos</span>
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-base text-gray-600">
                UNISEPE – Faculdades Integradas ASMEC • Ouro Fino (MG) • 2025
              </p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  )
}
