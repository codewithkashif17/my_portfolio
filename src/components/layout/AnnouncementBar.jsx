import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBullhorn, FaTimes } from "react-icons/fa";

const ANNOUNCEMENT = {
  enabled: true,
  message:
    "My portfolio has been recently updated — explore my latest projects and experience.",
  actionText: "View Updates",
  actionHref: "#projects",
};

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(ANNOUNCEMENT.enabled);

  if (!ANNOUNCEMENT.enabled) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            group
            relative
            z-[60]
            overflow-hidden
            border-b
            border-primary/15
            bg-surface-container-low
          "
        >
          {/* Top subtle glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary/40
              to-transparent
            "
          />

          {/* Moving glow */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              top-0
              h-px
              w-1/3
              bg-gradient-to-r
              from-transparent
              via-primary
              to-transparent
              opacity-40
            "
          />

          <div className="relative flex h-10 items-center">
            {/* Left fade */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-20
                h-full
                w-16
                bg-gradient-to-r
                from-surface-container-low
                to-transparent
              "
            />

            {/* Right fade */}
            <div
              className="
                pointer-events-none
                absolute
                right-10
                top-0
                z-20
                h-full
                w-20
                bg-gradient-to-l
                from-surface-container-low
                to-transparent
                sm:right-12
              "
            />

            {/* Announcement Icon */}
            <div
              className="
                relative
                z-30
                ml-4
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-primary/20
                bg-primary/10
                text-primary
                sm:ml-6
              "
            >
              <FaBullhorn size={10} />
            </div>

            {/* Marquee Area */}
            <div
              className="
                relative
                ml-3
                flex-1
                overflow-hidden
                pr-2
              "
            >
              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  flex
                  w-max
                  items-center
                  whitespace-nowrap
                  group-hover:[animation-play-state:paused]
                "
              >
                {/* First item */}
                <AnnouncementContent />

                {/* Separator */}
                <AnnouncementSeparator />

                {/* Duplicate item for seamless loop */}
                <AnnouncementContent />

                {/* Separator */}
                <AnnouncementSeparator />

                {/* Third copy */}
                <AnnouncementContent />

                <AnnouncementSeparator />
              </motion.div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close announcement"
              className="
                relative
                z-30
                mr-2
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                text-on-surface-variant
                transition-all
                duration-300
                hover:bg-primary/10
                hover:text-primary
                sm:mr-4
              "
            >
              <FaTimes size={10} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  function AnnouncementContent() {
    return (
      <div className="flex items-center gap-3 px-5">
        <span className="text-xs text-on-surface-variant sm:text-sm">
          {ANNOUNCEMENT.message}
        </span>

        {ANNOUNCEMENT.actionText && ANNOUNCEMENT.actionHref && (
          <a
            href={ANNOUNCEMENT.actionHref}
            className="
                group/link
                inline-flex
                shrink-0
                items-center
                gap-1.5
                text-xs
                font-semibold
                text-primary
                transition-colors
                duration-300
                hover:text-primary-fixed
                sm:text-sm
              "
          >
            {ANNOUNCEMENT.actionText}

            <FaArrowRight
              size={9}
              className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                "
            />
          </a>
        )}
      </div>
    );
  }

  function AnnouncementSeparator() {
    return (
      <span
        className="
          mx-2
          h-1
          w-1
          shrink-0
          rounded-full
          bg-primary/50
          shadow-[0_0_8px_rgba(212,175,55,0.5)]
        "
      />
    );
  }
}
