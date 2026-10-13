import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaCode,
  FaGithub,
  FaGitAlt,
  FaLaptopCode,
  FaReact,
  FaRocket,
  FaTrophy,
} from "react-icons/fa";

import { RECENT_ACTIVITY } from "../data/developerData";

export default function ActivityTimeline() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/15
        bg-surface-container-low/70
        p-5
        backdrop-blur-xl
        sm:p-7
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-64
          w-64
          rounded-full
          bg-primary/5
          blur-[100px]
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
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
              Activity Feed
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
              Recent Activity
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                text-xs
                leading-5
                text-on-surface-variant
              "
            >
              A chronological view of recent development, learning, coding, and
              project activity.
            </p>
          </div>

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-primary/10
              bg-primary/5
              px-3
              py-1.5
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                animate-pulse
                rounded-full
                bg-green-400
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-primary
              "
            >
              Activity Tracking
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-8">
          {/* Vertical Line */}
          <div
            aria-hidden="true"
            className="
              absolute
              bottom-5
              left-[17px]
              top-5
              w-px
              bg-primary/15
              sm:left-[19px]
            "
          />

          <div className="space-y-7">
            {RECENT_ACTIVITY.map((activity, index) => (
              <ActivityItem
                key={activity.id}
                activity={activity}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-8
            border-t
            border-primary/10
            pt-5
            text-center
          "
        >
          <p
            className="
              text-[10px]
              leading-5
              text-on-surface-variant
            "
          >
            Activity is collected from connected development and learning
            sources.
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ActivityItem({ activity, index }) {
  const activityConfig = getActivityConfig(activity.type);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        flex
        gap-4
        sm:gap-5
      "
    >
      {/* Icon */}
      <div
        className="
          relative
          z-10
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-primary/15
          bg-surface-container-low
          text-primary
          transition-all
          duration-300
          group-hover:border-primary/40
          group-hover:bg-primary/10
          group-hover:shadow-lg
          group-hover:shadow-primary/10
          sm:h-10
          sm:w-10
        "
      >
        {activityConfig.icon}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pb-1">
        <div
          className="
            flex
            flex-col
            gap-1
            sm:flex-row
            sm:items-start
            sm:justify-between
            sm:gap-4
          "
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-on-surface
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
              >
                {activity.title}
              </h3>

              <span
                className="
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/5
                  px-2
                  py-0.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-primary
                "
              >
                {activityConfig.label}
              </span>
            </div>

            <p
              className="
                mt-1.5
                max-w-2xl
                text-xs
                leading-5
                text-on-surface-variant
              "
            >
              {activity.description}
            </p>
          </div>

          <span
            className="
              shrink-0
              text-[10px]
              text-on-surface-variant
              sm:pt-0.5
            "
          >
            {activity.time}
          </span>
        </div>

        {/* Date */}
        <p
          className="
            mt-2
            text-[9px]
            uppercase
            tracking-wider
            text-on-surface-variant/70
          "
        >
          {formatActivityDate(activity.date)}
        </p>
      </div>
    </motion.div>
  );
}

function getActivityConfig(type) {
  const configs = {
    github: {
      label: "GitHub",
      icon: <FaGithub size={15} />,
    },

    leetcode: {
      label: "LeetCode",
      icon: <FaTrophy size={14} />,
    },

    study: {
      label: "Study",
      icon: <FaBookOpen size={14} />,
    },

    project: {
      label: "Project",
      icon: <FaRocket size={14} />,
    },

    coding: {
      label: "Coding",
      icon: <FaLaptopCode size={14} />,
    },

    deployment: {
      label: "Deploy",
      icon: <FaCode size={14} />,
    },

    git: {
      label: "Git",
      icon: <FaGitAlt size={15} />,
    },

    react: {
      label: "React",
      icon: <FaReact size={15} />,
    },
  };

  return (
    configs[type] || {
      label: "Activity",
      icon: <FaCode size={14} />,
    }
  );
}

function formatActivityDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
