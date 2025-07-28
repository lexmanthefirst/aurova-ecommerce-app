export default function HeroImage() {
  return (
    <section
      className="max-w-8xl mx-auto px-8 -mt-32"
      data-reveal
      style={{ opacity: 0, transform: "translateY(20px)" }}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        <div className="aspect-[16/9] lg:aspect-[21/9]">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d0e68cb-426a-4760-a974-0e85c1ab0e2f_3840w.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div className="flex items-end justify-between">
            <div className="">
              <h3 className="text-2xl font-serif font-medium mb-2">
                Emerald Wave Collection
              </h3>
              <p className="text-sm opacity-90">Launching Spring 2024</p>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm opacity-90">Starting from</p>
              <p className="text-lg font-medium">$250</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
