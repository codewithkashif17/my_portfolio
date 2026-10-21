import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaBullhorn, FaTimes } from "react-icons/fa";

const ANNOUNCEMENT = {
  enabled: true,
  message:
    "My portfolio has been recently updated — explore my latest projects and experience.",
  actionText: "View Updates",
  actionHref: "#projects",
};

function AnnouncementContent() {
  return (
    <div className="flex items-center gap-3 px-5">
      <span className="text-xs text-on-surface-variant sm:text-sm">
        {ANNOUNCEMENT.message}
      </span>

      {ANNOUNCEMENT.actionText && ANNOUNCEMENT.actionHref && (
        <a
          href={ANNOUNCEMENT.actionHref}
          className="group/link inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary transition-colors duration-300 hover:text-primary-fixed sm:text-sm"
        >
          {ANNOUNCEMENT.actionText}
          <FaArrowRight
            size={9}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </a>
      )}
    </div>
  );
}

function AnnouncementSeparator() {
  return (
    <span className="mx-2 h-1 w-1 shrink-0 rounded-full bg-primary/50 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
  );
}

function AnnouncementMarquee({ reduceMotion }) {
  return (
    <div className="relative ml-3 flex-1 overflow-hidden pr-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-surface-container-low to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-surface-container-low to-transparent sm:w-16" />

      <motion.div
        animate={reduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center whitespace-nowrap"
      >
        {[0, 1].map((item) => (
          <div
            key={item}
            aria-hidden={item === 1}
            className="flex shrink-0 items-center"
          >
            <AnnouncementContent />
            <AnnouncementSeparator />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * In-flow bar (NOT sticky/fixed). It scrolls away with the page, so it never
 * changes layout in response to scroll position. Only the close button
 * collapses it, which is a single user-triggered change.
 */
export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(ANNOUNCEMENT.enabled);
  const reduceMotion = useReducedMotion();

  if (!ANNOUNCEMENT.enabled) return null;

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial={{ height: 40 }}
          animate={{ height: 40 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border-b border-primary/15 bg-surface-container-low"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40"
            />
          )}

          <div className="relative flex h-10 items-center">
            <div className="relative z-30 ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary sm:ml-6">
              <FaBullhorn size={10} />
            </div>

            <AnnouncementMarquee reduceMotion={reduceMotion} />

            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close announcement"
              className="relative z-30 mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-on-surface-variant transition-colors duration-200 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:mr-4"
            >
              <FaTimes size={10} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}