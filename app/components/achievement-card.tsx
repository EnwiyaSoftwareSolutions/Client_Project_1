
import { Card, CardContent } from "../components/ui/card";
import { ReactNode } from "react";

interface AchievementCardProps {
	icon?: ReactNode;
	title: string;
	description: string;
}

export default function AchievementCard({ icon, title, description }: AchievementCardProps) {
	return (
		<Card
			className="shadow-lg border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-secondary)] transition-all"
		>
			<CardContent className="flex flex-col items-center p-6">
				{icon && (
					<div className="mb-4 text-4xl text-[var(--color-primary)]">{icon}</div>
				)}
				<h3 className="text-xl font-semibold mb-2 text-center text-[var(--color-card-foreground)]">
					{title}
				</h3>
				<p className="text-[var(--color-muted-foreground)] text-center text-sm">
					{description}
				</p>
			</CardContent>
		</Card>
	);
}
