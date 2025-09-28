export function MoreThanWordsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">More than just words</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Video and audio interviews reveal facial expressions and tone, uncovering deeper user sentiment.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src="/professional-person-using-smartphone-in-modern-off.jpg"
                alt="Person using smartphone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
