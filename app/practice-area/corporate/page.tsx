import { FaGavel, FaRegFileAlt, FaBalanceScale, FaClipboardCheck, FaDashcube, FaGlobeAmericas } from "react-icons/fa";

const Corporate = () => {
    return (
        <main className="min-h-screen text-[var(--color-text-color)] via-yellow-900/5 to-black py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-[var(--headder-text-color)]/40 via-yellow-900/10 to-transparent border border-[var(--headder-text-color)] rounded-2xl shadow-2xl p-10 overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl text-yellow-300 drop-shadow"><FaGavel className="text-4xl text-[var(--headder-text-color)] drop-shadow" /></span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--headder-text-color)] tracking-tight drop-shadow">Business & Corporate Law</h1>
                    </div>

                    <p className="text-[var(--color-text-color)] text-lg mt-6 mb-4 leading-relaxed">
                        Building and operating a successful business requires more than a strong idea — it requires a solid legal foundation. From formation through growth, financing, M&A, and exit, business owners face complex legal decisions that affect operations, liability, and long-term goals.
                    </p>

                    <p className="text-[var(--color-text-color)] text-lg mb-6 leading-relaxed">
                        Enwiya Law Firm partners with entrepreneurs and companies to provide strategic, practical counsel tailored to each client’s needs. We focus on thoughtful planning, clear contracts, and proactive problem-solving so clients can grow with confidence.
                    </p>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] mb-4">Our Corporate Services</h2>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Business Entity Formation & Structuring</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Contract Drafting, Review & Negotiation</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Mergers, Acquisitions & Asset Sales</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Corporate Governance & Compliance</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Succession, Buy-Sell Agreements & Exit Planning</li>
                        </ul>
                    </div>

                    <hr className="border-[var(--headder-text-color)]/30 my-6" />

                    <p className="text-[var(--color-text-color)] italic text-lg">
                        Whether you are launching a new venture, negotiating a transaction, or planning an ownership transition, Enwiya Law Firm provides experienced, client-focused guidance to protect your business and support long-term success.
                    </p>

                    <span className="absolute right-6 top-6 opacity-10 text-8xl pointer-events-none select-none"><FaGavel /></span>
                    <span className="absolute left-0 bottom-0 opacity-5 text-[10rem] pointer-events-none select-none"><FaGavel /></span>
                </div>
            </div>
        </main>
    );
};

export default Corporate;