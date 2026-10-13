export const DEVELOPER_STATUS = {
  status: "online",
  statusLabel: "Currently Active",
  message: "Building something new",
  location: "Remote",
  lastActive: "Just now",
};

export const TODAY_OVERVIEW = {
  codingHours: 4.5,
  studyHours: 2.5,
  githubCommits: 8,
  leetcodeSolved: 3,
};

export const WEEKLY_OVERVIEW = {
  codingHours: 27.4,
  studyHours: 14.2,
  githubCommits: 42,
  leetcodeSolved: 18,
};

export const CURRENT_PROJECT = {
  name: "Developer Activity Dashboard",
  description:
    "A public developer command center that tracks coding, GitHub activity, LeetCode progress, study sessions, and project development.",
  version: "v0.1.0",
  status: "In Development",
  progress: 68,
  startedAt: "2026-09-20",
  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
};

export const GITHUB_STATS = {
  username: "codewithkashif17",

  today: {
    commits: 8,
    pullRequests: 1,
    issues: 0,
  },

  thisWeek: {
    commits: 42,
    pullRequests: 3,
    repositories: 4,
  },

  thisMonth: {
    commits: 126,
    pullRequests: 9,
    repositories: 7,
  },

  total: {
    repositories: 18,
    contributions: 642,
  },

  lastActivity: "12 minutes ago",
};

export const LEETCODE_STATS = {
  username: "kashifmehmood",

  totalSolved: 127,

  difficulty: {
    easy: 61,
    medium: 54,
    hard: 12,
  },

  today: {
    solved: 3,
    easy: 1,
    medium: 2,
    hard: 0,
  },

  streak: 7,

  thisWeek: {
    solved: 18,
  },

  thisMonth: {
    solved: 47,
  },

  acceptanceRate: 68.4,
};

export const LEARNING_STATS = {
  today: {
    hours: 2.5,
    topics: ["React Architecture", "Node.js", "Software Engineering"],
  },

  thisWeek: {
    hours: 14.2,
  },

  thisMonth: {
    hours: 52.6,
  },

  currentTopic: "Advanced React Architecture",
  currentCourse: "React & Full-Stack Development",
};

export const DEVELOPMENT_STATS = {
  today: {
    codingHours: 4.5,
    activeMinutes: 270,
  },

  thisWeek: {
    codingHours: 27.4,
    activeMinutes: 1644,
  },

  thisMonth: {
    codingHours: 96.8,
    activeMinutes: 5808,
  },
};

export const ACTIVITY_CHART = [
  {
    date: "Sep 21",
    coding: 3.2,
    study: 1.5,
    commits: 5,
    solved: 2,
  },
  {
    date: "Sep 22",
    coding: 4.1,
    study: 2.0,
    commits: 7,
    solved: 3,
  },
  {
    date: "Sep 23",
    coding: 2.8,
    study: 1.8,
    commits: 4,
    solved: 2,
  },
  {
    date: "Sep 24",
    coding: 5.3,
    study: 2.4,
    commits: 9,
    solved: 4,
  },
  {
    date: "Sep 25",
    coding: 3.9,
    study: 1.9,
    commits: 6,
    solved: 4,
  },
  {
    date: "Sep 26",
    coding: 5.1,
    study: 2.1,
    commits: 11,
    solved: 3,
  },
  {
    date: "Sep 27",
    coding: 4.5,
    study: 2.5,
    commits: 8,
    solved: 3,
  },
];

export const RECENT_ACTIVITY = [
  {
    id: 1,
    type: "github",
    title: "Updated portfolio architecture",
    description:
      "Refactored portfolio structure and introduced feature-based organization.",
    time: "12 minutes ago",
    date: "2026-09-27",
  },

  {
    id: 2,
    type: "leetcode",
    title: "Solved 3 LeetCode problems",
    description: "Completed 1 Easy and 2 Medium algorithm problems.",
    time: "1 hour ago",
    date: "2026-09-27",
  },

  {
    id: 3,
    type: "study",
    title: "Studied React architecture",
    description:
      "Reviewed scalable component and feature-based project architecture.",
    time: "2 hours ago",
    date: "2026-09-27",
  },

  {
    id: 4,
    type: "project",
    title: "Developer Dashboard started",
    description: "Started designing the public developer activity system.",
    time: "Yesterday",
    date: "2026-09-26",
  },

  {
    id: 5,
    type: "github",
    title: "Portfolio deployment updated",
    description: "Pushed the latest production changes to GitHub and Vercel.",
    time: "Yesterday",
    date: "2026-09-26",
  },
];

export const DASHBOARD_META = {
  title: "Developer Command Center",
  subtitle:
    "A transparent view of my development, learning, coding, and project activity.",
  timezone: "PKT",
  lastUpdated: "Just now",
};
