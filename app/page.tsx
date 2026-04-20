"use client"
import { useEffect, type CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./components/ui/button"
// import Law from "./components/pArea/lawArea";
import {useReviews, type ReviewsStore} from "store/useReviews"

export default function Home() {
  const reviews = useReviews((state) => state.reviews)
  const isLoading = useReviews((state) => state.isLoading)
  const isError = useReviews((state) => state.isError)
  const fetchReviews = useReviews((state) => state.fetchReviews)
  
  useEffect(()=>{
    void fetchReviews()
  }, [fetchReviews])
  

  const marqueeReviews = reviews.length > 0 ? [...reviews, ...reviews] : []

  // useEffect(()=>{
  //   if(reviews.length===0 && !isLoading){
  //     void fetchReviews()
  //   }
  // },[fetchReviews, isLoading, reviews.length])

  return (
    <div className="min-h-screen text-[var(--foreground)]">
      {/* <Law /> */}

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-[var(--foreground)]">
        <div className="container mx-auto max-w-6xl text-center">
          <h1
            className="text-5xl md:text-7xl  font-bold mb-6"
            style={{ color: 'var( --headder-text-color)' }}
          >
            Enwiya Law Firm
          </h1>
          <div className="mx-auto w-24 h-1 bg-[var(--primary-accent)] rounded-full mb-6" aria-hidden="true" />
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Expert legal services tailored to your needs. Protecting your rights with integrity and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact" className="text-[var(--innerButton-color)]">Schedule Consultation</Link>
            </Button>
            <Button  asChild>
              <Link href="/about" className="text-[var(--innerButton-color)]">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <div className="bg-black" style={{ clipPath: "polygon(0 0, 100% 25%, 100% 58%, 100% 100%, 0% 100%)" }}> */}
<section className="py-16 px-6">
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)] mb-6">
                About Us
              </h2>
              <p className="text-[var(--muted-foreground)] font-[var(--gloabal-font)] text-lg mb-6">
                At Enwiya Lawfare, I am committed to providing exceptional legal representation. 
                With years of experience, I deliver personalized solutions to complex legal challenges.
              </p>
              <p className="text-[var(--muted-foreground)] font-[var(--gloabal-font)]">
                My mission is to uphold justice, protect your interests, and guide you through every step of the legal process.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder-law-image.jpg" // Replace with actual image path
                alt="Law firm office"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* Services Section */}
      {/* <div className="bg-black" style={{clipPath: "polygon(0 0, 100% 0, 100% 58%, 100% 100%, 0 79%)"}}> */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)] text-center mb-12">
            Our Services
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent border border-[var(--setBorderColorGold)] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-2xl hover:scale-105 transform transition-all">
                <div className="mb-4 flex items-center gap-4">
                  <svg className="w-10 h-10 text-[var(--primary-accent)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" fill="currentColor" opacity="0.08" />
                    <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-xl font-bold text-[var(--primary-accent)]">Corporate Law</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">
                  Strategic counsel for entrepreneurs and companies, including entity formation, contracts, acquisitions, and succession planning.
                </p>
            </div>
              <div className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent border border-[var(--setBorderColorGold)] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-2xl hover:scale-105 transform transition-all">
                <div className="mb-4 flex items-center gap-4">
                  <svg className="w-10 h-10 text-[var(--primary-accent)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 2h9v4H6z" fill="currentColor" opacity="0.08" />
                    <path d="M8 7h8M8 11h8M8 15h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3 className="text-xl font-bold text-[var(--primary-accent)]">Estate Planning</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">
                  Personalized estate plans, wills, trusts, and asset protection to secure your legacy and provide peace of mind for your family.
                </p>
            </div>
              <div className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent border border-[var(--setBorderColorGold)] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-2xl hover:scale-105 transform transition-all">
                <div className="mb-4 flex items-center gap-4">
                  <svg className="w-10 h-10 text-[var(--primary-accent)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 11h18M5 11l4-6 4 6 4-6 4 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.12" />
                  </svg>
                  <h3 className="text-xl font-bold text-[var(--primary-accent)]">Probate</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">
                  Guidance through probate and trust administration, asset management, and resolution of estate matters with care and clarity.
                </p>
            </div>
              <div className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent border border-[var(--setBorderColorGold)] rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-2xl hover:scale-105 transform transition-all">
                <div className="mb-4 flex items-center gap-4">
                  <svg className="w-10 h-10 text-[var(--primary-accent)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.06" />
                    <path d="M2 12h20M12 2v20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                  </svg>
                  <h3 className="text-xl font-bold text-[var(--primary-accent)]">Immigration</h3>
                </div>
                <p className="text-[var(--muted-foreground)]">
                  Comprehensive immigration services, including family petitions, status adjustments, citizenship, and legal advising.
                </p>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)] text-center mb-12">
            What Our Clients Say
          </h2>
          {isError && (
            <p className="mb-6 text-center text-sm text-[var(--muted-foreground)]">
              Unable to load reviews right now.
            </p>
          )}
          {isLoading && reviews.length === 0 && (
            <p className="mb-6 text-center text-sm text-[var(--muted-foreground)]">
              Loading reviews...
            </p>
          )}
          {!isLoading && !isError && reviews.length === 0 && (
            <p className="mb-6 text-center text-sm text-[var(--muted-foreground)]">
              No reviews available yet.
            </p>
          )}
          {reviews.length > 0 && (
            <div className="review-marquee">
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

      {/* Contact CTA Section */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto max-w-6xl text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)]  mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg mb-8">
            Contact Enwiya Law Firm today for a free consultation and let us help you with your legal needs.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}