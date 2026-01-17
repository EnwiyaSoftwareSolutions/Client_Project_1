import { Card, CardContent } from "../components/ui/card"


export default function AchievementsPage() {
return (
<section className="py-20 max-w-5xl">
<h2 className="text-4xl font-bold mb-8">Achievements</h2>
<div className="grid md:grid-cols-3 gap-6">
<Card><CardContent className="p-6">50+ High‑Impact Cases Won</CardContent></Card>
<Card><CardContent className="p-6">International Recognition</CardContent></Card>
<Card><CardContent className="p-6">Trusted by Government Bodies</CardContent></Card>
</div>
</section>
)
}