import axios from "axios";

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = "codewithkashif17";

const githubClient = axios.create({
  baseURL: GITHUB_API,
  headers: { Accept: "application/vnd.github+json" },
  timeout: 10000,
});

/**
 * GET with ETag support. If nothing changed GitHub answers 304, which does
 * NOT count against the unauthenticated rate limit (60 req/hour).
 */
const etags = new Map();
const bodies = new Map();

async function cachedGet(url, params) {
  const key = `${url}?${JSON.stringify(params ?? {})}`;
  const headers = {};
  if (etags.has(key)) headers["If-None-Match"] = etags.get(key);

  const res = await githubClient.get(url, {
    params,
    headers,
    validateStatus: (s) => (s >= 200 && s < 300) || s === 304,
  });

  if (res.status === 304 && bodies.has(key)) return bodies.get(key);

  if (res.headers?.etag) etags.set(key, res.headers.etag);
  bodies.set(key, res.data);
  return res.data;
}

function toError(error, fallback) {
  const rateLimited =
    error.response?.status === 403 || error.response?.status === 429;

  return new Error(
    rateLimited
      ? "GitHub rate limit reached. Please try again in a few minutes."
      : error.response?.data?.message || fallback,
  );
}

export async function getRepositories() {
  try {
    const data = await cachedGet(`/users/${GITHUB_USERNAME}/repos`, {
      sort: "updated",
      per_page: 100,
      type: "owner",
    });

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
      pushedAt: repo.pushed_at,
      isPrivate: repo.private,
    }));
  } catch (error) {
    throw toError(error, "Unable to load GitHub repositories.");
  }
}

export async function getRecentActivity() {
  try {
    const data = await cachedGet(`/users/${GITHUB_USERNAME}/events/public`, {
      per_page: 100,
    });

    return data.map((event) => ({
      id: event.id,
      type: event.type,
      repo: event.repo?.name ?? "",
      createdAt: event.created_at,
      payload: event.payload,
    }));
  } catch (error) {
    throw toError(error, "Unable to load recent GitHub activity.");
  }
}

export async function getGitHubProfile() {
  try {
    const data = await cachedGet(`/users/${GITHUB_USERNAME}`);

    return {
      username: data.login,
      name: data.name,
      avatar: data.avatar_url,
      profileUrl: data.html_url,
      publicRepos: data.public_repos,
      followers: data.followers,
      following: data.following,
    };
  } catch (error) {
    throw toError(error, "Unable to load GitHub profile.");
  }
}

/**
 * Real commits since `sinceISO`, read straight from each repo's commit list.
 * (The Events API no longer includes commit data in PushEvent payloads.)
 * Repos that fail (empty repo, 409, etc.) are skipped silently.
 */
export async function getCommitActivity(repositories, sinceISO) {
  const active = repositories
    .filter((repo) => repo.pushedAt && repo.pushedAt >= sinceISO)
    .slice(0, 10);

  const results = await Promise.allSettled(
    active.map((repo) =>
      cachedGet(`/repos/${GITHUB_USERNAME}/${repo.name}/commits`, {
        author: GITHUB_USERNAME,
        since: sinceISO,
        per_page: 100,
      }),
    ),
  );

  const seen = new Set();
  const commits = [];

  results.forEach((result, i) => {
    if (result.status !== "fulfilled" || !Array.isArray(result.value)) return;

    result.value.forEach((item) => {
      if (seen.has(item.sha)) return;
      seen.add(item.sha);

      commits.push({
        sha: item.sha,
        repo: active[i].name,
        message: item.commit?.message?.split("\n")[0] ?? "",
        date: item.commit?.author?.date ?? item.commit?.committer?.date,
      });
    });
  });

  return commits;
}