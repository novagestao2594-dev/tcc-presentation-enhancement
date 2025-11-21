"use client"

import { useEffect, useState } from "react"

interface SlideProps {
  title: string
  content?: string
  isHighlight?: boolean
  isBulletList?: boolean
  items?: string[]
}

export default function Slide({ title, content, isHighlight, isBulletList, items }: SlideProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`h-full flex flex-col justify-center gap-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="animate-float-up">
        <h2 className="text-5xl font-bold text-black mb-6">{title}</h2>
        <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" />
      </div>

      {content && !isHighlight && (
        <p className="text-2xl leading-relaxed text-black animate-slide-in" style={{ animationDelay: "0.2s" }}>
          {content}
        </p>
      )}

      {content && isHighlight && (
        <div className="p-8 rounded-lg border-4 border-blue-600 bg-gradient-to-br from-blue-50 to-white text-2xl text-black font-semibold shadow-lg hover:shadow-2xl transition-shadow">
          {content}
        </div>
      )}

      {isBulletList && items && (
        <ul className="space-y-5 animate-slide-in" style={{ animationDelay: "0.2s" }}>
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex gap-4 text-xl text-black group hover:translate-x-3 transition-transform duration-300 animate-float-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full flex-shrink-0 animate-pulse-dot" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
