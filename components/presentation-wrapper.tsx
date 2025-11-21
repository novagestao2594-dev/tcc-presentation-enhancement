"use client"

import { useState, useEffect } from "react"
import Slide from "./slides/slide"
import CoverSlide from "./slides/cover-slide"
import MenuSlide from "./slides/menu-slide"
import IntroductionSlide from "./slides/introduction-slide"
import JustificationSlide from "./slides/justification-slide"
import MethodologySlide from "./slides/methodology-slide"
import ResultsChartSlide from "./slides/results-chart-slide"
import DiscussionSlide from "./slides/discussion-slide"
import ConclusionSlide from "./slides/conclusion-slide"
import ReferencesSlide from "./slides/references-slide"
import ThankYouSlide from "./slides/thank-you-slide"
import ExperienceChartSlide from "./slides/experience-chart-slide"
import KnowledgeChartSlide from "./slides/knowledge-chart-slide"
import OrientationFrequencySlide from "./slides/orientation-frequency-slide"
import EducativeStrategiesSlide from "./slides/educative-strategies-slide"
import DifficultiesSlide from "./slides/difficulties-slide"
import FootExamSlide from "./slides/foot-exam-slide"
import CapacitationSlide from "./slides/capacitation-slide"
import TrainingParticipationSlide from "./slides/training-participation-slide"
import InformationProviderSlide from "./slides/information-provider-slide"
import PatientAdherenceSlide from "./slides/patient-adherence-slide"
import AcademicFormationSlide from "./slides/academic-formation-slide"
import SuggestionsSlide from "./slides/suggestions-slide"
import Navigation from "./navigation"
import Footer from "./footer"

const slides = [
  { id: "cover", component: CoverSlide },
  { id: "menu", component: MenuSlide },
  { id: "introduction", component: IntroductionSlide },
  { id: "justification", component: JustificationSlide },
  {
    id: "problem",
    component: Slide,
    props: {
      title: "Problema de Pesquisa",
      content:
        "Qual é o papel do enfermeiro na prevenção de Diabetes Mellitus e de suas complicações a partir do conhecimento e das ações educativas desenvolvidas na Atenção Primária à Saúde?",
    },
  },
  {
    id: "objective",
    component: Slide,
    props: {
      title: "Objetivo Geral",
      content:
        "Analisar o papel do enfermeiro na prevenção de Diabetes Mellitus, com foco no conhecimento e nas práticas educativas desenvolvidas na Atenção Primária à Saúde.",
      isHighlight: true,
    },
  },
  {
    id: "objectives",
    component: Slide,
    props: {
      title: "Objetivos Específicos",
      isBulletList: true,
      items: [
        "Identificar o conhecimento dos enfermeiros sobre prevenção e manejo do Diabetes Mellitus",
        "Descrever as principais ações educativas realizadas junto às pessoas com risco ou diagnóstico de DM",
        "Levantar dificuldades e potencialidades percebidas pelos enfermeiros na prevenção do DM",
        "Relacionar o conhecimento dos profissionais com as estratégias adotadas no cotidiano da atenção primária",
      ],
    },
  },
  { id: "methodology", component: MethodologySlide },
  { id: "experience-chart", component: ExperienceChartSlide },
  { id: "knowledge-chart", component: KnowledgeChartSlide },
  { id: "orientation-frequency", component: OrientationFrequencySlide },
  { id: "educative-strategies", component: EducativeStrategiesSlide },
  { id: "difficulties", component: DifficultiesSlide },
  { id: "foot-exam", component: FootExamSlide },
  { id: "capacitation", component: CapacitationSlide },
  { id: "training-participation", component: TrainingParticipationSlide },
  { id: "information-provider", component: InformationProviderSlide },
  { id: "patient-adherence", component: PatientAdherenceSlide },
  { id: "academic-formation", component: AcademicFormationSlide },
  { id: "suggestions", component: SuggestionsSlide },
  { id: "results", component: ResultsChartSlide },
  { id: "discussion", component: DiscussionSlide },
  { id: "conclusion", component: ConclusionSlide },
  { id: "references", component: ReferencesSlide },
  { id: "thanks", component: ThankYouSlide },
]

export default function PresentationWrapper() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const [slideKey, setSlideKey] = useState(0)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setSlideKey((prev) => prev + 1)
    }, 10000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setSlideKey((prev) => prev + 1)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setSlideKey((prev) => prev + 1)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setSlideKey((prev) => prev + 1)
    setAutoPlay(false)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const CurrentSlideComponent = slides[currentSlide].component
  const slideProps = slides[currentSlide].props

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-300/15 to-cyan-300/15 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-pink-300/15 to-rose-300/15 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="relative w-full h-[calc(100%-80px)] flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-7xl h-full">
          <div
            key={slideKey}
            className="relative w-full h-full rounded-2xl border border-white/20 bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden animate-slide-transition-in"
          >
            <div className="relative z-10 h-full overflow-y-auto">
              <div className="p-16 h-full">
                <CurrentSlideComponent {...slideProps} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer currentSlide={currentSlide + 1} totalSlides={slides.length} />

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        autoPlay={autoPlay}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoToSlide={goToSlide}
        onAutoPlay={() => setAutoPlay(!autoPlay)}
      />
    </div>
  )
}
