import React from "react";

const Estate = () => {
    return (
        <main className="min-h-screen bg-black text-white py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-yellow-400/30 via-yellow-900/10 to-transparent border border-yellow-400 rounded-xl shadow-xl p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Estate Planning</h1>
                    <p className="text-gray-300 mb-4">
                        Estate planning is about more than distributing assets—it is about protecting loved ones, preserving what you have built, and ensuring your wishes are honored when it matters most. Without a clear and legally sound plan in place, families are often left to navigate uncertainty, unnecessary expense, and avoidable conflict during already difficult times.
                    </p>
                    <p className="text-gray-300 mb-4">
                        At Enwiya Law Firm, we help individuals and families create thoughtful, customized estate plans that reflect their values, goals, and unique circumstances. We believe effective estate planning begins with listening. By understanding each client’s family dynamics, financial situation, and long-term objectives, we are able to craft plans that provide clarity, continuity, and peace of mind.
                    </p>
                    <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">Our Estate Planning Services</h2>
                    <ul className="list-disc list-inside text-gray-200 mb-6 space-y-1">
                        <li>Wills and Revocable Living Trusts</li>
                        <li>Powers of Attorney and Health Care Directives</li>
                        <li>Asset Protection and Beneficiary Planning</li>
                        <li>Trust Funding and Estate Plan Implementation</li>
                        <li>Estate Planning for Business Owners and Families</li>
                    </ul>
                    <p className="text-gray-400 italic">
                        Whether you are planning for the future, preparing for life’s uncertainties, or seeking to protect your legacy for the next generation, Enwiya Law Firm provides careful guidance and strategic counsel designed to safeguard your interests and support your family with confidence and dignity.
                    </p>
                    <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">📜</span>
                </div>
            </div>
        </main>
    );
};

export default Estate;