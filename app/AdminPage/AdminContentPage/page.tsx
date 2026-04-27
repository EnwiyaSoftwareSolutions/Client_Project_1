"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { userRegister } from "../../../store/useUserRegisterStore"
import { useMessageStore } from "../../../store/useMessageStore"
import Dashboard from '../../components/Dashboard/dashboard'

// ── Icons ─────────────────────────────────────────────────────────────────────
const Icon = ({ d }: { d: string }) => (
  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d={d} />
  </svg>
)

const ICONS = {
  dashboard: "M3 13h8V3H3v10zM13 21h8V11h-8v10zM13 3v6h8V3h-8zM3 21h8v-6H3v6z",
  messages:  "M21 6h-18v12h4v3l3-3h11V6z",
  users:     "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
  settings:  "M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.27 17.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.27-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.6 2.27l.06.06c.5.5 1.12.72 1.82.33a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 17.73 6.1l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
}

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: ICONS.dashboard },
  { id: "messages",  label: "Messages",  icon: ICONS.messages  },
  { id: "users",     label: "Users",     icon: ICONS.users     },
  { id: "settings",  label: "Settings",  icon: ICONS.settings  },
]

// ── Panels ────────────────────────────────────────────────────────────────────
function DashboardPanel() {
  const messages  = useMessageStore((s) => s.messages)
  const registers = userRegister((s) => s.register)

  const stats = [
    { label: "Total Messages",  value: messages.length  },
    { label: "Registered Users", value: registers.length },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--headder-text-color)] mb-1">Dashboard</h2>
      <p className="text-sm text-[var(--muted-foreground)] mb-8">Overview of your firm's activity.</p>
      <Dashboard />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[var(--setBorderColorGold)]/40 bg-gradient-to-br from-[var(--headder-text-color)]/10 to-transparent p-6 shadow-md">
            <p className="text-xs uppercase tracking-widest text-[var(--muted-foreground)] mb-2">{s.label}</p>
            <p className="text-4xl font-bold text-[var(--headder-text-color)]">{s.value}</p>
          </div>
        ))}
      </div>
      {/* <Dashboard /> */}
    </div>
  )
}

function MessagesPanel() {
  const messages = useMessageStore((s) => s.messages)

  if (messages.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-[var(--headder-text-color)] mb-6">Messages</h2>
        <p className="text-[var(--muted-foreground)]">No messages yet.</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--headder-text-color)] mb-6">Messages</h2>
      <div className="overflow-x-auto rounded-2xl border border-[var(--setBorderColorGold)]/30 shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="bg-[var(--headder-text-color)]/10 text-[var(--headder-text-color)] text-xs uppercase tracking-wider">
            <tr>
              {["Name", "Email", "Phone", "Subject", "Message"].map((h) => (
                <th key={h} className="px-5 py-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {messages.map((m, i) => (
              <tr key={i} className={`border-t border-[var(--setBorderColorGold)]/20 ${i % 2 === 0 ? "" : "bg-[var(--headder-text-color)]/5"}`}>
                <td className="px-5 py-3 text-[var(--foreground)]">{m.name}</td>
                <td className="px-5 py-3 text-[var(--muted-foreground)]">{m.email}</td>
                <td className="px-5 py-3 text-[var(--muted-foreground)]">{m.phone || "—"}</td>
                <td className="px-5 py-3 text-[var(--muted-foreground)]">{m.subject}</td>
                <td className="px-5 py-3 text-[var(--muted-foreground)] max-w-sm truncate">{m.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function UsersPanel() {
  return <Dashboard />
}

function SettingsPanel() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--headder-text-color)] mb-4">Settings</h2>
      <p className="text-[var(--muted-foreground)]">Settings configuration coming soon.</p>
    </div>
  )
}

const PANELS: Record<string, React.ComponentType> = {
  dashboard: DashboardPanel,
  messages: MessagesPanel,
  users: UsersPanel,
  settings: SettingsPanel,
}

// ── Page ─────────────────────────────────────────────────────────────────────
const AdminContentPage: React.FC = () => {
  const [activePanel, setActivePanel] = useState("dashboard")
  const ActivePanel = PANELS[activePanel] ?? DashboardPanel

  return (
    <div className="min-h-screen flex bg-[var(--background)] text-[var(--foreground)]">

      {/* ── Sidebar ────────────────────────────────────────────────────── */}
      <aside className="w-60 flex-shrink-0 flex flex-col bg-[var(--foreground)] text-white border-r border-white/10 shadow-2xl">
        {/* Brand bar */}
        <div className="px-6 py-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Admin</p>
          <p className="text-base font-bold text-[var(--boxgradient-color)]">Enwiya Law Firm</p>
        </div>

        <nav className="flex-1 py-6 px-3 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activePanel === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActivePanel(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left ${
                  isActive
                    ? "bg-[var(--primary-accent)]/20 text-[var(--boxgradient-color)]"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon d={item.icon} />
                {item.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[var(--primary-accent)]" />
                )}
              </button>
            )
          })}
        </nav>

        <div className="px-6 py-4 border-t border-white/10">
          <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* ── Main ───────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col min-h-screen overflow-auto">
        {/* Top bar */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-[var(--setBorderColorGold)]/30 bg-[var(--background)]/80 backdrop-blur sticky top-0 z-10">
          <p className="text-sm text-[var(--muted-foreground)] capitalize">
            <span className="text-[var(--headder-text-color)] font-semibold">{activePanel}</span>
          </p>
          <span className="text-xs text-[var(--muted-foreground)]/60">Enwiya Admin Portal</span>
        </header>

        <div className="flex-1 p-8">
          <ActivePanel />
        </div>
      </main>
    </div>
  )
}

export default AdminContentPage
