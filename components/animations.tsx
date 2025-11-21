"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

export function Typewriter({ text, speed = 50, className = "" }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={className}>{displayedText}</span>
}

interface AnimatedBlockProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedBlock({ children, delay = 0, className = "" }: AnimatedBlockProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  )
}

interface SlideInProps {
  children: React.ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  className?: string
}

export function SlideIn({ children, direction = "up", delay = 0, className = "" }: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false)

  const directionMap = {
    left: "translate-x-8",
    right: "-translate-x-8",
    up: "translate-y-8",
    down: "-translate-y-8",
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionMap[direction]}`} ${className}`}
    >
      {children}
    </div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function ScaleIn({ children, delay = 0, className = "" }: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${className}`}
    >
      {children}
    </div>
  )
}
