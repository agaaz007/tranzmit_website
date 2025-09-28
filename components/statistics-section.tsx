export function StatisticsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">3x</div>
            <p className="text-lg text-gray-600">Customer responses more than three times longer than average.</p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">{"<24h"}</div>
            <p className="text-lg text-gray-600">Results in hours, not days.</p>
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">+30M</div>
            <p className="text-lg text-gray-600">Millions of possible respondents.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
