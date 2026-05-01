"use client"

import { useEffect, useMemo, useState } from "react"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table"
import { userRegister } from "../../../store/useUserRegisterStore"

type SortKey = "full_name" | "user_email" | "user_phonenumber" | "is_active" | "is_client" | "timestamp"
type SortDirection = "asc" | "desc"

const Dashboard = () => {
	const users = userRegister((state) => state.register)
	const isLoading = userRegister((state) => state.isLoading)
	const isError = userRegister((state) => state.isError)
	const fetchRegister = userRegister((state) => state.fetchRegister)
	const [sortKey, setSortKey] = useState<SortKey>("full_name")
	const [sortDirection, setSortDirection] = useState<SortDirection>("asc")
	console.log("Dashboard users:", users)

	useEffect(() => {
		void fetchRegister()
	}, [fetchRegister])

	const toggleSort = (key: SortKey) => {
		if (sortKey === key) {
			setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))
			return
		}

		setSortKey(key)
		setSortDirection("asc")
	}

	const getTimestamp = (user: (typeof users)[number]) => user.timestamp ?? user.created_at ?? ""

	const formatTimestamp = (value: string) => {
		if (!value) return "—"
		const parsed = new Date(value)
		if (Number.isNaN(parsed.getTime())) return value
		return parsed.toLocaleString()
	}

	const sortedUsers = useMemo(() => {
		const sorted = [...users]

		sorted.sort((a, b) => {
			let comparison = 0

			if (sortKey === "is_active" || sortKey === "is_client") {
				comparison = Number(Boolean(a[sortKey])) - Number(Boolean(b[sortKey]))
			} else if (sortKey === "timestamp") {
				const aTime = new Date(getTimestamp(a)).getTime() || 0
				const bTime = new Date(getTimestamp(b)).getTime() || 0
				comparison = aTime - bTime
			} else {
				comparison = (a[sortKey] ?? "").localeCompare(b[sortKey] ?? "", undefined, { sensitivity: "base" })
			}

			return sortDirection === "asc" ? comparison : -comparison
		})

		return sorted
	}, [users, sortKey, sortDirection])

	const sortIndicator = (key: SortKey) => {
		if (sortKey !== key) return ""
		return sortDirection === "asc" ? " ▲" : " ▼"
	}

	return (
		<section className="rounded-xl border border-[var(--setBorderColorGold)]/35 bg-[var(--card)]/70 p-6 shadow-lg">
			<div className="mb-5 flex items-end justify-between gap-4">
				<div>
					<h2 className="text-2xl font-semibold text-[var(--headder-text-color)]">Registered Users</h2>
					<p className="text-sm text-[var(--muted-foreground)]">Data loaded from the `fetch_users` endpoint.</p>
				</div>
				<span className="rounded-full border border-[var(--setBorderColorGold)]/40 bg-[var(--primary-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--headder-text-color)]">
					{users.length} total
				</span>
			</div>

			{isLoading && (
				<p className="text-sm text-[var(--muted-foreground)]">Loading users...</p>
			)}

			{isError && !isLoading && (
				<p className="text-sm text-red-500">Failed to load users. Please try again.</p>
			)}

			{!isLoading && !isError && users.length === 0 && (
				<p className="text-sm text-[var(--muted-foreground)]">No registered users found.</p>
			)}

			{!isLoading && !isError && users.length > 0 && (
				<Table>
					<TableCaption>Latest user registrations</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-14">#</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("full_name")} className="text-left font-semibold hover:underline">
									Full Name{sortIndicator("full_name")}
								</button>
							</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("user_email")} className="text-left font-semibold hover:underline">
									Email{sortIndicator("user_email")}
								</button>
							</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("user_phonenumber")} className="text-left font-semibold hover:underline">
									Phone Number{sortIndicator("user_phonenumber")}
								</button>
							</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("is_active")} className="text-left font-semibold hover:underline">
									Is Active{sortIndicator("is_active")}
								</button>
							</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("is_client")} className="text-left font-semibold hover:underline">
									Is Client{sortIndicator("is_client")}
								</button>
							</TableHead>
							<TableHead>
								<button type="button" onClick={() => toggleSort("timestamp")} className="text-left font-semibold hover:underline">
									Timestamp{sortIndicator("timestamp")}
								</button>
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{sortedUsers.map((user, index) => (
							
							<TableRow key={`${user.user_email}-${index}`}>
								<TableCell className="text-[var(--muted-foreground)]">{index + 1}</TableCell>
								<TableCell className="font-medium text-[var(--foreground)]">{user.full_name}</TableCell>
								<TableCell className="text-[var(--muted-foreground)]">{user.user_email}</TableCell>
								<TableCell className="text-[var(--muted-foreground)]">{user.user_phonenumber || "—"}</TableCell>
								<TableCell className="text-[var(--muted-foreground)]">{user.is_active ? "Yes" : "No"}</TableCell>
								<TableCell className="text-[var(--muted-foreground)]">{user.is_client ? "Yes" : "No"}</TableCell>
								<TableCell className="text-[var(--muted-foreground)]">{formatTimestamp(getTimestamp(user))}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			)}
		</section>
	)
}

export default Dashboard
