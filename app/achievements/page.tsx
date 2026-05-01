
import AchievementCard from "../components/achievement-card";
import achievements from "../data/achievements";
import { FaGavel, FaGlobe, FaShieldAlt } from "react-icons/fa";

const iconMap = {
	gavel: <FaGavel />,
	globe: <FaGlobe />,
	shield: <FaShieldAlt />,
};

export default function AchievementsPage() {
	return (
		<section className="py-20 max-w-5xl mx-auto">
			<h2 className="text-4xl font-bold mb-8 text-center">Achievements</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{achievements.map((achievement) => (
					<AchievementCard
						key={achievement.id}
						icon={iconMap[achievement.icon as keyof typeof iconMap]}
						title={achievement.title}
						description={achievement.description}
					/>
				))}
			</div>
		</section>
	);
}