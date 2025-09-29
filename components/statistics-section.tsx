export function StatisticsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-full h-px bg-gray-300 mb-16"></div>
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1 text-left">
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">3x</div>
            <p className="text-xl text-gray-600">Customer responses more than three times longer than average.</p>
          </div>
          <div className="flex-1 text-center">
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">{"<24h"}</div>
            <p className="text-xl text-gray-600">Results in hours, not days.</p>
          </div>
          <div className="flex-1 text-right">
            <div className="text-8xl md:text-9xl font-bold text-gray-900 mb-4">+1L</div>
            <p className="text-xl text-gray-600">Thousands of possible respondents.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
