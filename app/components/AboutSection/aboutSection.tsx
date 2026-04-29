
import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "lib/utils"
// ── About carousel images ────────────────────────────────────────────────────
// Replace these src paths with your real photos when ready.
const CAROUSEL_SLIDES = [
  { src: "/images/office-1.jpg",  alt: "Enwiya Law Firm office" },
  { src: "/images/office-2.jpg",  alt: "Consultation room" },
  { src: "/images/attorney-1.jpg", alt: "David Andrew Enwiya, Attorney" },
]


function AboutSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const total = CAROUSEL_SLIDES.length

  const go = useCallback((idx: number) => {
    setCurrent((idx + total) % total)
  }, [total])

  // Auto-advance every 5 s
  useEffect(() => {
    timerRef.current = setTimeout(() => go(current + 1), 5000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, go])

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* ── Text column ─────────────────────────────────────────── */}
          <div className="order-2 md:order-1">
            <p className="text-[var(--headder-text-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--headder-text-color)] mb-6 leading-tight">
              Principled Counsel.<br />Proven Results.
            </h2>
            <div className="w-12 h-1 bg-[var(--headder-text-color)] rounded-full mb-6" />
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-5">
              At Enwiya Law Firm, I am committed to providing exceptional legal
              representation. With years of experience, I deliver personalized
              solutions to complex legal challenges.
            </p>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-8">
              My mission is to uphold justice, protect your interests, and guide
              you through every step of the legal process with clarity and
              confidence.
            </p>

              <Button
                asChild
                className={cn(
                  "ml-1 rounded-full h-12 border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
                  "bg-[var(--item-color-schema)]/95 text-black font-semibold",
                  "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
                )}
              >
            <Link
              href="/about"
              className="flex items-center gap-2"
            >
              Meet the Attorney
            </Link>
            </Button>
          </div>

          {/* ── Carousel column ─────────────────────────────────────── */}
          <div className="order-1 md:order-2 relative select-none">
            {/* slide */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] border border-[var(--setBorderColorGold)]">
              {CAROUSEL_SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Caption overlay */}
              <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                <p className="text-white text-sm font-medium tracking-wide">
                  {CAROUSEL_SLIDES[current].alt}
                </p>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={() => go(current - 1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                onClick={() => go(current + 1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              >
                ›
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {CAROUSEL_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-[var(--primary-accent)]"
                      : "w-2 h-2 bg-[var(--setBorderColorGold)]/50 hover:bg-[var(--primary-accent)]/60"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection