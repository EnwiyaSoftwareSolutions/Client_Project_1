import React from "react";

const Corporate = () => {
    return (
        <main className="min-h-screen bg-black text-white py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="relative bg-gradient-to-br from-yellow-400/30 via-yellow-900/10 to-transparent border border-yellow-400 rounded-xl shadow-xl p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">Business & Corporate Law</h1>
                    <p className="text-gray-300 mb-4">
                        Building and operating a successful business requires more than a strong idea—it requires a solid legal foundation. From formation through growth, transition, or exit, business owners face complex legal decisions that can significantly affect their operations, personal liability, and long-term goals. Clear legal guidance at each stage is essential to protecting both the business and the people behind it.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Enwiya Law Firm works closely with entrepreneurs, professionals, and established companies to provide practical, strategic counsel tailored to their unique needs. We take the time to understand how each business operates, the risks it faces, and the objectives it seeks to achieve. Our approach emphasizes thoughtful planning, careful drafting, and proactive problem-solving, allowing clients to make informed decisions with confidence.
                    </p>
                    <h2 className="text-2xl font-semibold text-yellow-300 mt-8 mb-4">Our Corporate Services</h2>
                    <ul className="list-disc list-inside text-gray-200 mb-6 space-y-1">
                        <li>Business Entity Formation and Structuring</li>
                        <li>Contract Drafting, Review, and Negotiation</li>
                        <li>Business Acquisitions and Sales</li>
                        <li>Ownership Transitions and Succession Planning</li>
                        <li>Business Dissolutions and Wind-Downs</li>
                    </ul>
                    <p className="text-gray-400 italic">
                        Whether you are launching a new venture, formalizing relationships through well-crafted agreements, acquiring or selling a business, or navigating a transition or dissolution, Enwiya Law Firm provides clear, reliable legal guidance focused on protecting your interests and supporting your long-term success.
                    </p>
                    <span className="absolute right-6 top-6 opacity-10 text-7xl pointer-events-none select-none">⚖️</span>
                </div>
            </div>
        </main>
    );
};

export default Corporate;