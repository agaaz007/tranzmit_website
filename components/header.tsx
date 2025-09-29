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
        <div className="flex h-16 items-center justify-between">
          {/* Left-aligned logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              {/* Transmission/Signal icon */}
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
                  {/* Signal waves */}
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" fill="currentColor"/>
                  <path d="M12 12m-4 0a4 4 0 0 1 8 0a4 4 0 0 1 -8 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 12m-7 0a7 7 0 0 1 14 0a7 7 0 0 1 -14 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M12 12m-10 0a10 10 0 0 1 20 0a10 10 0 0 1 -20 0" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6"/>
                </svg>
              </div>
              <span className="font-bold text-2xl text-gray-900 font-sans">TRANZMIT</span>
            </Link>
          </div>

          {/* Right side with demo button */}
          <div className="flex items-center">
            <Button size="default" className="text-base font-medium px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="/book-demo">Request Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
