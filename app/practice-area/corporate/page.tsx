import Link from "next/link";
import { FaArrowRight, FaBriefcase, FaBuilding, FaCheckCircle, FaFileContract, FaGavel, FaHandshake, FaSitemap } from "react-icons/fa";

const Corporate = () => {
    const services = [
        {
            icon: <FaBuilding className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Entity Formation & Structuring",
            description: "Choose and structure the right business entity to align with tax, liability, and growth objectives.",
        },
        {
            icon: <FaFileContract className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Contract Strategy",
            description: "Draft, review, and negotiate commercial agreements that reduce risk and support operational clarity.",
        },
        {
            icon: <FaHandshake className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "M&A and Asset Transactions",
            description: "Guide buyers and sellers through due diligence, deal terms, documentation, and closing strategy.",
        },
        {
            icon: <FaSitemap className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Governance & Compliance",
            description: "Implement internal governance and ongoing compliance frameworks that support long-term stability.",
        },
    ];

    return (
        <main className="min-h-screen px-4 py-12 text-[var(--foreground)] md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="relative overflow-hidden rounded-3xl border border-[var(--setBorderColorGold)]/45 bg-gradient-to-br from-[var(--boxgradient-color)]/16 via-transparent to-[var(--primary-accent)]/10 p-8 shadow-xl md:p-12">
                    <span className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
                    <span className="pointer-events-none absolute -left-12 bottom-0 text-[10rem] opacity-5 select-none"><FaGavel /></span>

                    <div className="relative z-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/55 bg-[var(--primary-accent)]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--headder-text-color)]">
                                <FaBriefcase aria-hidden />
                                Business & Corporate Law
                            </div>

                            <h1 className="text-3xl font-bold leading-tight text-[var(--headder-text-color)] md:text-5xl">
                                Strategic Counsel for Business Growth and Protection
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
                                Building and operating a successful business requires more than a strong idea. From launch through growth,
                                acquisitions, financing, and succession, legal decisions shape outcomes at every stage.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/55 p-6 shadow-lg backdrop-blur-sm">
                            <h2 className="text-lg font-semibold text-[var(--headder-text-color)]">How We Help</h2>
                            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Clear, practical legal guidance tied to business goals
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Risk-aware contract and transaction strategy
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Long-term planning for ownership transitions and continuity
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-[var(--setBorderColorGold)]/35 bg-[var(--card)]/45 p-8 shadow-lg backdrop-blur-sm md:p-10">
                    <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] md:text-3xl">Corporate Services</h2>
                    <p className="mt-3 max-w-3xl text-[var(--muted-foreground)]">
                        Tailored legal support for entrepreneurs, closely held companies, and established businesses navigating growth, transactions, and governance.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="rounded-2xl border border-[var(--setBorderColorGold)]/30 bg-gradient-to-br from-[var(--boxgradient-color)]/10 via-transparent to-[var(--primary-accent)]/8 p-5 transition-colors hover:border-[var(--setBorderColorGold)]/55"
                            >
                                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-accent)]/18">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--headder-text-color)]">{service.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{service.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl border border-[var(--setBorderColorGold)]/40 bg-gradient-to-r from-[var(--boxgradient-color)]/15 via-transparent to-[var(--primary-accent)]/10 p-7 md:p-9">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">Planning a Transaction or Business Transition?</h2>
                            <p className="mt-2 max-w-3xl text-[var(--muted-foreground)]">
                                Whether you are launching a new venture, negotiating a deal, or preparing an ownership transition, we provide focused guidance to protect your business and support long-term success.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/55 bg-[var(--primary-accent)]/16 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/24"
                        >
                            Schedule Consultation
                            <FaArrowRight className="text-xs" aria-hidden />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Corporate;