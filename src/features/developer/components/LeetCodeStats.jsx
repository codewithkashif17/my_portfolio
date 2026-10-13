import { motion } from "framer-motion";
import { FaBolt, FaCheckCircle, FaFire, FaTrophy } from "react-icons/fa";

import { LEETCODE_STATS } from "../data/developerData";

export default function LeetCodeStats() {
  const total =
    LEETCODE_STATS.difficulty.easy +
    LEETCODE_STATS.difficulty.medium +
    LEETCODE_STATS.difficulty.hard;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: 0.05,
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
          -left-20
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
              LeetCode
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
              Problem Solving
            </h2>

            <p className="mt-2 text-xs text-on-surface-variant">
              @{LEETCODE_STATS.username}
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
            <FaTrophy size={20} />
          </div>
        </div>

        {/* Main Solved Count */}
        <div
          className="
            mt-7
            grid
            grid-cols-[1fr_auto]
            items-center
            gap-5
            rounded-2xl
            border
            border-primary/10
            bg-background/40
            p-5
          "
        >
          <div>
            <p className="text-xs text-on-surface-variant">Problems Solved</p>

            <div className="mt-1 flex items-baseline gap-2">
              <span
                className="
                  font-serif
                  text-4xl
                  font-bold
                  text-primary
                "
              >
                {LEETCODE_STATS.totalSolved}
              </span>

              <span className="text-xs text-on-surface-variant">total</span>
            </div>

            <p className="mt-2 text-[11px] text-on-surface-variant">
              {LEETCODE_STATS.thisMonth.solved} solved this month
            </p>
          </div>

          {/* Circular Progress */}
          <div
            className="
              relative
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              border-[5px]
              border-primary/10
            "
          >
            <div
              className="
                absolute
                inset-[-5px]
                rounded-full
                border-[5px]
                border-transparent
                border-t-primary
                border-r-primary/70
                rotate-[25deg]
              "
            />

            <span
              className="
                text-sm
                font-bold
                text-primary
              "
            >
              {LEETCODE_STATS.acceptanceRate}%
            </span>
          </div>
        </div>

        {/* Difficulty Breakdown */}
        <div className="mt-5">
          <div className="mb-3 flex items-center justify-between">
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-on-surface-variant
              "
            >
              Difficulty
            </span>

            <span className="text-[10px] text-on-surface-variant">
              {total} tracked
            </span>
          </div>

          <div className="space-y-3">
            <DifficultyBar
              label="Easy"
              value={LEETCODE_STATS.difficulty.easy}
              total={total}
              progressColor="bg-green-400"
            />

            <DifficultyBar
              label="Medium"
              value={LEETCODE_STATS.difficulty.medium}
              total={total}
              progressColor="bg-yellow-400"
            />

            <DifficultyBar
              label="Hard"
              value={LEETCODE_STATS.difficulty.hard}
              total={total}
              progressColor="bg-red-400"
            />
          </div>
        </div>

        {/* Today's Activity */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <MiniStat
            icon={<FaCheckCircle size={12} />}
            label="Today"
            value={LEETCODE_STATS.today.solved}
            suffix="solved"
          />

          <MiniStat
            icon={<FaFire size={12} />}
            label="Streak"
            value={LEETCODE_STATS.streak}
            suffix="days"
          />
        </div>

        {/* Footer */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-primary/10
            pt-5
          "
        >
          <div className="flex items-center gap-2">
            <FaBolt size={11} className="text-primary" />

            <span className="text-xs text-on-surface-variant">
              {LEETCODE_STATS.thisWeek.solved} solved this week
            </span>
          </div>

          <span
            className="
              text-xs
              font-semibold
              text-primary
            "
          >
            Active
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function DifficultyBar({ label, value, total, progressColor }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;

  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs text-on-surface-variant">{label}</span>

        <span className="text-xs font-semibold text-on-surface">{value}</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-background">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${percentage}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`h-full rounded-full ${progressColor}`}
        />
      </div>
    </div>
  );
}

function MiniStat({ icon, label, value, suffix }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-primary/10
        bg-background/30
        p-4
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

      <div className="mt-2 flex items-baseline gap-1.5">
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
