"use client";
import React, { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen text-[var(--foreground)]">

      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--foreground)] via-[#1c1610] to-[#0d0b07] py-28 px-6">
        {/* decorative gold orb */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--boxgradient-color)]/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-36 h-36 rounded-full ring-4 ring-[var(--setBorderColorGold)] ring-offset-4 ring-offset-[#1c1610] overflow-hidden shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="David Andrew Enwiya"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-[var(--primary-accent)] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg tracking-wide">
                Founding Attorney
              </span>
            </div>
          </div>

          {/* Title block */}
          <div>
            <p className="text-[var(--boxgradient-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2">
              Enwiya Law Firm PLLC
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              David Andrew Enwiya
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Founding and Managing Attorney · Corporate Law · Estate Planning ·
              Probate · Immigration
            </p>
          </div>
        </div>
      </section>

      {/* ── Gold divider ──────────────────────────────────────────── */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[var(--setBorderColorGold)] to-transparent" />

      <main className="flex-1">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          {/* Biography Section */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--primary-accent)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Biography
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
              David Andrew Enwiya is the founding and managing attorney of Enwiya
              Law Firm PLLC, where he advises and represents clients in corporate
              law, estate planning, probate and trust administration, and
              immigration law. His practice focuses on guiding individuals, families,
              and business owners through some of the most consequential legal
              decisions they will face.
            </p>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              Whether assisting entrepreneurs with structuring and protecting their
              businesses, helping families preserve wealth and plan for the future,
              navigating probate and trust administration, or advising clients
              through critical immigration matters, David brings a thoughtful,
              solutions-oriented approach to every representation. He is committed
              to delivering client-centered legal services grounded in strategic
              analysis, clear communication, and close collaboration, ensuring
              clients feel informed, confident, and supported throughout the legal
              process.
            </p>
          </section>

          {/* Education Narrative Section */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--primary-accent)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Education
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-4">
              Born in Chicago, Illinois, David relocated with his family after his
              childhood to Phoenix, Arizona. He earned his Bachelor of Science in
              Criminology and Criminal Justice, with a minor in Philosophy, from
              Arizona State University in 2014, and his Juris Doctor from Arizona
              Summit Law School in 2018.
            </p>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              During law school, David distinguished himself through academic
              leadership and service. He served as Executive Articles Editor of the
              Law Review, worked as a teaching assistant for multiple courses—including
              Contracts, Civil Procedure, Secured Transactions, and Legal Writing—and
              was elected President of the Student Bar Association. In recognition
              of his leadership and academic excellence, he was awarded Student of
              the Year for the 2017–2018 academic year.
            </p>
          </section>

          {/* Personal Interests Section */}
          <section className="mt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--primary-accent)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Personal Interests
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              Outside of his practice, David enjoys reading, playing piano, and spending time with family and friends.
            </p>
          </section>

          {/* Credentials Accordion */}
          <section className="mt-14 mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--primary-accent)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Credentials &amp; Professional Profile
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  key: "Practice",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-[var(--headder-text-color)] drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M17 20H7v-2h10v2zm1-4H6c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm-1-6V7c0-2.21-1.79-4-4-4s-4 1.79-4 4v3H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2zm-6-3c0-1.1.9-2 2-2s2 .9 2 2v3h-4V7z" /></svg></span>
                  ),
                  title: "Areas of Practice",
                  content: (
                    <>
                      <ul className="list-disc list-inside text-[var(--muted-foreground)] mb-2">
                        <li>Business Corporate Law</li>
                        <li>Contract Law</li>
                        <li>Immigration Law</li>
                        <li>Estate Planning</li>
                        <li>Probate</li>
                      </ul>
                    </>
                  ),
                },
                {
                  key: "Admission",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-[var(--headder-text-color)] drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" /></svg></span>
                  ),
                  title: "Bar Admissions",
                  content: (
                    <>
                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li className="text-[var(--muted-foreground)]">Arizona 2019</li>
                        <li className="text-[var(--muted-foreground)]">Minnesota, 2023</li>
                        <li className="text-[var(--muted-foreground)]">North Dakota, 2021</li>
                        <li className="text-[var(--muted-foreground)]">State Bar of New Mexico (Inactive)</li>
                      </ul>

                    </>
                  ),
                },
                {
                  key: "Education",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-[var(--headder-text-color)] drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg></span>
                  ),
                  title: "Education",
                  content: (
                    <>
                      <ul className="space-y-4 mb-2">
                        <li className="flex items-start gap-3">

                          <div>
                            <span className="font-semibold text-[var(--muted-foreground)]">Arizona Summit Law School</span><br />
                            <span className="text-[var(--muted-foreground)]">Phoenix, Arizona</span><br />
                            <span className="text-[var(--muted-foreground)]">Juris Doctor – 2018</span>
                            <ul className="mt-2 ml-4 text-sm  space-y-1">
                              <li>President of the Student Bar Association</li>
                              <li>Executive Articles Editor of Law Review</li>
                              <li>Business Law Associations, Founder & President</li>
                              <li>Student of the Year 2018</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">

                          <div>
                            <span className="font-semibold text-[var(--muted-foreground)]">Arizona State University</span><br />
                            <span className="text-[var(--muted-foreground)]">B.S. – 2014</span><br />
                            <span className="text-[var(--muted-foreground)]">Major: Criminology and Criminal Justice</span><br />
                            <span className="text-[var(--muted-foreground)]">Minor: Philosophy</span>
                          </div>
                        </li>
                      </ul>

                    </>
                  ),
                },
                {
                  key: "Associations",
                  icon: (
                    <span className="mb-4"><svg className="text-4xl text-[var(--headder-text-color)] drop-shadow" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg></span>
                  ),
                  title: "Professional Associations and Memberships",
                  content: (
                    <>

                      <ul className="list-disc list-inside text-gray-200 mb-2">
                        <li className="text-[var(--muted-foreground)]">State Bar of Arizona, Member</li>
                        <li className="text-[var(--muted-foreground)]">State Bar of Minnesota, Member</li>
                        <li className="text-[var(--muted-foreground)]">State Bar of North Dakota, Member</li>
                        <li className="text-[var(--muted-foreground)]">State Bar of New Mexico, Member</li>
                      </ul>

                    </>
                  ),
                },
              ].map((area, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={area.key}
                    className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/5 to-transparent border border-[var(--setBorderColorGold)] rounded-2xl shadow-lg overflow-hidden transition-all"
                  >
                    {/* accordion header */}
                    <button
                      className="flex items-center justify-between w-full px-8 py-6 text-left cursor-pointer focus:outline-none group"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[var(--headder-text-color)]">{area.icon}</span>
                        <span className="text-lg font-bold text-[var(--headder-text-color)] group-hover:text-[var(--boxgradient-color)] transition-colors">
                          {area.title}
                        </span>
                      </div>
                      <span
                        className={`text-[var(--headder-text-color)] text-2xl font-light transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                      >
                        +
                      </span>
                    </button>

                    {/* accordion body */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="px-8 pb-8 pt-0 text-[var(--muted-foreground)] text-base leading-relaxed">
                        <div className="border-t border-[var(--setBorderColorGold)]/30 pt-5">
                          {area.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* ── CTA Strip ────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[var(--foreground)] via-[#1c1610] to-[var(--foreground)] border-t border-[var(--setBorderColorGold)]/40 py-14 px-6 text-center">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-3">Ready to get started?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule a Consultation
          </h2>
          <a
            href="/contact"
            className="inline-block bg-[var(--primary-accent)] hover:bg-[var(--boxgradient-color)] text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-colors duration-200 text-lg"
          >
            Contact Us Today
          </a>
        </div>

      </main>
    </div>
  );
};

export default About;
