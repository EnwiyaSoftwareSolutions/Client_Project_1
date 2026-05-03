import React, { useState } from 'react';
import { FaGavel, FaRegFileAlt, FaBalanceScale, FaGlobeAmericas } from "react-icons/fa"
import Link from "next/link"



const OurServices =()=>{
    return (
             <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)] text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link href="/practice-area/corporate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
              <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
                <div className="mb-4">
                  <FaGavel className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Corporate Law</h3>
                <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  Strategic counsel for entrepreneurs and companies, including entity formation, contracts, acquisitions, and succession planning.
                </p>
                <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
                <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaGavel className="text-[var(--headder-text-color)]" /></span>
              </div>
            </Link>
            <Link href="/practice-area/estate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
              <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
                <div className="mb-4">
                  <FaRegFileAlt className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Estate Planning</h3>
                <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  Personalized estate plans, wills, trusts, and asset protection to secure your legacy and provide peace of mind for your family.
                </p>
                <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
                <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaRegFileAlt className="text-[var(--headder-text-color)]" /></span>
              </div>
            </Link>
            <Link href="/practice-area/probate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
              <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
                <div className="mb-4">
                  <FaBalanceScale className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Probate</h3>
                <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  Guidance through probate and trust administration, asset management, and resolution of estate matters with care and clarity.
                </p>
                <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
                <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaBalanceScale className="text-[var(--headder-text-color)]" /></span>
              </div>
            </Link>
            <Link href="/practice-area/immigration" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
              <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
                <div className="mb-4">
                  <FaGlobeAmericas className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Immigration</h3>
                <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
                  Comprehensive immigration services, including family petitions, status adjustments, citizenship, and legal advising.
                </p>
                <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
                <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaGlobeAmericas className="text-[var(--headder-text-color)]" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    )
}
export default OurServices

// "use client";

// import React, { useEffect, useState } from 'react';
// import { FaGavel, FaRegFileAlt, FaBalanceScale, FaGlobeAmericas } from "react-icons/fa"
// import Link from "next/link"
// import Image from "next/image";



// const OurServices =()=>{
//     const imagePanels = [
//       {
//         title: "Corporate Advisory",
//         subtitle: "Growth-minded legal strategy",
//         src: "/next.svg",
//         href: "/practice-area/corporate",
//       },
//       {
//         title: "Estate Protection",
//         subtitle: "Clarity for family legacy plans",
//         src: "/file.svg",
//         href: "/practice-area/estate",
//       },
//       {
//         title: "Immigration Pathways",
//         subtitle: "Confident support at every stage",
//         src: "/globe.svg",
//         href: "/practice-area/immigration",
//       },
//       {
//         title: "Probate Guidance",
//         subtitle: "Structured handling of estate matters",
//         src: "/window.svg",
//         href: "/practice-area/probate",
//       },
//     ];

//     const [activePanel, setActivePanel] = useState(0);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setActivePanel((prev) => (prev + 1) % imagePanels.length);
//       }, 4500);

//       return () => clearInterval(interval);
//     }, [imagePanels.length]);

//     const goToPrevPanel = () => {
//       setActivePanel((prev) => (prev - 1 + imagePanels.length) % imagePanels.length);
//     };

//     const goToNextPanel = () => {
//       setActivePanel((prev) => (prev + 1) % imagePanels.length);
//     };

//     return (
//              <section className="py-16 px-6">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-headers-black)] text-center mb-12">
//             Our Services
//           </h2>
//           <div className="relative mb-12 overflow-hidden rounded-2xl border border-[var(--headder-text-color)]/40 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#242424] shadow-2xl">
//             <div className="relative h-[260px] sm:h-[320px]">
//               {imagePanels.map((panel, index) => (
//                 <Link
//                   key={panel.title}
//                   href={panel.href}
//                   aria-hidden={activePanel !== index}
//                   tabIndex={activePanel === index ? 0 : -1}
//                   className={`absolute inset-0 transition-all duration-700 ${
//                     activePanel === index
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 translate-x-6 pointer-events-none"
//                   }`}
//                 >
//                   <Image
//                     src={panel.src}
//                     alt={panel.title}
//                     fill
//                     priority={index === 0}
//                     className="object-cover bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.35),transparent_45%),linear-gradient(135deg,#161616,#2a2a2a)] p-14"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
//                   <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                     <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[var(--primary-accent)]/95 mb-2">
//                       Featured Service
//                     </p>
//                     <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">{panel.title}</h3>
//                     <p className="text-sm sm:text-base text-white/85">{panel.subtitle}</p>
//                   </div>
//                 </Link>
//               ))}

