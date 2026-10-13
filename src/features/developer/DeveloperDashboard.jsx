import DeveloperHero from "./components/DeveloperHero";
import LiveStatus from "./components/LiveStatus";
import GitHubStats from "./components/GitHubStats";
import LeetCodeStats from "./components/LeetCodeStats";
import LearningStats from "./components/LearningStats";
import CurrentProject from "./components/CurrentProject";
import ActivityChart from "./components/ActivityChart";
import ActivityTimeline from "./components/ActivityTimeline";

export default function DeveloperDashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[140px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[500px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      <main className="relative z-10">
        {/* Hero */}
        <DeveloperHero />

        {/* Dashboard Content */}
        <section
          className="
            mx-auto
            max-w-7xl
            px-4
            pb-20
            sm:px-6
            lg:px-8
          "
        >
          {/* Live Status + Current Project */}
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            <LiveStatus />

            <CurrentProject />
          </div>

          {/* GitHub + LeetCode */}
          <div
            className="
              mt-6
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            <GitHubStats />

            <LeetCodeStats />
          </div>

          {/* Learning + Development */}
          <div
            className="
              mt-6
              grid
              gap-6
              lg:grid-cols-2
            "
          >
            <LearningStats />

            <div
              className="
                rounded-3xl
                border
                border-primary/10
                bg-surface-container-low/60
                p-6
                backdrop-blur-xl
              "
            >
              <div className="mb-5">
                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-primary
                  "
                >
                  Development
                </span>

                <h2
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-bold
                    text-on-surface
                  "
                >
                  Coding Activity
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Metric label="Today" value="4.5h" />

                <Metric label="This Week" value="27.4h" />

                <Metric label="This Month" value="96.8h" />

                <Metric label="Active Time" value="270m" />
              </div>
            </div>
          </div>

          {/* Activity Chart */}
          <div className="mt-6">
            <ActivityChart />
          </div>

          {/* Activity Timeline */}
          <div className="mt-6">
            <ActivityTimeline />
          </div>
        </section>
      </main>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-primary/10
        bg-background/40
        p-4
        transition-all
        duration-300
        hover:border-primary/30
        hover:bg-primary/5
      "
    >
      <p className="text-xs text-on-surface-variant">{label}</p>

      <p
        className="
          mt-1
          font-serif
          text-2xl
          font-bold
          text-primary
        "
      >
        {value}
      </p>
    </div>
  );
}
