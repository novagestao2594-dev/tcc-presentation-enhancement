"use client"

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  autoPlay: boolean
  onNext: () => void
  onPrev: () => void
  onGoToSlide: (index: number) => void
  onAutoPlay: () => void
}

export default function Navigation({
  currentSlide,
  totalSlides,
  autoPlay,
  onNext,
  onPrev,
  onGoToSlide,
  onAutoPlay,
}: NavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50">
      <div className="flex gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-300 hover:border-blue-600 transition-all shadow-md">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onGoToSlide(idx)}
            className={`rounded-full transition-all duration-300 transform hover:scale-125 ${
              idx === currentSlide
                ? "w-8 h-8 bg-blue-600 shadow-lg scale-125"
                : "w-3 h-3 bg-gray-400 hover:bg-blue-600 hover:shadow-lg"
            }`}
            title={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="flex gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-300 shadow-md">
        <button
          onClick={onPrev}
          className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:scale-105"
        >
          ← Anterior
        </button>
        <button
          onClick={onAutoPlay}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md ${
            autoPlay
              ? "bg-green-600 hover:bg-green-700 text-white hover:shadow-lg"
              : "bg-gray-400 hover:bg-gray-500 text-white hover:shadow-lg"
          }`}
        >
          {autoPlay ? "⏸ Pausar" : "▶ Auto"}
        </button>
        <button
          onClick={onNext}
          className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-white shadow-md hover:shadow-lg transform hover:scale-105"
        >
          Próximo →
        </button>
      </div>
    </div>
  )
}
