import { useEffect, useState } from "react";

import "./Hero.css";
import Container from "../../components/layout/Container";
import HeroIntro from "./components/HeroIntro";
import HeroActions from "./components/HeroActions";
// import HeroSocialLinks from "./components/HeroSocialLinks";
import DeveloperDashboard from "./components/DeveloperDashboard";

import useGitHubDashboard from "../../hooks/useGitHubDashboard";

function timeAgo(date, now) {
  if (!date) return "";
  const seconds = Math.max(0, Math.floor((now - date) / 1000));
  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  return minutes < 60 ? `${minutes}m ago` : `${Math.floor(minutes / 60)}h ago`;
}

function LiveBadge({ lastUpdated, isRefreshing, onRefresh }) {
  const [now, setNow] = useState(() => new Date());

  // Re-render every 10s so "Updated Xs ago" stays accurate
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(id);
  }, []);

  if (!lastUpdated) return null;

  return (
    <button
      type="button"
      onClick={onRefresh}
      title="Refresh GitHub data"
      className="mb-3 ml-auto flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-[11px] font-medium text-on-surface-variant transition-colors hover:border-primary/30 hover:text-primary"
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 ${
            isRefreshing ? "animate-ping" : ""
          }`}
        />
        <span className="relative h-2 w-2 rounded-full bg-green-400" />
      </span>
      Live · {isRefreshing ? "Updating…" : `Updated ${timeAgo(lastUpdated, now)}`}
    </button>
  );
}

export default function Hero() {
  const {
    stats,
    dailyActivity,
    technologies,
    loading,
    error,
    lastUpdated,
    isRefreshing,
    refresh,
  } = useGitHubDashboard();

  return (
    <section
      id="home"
      className="hero-section relative py-16 sm:py-20 lg:py-28"
    >
      <div className="hero-glow" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <HeroIntro />
            <HeroActions />
            {/* <HeroSocialLinks /> */}
          </div>

          <div className="hero-dashboard--floating">
            {error ? (
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
                Unable to load GitHub data: {error}
              </div>
            ) : (
              <>
                <div className="flex">
                  <LiveBadge
                    lastUpdated={lastUpdated}
                    isRefreshing={isRefreshing}
                    onRefresh={refresh}
                  />
                </div>
                <DeveloperDashboard
                  stats={stats}
                  dailyActivity={dailyActivity}
                  technologies={technologies}
                  loading={loading}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}