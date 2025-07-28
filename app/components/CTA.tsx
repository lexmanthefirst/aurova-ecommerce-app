export default function CTA() {
  return (
    <section
      className="max-w-8xl mx-auto px-8 py-24 opacity-0 translate-y-5 transition-opacity transition-transform duration-700"
      data-reveal
    >
      <div className="relative overflow-hidden text-white bg-cover rounded-3xl bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24d17eda-2389-4b1a-9715-b15c7bfc0cfb_3840w.jpg)]">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url(https://images.unsplash.com/photo-1635776062764-e025521e3df3?w=3840&amp;q=80)]"></div>
        <div className="relative text-center pt-20 pr-12 pb-20 pl-12">
          <h2 className="text-5xl font-serif font-medium mb-6">
            Join the Aurova Experience
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive drops, and
            member-only benefits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 w-80"
            />
            <button className="px-8 py-4 bg-white text-emerald-800 rounded-full font-medium hover:bg-neutral-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm opacity-70">
            No spam, just curated content and exclusive access.
          </p>
        </div>
      </div>
    </section>
  );
}
