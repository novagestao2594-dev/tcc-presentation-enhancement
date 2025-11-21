"use client"

import { motion } from "framer-motion"
import { Heart, Users, BookOpen, AlertTriangle } from "lucide-react"

export default function IntroductionSlide() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="h-full flex flex-col justify-center gap-8 max-w-6xl mx-auto px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <Heart className="w-32 h-32 text-purple-500" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <Users className="w-24 h-24 text-blue-500" />
      </div>

      <motion.div {...fadeInUp}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Introdução
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.div {...stagger} className="space-y-6">
        <motion.div {...fadeInUp} className="group">
          <div className="bg-gradient-to-br from-white to-purple-50/50 p-6 rounded-2xl shadow-lg border border-purple-100/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-slate-800 text-justify leading-relaxed text-lg md:text-xl font-medium">
                  O <strong className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Diabetes Mellitus (DM)</strong> é considerado um dos maiores desafios de saúde pública na atualidade
                  devido à sua alta prevalência e às complicações decorrentes do controle inadequado da doença. Estima-se que
                  milhões de brasileiros convivam com o diagnóstico, número que tende a crescer em função do envelhecimento
                  populacional e do aumento de fatores de risco como <strong className="text-purple-600">obesidade e sedentarismo</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="group">
          <div className="bg-gradient-to-br from-white to-blue-50/50 p-6 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-slate-800 text-justify leading-relaxed text-lg md:text-xl font-medium">
                  A <strong className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">educação em saúde</strong> surge como um dos pilares fundamentais para o controle do diabetes e a
                  prevenção de complicações. Ações educativas estruturadas têm mostrado resultados importantes na melhora da
                  glicemia e na diminuição das complicações, e o enfermeiro exerce papel essencial na Atenção Primária à Saúde
                  como educador.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="group">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-md">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-slate-900 text-justify leading-relaxed text-lg md:text-xl font-medium">
                  No entanto, desafios persistem, como a <strong className="text-orange-600">baixa adesão ao tratamento</strong>, a insuficiência de recursos
                  e a formação acadêmica que muitas vezes não aprofunda temas relacionados ao cuidado crônico.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
