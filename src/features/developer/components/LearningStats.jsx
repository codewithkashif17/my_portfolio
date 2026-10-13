import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaClock,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";

import { LEARNING_STATS } from "../data/developerData";

export default function LearningStats() {
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
          -bottom-20
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
              Learning
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
              Study Progress
            </h2>

            <p className="mt-2 text-xs text-on-surface-variant">
              Continuous learning & skill development
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
            <FaGraduationCap size={21} />
          </div>
        </div>

        {/* Current Learning */}
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
          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
            >
              <FaBookOpen size={13} />
            </span>

            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-primary
                "
              >
                Currently Studying
              </p>

              <p className="mt-1 text-sm font-semibold text-on-surface">
                {LEARNING_STATS.currentTopic}
              </p>
            </div>
          </div>

          <p
            className="
              mt-4
              text-xs
              leading-5
              text-on-surface-variant
            "
          >
            {LEARNING_STATS.currentCourse}
          </p>
        </div>

        {/* Time Overview */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          <LearningMetric
            label="Today"
            value={LEARNING_STATS.today.hours}
            suffix="hours"
          />

          <LearningMetric
            label="Week"
            value={LEARNING_STATS.thisWeek.hours}
            suffix="hours"
          />

          <LearningMetric
            label="Month"
            value={LEARNING_STATS.thisMonth.hours}
            suffix="hours"
          />
        </div>

        {/* Today's Topics */}
        <div className="mt-6">
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
              Today's Topics
            </span>

            <FaLayerGroup size={12} className="text-primary" />
          </div>

          <div className="flex flex-wrap gap-2">
            {LEARNING_STATS.today.topics.map((topic) => (
              <span
                key={topic}
                className="
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/5
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-on-surface-variant
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:text-primary
                "
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Study Activity */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-primary/10
            bg-background/30
            p-4
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaClock size={12} className="text-primary" />

              <span className="text-xs text-on-surface-variant">
                Today's study time
              </span>
            </div>

            <span className="text-sm font-bold text-primary">
              {LEARNING_STATS.today.hours}h
            </span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-background">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "63%" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full rounded-full bg-primary"
            />
          </div>

          <p className="mt-2 text-[10px] text-on-surface-variant">
            Consistent learning is part of the development routine.
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function LearningMetric({ label, value, suffix }) {
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
      <p
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-wider
          text-on-surface-variant
        "
      >
        {label}
      </p>

      <div className="mt-2 flex items-baseline gap-1">
        <span
          className="
            font-serif
            text-xl
            font-bold
            text-on-surface
          "
        >
          {value}
        </span>

        <span className="text-[9px] text-on-surface-variant">{suffix}</span>
      </div>
    </div>
  );
}
