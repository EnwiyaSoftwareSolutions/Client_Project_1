"use client"
import { useEffect } from "react"
import ContactForm from "../components/contact-form"
import { OfficeInfo, useOfficeInfoStore } from "../../store/useOfficeInfoStore"


const ZERO_WIDTH = "\u200B"

const withHiddenSeparators = (value: string) => value.split("").join(ZERO_WIDTH)
const keepDialableChars = (value: string) => value.replace(/[^\d+]/g, "")

function SafeEmail({ email }: { email?: string }) {
    if (!email) {
        return <span className="text-[var(--muted-foreground)]">Email unavailable</span>
    }

    const [local, domain] = email.split("@")
    if (!local || !domain) {
        return <span className="text-[var(--muted-foreground)]">{email}</span>
    }

    const obfuscatedDisplay = withHiddenSeparators(`${local}@${domain}`)

    return (
        <button
            type="button"
            onClick={() => {
                const actualEmail = `${local}@${domain}`
                window.location.href = `mailto:${actualEmail}`
            }}
            className="text-left break-all text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary-accent)]"
            aria-label="Send us an email"
        >
            {obfuscatedDisplay}
        </button>
    )
}

function SafePhone({ phone }: { phone?: string }) {
    if (!phone) {
        return <span className="text-[var(--muted-foreground)]">Phone unavailable</span>
    }

    const dialValue = keepDialableChars(phone)
    const obfuscatedDisplay = withHiddenSeparators(phone)

    return (
        <button
            type="button"
            onClick={() => {
                if (!dialValue) return
                window.location.href = `tel:${dialValue}`
            }}
            className="text-left text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary-accent)]"
            aria-label="Call us"
        >
            {obfuscatedDisplay}
        </button>
    )
}

export default function ContactPage() {
    const officeInfo = useOfficeInfoStore((state) => state.officeInfo)
    const fetchOfficeInfo = useOfficeInfoStore((state) => state.fetchOfficeInfo)

    useEffect(() => {
        void fetchOfficeInfo()
    }, [fetchOfficeInfo])

    const officeList: OfficeInfo[] = officeInfo?.documents ?? []

    const preferredOffice = officeList.find((office) => {
        const rawName = office.office_name ?? office.name ?? ""
        return rawName.trim().toLowerCase() === "enwiya law firm"
    })

    const displayOffices = preferredOffice ? [preferredOffice] : officeList.slice(0, 1)


    return (
        <main className="min-h-screen">
            <div className="container mx-auto max-w-6xl px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl text-[var(--text-headers-black)]  font-(--font-geist-sans) mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Get in touch with Enwiya Law Firm for expert legal advice, consultations, or any inquiries. 
                        Fill out the form below, and our team will respond promptly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-[var(--text-headers-black)] mb-4">Get in Touch</h2>
                            <p className="text-[var(--muted-foreground)]">
                                We&apos;re here to help with all your legal needs. Reach out today for a consultation.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-[var(--headder-text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <SafeEmail email={displayOffices[0]?.office_email} />
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-[var(--headder-text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <SafePhone phone={displayOffices[0]?.office_phone_number} />
                            </div>
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-[var(--headder-text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="text-[var(--muted-foreground)]">{displayOffices[0]?.office_address}</span>
                               
                            </div>
                              <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-[var(--headder-text-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-[var(--muted-foreground)]">{displayOffices[0]?.mailing_address}</span>
                               
                            </div>
                             
                        </div>
                    </div>

                    <div className="bg-[var(--primary-accent)]/20 rounded-lg shadow-lg p-8 border border-[var(--headder-text-color)]">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    )
}