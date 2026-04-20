'use client'

import React from "react"

import Link from "next/link";
import { FaGavel, FaRegFileAlt, FaBalanceScale, FaGlobeAmericas } from "react-icons/fa";

const PRACTICE_AREAS = [
  {
    key: "corporate",
    title: "Business & Corporate Law",
    summary:
      "Strategic counsel for entrepreneurs and companies, including entity formation, contracts, acquisitions, and succession planning.",
    href: "/practice-area/corporate",
    icon: <FaGavel className="text-4xl text-[var(--headder-text-color)] drop-shadow" />,
    accent: "from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent"
  },
  {
    key: "estate",
    title: "Estate Planning",
    summary:
      "Personalized estate plans, wills, trusts, and asset protection to secure your legacy and provide peace of mind for your family.",
    href: "/practice-area/estate",
    icon: <FaRegFileAlt className="text-4xl text-[var(--headder-text-color)] drop-shadow" />,
    accent: "from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent"
  },
  {
    key: "probate",
    title: "Probate & Trust Administration",
    summary:
      "Guidance through probate and trust administration, asset management, and resolution of estate matters with care and clarity.",
    href: "/practice-area/probate",
    icon: <FaBalanceScale className="text-4xl text-[var(--headder-text-color)] drop-shadow" />,
    accent: "from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent"
  },
  {
    key: "immigration",
    title: "Immigration Law",
    summary:
      "Comprehensive immigration services, including family petitions, status adjustments, citizenship, and legal advising.",
    href: "/practice-area/immigration",
    icon: <FaGlobeAmericas className="text-4xl text-[var(--headder-text-color)] drop-shadow" />,
    accent: "from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent"
  },
];

const PracticeArea = () => {
  return (
    <div className="p-6 md:p-12 bg-[var(--background)] border border-[var(--border)] rounded-2xl shadow-2xl max-w-5xl mx-auto">
      <h1 className="text-4xl text-[var(--text-headers-black)]  md:text-5xl font-extrabold  mb-10 text-center tracking-tight drop-shadow">Practice Areas</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {PRACTICE_AREAS.map((area) => (
          <Link key={area.key} href={area.href} className="block group">
            <div className={`relative h-full bg-gradient-to-br ${area.accent} border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]`}> 
              <div className="mb-4">{area.icon}</div>
              <h2 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2 
             ">{area.title}</h2>
              <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">{area.summary}</p>
              <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
              <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">{area.icon}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PracticeArea;