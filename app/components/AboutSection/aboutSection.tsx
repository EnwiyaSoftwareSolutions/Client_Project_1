
import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "lib/utils"
// ── About carousel images ────────────────────────────────────────────────────
// Replace these src paths with your real photos when ready.
const CAROUSEL_SLIDES = [
  { id: 1, src: "https://sfo.cloud.appwrite.io/v1/storage/buckets/69893cf90023d6e6e6a6/files/69f52f82002688bd7c7a/view?project=69880e000034360e8e76&mode=admin",  alt: "Enwiya Law Firm office" },
  { id: 2, src: "https://sfo.cloud.appwrite.io/v1/storage/buckets/69893cf90023d6e6e6a6/files/69f52f8200268dc511ea/view?project=69880e000034360e8e76&mode=admin",  alt: "Consultation room" },
  { id: 3, src: "https://sfo.cloud.appwrite.io/v1/storage/buckets/69893cf90023d6e6e6a6/files/69f52f8200268508c93a/view?project=69880e000034360e8e76&mode=admin", alt: "David Andrew Enwiya, Attorney" },
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
    <section className="relative overflow-hidden select-none" style={{ minHeight: "560px" }}>

      {/* ── Full-width carousel images ───────────────────────────── */}
      <div className="absolute inset-0">
        {CAROUSEL_SLIDES.map((slide, i) => (
          <div
            key={slide.id}
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
      </div>

      {/* ── Right-side transparent overlay ──────────────────────── */}
      <div className="absolute inset-0 z-20" style={{ background: "linear-gradient(to right, transparent 0%, rgba(11,11,11,0.55) 40%, rgba(11,11,11,0.92) 70%)" }} />

      {/* ── Text content (right side) ────────────────────────────── */}
      <div className="relative z-30 flex mr-[30px] items-center justify-end min-h-[560px] px-6 py-20">
        <div className="w-full max-w-md">
          <p className="text-[var(--primary-accent)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navbar-font-color)] mb-6 leading-tight">
            Principled Counsel.<br />Proven Results.
          </h2>
          <div className="w-12 h-1 bg-[var(--primary-accent)] rounded-full mb-6" />
          <p className="text-[var(--navbar-font-color)]/75 text-lg leading-relaxed mb-5">
            Enwiya Law Firm was founded on the principle that legal services should be dependable and tailored to the circumstances of each client. Each matter is approached with   
            careful attention to detail and thoughtful commitment to the client's objectives.
          </p>
          <p className="text-[var(--navbar-font-color)]/75 text-lg leading-relaxed mb-8">
            My mission is to uphold justice, protect your interests, and guide
            you through every step of the legal process with clarity and
            confidence.
          </p>

          <Button
            asChild
            className={cn(
              "rounded-full h-12 border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
              "bg-[var(--item-color-schema)]/95 text-black font-semibold",
              "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
            )}
          >
            <Link href="/about" className="flex items-center gap-2">
              Meet the Attorney
            </Link>
          </Button>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-8">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-[var(--primary-accent)]"
                    : "w-2 h-2 bg-[var(--setBorderColorGold)]/40 hover:bg-[var(--primary-accent)]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Carousel arrows ──────────────────────────────────────── */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--headder-navbar-color)]/60 hover:bg-[var(--primary-accent)]/20 border border-[var(--setBorderColorGold)]/30 hover:border-[var(--primary-accent)]/60 text-[var(--navbar-font-color)] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-xl"
      >
        ‹
      </button>
      <button
        onClick={() => go(current + 1)}
        aria-label="Next image"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[var(--headder-navbar-color)]/60 hover:bg-[var(--primary-accent)]/20 border border-[var(--setBorderColorGold)]/30 hover:border-[var(--primary-accent)]/60 text-[var(--navbar-font-color)] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 text-xl"
      >
        ›
      </button>

    </section>
  )
}

export default AboutSection