
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import ActivityChart from "./ActivityChart";
import TechStack from "./TechStack";

export default function DeveloperDashboard({
  stats = {},
  dailyActivity = [],
  technologies,
  loading = false,
}) {
  return (
    <section
      aria-label="Developer dashboard"
      className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <DashboardHeader />

      <DashboardStats
        repositories={stats.repositories ?? 0}
        commits={stats.commits ?? 0}
        technologies={stats.technologies ?? 0}
        loading={loading}
      />

      <ActivityChart
        dailyActivity={dailyActivity}
        loading={loading}
      />

      <TechStack technologies={technologies} />
    </section>
  );
}