//               <button
//                 type="button"
//                 onClick={goToPrevPanel}
//                 aria-label="Show previous panel"
//                 className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-white backdrop-blur transition hover:bg-black/55"
//               >
//                 &#10094;
//               </button>
//               <button
//                 type="button"
//                 onClick={goToNextPanel}
//                 aria-label="Show next panel"
//                 className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-white backdrop-blur transition hover:bg-black/55"
//               >
//                 &#10095;
//               </button>
//             </div>

//             <div className="flex items-center justify-center gap-2 pb-4">
//               {imagePanels.map((panel, index) => (
//                 <button
//                   key={panel.title + "-dot"}
//                   type="button"
//                   aria-label={`Go to ${panel.title}`}
//                   onClick={() => setActivePanel(index)}
//                   className={`h-2.5 rounded-full transition-all ${
//                     activePanel === index
//                       ? "w-8 bg-[var(--primary-accent)]"
//                       : "w-2.5 bg-white/45 hover:bg-white/70"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <Link href="/practice-area/corporate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
//               <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
//                 <div className="mb-4">
//                   <FaGavel className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Corporate Law</h3>
//                 <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
//                   Strategic counsel for entrepreneurs and companies, including entity formation, contracts, acquisitions, and succession planning.
//                 </p>
//                 <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
//                 <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaGavel className="text-[var(--headder-text-color)]" /></span>
//               </div>
//             </Link>
//             <Link href="/practice-area/estate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
//               <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
//                 <div className="mb-4">
//                   <FaRegFileAlt className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Estate Planning</h3>
//                 <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
//                   Personalized estate plans, wills, trusts, and asset protection to secure your legacy and provide peace of mind for your family.
//                 </p>
//                 <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
//                 <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaRegFileAlt className="text-[var(--headder-text-color)]" /></span>
//               </div>
//             </Link>
//             <Link href="/practice-area/probate" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
//               <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
//                 <div className="mb-4">
//                   <FaBalanceScale className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Probate</h3>
//                 <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
//                   Guidance through probate and trust administration, asset management, and resolution of estate matters with care and clarity.
//                 </p>
//                 <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
//                 <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaBalanceScale className="text-[var(--headder-text-color)]" /></span>
//               </div>
//             </Link>
//             <Link href="/practice-area/immigration" className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary-accent)] rounded-xl">
//               <div className="relative h-full bg-gradient-to-br from-[var(--headder-text-color)]/30 via-[var(--primary-accent)]/10 to-transparent border border-[var(--headder-text-color)] rounded-xl shadow-xl p-8 flex flex-col items-start transition-transform duration-200 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-[var(--primary-accent)]">
//                 <div className="mb-4">
//                   <FaGlobeAmericas className="text-4xl text-[var(--headder-text-color)] drop-shadow" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[var(--text-headers-black)] mb-2">Immigration</h3>
//                 <p className="text-[var(--muted-foreground)] mb-4 leading-relaxed">
//                   Comprehensive immigration services, including family petitions, status adjustments, citizenship, and legal advising.
//                 </p>
//                 <span className="mt-auto text-[var(--headder-text-color)] font-semibold group-hover:underline group-hover:text-[var(--primary-accent)] transition-colors">Learn more &rarr;</span>
//                 <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none"><FaGlobeAmericas className="text-[var(--headder-text-color)]" /></span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </section>
//     )
// }
// export default OurServices