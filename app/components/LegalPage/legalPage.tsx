import React from "react";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  sections: LegalSection[];
}

const LegalPage = ({
  title,
  subtitle,
  effectiveDate,
  sections,
}: LegalPageProps) => {
  return (
    <div className="min-h-screen -mt-[88px] text-[var(--foreground)]">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--foreground)] via-[#1c1610] to-[#0d0b07] pt-[calc(7rem+88px)] pb-24 px-6">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--boxgradient-color)]/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl">
          <p className="text-[var(--boxgradient-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
            Enwiya Law Firm PLLC
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          ) : null}
          <p className="mt-6 text-white/40 text-sm uppercase tracking-[0.15em]">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* ── Gold divider ──────────────────────────────────────────── */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--setBorderColorGold)] to-transparent" />

      <main className="flex-1">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          {sections.map((section) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-1 h-7 rounded-full bg-[var(--headder-text-color)]" />
                <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                  {section.heading}
                </h2>
              </div>
              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-2 space-y-2">
                  {section.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[var(--muted-foreground)] text-lg leading-relaxed"
                    >
                      <span className="mt-3 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LegalPage;
