import { FaBalanceScale, FaRegFileAlt, FaClipboardCheck, FaDashcube, FaGlobeAmericas } from "react-icons/fa";

const Probate = () => {
    return (
        <main className="min-h-screen text-[var(--color-text-color)] via-yellow-900/5 to-black py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-[var(--headder-text-color)]/40 via-yellow-900/10 to-transparent border border-[var(--headder-text-color)] rounded-2xl shadow-2xl p-10 overflow-hidden">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-5xl md:text-6xl text-yellow-300 drop-shadow"><FaBalanceScale className="text-4xl text-[var(--headder-text-color)] drop-shadow" /></span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--headder-text-color)] tracking-tight drop-shadow">Probate & Trust Administration</h1>
                    </div>

                    <p className="text-[var(--color-text-color)] text-lg mt-6 mb-4 leading-relaxed">
                        The loss of a loved one is never easy, and the legal responsibilities that follow can feel overwhelming. Probate and trust administration involve time-sensitive procedures and important fiduciary duties that require careful attention and experienced guidance.
                    </p>

                    <p className="text-[var(--color-text-color)] text-lg mb-6 leading-relaxed">
                        At Enwiya Law Firm, we assist personal representatives, trustees, and beneficiaries with compassionate, thorough representation—helping to settle estates, manage assets, resolve claims, and ensure distributions are handled according to the law and the decedent’s wishes.
                    </p>

                    <div className="my-8">
                        <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] mb-4">Our Probate & Trust Services</h2>
                        <ul className="list-none space-y-3">
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Informal and Formal Probate Proceedings</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Trust Administration & Trustee Guidance</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Estate Asset Identification & Management</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Creditor Claims, Notices & Litigation Support</li>
                            <li className="flex items-center gap-3"><FaDashcube className="text-[var(--headder-text-color)] text-lg" />Distribution to Beneficiaries & Final Accounting</li>
                        </ul>
                    </div>

                    <hr className="border-[var(--headder-text-color)]/30 my-6" />

                    <p className="text-[var(--color-text-color)] italic text-lg">
                        Whether you are acting as a fiduciary or seeking to protect your rights as a beneficiary, Enwiya Law Firm provides steady, knowledgeable support to navigate probate and trust administration with care and competence.
                    </p>

                    <span className="absolute right-6 top-6 opacity-10 text-8xl pointer-events-none select-none"><FaBalanceScale /></span>
                    <span className="absolute left-0 bottom-0 opacity-5 text-[10rem] pointer-events-none select-none"><FaBalanceScale /></span>
                </div>
            </div>
        </main>
    );
};

export default Probate;
