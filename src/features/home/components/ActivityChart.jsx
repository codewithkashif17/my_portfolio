
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function ActivityChart({
  dailyActivity = [],
  loading = false,
}) {
  const activityMap = new Map(
    dailyActivity.map((day) => [day.day, day.count])
  );

  const chartData = WEEK_DAYS.map((day) => ({
    day,
    count: Math.max(0, Number(activityMap.get(day) ?? 0)),
  }));

  const maxCount = Math.max(
    ...chartData.map((item) => item.count),
    1
  );

  const totalActivity = chartData.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <section className="border-t border-white/10 px-5 py-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-on-surface">
            Weekly Activity
          </h3>

          <p className="mt-1 text-xs text-on-surface-variant">
            Recent public GitHub events
          </p>
        </div>

        <p className="text-sm font-semibold text-primary">
          {loading ? "..." : totalActivity}
          <span className="ml-1 text-xs font-normal text-on-surface-variant">
            events
          </span>
        </p>
      </div>

      <div
        className="mt-6 grid grid-cols-7 items-end gap-2"
        role="img"
        aria-label={
          loading
            ? "Loading weekly GitHub activity"
            : `Weekly GitHub activity: ${totalActivity} events`
        }
      >
        {chartData.map((item) => {
          const barHeight = (item.count / maxCount) * 100;

          return (
            <div
              key={item.day}
              className="flex min-w-0 flex-col items-center gap-2"
            >
              <span className="text-[10px] text-on-surface-variant">
                {loading ? "–" : item.count}
              </span>

              <div className="flex h-24 w-full items-end overflow-hidden rounded-md bg-white/5">
                <div
                  className="w-full rounded-md bg-primary transition-all duration-500"
                  style={{
                    height: loading ? "0%" : `${barHeight}%`,
                    minHeight:
                      !loading && item.count > 0 ? "4px" : "0",
                  }}
                />
              </div>

              <span className="text-[10px] text-on-surface-variant sm:text-xs">
                {item.day}
              </span>
            </div>
          );
        })}
      </div>

      {!loading && totalActivity === 0 && (
        <p className="mt-3 text-xs text-on-surface-variant">
          No public events found for this period.
        </p>
      )}
    </section>
  );
}
