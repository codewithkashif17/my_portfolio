import { useCallback, useEffect, useRef, useState } from "react";

import {
  getGitHubProfile,
  getRepositories,
  getCommitActivity,
} from "../features/home/services/githubService";

const POLL_INTERVAL_MS = 60_000;
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getWeekStart() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7)); // Monday
  return start;
}

function getWeeklyActivity(commits = [], weekStart) {
  const counts = DAYS.map((day) => ({ day, count: 0 }));
  const now = new Date();

  commits.forEach((commit) => {
    const date = new Date(commit.date);
    if (Number.isNaN(date) || date < weekStart || date > now) return;
    counts[(date.getDay() + 6) % 7].count += 1;
  });

  return counts;
}

const INITIAL = {
  stats: { repositories: 0, commits: 0, technologies: 0 },
  dailyActivity: [],
  technologies: [],
  profile: null,
};

export default function useGitHubDashboard() {
  const [data, setData] = useState(INITIAL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const mounted = useRef(true);
  const inFlight = useRef(false);
  const hasData = useRef(false);

  const load = useCallback(async ({ silent = false } = {}) => {
    if (inFlight.current) return;
    inFlight.current = true;

    if (silent) setIsRefreshing(true);
    else setLoading(true);

    try {
      const weekStart = getWeekStart();

      const [profile, repositories] = await Promise.all([
        getGitHubProfile(),
        getRepositories(),
      ]);

      const commits = await getCommitActivity(
        repositories,
        weekStart.toISOString(),
      );

      if (!mounted.current) return;

      const technologies = [
        ...new Set(repositories.map((r) => r.language).filter(Boolean)),
      ];

      setData({
        profile,
        stats: {
          repositories: profile.publicRepos,
          commits: commits.length, // commits this week
          technologies: technologies.length,
        },
        dailyActivity: getWeeklyActivity(commits, weekStart),
        technologies,
      });

      hasData.current = true;
      setError("");
      setLastUpdated(new Date());
    } catch (err) {
      if (mounted.current && !hasData.current) {
        setError(err.message || "Unable to load GitHub data.");
      }
    } finally {
      inFlight.current = false;
      if (mounted.current) {
        setLoading(false);
        setIsRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    load();

    const timer = setInterval(() => {
      if (!document.hidden) load({ silent: true });
    }, POLL_INTERVAL_MS);

    const onVisible = () => {
      if (!document.hidden) load({ silent: true });
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      mounted.current = false;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, [load]);

  const refresh = useCallback(() => load({ silent: true }), [load]);

  return { ...data, loading, error, lastUpdated, isRefreshing, refresh };
}