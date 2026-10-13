import { motion } from "framer-motion";
import { FaCode, FaGithub, FaHeart, FaSyncAlt } from "react-icons/fa";

import { DASHBOARD_META } from "../data/developerData";

export default function DeveloperHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-4
        pb-16
        pt-32
        sm:px-6
        sm:pb-20
        sm:pt-36
        lg:px-8
        lg:pb-24
        lg:pt-40
      "
    >
      {/* Decorative Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(212,175,55,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(212,175,55,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-primary/20
            bg-primary/5
            px-4
            py-2
            backdrop-blur-md
          "
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-green-400
                opacity-60
              "
            />

            <span
              className="
                relative
                inline-flex
                h-2.5
                w-2.5
                rounded-full
                bg-green-400
              "
            />
          </span>

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-on-surface-variant
            "
          >
            Developer Activity · Live
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            font-serif
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-on-surface
            sm:text-5xl
            lg:text-6xl
          "
        >
          Developer <span className="text-primary">Command Center</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-on-surface-variant
            sm:text-base
            sm:leading-8
          "
        >
          {DASHBOARD_META.subtitle}
        </motion.p>

        {/* Status Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mx-auto
            mt-8
            flex
            max-w-xl
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
            sm:gap-4
          "
        >
          <StatusItem
            icon={<FaSyncAlt size={11} />}
            label="Last Updated"
            value={DASHBOARD_META.lastUpdated}
          />

          <span
            aria-hidden="true"
            className="
              hidden
              h-1
              w-1
              rounded-full
              bg-primary/50
              sm:block
            "
          />

          <StatusItem
            icon={<FaCode size={11} />}
            label="Timezone"
            value={DASHBOARD_META.timezone}
          />
        </motion.div>

        {/* Source / Transparency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            text-xs
            text-on-surface-variant
          "
        >
          <span className="inline-flex items-center gap-2">
            <FaGithub size={13} className="text-primary" />
            GitHub activity
          </span>

          <span className="text-primary/40">•</span>

          <span>Development tracking</span>

          <span className="text-primary/40">•</span>

          <span className="inline-flex items-center gap-1.5">
            Built with
            <FaHeart size={10} className="text-primary" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function StatusItem({ icon, label, value }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-primary/10
        bg-surface-container-low/50
        px-4
        py-2
        backdrop-blur-md
      "
    >
      <span className="text-primary">{icon}</span>

      <span className="text-xs text-on-surface-variant">{label}</span>

      <span className="text-xs font-semibold text-on-surface">{value}</span>
    </div>
  );
}
