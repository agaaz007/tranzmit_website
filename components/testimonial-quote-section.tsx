export function TestimonialQuoteSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-yellow-400 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "Tranzmit Labs has been a welcomed addition to our team. It compresses hours of work into minutes, reaches a
              broader audience than our schedule allows and uncovers qual/quant insights in real time."
            </blockquote>
            <div>
              <div className="font-semibold text-lg">Lauren Haugh Neville</div>
              <div className="text-yellow-100">Director of Product Insights, Chubbies Shorts</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
              <img src="/professional-blonde-woman-smiling-in-business-sett.jpg" alt="Lauren Haugh Neville" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
