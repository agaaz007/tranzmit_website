import { Card } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="pt-8 pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real-World Success Stories
          </h2>
        </div>

        <div className="flex flex-row gap-8 w-full max-w-none mx-auto px-4 justify-center">
          {/* Market Research Firm */}
          <Card className="relative bg-white text-black shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-200 overflow-hidden group w-[624px] shrink-0" style={{aspectRatio: '6/4'}}>
            {/* Background Image - always visible */}
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/900/600?random=1" 
                alt="Market Research" 
                className="w-full h-full object-cover"
              />
              
              {/* Tag overlay on image - always visible */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-base px-3 py-1 rounded-full shadow-sm border border-black">
                  Market Research Firm
                </span>
              </div>
              
              {/* Default state: White heading overlay on image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                <h3 className="text-5xl font-bold text-white text-center leading-tight drop-shadow-2xl">
                  30% Higher Response Rates
                </h3>
              </div>
            </div>
            
            {/* Hover state: Glassy white overlay with content */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-15 flex flex-col justify-center p-8">
              <h3 className="text-4xl font-bold text-black text-center leading-tight mb-6">
                30% Higher Response Rates
              </h3>
              <p className="text-gray-700 mb-6 text-xl text-center">
                "Client satisfaction surveys improved dramatically with AI voice cloning. Respondents opened up more."
              </p>
              <div className="flex items-center justify-center text-green-600">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l3-3 3 3-3 3-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17l3-3 3 3-3 3-3-3z" />
                </svg>
                <span className="font-semibold text-xl">Response rate: 45% → 75%</span>
              </div>
            </div>
          </Card>

          {/* Healthcare NGO */}
          <Card className="relative bg-white text-black shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-200 overflow-hidden group w-[624px] shrink-0" style={{aspectRatio: '6/4'}}>
            {/* Background Image - always visible */}
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/900/600?random=2" 
                alt="Healthcare NGO" 
                className="w-full h-full object-cover"
              />
              
              {/* Tag overlay on image - always visible */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-base px-3 py-1 rounded-full shadow-sm border border-black">
                  Healthcare NGO
                </span>
              </div>
              
              {/* Default state: White heading overlay on image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                <h3 className="text-5xl font-bold text-white text-center leading-tight drop-shadow-2xl">
                  Breakthrough in Rural Areas
                </h3>
              </div>
            </div>
            
            {/* Hover state: Glassy white overlay with content */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-15 flex flex-col justify-center p-8">
              <h3 className="text-4xl font-bold text-black text-center leading-tight mb-6">
                Breakthrough in Rural Areas
              </h3>
              <p className="text-gray-700 mb-6 text-xl text-center">
                "Multilingual support enabled surveys in remote villages where traditional methods failed."
              </p>
              <div className="flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-xl">Coverage: 12 languages, 5,000+ respondents</span>
              </div>
            </div>
          </Card>

          {/* Political Polling */}
          <Card className="relative bg-white text-black shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out border border-gray-200 overflow-hidden group w-[624px] shrink-0" style={{aspectRatio: '6/4'}}>
            {/* Background Image - always visible */}
            <div className="absolute inset-0">
              <img 
                src="https://picsum.photos/900/600?random=3" 
                alt="Political Polling" 
                className="w-full h-full object-cover"
              />
              
              {/* Tag overlay on image - always visible */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-700 text-base px-3 py-1 rounded-full shadow-sm border border-black">
                  Political Polling
                </span>
              </div>
              
              {/* Default state: White heading overlay on image */}
              <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-500 ease-in-out">
                <h3 className="text-5xl font-bold text-white text-center leading-tight drop-shadow-2xl">
                  Unbiased Opinion Collection
                </h3>
              </div>
            </div>
            
            {/* Hover state: Glassy white overlay with content */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-15 flex flex-col justify-center p-8">
              <h3 className="text-4xl font-bold text-black text-center leading-tight mb-6">
                Unbiased Opinion Collection
              </h3>
              <p className="text-gray-700 mb-6 text-xl text-center">
                "Behavioral psychology integration improved honesty and reduced social desirability bias."
              </p>
              <div className="flex items-center justify-center text-green-600">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-xl">Accuracy improved by 25%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
