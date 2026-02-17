"use client"

import { useEffect } from "react"

import ReviewCarousel from "../components/ui/Review"
import useReviews from "../../store/useReviews"

export default function Reviews() {
  const { reviews, isLoading, isError, fetchReviews } = useReviews()

  useEffect(() => {
    if (reviews.length === 0 && !isLoading) {
      void fetchReviews()
    }
  }, [fetchReviews, isLoading, reviews.length])
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
            Client Reviews & Testimonials
          </h1>
          <p className="mt-2 max-w-2xl mx-auto text-gray-300">
            We pride ourselves on delivering excellent results for our clients. Read a selection of recent client reviews below, or browse featured testimonials.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="relative bg-gradient-to-br from-yellow-400/30 via-yellow-900/10 to-transparent border border-yellow-400 rounded-xl shadow-xl p-8 flex flex-col items-start">
              <h2 className="mb-4 text-xl font-bold text-yellow-300">Featured Testimonials</h2>
              <ReviewCarousel />
              <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">★</span>
            </div>
          </div>

          <aside>
            <div className="relative bg-gradient-to-br from-yellow-400/30 via-yellow-900/10 to-transparent border border-yellow-400 rounded-xl shadow-xl p-8">
              <h2 className="text-xl font-bold text-yellow-300 mb-2">Recent Reviews</h2>
              <p className="text-sm text-gray-400 mb-4">Browse recent feedback from clients.</p>
              <div className="theme-scrollbar space-y-4 max-h-[600px] overflow-y-auto p-[8px] pr-2">
                {isError && (
                  <p className="text-sm text-red-300">Unable to load reviews right now.</p>
                )}
                {isLoading && reviews.length === 0 && (
                  <p className="text-sm text-gray-400">Loading reviews...</p>
                )}
                {reviews.slice(0, 6).map((r) => (
                  <article key={r.id} className="flex items-start gap-4 rounded-lg border border-yellow-400 bg-[#1a1a1a] p-4 shadow group hover:scale-[1.02] transition-transform">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="h-12 w-12 flex-none rounded-full object-cover ring-2 ring-yellow-400"
                    />
                    <div>
                      <p className="font-semibold text-gray-200">{r.name}</p>
                      <p className="text-xs text-gray-400">{r.job}</p>
                      <p className="mt-2 text-sm text-gray-300">
                        {r.text.substring(0, 120)}
                        {r.text.length > 120 ? "..." : ""}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">★</span>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
// ...existing code...