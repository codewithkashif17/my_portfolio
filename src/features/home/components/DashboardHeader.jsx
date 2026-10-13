
export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
      <div>
        <p className="text-sm font-semibold text-on-surface">
          Developer Dashboard
        </p>

        <p className="mt-1 text-xs text-on-surface-variant">
          Projects & activity overview
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
        <span
          className="h-2 w-2 rounded-full bg-emerald-400"
          aria-hidden="true"
        />

        <span className="text-xs font-medium text-emerald-400">
          Connected
        </span>
      </div>
    </div>
  );
}
