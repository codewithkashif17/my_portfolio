
const STAT_CONFIG = [
  {
    key: "repositories",
    label: "Public Repos",
    icon: "⌘",
  },
  {
    key: "commits",
    label: "Recent Commits",
    icon: "↗",
  },
  {
    key: "technologies",
    label: "Languages",
    icon: "</>",
  },
];

export default function DashboardStats({
  repositories = 0,
  commits = 0,
  technologies = 0,
  loading = false,
}) {
  const values = {
    repositories,
    commits,
    technologies,
  };

  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {STAT_CONFIG.map((stat) => (
        <div
          key={stat.key}
          className="min-w-0 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06] sm:p-4"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-on-surface-variant">
              {stat.label}
            </span>

            <span
              className="text-sm text-primary"
              aria-hidden="true"
            >
              {stat.icon}
            </span>
          </div>

          <p
            className="mt-3 text-2xl font-bold text-on-surface sm:text-3xl"
            aria-live="polite"
          >
            {loading ? "..." : values[stat.key].toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}