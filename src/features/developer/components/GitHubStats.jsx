import { motion } from "framer-motion";

import {
  FaArrowUp,
  FaCodeBranch,
  FaGithub,
  FaHistory,
  FaProjectDiagram,
} from "react-icons/fa";

import { FiGitPullRequest } from "react-icons/fi";

import { GITHUB_STATS } from "../data/developerData";




export default function GitHubStats() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/15
        bg-surface-container-low/70
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-primary/30
        hover:shadow-2xl
        hover:shadow-primary/5
        sm:p-7
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-56
          w-56
          rounded-full
          bg-primary/10
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-primary/15
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              GitHub
            </span>

            <h2
              className="
                mt-2
                font-serif
                text-2xl
                font-bold
                text-on-surface
                sm:text-3xl
              "
            >
              Development Activity
            </h2>

            <p className="mt-2 text-xs text-on-surface-variant">
              @{GITHUB_STATS.username}
            </p>
          </div>

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-primary/15
              bg-primary/5
              text-primary
            "
          >
            <FaGithub size={22} />
          </div>
        </div>

        {/* Today Highlight */}
        <div
          className="
            mt-7
            rounded-2xl
            border
            border-primary/10
            bg-background/40
            p-5
          "
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs text-on-surface-variant">Commits today</p>

              <p
                className="
                  mt-1
                  font-serif
                  text-4xl
                  font-bold
                  text-primary
                "
              >
                {GITHUB_STATS.today.commits}
              </p>
            </div>

            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-primary/10
                bg-primary/5
                px-3
                py-1.5
                text-xs
                font-semibold
                text-primary
              "
            >
              <FaArrowUp size={9} />
              Active
            </div>
          </div>

          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "72%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full rounded-full bg-primary"
            />
          </div>

          <p className="mt-2 text-[11px] text-on-surface-variant">
            Based on today's recorded development activity
          </p>
        </div>

        {/* Weekly / Monthly Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <StatCard
            icon={<FaCodeBranch size={13} />}
            label="This Week"
            value={GITHUB_STATS.thisWeek.commits}
            suffix="commits"
          />

          <StatCard
            icon={<FaHistory size={13} />}
            label="This Month"
            value={GITHUB_STATS.thisMonth.commits}
            suffix="commits"
          />

          <StatCard
            icon={<FiGitPullRequest size={13} />}
            label="Pull Requests"
            value={GITHUB_STATS.thisWeek.pullRequests}
            suffix="this week"
          />

          <StatCard
            icon={<FaProjectDiagram size={13} />}
            label="Repositories"
            value={GITHUB_STATS.thisWeek.repositories}
            suffix="active"
          />
        </div>

        {/* Bottom Summary */}
        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            border-t
            border-primary/10
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
              Total Repositories
            </p>

            <p className="mt-1 text-sm font-semibold text-on-surface">
              {GITHUB_STATS.total.repositories}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
              Total Contributions
            </p>

            <p className="mt-1 text-sm font-semibold text-on-surface">
              {GITHUB_STATS.total.contributions}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
              Last Activity
            </p>

            <p className="mt-1 text-sm font-semibold text-primary">
              {GITHUB_STATS.lastActivity}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function StatCard({ icon, label, value, suffix }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-primary/10
        bg-background/30
        p-4
        transition-all
        duration-300
        hover:border-primary/25
        hover:bg-primary/5
      "
    >
      <div className="flex items-center gap-2 text-primary">
        {icon}

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-on-surface-variant
          "
        >
          {label}
        </span>
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span
          className="
            font-serif
            text-2xl
            font-bold
            text-on-surface
          "
        >
          {value}
        </span>

        <span className="text-[10px] text-on-surface-variant">{suffix}</span>
      </div>
    </div>
  );
}
