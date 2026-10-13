
import { useEffect, useState } from "react";

import {
  getGitHubProfile,
  getRepositories,
  getRecentActivity,
} from "../features/home/services/githubService";

function getWeeklyActivity(events = []) {
  const now = new Date();
  const start = new Date(now);

  // Monday se current day tak
  start.setHours(0, 0, 0, 0);
  const day = start.getDay();
  start.setDate(start.getDate() - ((day + 6) % 7));

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const counts = days.map((name) => ({
    day: name,
    count: 0,
  }));

  events.forEach((event) => {
    const date = new Date(event.createdAt);

    if (date < start || date > now) return;

    const index = (date.getDay() + 6) % 7;
    counts[index].count += 1;
  });

  return counts;
}

export default function useGitHubDashboard() {
  const [data, setData] = useState({
    stats: {
      repositories: 0,
      commits: 0,
      technologies: 0,
    },
    dailyActivity: [],
    technologies: [],
    profile: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDashboard() {
      setLoading(true);
      setError("");

      try {
        const [profile, repositories, events] = await Promise.all([
          getGitHubProfile(),
          getRepositories(),
          getRecentActivity(),
        ]);

        const languages = [
          ...new Set(
            repositories
              .map((repo) => repo.language)
              .filter(Boolean)
          ),
        ];

        // Recent events mein available PushEvent commits.
        const recentCommits = events.reduce((total, event) => {
          if (event.type !== "PushEvent") return total;

          return total + (event.payload?.commits?.length ?? 0);
        }, 0);

        if (cancelled) return;

        setData({
          profile,
          stats: {
            repositories: profile.publicRepos,
            commits: recentCommits,
            technologies: languages.length,
          },
          dailyActivity: getWeeklyActivity(events),
          technologies: languages,
        });
      } catch (err) {
        if (!cancelled) {
          setError(err.message || "GitHub data load nahi ho saka.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      cancelled = true;
    };
  }, []);

  return { ...data, loading, error };
}
