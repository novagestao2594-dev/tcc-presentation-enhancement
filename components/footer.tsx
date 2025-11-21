interface FooterProps {
  currentSlide: number
  totalSlides: number
}

export default function Footer({ currentSlide, totalSlides }: FooterProps) {
  const progress = (currentSlide / totalSlides) * 100

  return (
    <footer className="absolute bottom-0 w-full h-16 border-t border-purple-500/30 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-sm px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse" />
        <span className="text-xs font-medium bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Papel do Enfermeiro na Prevenção de Diabetes Mellitus
        </span>
      </div>

      <div className="text-xs font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        {currentSlide} / {totalSlides}
      </div>

      <div
        className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/50"
        style={{ width: `${progress}%` }}
      />
    </footer>
  )
}
