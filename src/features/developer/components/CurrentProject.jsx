import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCodeBranch,
  FaRocket,
} from "react-icons/fa";

import { CURRENT_PROJECT } from "../data/developerData";

export default function CurrentProject() {
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
      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-primary/10
          blur-[100px]
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
              Current Project
            </span>

            <h2
              className="
                mt-2
                font-serif
                text-2xl
                font-bold
                leading-tight
                text-on-surface
                sm:text-3xl
              "
            >
              {CURRENT_PROJECT.name}
            </h2>
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
            <FaRocket size={19} />
          </div>
        </div>

        {/* Project Status */}
        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-primary/15
            bg-primary/5
            px-3
            py-1.5
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />

          <span
            className="
              text-xs
              font-semibold
              text-primary
            "
          >
            {CURRENT_PROJECT.status}
          </span>

          <span
            className="
              border-l
              border-primary/20
              pl-2
              text-xs
              text-on-surface-variant
            "
          >
            {CURRENT_PROJECT.version}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-on-surface-variant
          "
        >
          {CURRENT_PROJECT.description}
        </p>

        {/* Progress */}
        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between">
            <span
              className="
                text-xs
                font-medium
                text-on-surface-variant
              "
            >
              Development Progress
            </span>

            <span
              className="
                text-sm
                font-bold
                text-primary
              "
            >
              {CURRENT_PROJECT.progress}%
            </span>
          </div>

          <div
            className="
              h-2
              overflow-hidden
              rounded-full
              bg-background
            "
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${CURRENT_PROJECT.progress}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                h-full
                rounded-full
                bg-primary
              "
            >
              <span
                className="
                  absolute
                  right-0
                  top-1/2
                  h-1.5
                  w-1.5
                  -translate-y-1/2
                  rounded-full
                  bg-white
                  shadow-[0_0_8px_rgba(255,255,255,0.8)]
                "
              />
            </motion.div>
          </div>
        </div>

        {/* Project Metadata */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
          "
        >
          <ProjectMeta
            icon={<FaCalendarAlt size={12} />}
            label="Started"
            value={formatDate(CURRENT_PROJECT.startedAt)}
          />

          <ProjectMeta
            icon={<FaCodeBranch size={12} />}
            label="Version"
            value={CURRENT_PROJECT.version}
          />
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-on-surface-variant
            "
          >
            Technology Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {CURRENT_PROJECT.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-primary/10
                  bg-background/40
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-on-surface-variant
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/5
                  hover:text-primary
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-primary/10
            pt-5
          "
        >
          <span
            className="
              text-xs
              text-on-surface-variant
            "
          >
            Active development
          </span>

          <a
            href="#projects"
            className="
              group/link
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-primary
              transition-colors
              duration-300
              hover:text-primary-fixed
            "
          >
            View Projects
            <FaArrowRight
              size={10}
              className="
                transition-transform
                duration-300
                group-hover/link:translate-x-1
              "
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectMeta({ icon, label, value }) {
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
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-2
          text-sm
          font-medium
          text-on-surface
        "
      >
        {value}
      </p>
    </div>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
