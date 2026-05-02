"use client"

import { useEffect } from "react"

import ReviewCarousel from "../components/ui/Review"
import { useReviews } from "../../store/useReviews"

export default function Reviews() {
  const reviews = useReviews((state) => state.reviews)
  const isLoading = useReviews((state) => state.isLoading)
  const isError = useReviews((state) => state.isError)
  const fetchReviews = useReviews((state) => state.fetchReviews)

  useEffect(() => {
    void fetchReviews()
  }, [fetchReviews])

  return (
    <main className="min-h-screen text-[var(--foreground)]">
      <div className="container mx-auto max-w-7xl px-5 py-14 md:px-6 md:py-16">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary-accent)]/90">
            Client Voices
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-[var(--foreground)] md:text-5xl">
            Client Reviews & Testimonials
          </h1>
          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[var(--primary-accent)]" />
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[var(--foreground)]/75 md:text-base">
            Read featured testimonials and recent feedback from clients who trusted
            Enwiya Law Firm with critical legal matters.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--setBorderColorGold)]/50 bg-gradient-to-br from-[var(--boxgradient-color)]/18 via-[var(--primary-accent)]/12 to-[var(--card)]/55 p-5 shadow-[0_22px_45px_-30px_rgba(0,0,0,0.28)] md:p-8">
            <h2 className="mb-5 text-xl font-bold text-[var(--headder-text-color)] md:text-2xl">
              Featured Testimonials
            </h2>
            <p className="mb-6 max-w-xl text-sm text-[var(--foreground)]/70">
              A rotating spotlight of client experiences and outcomes.
            </p>
            <div className="rounded-2xl border border-[var(--setBorderColorGold)]/35 bg-[var(--card)]/78 p-4 md:p-6">
              <ReviewCarousel />
            </div>
            <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl text-[var(--headder-text-color)]/18">★</span>
          </div>

          <aside className="relative overflow-hidden rounded-2xl border border-[var(--setBorderColorGold)]/50 bg-gradient-to-br from-[var(--boxgradient-color)]/14 via-[var(--primary-accent)]/8 to-[var(--card)]/55 p-5 shadow-[0_22px_45px_-30px_rgba(0,0,0,0.28)] md:p-8">
            <h2 className="mb-2 text-xl font-bold text-[var(--headder-text-color)] md:text-2xl">
              Recent Reviews
            </h2>
            <p className="mb-5 text-sm text-[var(--foreground)]/70">
              Browse recent feedback from clients.
            </p>
            <div className="theme-scrollbar max-h-[640px] space-y-4 overflow-y-auto p-1 pr-2">
                {isError && (
                <p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  Unable to load reviews right now.
                </p>
                )}
                {isLoading && reviews.length === 0 && (
                <p className="rounded-lg border border-[var(--setBorderColorGold)]/25 bg-[var(--card)]/15 px-4 py-3 text-sm text-[var(--muted-foreground)]">
                  Loading reviews...
                </p>
                )}
                {reviews.slice(0, 6).map((r, idx) => (
                <article
                  key={r.$id ?? r.id ?? idx}
                  className="group flex items-start gap-3 rounded-xl border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/72 p-4 shadow-[0_8px_20px_-16px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary-accent)]/60 hover:bg-[var(--card)]/90"
                >
                    {/* <img
                      src={r.image}
                      alt={r.name}
                      className="h-12 w-12 flex-none rounded-full object-cover ring-2 ring-[var(--setBorderColorGold)]"
                    /> */}

                  <div
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[var(--setBorderColorGold)] bg-gradient-to-br from-[var(--boxgradient-color)]/25 via-[var(--primary-accent)]/20 to-transparent text-sm font-bold tracking-wide text-[var(--headder-text-color)] shadow-md"
                    >
                      {r.reviewer_name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                    </div>

                  <div>
                    <p className="font-semibold text-[var(--headder-text-color)]">{r.reviewer_name}</p>
                      {/* <p className="text-xs text-[var(--muted-foreground)]">{r.job}</p> */}
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground)]/70">
                        {r.comment.substring(0, 120)}
                        {r.comment.length > 120 ? "..." : ""}
                      </p>
                  </div>
                </article>
                ))}
            </div>
            <span className="pointer-events-none absolute right-6 top-4 select-none text-7xl text-[var(--headder-text-color)]/18">★</span>
          </aside>
        </section>
      </div>
    </main>
  )
}