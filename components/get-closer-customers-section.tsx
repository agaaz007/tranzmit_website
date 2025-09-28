import { MessageSquare, BarChart3, Smartphone } from "lucide-react"

export function GetCloserCustomersSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get closer to your customer</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Marketing Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="bg-gray-100 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-600 font-medium">Insights</span>
                </div>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Millennials and women in marketing positions prefer video interviews
                </p>
                <div className="flex gap-2 mt-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">SH</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing</h3>
            <p className="text-gray-600">
              Test advertising concepts or messaging. Understand brand values and what drives conversion.
            </p>
          </div>

          {/* Product Managers Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="bg-yellow-100 rounded-xl p-6 mb-4">
                <div className="aspect-video bg-white rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="w-12 h-12 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Unexpected fees</span>
                    <span className="text-sm font-medium">31%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Feature limitations</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Slow Performance</span>
                    <span className="text-sm font-medium">16%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Privacy Concerns</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">Product managers</h3>
            <p className="text-gray-600">Analyze churn and get product feedback at scale.</p>
          </div>

          {/* User Researchers Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="bg-gray-800 rounded-xl p-6 mb-4 relative">
                <div className="aspect-video bg-orange-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Smartphone className="w-12 h-12 text-orange-600" />
                  <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    What's your first impression of the app?
                  </div>
                  <div className="absolute bottom-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded">
                    Nice, but I find the onboarding flow a bit non-intuitive.
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">User researchers</h3>
            <p className="text-gray-600">Conduct usability testing, diary studies or ethnographic studies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
