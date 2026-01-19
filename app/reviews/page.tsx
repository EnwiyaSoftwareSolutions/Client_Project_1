// ...existing code...
import ReviewCarousel from "../components/ui/Review"
import reviews from "../data/review"

export default function Reviews() {
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
            <div className="rounded-lg border border-yellow-400 bg-gray-800 p-6 shadow-lg">
              <h2 className="mb-4 text-xl font-medium text-yellow-400">Featured Testimonials</h2>
              <ReviewCarousel />
            </div>
          </div>

          <aside>
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-yellow-400">Recent Reviews</h2>
              <p className="text-sm text-gray-400">Browse recent feedback from clients.</p>

              <div className="mt-4 space-y-4">
                {reviews.slice(0, 6).map((r) => (
                  <article key={r.id} className="flex items-start gap-4 rounded-md border border-yellow-400 bg-gray-900 p-4">
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
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
// ...existing code...