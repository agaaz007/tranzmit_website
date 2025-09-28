"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200 ${
      scrolled ? 'shadow-md' : ''
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between py-2">
          {/* Left spacer for balance */}
          <div className="flex-1"></div>
          
          {/* Centered branding with microphone */}
          <div className="flex items-center justify-center py-2">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              {/* Glassy Microphone SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-60">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="url(#glassMic)" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                <path d="M12 19v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                <path d="M8 23h8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                <defs>
                  <linearGradient id="glassMic" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
                    <stop offset="50%" stopColor="#f8fafc" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-3xl text-blue-600 font-sans" style={{ lineHeight: '0.9', fontFamily: 'Inter, system-ui, sans-serif' }}>TRANZMIT</span>
            </Link>
          </div>

          {/* Right side with demo button */}
          <div className="flex items-center flex-1 justify-end">
            <Button size="sm" className="text-base font-medium px-6 py-2" asChild>
              <a href="/book-demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
