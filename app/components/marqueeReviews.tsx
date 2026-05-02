import { useEffect, useState, CSSProperties } from "react" 
 import { useReviews } from "../../store/useReviews"

export default function MarqueeReviews() {
  const reviews = useReviews((state) => state.reviews)
  const isLoading = useReviews((state) => state.isLoading)
  const isError = useReviews((state) => state.isError)
  const fetchReviews = useReviews((state) => state.fetchReviews)

   useEffect(()=>{
    void fetchReviews()
  }, [fetchReviews])
  

  const marqueeReviews = reviews.length > 0 ? [...reviews, ...reviews] : []
    return (
        
 <section className="py-16">
        <div className="mx-auto w-full">
          <h2 className="mb-12 px-6 text-center text-3xl font-bold text-[var(--text-headers-black)] md:text-4xl">
            Client Testimonials
          </h2>
          {isError && (
            <p className="mb-6 px-6 text-center text-sm text-[var(--muted-foreground)]">
              Unable to load reviews right now.
            </p>
          )}
          {isLoading && reviews.length === 0 && (
            <p className="mb-6 px-6 text-center text-sm text-[var(--muted-foreground)]">
              Loading reviews...
            </p>
          )}
          {!isLoading && !isError && reviews.length === 0 && (
            <p className="mb-6 px-6 text-center text-sm text-[var(--muted-foreground)]">
              No reviews available yet.
            </p>
          )}
          {reviews.length > 0 && (
            <div className="review-marquee relative left-1/2 right-1/2 w-screen -translate-x-1/2">
              <div
                className="review-track"
                style={{ "--review-marquee-duration": "60s" } as CSSProperties}
              >
                {marqueeReviews.map((r: any, index: number) => (
                  <div
                    key={`${r.id}-${index}`}
                    className="review-card relative relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent border border-[var(--setBorderColorGold)] rounded-xl shadow-md p-6 flex flex-col items-start backdrop-blur-sm"
                  >
                    <p className="text-[var(--muted-foreground)] italic mb-4">
                      {r.comment}
                    </p>
                    <p className="text-[var(--headder-text-color)] font-semibold">- {r.reviewer_name}</p>
                    <svg className="absolute right-6 top-6 w-6 h-6 text-[var(--primary-accent)] opacity-10 pointer-events-none select-none" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .587l3.668 7.431L24 9.75l-6 5.847L19.335 24 12 20.013 4.665 24 6 15.597 0 9.75l8.332-1.732L12 .587z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      )
      }