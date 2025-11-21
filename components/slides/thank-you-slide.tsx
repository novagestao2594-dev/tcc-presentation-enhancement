"use client"

import { useEffect, useState } from "react"
import { Typewriter, AnimatedBlock, ScaleIn } from "../animations"

export default function ThankYouSlide() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="h-full flex flex-col items-center text-center gap-10 py-12 px-4 relative overflow-y-auto">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl transition-all duration-1000 delay-300 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <ScaleIn delay={300}>
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4">
            <Typewriter text="Obrigada!" speed={50} />
          </h1>
        </ScaleIn>

        <AnimatedBlock delay={1600}>
          <p className="text-2xl md:text-3xl text-black font-light mb-12">Agradecemos sua atencao e consideracao</p>
        </AnimatedBlock>

        <div className="space-y-8 mb-12">
          <AnimatedBlock delay={2300}>
            <div className="space-y-2 p-6 bg-blue-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl font-bold text-black">Autoras</p>
              <p className="text-xl text-gray-700">Leticia Pereira das Flores</p>
              <p className="text-xl text-gray-700">Regiane Aparecida Soares</p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={2900}>
            <div className="space-y-2 p-6 bg-blue-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl font-bold text-black">Orientadora</p>
              <p className="text-xl text-gray-700">Prof. Debora Silva Brandao Santos</p>
            </div>
          </AnimatedBlock>

          <AnimatedBlock delay={3500}>
            <div className="space-y-2 p-6 bg-blue-50 rounded-lg border-2 border-blue-300 hover:shadow-lg transition-shadow">
              <p className="text-2xl font-bold text-black">Instituicao</p>
              <p className="text-xl text-gray-700">UNISEPE - Faculdades Integradas ASMEC</p>
              <p className="text-lg text-gray-600">Ouro Fino (MG) - 2025</p>
            </div>
          </AnimatedBlock>
        </div>

        <AnimatedBlock
          delay={4100}
          className="mt-10 p-8 rounded-lg border-4 border-green-600 bg-green-50 hover:shadow-2xl transition-shadow"
        >
          <p className="text-2xl text-green-700 font-bold">Duvidas? Perguntas?</p>
          <p className="text-lg text-gray-700 mt-3">Estamos a disposicao para discussao e sugestoes</p>
        </AnimatedBlock>
      </div>
    </div>
  )
}
