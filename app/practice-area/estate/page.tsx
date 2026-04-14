import { FaRegFileAlt, FaDashcube} from "react-icons/fa";

const Estate = () => {
    return (
        <main className="min-h-screen text-[var(--color-text-color)] via-yellow-900/5 to-black py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-[var(--headder-text-color)]/40 via-yellow-900/10 to-transparent border border-[var(--headder-text-color)] rounded-2xl shadow-2xl p-10 overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl text-yellow-300 drop-shadow"><FaRegFileAlt className="text-4xl text-[var(--headder-text-color)] drop-shadow" /></span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--headder-text-color)] tracking-tight drop-shadow">Estate Planning</h1>
                    </div>

                    <p className="text-[var(--color-text-color)] text-lg mt-6 mb-4 leading-relaxed">
                        Estate planning is about more than distributing assets — it’s about protecting loved ones, preserving your lifetime achievements, and ensuring your wishes are honored. Thoughtful planning reduces uncertainty and protects your family when it matters most.
                    </p>

                    <p className="text-[var(--color-text-color)] text-lg mb-6 leading-relaxed">
                        At Enwiya Law Firm we craft customized estate plans that address wills, trusts, powers of attorney, healthcare directives, and strategies to minimize probate and tax exposure while maintaining flexibility for changing circumstances.
                    </p>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] mb-4">Our Estate Planning Services</h2>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Wills & Revocable Living Trusts</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Powers of Attorney & Health Care Directives</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Asset Protection & Beneficiary Planning</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Trust Funding & Estate Plan Implementation</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Estate Planning for Business Owners</li>
                        </ul>
                    </div>

                    <hr className="border-[var(--headder-text-color)]/30 my-6" />

                    <p className="text-[var(--color-text-color)] italic text-lg">
                        Whether you are planning for the future or updating an existing plan, Enwiya Law Firm provides compassionate, practical guidance to help secure your legacy and protect those you care about.
                    </p>

                    <span className="absolute right-6 top-6 opacity-10 text-8xl pointer-events-none select-none"><FaRegFileAlt /></span>
                    <span className="absolute left-0 bottom-0 opacity-5 text-[10rem] pointer-events-none select-none"><FaRegFileAlt /></span>
                </div>
            </div>
        </main>
    );
};

export default Estate;