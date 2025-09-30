import { AspectRatio } from "@/components/ui/aspect-ratio"

export function MoreThanWordsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-6 gap-16 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 whitespace-nowrap">More than just words</h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Audio interviews reveal tone, uncovering deeper user sentiment.
            </p>
          </div>
          <div className="relative lg:col-span-4 flex justify-end">
            <div className="bg-gray-100 rounded-2xl overflow-hidden w-full max-w-[640px]">
              <AspectRatio ratio={625 / 530}>
                <img
                  src="/professional-person-using-smartphone-in-modern-off.jpg"
                  alt="Person using smartphone"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

