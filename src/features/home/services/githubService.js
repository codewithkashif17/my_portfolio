
import axios from "axios";

const GITHUB_API = "https://api.github.com";

// Public GitHub profile username
const GITHUB_USERNAME = "codewithkashif17";

const githubClient = axios.create({
  baseURL: GITHUB_API,
  headers: {
    Accept: "application/vnd.github+json",
  },
  timeout: 10000,
});

// Fetch public repositories
export async function getRepositories() {
  try {
    const { data } = await githubClient.get(
      `/users/${GITHUB_USERNAME}/repos`,
      {
        params: {
          sort: "updated",
          per_page: 100,
          type: "owner",
        },
      },
    );

    return data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
      isPrivate: repo.private,
    }));
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Unable to load GitHub repositories.",
    );
  }
}

// Fetch recent public GitHub activity
export async function getRecentActivity() {
  try {
    const { data } = await githubClient.get(
      `/users/${GITHUB_USERNAME}/events/public`,
      {
        params: {
          per_page: 100,
        },
      },
    );

    return data.map((event) => ({
      id: event.id,
      type: event.type,
      repo: event.repo?.name ?? "",
      createdAt: event.created_at,
      payload: event.payload,
    }));
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Unable to load recent GitHub activity.",
    );
  }
}

// Fetch profile information
export async function getGitHubProfile() {
  try {
    const { data } = await githubClient.get(
      `/users/${GITHUB_USERNAME}`,
    );

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
    throw new Error(
      error.response?.data?.message ||
        "Unable to load GitHub profile.",
    );
  }
}
