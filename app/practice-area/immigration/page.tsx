import { FaGavel, FaRegFileAlt, FaBalanceScale,FaClipboardCheck,FaDashcube, FaGlobeAmericas } from "react-icons/fa";

const Immigration = () => {
    return (
        <main className="min-h-screen text-[var(--color-text-color)] via-yellow-900/5 to-black py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-[var(--headder-text-color)]/40 via-yellow-900/10 to-transparent border border-[var(--headder-text-color)] rounded-2xl shadow-2xl p-10 overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl text-yellow-300 drop-shadow"><FaGlobeAmericas className="text-4xl text-[var(--headder-text-color)] drop-shadow" /></span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--headder-text-color)] tracking-tight drop-shadow">Immigration Law</h1>
                    </div>
                    {/* <hr className="border-[var(--headder-text-color)]/30 mb-6" /> */}
                    <p className="text-[var(--color-text-color)] text-lg mt-10 mb-4 leading-relaxed">
                        For generations, the United States has represented opportunity, stability, and the promise of a better future. Individuals and families from around the world continue to answer that call—seeking to build lives, reunite with loved ones, and contribute to the communities they call home. Yet the immigration process itself can be complex, demanding, and overwhelming. Strict requirements, evolving regulations, and high stakes often leave individuals and families uncertain about their next steps.
                    </p>
                    <p className="text-[var(--color-text-color)] text-lg mb-6 leading-relaxed">
                        Immigration law is a dynamic and detail-intensive area of practice that requires careful legal analysis, strategic planning, and clear guidance. At Enwiya Law Firm, we are committed to helping clients navigate this process with confidence. We take the time to understand each client’s goals and circumstances, explain available options in plain terms, and advocate diligently to protect their rights at every stage of the process.
                    </p>
                    <div className="my-8">
                        <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] mb-4">Our Immigration Services</h2>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Fiancé (K-1) Petitions</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Spousal and Family-Based Petitions</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Adjustment of Status</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Removal of Conditions on Permanent Residence</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Naturalization and U.S. Citizenship</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Permanent Resident Card (Green Card) Renewals</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />USCIS Interview Preparation and Legal Advising</li>
                        </ul>
                    </div>
                    <hr className="border-[var(--headder-text-color)]/30 my-6" />
                    <p className="text-[var(--color-text-color)] italic text-lg">
                        Enwiya Law Firm serves clients from diverse backgrounds and communities, offering personalized immigration counsel rooted in respect, diligence, and professionalism. Whether you are beginning your immigration journey or navigating a critical stage in the process, we are dedicated to providing steady guidance and strong advocacy as you pursue your future in the United States.
                    </p>
                    <span className="absolute right-6 top-6 opacity-10 text-8xl pointer-events-none select-none"><FaGlobeAmericas /></span>
                    <span className="absolute left-0 bottom-0 opacity-5 text-[10rem] pointer-events-none select-none"><FaGlobeAmericas /></span>
                </div>
            </div>
        </main>
    );
};

export default Immigration;