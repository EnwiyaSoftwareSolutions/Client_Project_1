import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaGlobeAmericas, FaPassport, FaUserShield, FaUsers, FaVoteYea } from "react-icons/fa";

const Immigration = () => {
    const services = [
        {
            icon: <FaPassport className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Family and Fiancé Petitions",
            description: "Prepare and file family-based petitions with a strategy focused on accuracy, timing, and strong supporting evidence.",
        },
        {
            icon: <FaUsers className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Adjustment of Status",
            description: "Guide applicants through adjustment filings, document preparation, interview readiness, and response planning.",
        },
        {
            icon: <FaVoteYea className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "Naturalization and Citizenship",
            description: "Support lawful permanent residents through eligibility review, filing, interview preparation, and final adjudication.",
        },
        {
            icon: <FaUserShield className="text-lg text-[var(--headder-text-color)]" aria-hidden />,
            title: "USCIS Strategy and Advising",
            description: "Provide practical legal guidance for USCIS submissions, interview preparation, and case-specific risk mitigation.",
        },
    ];

    return (
        <main className="min-h-screen px-4 py-12 text-[var(--foreground)] md:px-6">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="relative overflow-hidden rounded-3xl border border-[var(--setBorderColorGold)]/45 bg-gradient-to-br from-[var(--boxgradient-color)]/16 via-transparent to-[var(--primary-accent)]/10 p-8 shadow-xl md:p-12">
                    <span className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
                    <span className="pointer-events-none absolute -left-12 bottom-0 text-[10rem] opacity-5 select-none"><FaGlobeAmericas /></span>

                    <div className="relative z-10 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
                        <div>
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/55 bg-[var(--primary-accent)]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--headder-text-color)]">
                                <FaGlobeAmericas aria-hidden />
                                Immigration Law
                            </div>

                            <h1 className="text-3xl font-bold leading-tight text-[var(--headder-text-color)] md:text-5xl">
                                Confident Guidance Through a Complex Immigration Process
                            </h1>

                            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted-foreground)] md:text-lg">
                                Immigration matters can be life-changing and time-sensitive. We provide clear legal direction and strategic planning so individuals and families can move forward with confidence.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/55 p-6 shadow-lg backdrop-blur-sm">
                            <h2 className="text-lg font-semibold text-[var(--headder-text-color)]">How We Help</h2>
                            <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)]">
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Personalized case strategy tailored to your goals
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Thorough preparation for filings and interviews
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheckCircle className="mt-0.5 text-[var(--headder-text-color)]" aria-hidden />
                                    Clear communication at each stage of the process
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-[var(--setBorderColorGold)]/35 bg-[var(--card)]/45 p-8 shadow-lg backdrop-blur-sm md:p-10">
                    <h2 className="text-2xl font-semibold text-[var(--headder-text-color)] md:text-3xl">Immigration Services</h2>
                    <p className="mt-3 max-w-3xl text-[var(--muted-foreground)]">
                        Practical and diligent immigration representation for families and individuals navigating petitions, status changes, and citizenship pathways.
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
                            <h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">Need Help With an Immigration Matter?</h2>
                            <p className="mt-2 max-w-3xl text-[var(--muted-foreground)]">
                                Whether you are filing your first petition or responding to a critical request, we offer steady legal support focused on clarity, preparation, and results.
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

export default Immigration;