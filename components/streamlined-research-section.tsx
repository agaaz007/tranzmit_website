import { Button } from "@/components/ui/button"
import { Sparkles, Mic, FileText } from "lucide-react"

export function StreamlinedResearchSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Customer research, streamlined</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Go from first question to comprehensive market report in hours, not weeks.
          </p>
        </div>

        {/* Interactive Platform Mockup */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Quick Start Panel */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Start</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Create with AI
                  </Button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center text-gray-600">
                    <Mic className="w-4 h-4 mr-2" />
                    Churn Interview
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center text-gray-600">
                    <FileText className="w-4 h-4 mr-2" />
                    Concept Test
                  </button>
                </div>
              </div>

              {/* Participants Panel */}
              <div className="bg-yellow-100 rounded-xl p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">US</span>
                  <span className="text-sm font-medium">Marketing</span>
                </div>
                <div className="flex -space-x-2 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  2k
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Add participants</Button>
              </div>

              {/* Results Panel */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Quotes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Trends</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Evaluation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Objectives</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Key insights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Top themes</div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">See Report</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">1.</div>
            <h3 className="text-xl font-semibold mb-3">Select a template or upload a guide</h3>
            <p className="text-gray-600">
              Get started in seconds by choosing one of our proven, expert-vetted templates or uploading a discussion
              guide.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">2.</div>
            <h3 className="text-xl font-semibold mb-3">Recruit participants</h3>
            <p className="text-gray-600">
              Use the Tranzmit Labs panel, integrate any panel provider, or conveniently share with your own users with a
              link or in app. Tranzmit takes it from here.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">3.</div>
            <h3 className="text-xl font-semibold mb-3">Explore your results</h3>
            <p className="text-gray-600">
              Within hours, our AI conducts and analyzes hundreds of interviews and generates a detailed and interactive
              report.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
