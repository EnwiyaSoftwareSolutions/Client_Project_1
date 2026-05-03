"use client"
import Link from "next/link"
import { Button } from "./components/ui/button"
import AboutSection from "./components/AboutSection/aboutSection"
import MarqueeReviews from "./components/marqueeReviews"
import OurServices from './components/ourServices/ourServices'
import { cn } from "lib/utils"



export default function Home() {

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
            <Button asChild className={cn(
              "ml-1 rounded-full border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
              "bg-[var(--item-color-schema)]/95 text-black font-semibold",
              "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
            )}>
              <Link href="/contact" className="flex items-center gap-2">Schedule Consultation</Link>
            </Button>
            <Button asChild className={cn(
              "ml-1 rounded-full border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
              "bg-[var(--item-color-schema)]/95 text-black font-semibold",
              "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
            )}>
              <Link href="/about" className="flex items-center gap-2">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <OurServices />
      {/* Testimonials Section */}
      <MarqueeReviews />
      {/* Contact CTA Section */}
      <section className="py-16 px-6 ">
        <div className="container mx-auto max-w-6xl text-center ">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)]  mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--muted-foreground)] text-lg mb-8">
            Contact Enwiya Law Firm today for a free consultation and let us help you with your legal needs.
          </p>
          <Button asChild className={cn(
            "ml-1 rounded-full border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
            "bg-[var(--item-color-schema)]/95 text-black font-semibold",
            "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
          )}>
            <Link href="/contact" className="flex items-center gap-2" >Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}