import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaTerminal,
  FaDownload,
  FaGithub,
  FaMoon,
  FaSearch,
  FaSun,
  FaTimes,
} from "react-icons/fa";

import Button from "../common/Button";
import AnnouncementBar from "./AnnouncementBar";
import { NAV_LINKS, RESUME_LINK } from "../../constants/links";

const NAVBAR_HEIGHT = 80;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return (
      localStorage.getItem("portfolio-theme") ||
      "dark"
    );
  });

  /*
   * -----------------------------------------
   * Scroll state
   * -----------------------------------------
   */

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsScrolled(scrollY > 30);

      /*
       * Announcement is visible near the top
       * and automatically disappears while
       * scrolling down.
       */
      setShowAnnouncement(scrollY < 80);

      /*
       * Scroll progress
       */
      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollY / documentHeight) * 100
          : 0;

      setScrollProgress(
        Math.min(100, Math.max(0, progress))
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * -----------------------------------------
   * Active section detection
   * -----------------------------------------
   */

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => {
      const id = link.href.replace("#", "");

      return document.getElementById(id);
    }).filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * -----------------------------------------
   * Theme
   * -----------------------------------------
   */

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  /*
   * -----------------------------------------
   * Keyboard shortcuts
   * -----------------------------------------
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      /*
       * Escape
       */
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsCommandOpen(false);
      }

      /*
       * Ctrl + K / Cmd + K
       */
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        setIsCommandOpen(true);
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /*
   * -----------------------------------------
   * Mobile body lock
   * -----------------------------------------
   */

  useEffect(() => {
    const shouldLock =
      isOpen || isCommandOpen;

    document.body.style.overflow = shouldLock
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isCommandOpen]);

  /*
   * -----------------------------------------
   * Navigation
   * -----------------------------------------
   */

  const navigateTo = (href) => {
    setIsOpen(false);
    setIsCommandOpen(false);

    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }

    const element = document.querySelector(href);

    if (!element) {
      return;
    }

    const announcementOffset =
      showAnnouncement ? 40 : 0;

    const offset =
      NAVBAR_HEIGHT +
      announcementOffset;

    const elementPosition =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: Math.max(
        0,
        elementPosition - offset
      ),
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark"
        ? "light"
        : "dark"
    );
  };

  /*
   * -----------------------------------------
   * Command actions
   * -----------------------------------------
   */

  const commandItems = useMemo(
    () => [
      ...NAV_LINKS.map((link) => ({
        id: link.name,
        label: `Go to ${link.name}`,
        icon: FaArrowRight,
        action: () =>
          navigateTo(link.href),
      })),

      {
        id: "github",
        label: "Open GitHub",
        icon: FaGithub,
        action: () => {
          window.open(
            "https://github.com/codewithkashif17",
            "_blank",
            "noopener,noreferrer"
          );
        },
      },

      {
        id: "theme",
        label:
          theme === "dark"
            ? "Switch to Light Theme"
            : "Switch to Dark Theme",
        icon:
          theme === "dark"
            ? FaSun
            : FaMoon,
        action: toggleTheme,
      },

      {
        id: "cv",
        label: "Download CV",
        icon: FaDownload,
        action: () => {
          window.open(
            RESUME_LINK,
            "_blank",
            "noopener,noreferrer"
          );
        },
      },
    ],
    [theme]
  );

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openCommandPalette = () => {
    setIsCommandOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      {/* =========================================
          Fixed Navigation Shell
      ========================================== */}

      <header
        className="
          sticky
          inset-x-0
          top-0
          z-[999]
          pointer-events-none
        "
      >
        {/* =======================================
            Announcement
        ======================================== */}

        <AnimatePresence>
          {showAnnouncement && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 40,
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto overflow-hidden"
            >
              <AnnouncementBar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* =======================================
            Scroll Progress
        ======================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            right-0
            top-0
            z-[1000]
            h-[2px]
            overflow-hidden
            bg-transparent
          "
        >
          <motion.div
            className="
              h-full
              origin-left
              bg-primary
              shadow-[0_0_12px_rgba(212,175,55,0.8)]
            "
            animate={{
              width: `${scrollProgress}%`,
            }}
            transition={{
              duration: 0.1,
              ease: "linear",
            }}
          />
        </div>

        {/* =======================================
            Main Navbar
        ======================================== */}

        <motion.nav
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`
            pointer-events-auto
            relative
            w-full
            border-b
            transition-all
            duration-500
            ${
              isScrolled
                ? `
                  border-primary/15
                  bg-background/80
                  shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                  backdrop-blur-2xl
                `
                : `
                  border-transparent
                  bg-background/40
                  backdrop-blur-xl
                `
            }
          `}
        >
          <div
            className={`
              mx-auto
              flex
              max-w-7xl
              items-center
              justify-between
              px-4
              transition-all
              duration-500
              sm:px-6
              lg:px-8
              ${
                isScrolled
                  ? "h-16"
                  : "h-20"
              }
            `}
          >
            {/* =================================
                Logo
            ================================== */}

            <button
              type="button"
              onClick={() =>
                navigateTo("#home")
              }
              className="
                group
                relative
                shrink-0
                font-serif
                text-xl
                font-bold
                tracking-[0.08em]
                text-primary
                sm:text-2xl
              "
            >
              KASHI TECH

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  w-0
                  bg-primary
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </button>

            {/* =================================
                Desktop Navigation
            ================================== */}

            <div className="hidden items-center md:flex">
              <ul className="flex items-center gap-7">
                {NAV_LINKS.map((link) => {
                  const id =
                    link.href.replace(
                      "#",
                      ""
                    );

                  const isActive =
                    activeSection === id;

                  return (
                    <li key={link.name}>
                      <button
                        type="button"
                        onClick={() =>
                          navigateTo(
                            link.href
                          )
                        }
                        className={`
                          group
                          relative
                          py-2
                          text-sm
                          font-medium
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-primary"
                              : "text-on-surface-variant hover:text-primary"
                          }
                        `}
                      >
                        {link.name}

                        {/* Active indicator */}

                        <motion.span
                          initial={false}
                          animate={{
                            width: isActive
                              ? "100%"
                              : "0%",
                            opacity: isActive
                              ? 1
                              : 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            absolute
                            -bottom-1
                            left-0
                            h-[2px]
                            rounded-full
                            bg-primary
                            shadow-[0_0_8px_rgba(212,175,55,0.6)]
                          "
                        />

                        {/* Hover indicator */}

                        {!isActive && (
                          <span
                            className="
                              absolute
                              -bottom-1
                              left-1/2
                              h-px
                              w-0
                              -translate-x-1/2
                              bg-primary/60
                              transition-all
                              duration-300
                              group-hover:w-full
                            "
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* =================================
                Desktop Actions
            ================================== */}

            <div className="hidden items-center gap-2 md:flex">
              {/* Live Status */}

              <button
                type="button"
                onClick={() =>
                  navigateTo("#developer")
                }
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/10
                  bg-primary/5
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-on-surface-variant
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <span className="relative flex h-2 w-2">
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
                      h-2
                      w-2
                      rounded-full
                      bg-green-400
                    "
                  />
                </span>

                Live
              </button>

              {/* Command */}

              <button
                type="button"
                onClick={
                  openCommandPalette
                }
                aria-label="Open command palette"
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/10
                  bg-background/40
                  text-on-surface-variant
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <FaSearch
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </button>

              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/10
                  bg-background/40
                  text-on-surface-variant
                  transition-all
                  duration-300
                  hover:border-primary/30
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                    >
                      <FaSun size={14} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                    >
                      <FaMoon size={14} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* CV */}

              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="gap-2"
                >
                  <FaDownload size={11} />
                  CV
                </Button>
              </a>
            </div>

            {/* =================================
                Mobile Controls
            ================================== */}

            <div className="flex items-center gap-2 md:hidden">
              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/15
                  bg-background/50
                  text-primary
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-primary/10
                "
              >
                {theme === "dark" ? (
                  <FaSun size={14} />
                ) : (
                  <FaMoon size={14} />
                )}
              </button>

              {/* Menu */}

              <button
                type="button"
                onClick={() =>
                  setIsOpen(
                    (current) => !current
                  )
                }
                aria-label={
                  isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isOpen}
                className="
                  relative
                  z-[100]
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/20
                  bg-background/50
                  text-primary
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-primary/50
                  hover:bg-primary/10
                "
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                    >
                      <FaTimes size={17} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                    >
                      <FaBars size={17} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* =====================================
              Mobile Drawer
          ====================================== */}

          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay */}

                <motion.button
                  type="button"
                  aria-label="Close navigation"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  onClick={closeMenu}
                  className="
                    fixed
                    inset-0
                    top-0
                    z-40
                    cursor-default
                    bg-black/60
                    backdrop-blur-sm
                    md:hidden
                  "
                />

                {/* Drawer */}

                <motion.aside
                  initial={{
                    opacity: 0,
                    x: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: "100%",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    fixed
                    right-0
                    top-0
                    z-50
                    flex
                    h-dvh
                    w-[88%]
                    max-w-sm
                    flex-col
                    border-l
                    border-primary/15
                    bg-background/95
                    shadow-[-20px_0_80px_rgba(0,0,0,0.3)]
                    backdrop-blur-2xl
                    md:hidden
                  "
                >
                  {/* Drawer Header */}

                  <div
                    className="
                      flex
                      h-20
                      shrink-0
                      items-center
                      justify-between
                      border-b
                      border-primary/10
                      px-6
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-primary
                        "
                      >
                        Navigation
                      </p>

                      <p className="mt-1 font-serif text-lg font-bold text-on-surface">
                        KASHI TECH
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={closeMenu}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-primary/15
                        bg-primary/5
                        text-primary
                      "
                    >
                      <FaTimes size={15} />
                    </button>
                  </div>

                  {/* Drawer Content */}

                  <div className="flex-1 overflow-y-auto px-5 py-6">
                    {/* Live Status */}

                    <div
                      className="
                        mb-6
                        rounded-2xl
                        border
                        border-primary/10
                        bg-primary/5
                        p-4
                      "
                    >
                      <div className="flex items-center gap-3">
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

                          <span className="relative h-2.5 w-2.5 rounded-full bg-green-400" />
                        </span>

                        <div>
                          <p className="text-xs font-semibold text-green-400">
                            Developer Online
                          </p>

                          <p className="mt-0.5 text-[10px] text-on-surface-variant">
                            Currently building
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}

                    <ul className="space-y-2">
                      {NAV_LINKS.map(
                        (link, index) => {
                          const id =
                            link.href.replace(
                              "#",
                              ""
                            );

                          const isActive =
                            activeSection ===
                            id;

                          return (
                            <motion.li
                              key={link.name}
                              initial={{
                                opacity: 0,
                                x: 20,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  index * 0.05,
                                duration: 0.3,
                              }}
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  navigateTo(
                                    link.href
                                  )
                                }
                                className={`
                                  group
                                  flex
                                  w-full
                                  items-center
                                  justify-between
                                  rounded-2xl
                                  px-4
                                  py-4
                                  text-left
                                  transition-all
                                  duration-300
                                  ${
                                    isActive
                                      ? "bg-primary/10 text-primary"
                                      : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
                                  }
                                `}
                              >
                                <span className="flex items-center gap-3">
                                  <span
                                    className={`
                                      h-1.5
                                      w-1.5
                                      rounded-full
                                      transition-all
                                      duration-300
                                      ${
                                        isActive
                                          ? "bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                                          : "bg-on-surface-variant/30 group-hover:bg-primary"
                                      }
                                    `}
                                  />

                                  <span className="text-sm font-medium">
                                    {link.name}
                                  </span>
                                </span>

                                {isActive ? (
                                  <FaCheck
                                    size={11}
                                    className="text-primary"
                                  />
                                ) : (
                                  <FaArrowRight
                                    size={10}
                                    className="
                                      opacity-0
                                      transition-all
                                      duration-300
                                      group-hover:translate-x-1
                                      group-hover:opacity-100
                                    "
                                  />
                                )}
                              </button>
                            </motion.li>
                          );
                        }
                      )}
                    </ul>

                    {/* Actions */}

                    <div
                      className="
                        mt-6
                        grid
                        grid-cols-2
                        gap-3
                      "
                    >
                      <button
                        type="button"
                        onClick={
                          openCommandPalette
                        }
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-2xl
                          border
                          border-primary/10
                          bg-primary/5
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          text-on-surface-variant
                          transition-all
                          duration-300
                          hover:border-primary/30
                          hover:text-primary
                        "
                      >
                        <FaSearch size={11} />
                        Search
                      </button>

                      <button
                        type="button"
                        onClick={
                          toggleTheme
                        }
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-2xl
                          border
                          border-primary/10
                          bg-primary/5
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          text-on-surface-variant
                          transition-all
                          duration-300
                          hover:border-primary/30
                          hover:text-primary
                        "
                      >
                        {theme ===
                        "dark" ? (
                          <FaSun size={11} />
                        ) : (
                          <FaMoon size={11} />
                        )}

                        Theme
                      </button>
                    </div>

                    {/* CV */}

                    <a
                      href={RESUME_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="mt-4 block"
                    >
                      <Button className="w-full gap-2">
                        <FaDownload size={12} />
                        Download CV
                      </Button>
                    </a>
                  </div>

                  {/* Drawer Footer */}

                  <div
                    className="
                      shrink-0
                      border-t
                      border-primary/10
                      px-6
                      py-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-on-surface-variant">
                        © {new Date().getFullYear()} KASHI TECH
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            "https://github.com/codewithkashif17",
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="
                          text-on-surface-variant
                          transition-colors
                          hover:text-primary
                        "
                        aria-label="GitHub"
                      >
                        <FaGithub size={15} />
                      </button>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      {/* =========================================
          Command Palette
      ========================================== */}

      <AnimatePresence>
        {isCommandOpen && (
          <>
            {/* Overlay */}

            <motion.button
              type="button"
              aria-label="Close command palette"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setIsCommandOpen(false)
              }
              className="
                fixed
                inset-0
                z-[1100]
                cursor-default
                bg-black/60
                backdrop-blur-sm
              "
            />

            {/* Palette */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                left-1/2
                top-[12vh]
                z-[1200]
                w-[calc(100%-2rem)]
                max-w-xl
                -translate-x-1/2
                overflow-hidden
                rounded-3xl
                border
                border-primary/20
                bg-background/95
                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
              "
            >
              {/* Search Header */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-primary/10
                  px-5
                  py-4
                "
              >
                <FaTerminal
                  size={14}
                  className="text-primary"
                />

                <div className="flex-1">
                  <p className="text-xs font-semibold text-on-surface">
                    Command Palette
                  </p>

                  <p className="mt-0.5 text-[10px] text-on-surface-variant">
                    Navigate your portfolio
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setIsCommandOpen(false)
                  }
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    text-on-surface-variant
                    transition-colors
                    hover:bg-primary/10
                    hover:text-primary
                  "
                  aria-label="Close command palette"
                >
                  <FaTimes size={12} />
                </button>
              </div>

              {/* Commands */}

              <div className="max-h-[55vh] overflow-y-auto p-3">
                {commandItems.map(
                  (command, index) => {
                    const Icon =
                      command.icon;

                    return (
                      <motion.button
                        key={command.id}
                        type="button"
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.03,
                        }}
                        onClick={
                          command.action
                        }
                        className="
                          group
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          px-4
                          py-3.5
                          text-left
                          transition-all
                          duration-200
                          hover:bg-primary/10
                        "
                      >
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-primary/10
                            bg-primary/5
                            text-primary
                            transition-all
                            duration-300
                            group-hover:border-primary/25
                            group-hover:bg-primary/10
                          "
                        >
                          <Icon size={13} />
                        </span>

                        <span className="flex-1 text-sm font-medium text-on-surface-variant transition-colors group-hover:text-on-surface">
                          {command.label}
                        </span>

                        <FaArrowRight
                          size={10}
                          className="
                            text-on-surface-variant/30
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-primary
                          "
                        />
                      </motion.button>
                    );
                  }
                )}
              </div>

              {/* Footer */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-primary/10
                  px-5
                  py-3
                "
              >
                <span className="text-[10px] text-on-surface-variant">
                  Press
                  <kbd
                    className="
                      mx-1
                      rounded
                      border
                      border-primary/15
                      bg-primary/5
                      px-1.5
                      py-0.5
                      font-mono
                      text-primary
                    "
                  >
                    ESC
                  </kbd>
                  to close
                </span>

                <span className="text-[10px] text-on-surface-variant">
                  {theme === "dark"
                    ? "Dark Mode"
                    : "Light Mode"}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}