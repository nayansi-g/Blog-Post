// app/page.tsx
import Image from 'next/image';
import Blog1 from "@/app/_components/Assests/blog1.jpg"
import Blog2 from "@/app/_components/Assests/blog2.jpg"
import Blog3 from "@/app/_components/Assests/team3.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src={Blog1}
          alt="Urban gardening"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-2xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Green in Urban Spaces
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Sustainable living tips & urban gardening guides
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Grid */}
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Latest Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post 1 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={Blog2}
                alt="Vertical garden"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="p-6">
              <span className="text-emerald-600 text-sm font-semibold uppercase">
                DIY Projects
              </span>
              <h3 className="text-xl font-bold text-gray-800 my-3">
                Building a Space-Saving Vertical Garden
              </h3>
              <p className="text-gray-600 mb-4">
                Create your own vertical garden using recycled materials. Step-by-step guide with...
              </p>
              <a 
                href="#" 
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Read More →
              </a>
            </div>
          </article>

          {/* Post 2 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={Blog3}
                alt="Compost bin"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="p-6">
              <span className="text-emerald-600 text-sm font-semibold uppercase">
                Sustainability
              </span>
              <h3 className="text-xl font-bold text-gray-800 my-3">
                Zero-Waste Kitchen Essentials
              </h3>
              <p className="text-gray-600 mb-4">
                Transform your kitchen into an eco-friendly space with these simple swaps...
              </p>
              <a 
                href="#" 
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Read More →
              </a>
            </div>
          </article>

          {/* Post 3 */}
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={Blog1}
                alt="Indoor plants"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="p-6">
              <span className="text-emerald-600 text-sm font-semibold uppercase">
                Urban Gardening
              </span>
              <h3 className="text-xl font-bold text-gray-800 my-3">
                Best Plants for Small Apartments
              </h3>
              <p className="text-gray-600 mb-4">
                Discover low-maintenance plants that thrive in limited spaces and purify...
              </p>
              <a 
                href="#" 
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Read More →
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}