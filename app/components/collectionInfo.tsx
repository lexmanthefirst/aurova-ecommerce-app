export default function CollectionInfo() {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-40">
        <div className="mb-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            /02 Collection
          </span>
          <h2 className="mb-4 mt-2 font-serif text-4xl font-medium leading-tight">
            EmeraldWave
          </h2>
          <p className="leading-relaxed text-neutral-600">
            Lush tones meet feather-light textures in our most anticipated
            seasonal collection. Each piece is meticulously crafted to elevate
            your everyday wardrobe.
          </p>
        </div>
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Available pieces</span>
            <span className="font-medium">24</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Price range</span>
            <span className="font-medium">$250 - $750</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Sizes</span>
            <span className="font-medium">XS - XXL</span>
          </div>
        </div>
        <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800">
          <span className="">Browse Full Collection</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5" // Fixed: camelCase
            strokeLinecap="round" // Fixed: camelCase
            strokeLinejoin="round" // Fixed: camelCase
            data-lucide="arrow-up-right"
            className="lucide lucide-arrow-up-right h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
