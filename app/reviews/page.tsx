import ReviewCarousel from "../components/ui/Review"
import reviews from "../data/review"

export default function Reviews() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-white
">Client Reviews & Testimonials</h1>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
          We pride ourselves on delivering excellent results for our clients. Read
          a selection of recent client reviews below, or use the carousel to
          browse featured testimonials.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-medium">Featured Testimonials</h2>
            <ReviewCarousel />
          </div>
        </div>

        <aside>
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-white">Recent Reviews</h2>
            <p className="text-sm text-muted-foreground">Browse recent feedback from clients.</p>

            <div className="mt-4 space-y-4">
              {reviews.slice(0, 6).map((r) => (
                <article key={r.id} className="flex items-start gap-4 rounded-md border bg-background p-4">
                  <img src={r.image} alt={r.name} className="h-12 w-12 flex-none rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.job}</p>
                    <p className="mt-2 text-sm text-zinc-400">{r.text.substring(0, 120)}{r.text.length > 120 ? "..." : ""}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

