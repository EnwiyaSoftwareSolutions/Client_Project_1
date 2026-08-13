"use client";
import React, { useState } from "react";
import Image from "next/image";

const PROFILE_IMAGE_SRC =
  "https://sfo.cloud.appwrite.io/v1/storage/buckets/69893cf90023d6e6e6a6/files/69f52f8200268508c93a/view?project=69880e000034360e8e76&mode=admin";

const About = () => {
  const [openKeys, setOpenKeys] = useState<Set<string>>(
    () => new Set(["Practice", "Admission", "Education", "Associations"]),
  );

  return (
    <div className="min-h-screen -mt-[88px] text-[var(--foreground)]">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--foreground)] via-[#1c1610] to-[#0d0b07] pt-[calc(7rem+88px)] pb-28 px-6">
        {/* decorative gold orb */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[var(--boxgradient-color)]/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-36 h-36 rounded-full ring-4 ring-[var(--setBorderColorGold)] ring-offset-4 ring-offset-[#1c1610] overflow-hidden shadow-2xl">
                <Image
                  src={PROFILE_IMAGE_SRC}
                  alt="David Andrew Enwiya, Founding Attorney"
                  width={144}
                  height={144}
                  priority
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
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--headder-text-color)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Biography
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-6">
              David Andrew Enwiya is the founding and managing attorney of
              Enwiya Law Firm PLLC, where he advises and represents clients in
              corporate law, estate planning, probate and trust administration,
              and immigration law. His practice focuses on guiding individuals,
              families, and business owners through some of the most
              consequential legal decisions they will face.
            </p>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              Whether assisting entrepreneurs with structuring and protecting
              their businesses, helping families preserve wealth and plan for
              the future, navigating probate and trust administration, or
              advising clients through critical immigration matters, David
              brings a thoughtful, solutions-oriented approach to every
              representation. He is committed to delivering client-centered
              legal services grounded in strategic analysis, clear
              communication, and close collaboration, ensuring clients feel
              informed, confident, and supported throughout the legal process.
            </p>
          </section>

          {/* Education Narrative Section */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--headder-text-color)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Education
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed mb-4">
              Born in Chicago, Illinois, David relocated with his family after
              his childhood to Phoenix, Arizona. He earned his Bachelor of
              Science in Criminology and Criminal Justice, with a minor in
              Philosophy, from Arizona State University in 2014, and his Juris
              Doctor from Arizona Summit Law School in 2018.
            </p>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              During law school, David distinguished himself through academic
              leadership and service. He served as Executive Articles Editor of
              the Law Review, worked as a teaching assistant for multiple
              courses—including Contracts, Civil Procedure, Secured
              Transactions, and Legal Writing—and was elected President of the
              Student Bar Association. In recognition of his leadership and
              academic excellence, he was awarded Student of the Year for the
              2017–2018 academic year.
            </p>
          </section>

          {/* Personal Interests Section */}
          <section className="mt-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--headder-text-color)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Personal Interests
              </h2>
            </div>
            <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
              Outside of his practice, David enjoys reading, playing piano, and
              spending time with family and friends.
            </p>
          </section>

          {/* Credentials Accordion */}
          <section className="mt-14 mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-7 rounded-full bg-[var(--headder-text-color)]" />
              <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">
                Credentials &amp; Professional Profile
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              {[
                {
                  key: "Practice",
                  icon: (
                    <span className="mb-4">
                      <svg
                        className="text-4xl text-[var(--headder-text-color)]  drop-shadow"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 6h-2.18c.07-.44.18-.88.18-1.35C18 2.53 15.48 1 12 1S6 2.53 6 4.65c0 .47.1.91.18 1.35H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-8-3c2.7 0 4 .96 4 1.65S13.7 6.3 12 6.3 8 5.34 8 4.65 9.3 3 12 3zm8 16H4V8h16v11z" />
                      </svg>
                    </span>
                  ),
                  title: "Areas of Practice",
                  content: (
                    <>
                      <ul className="mb-2 space-y-2 text-[var(--muted-foreground)]">
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Business Corporate Law
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Contract Law
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Immigration Law
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Estate Planning
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Probate
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  key: "Admission",
                  icon: (
                    <span className="mb-4">
                      <svg
                        className="text-4xl text-[var(--headder-text-color)] drop-shadow"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="M7 21h10" />
                        <path d="M12 3v18" />
                        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                      </svg>
                    </span>
                  ),
                  title: "Bar Admissions",
                  content: (
                    <>
                      <ul className="list-disc  list-inside text-[var(--muted-foreground)] mb-2">
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Arizona 2019
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          Minnesota, 2023
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          North Dakota, 2021
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          State Bar of New Mexico (Inactive)
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  key: "Education",
                  icon: (
                    <span className="mb-4">
                      <svg
                        className="text-4xl text-[var(--headder-text-color)] drop-shadow"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z" />
                      </svg>
                    </span>
                  ),
                  title: "Education",
                  content: (
                    <>
                      <ul className="space-y-4 mb-2">
                        <li className="flex items-start gap-3">
                          <div>
                            <span className="font-semibold text-[var(--muted-foreground)]">
                              Arizona Summit Law School
                            </span>
                            <br />
                            <span className="text-[var(--muted-foreground)]">
                              Phoenix, Arizona
                            </span>
                            <br />
                            <span className="text-[var(--muted-foreground)]">
                              Juris Doctor – 2018
                            </span>
                            <ul className="mt-2 ml-4 text-sm  space-y-1">
                              <li>President of the Student Bar Association</li>
                              <li>Executive Articles Editor of Law Review</li>
                              <li>
                                Business Law Associations, Founder & President
                              </li>
                              <li>Student of the Year 2018</li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div>
                            <span className="font-semibold text-[var(--muted-foreground)]">
                              Arizona State University
                            </span>
                            <br />
                            <span className="text-[var(--muted-foreground)]">
                              B.S. – 2014
                            </span>
                            <br />
                            <span className="text-[var(--muted-foreground)]">
                              Major: Criminology and Criminal Justice
                            </span>
                            <br />
                            <span className="text-[var(--muted-foreground)]">
                              Minor: Philosophy
                            </span>
                          </div>
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  key: "Associations",
                  icon: (
                    <span className="mb-4">
                      <svg
                        className="text-4xl text-[var(--headder-text-color)] drop-shadow"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </span>
                  ),
                  title: "Professional Associations and Memberships",
                  content: (
                    <>
                      <ul className="list-disc list-inside mb-2">
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          State Bar of Arizona, Member
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          State Bar of Minnesota, Member
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          State Bar of North Dakota, Member
                        </li>
                        <li className="flex items-start gap-3 before:content-['-'] before:font-bold before:text-[var(--headder-text-color)]">
                          State Bar of New Mexico, Member
                        </li>
                      </ul>
                    </>
                  ),
                },
              ].map((area) => {
                const isOpen = openKeys.has(area.key);
                return (
                  <div
                    key={area.key}
                    className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/5 to-transparent border border-[var(--setBorderColorGold)] rounded-2xl shadow-lg overflow-hidden transition-all"
                  >
                    {/* accordion header */}
                    <button
                      className="flex items-center justify-between w-full px-8 py-6 text-left cursor-pointer focus:outline-none group"
                      onClick={() =>
                        setOpenKeys((prev) => {
                          const next = new Set(prev);
                          if (next.has(area.key)) {
                            next.delete(area.key);
                          } else {
                            next.add(area.key);
                          }
                          return next;
                        })
                      }
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[var(--headder-text-color)]">
                          {area.icon}
                        </span>
                        <span className="text-lg font-bold text-[var(--headder-text-color)]  transition-colors">
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
          <p className="text-white/60 text-sm tracking-widest uppercase mb-3">
            Ready to get started?
          </p>
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
