"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../../components/ui/button"

const DashboardIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-6H3v6z" fill="currentColor" />
    </svg>
)

const ContentIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" fill="currentColor" />
    </svg>
)

const MediaIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2z" fill="currentColor" />
    </svg>
)

const MessagesIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M21 6h-18v12h4v3l3-3h11V6z" fill="currentColor" />
    </svg>
)

const SettingsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.27 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.27-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.6 2.27l.06.06c.5.5 1.12.72 1.82.33.62-.36 1.32-.36 1.94 0 .7.39 1.32.17 1.82-.33l.06-.06A2 2 0 1 1 17.73 6.1l-.06.06c-.39.5-.17 1.12.33 1.82.36.62.36 1.32 0 1.94-.39.7-.17 1.32.33 1.82l.06.06c.86.86.86 2.25 0 3.11z" fill="currentColor" />
    </svg>
)

const navItems = [
    { name: "Dashboard", href: "/AdminPage/dashboard", Icon: DashboardIcon },
    { name: "Content", href: "/AdminPage/content", Icon: ContentIcon },
    { name: "Media", href: "/AdminPage/media", Icon: MediaIcon },
    { name: "Messages", href: "/AdminPage/messages", Icon: MessagesIcon },
    { name: "Settings", href: "/AdminPage/settings", Icon: SettingsIcon },
]

const AdminContentPage: React.FC = () => {
    const pathname = usePathname() || ""

    return (
        <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">
            <aside className="w-64 bg-[var(--card)]/95 border-r border-[var(--border)] p-4 theme-scrollbar">
                <h2 className="text-lg font-semibold mb-4 text-[var(--primary-accent)]">
                    Admin Menu
                </h2>

                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href)

                        return (
                            <Button
                                key={item.href}
                                asChild
                                className={`w-full justify-start gap-3 ${
                                    isActive
                                        ? "text-[var(--primary-accent)] bg-[var(--card)]/5"
                                        : "text-[var(--muted-foreground)] hover:bg-[var(--card)]/5"
                                }`}
                            >
                                <Link href={item.href} className="flex w-full items-center">
                                    <item.Icon className={isActive ? "h-5 w-5 text-[var(--headder-text-color)]" : "h-5 w-5 text-[var(--muted-foreground)]"} />
                                    <span className="ml-2">{item.name}</span>
                                </Link>
                            </Button>
                        )
                    })}
                </nav>
            </aside>

            <main className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-2 text-[var(--primary-accent)]">
                    Admin Content
                </h1>
                <p className="text-[var(--muted-foreground)]">Select an option from the side nav.</p>
            </main>
        </div>
    )
}

export default AdminContentPage