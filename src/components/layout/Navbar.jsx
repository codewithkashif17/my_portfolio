import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBars,
  FaCheck,
  FaDownload,
  FaGithub,
  FaMoon,
  FaSearch,
  FaSun,
  FaTerminal,
  FaTimes,
} from "react-icons/fa";

import Button from "../common/Button";
import AnnouncementBar from "./AnnouncementBar";
import { NAV_LINKS, RESUME_LINK } from "../../constants/links";

// Constant height: the navbar never changes size on scroll (that caused the blink).
const NAVBAR_HEIGHT = 64;
const GITHUB_URL = "https://github.com/codewithkashif17";

const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
const sectionId = (href) => href.replace(/^#/, "");

function LiveDot({ size = "h-2 w-2" }) {
  return (
    <span className={`relative flex ${size}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
      <span className={`relative rounded-full bg-green-400 ${size}`} />
    </span>
  );
}

function ThemeIcon({ theme, size = 14 }) {
  return theme === "dark" ? <FaSun size={size} /> : <FaMoon size={size} />;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // Progress bar updated via ref: no React re-render per scroll tick.
  const progressRef = useRef(null);

  /* Scroll state (single rAF-throttled listener, with hysteresis) */

  const ticking = useRef(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(sectionId(l.href))).filter(
      Boolean,
    );

    const update = () => {
      ticking.current = false;
      const y = window.scrollY;

      // Hysteresis so it can't flicker around a single threshold
      setIsScrolled((cur) => (cur ? y > 10 : y > 30));

      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        progressRef.current.style.transform = `scaleX(${p})`;
      }

      if (!sections.length) return;

      const probe = y + NAVBAR_HEIGHT + 120;
      let current = sections[0].id;

      for (const section of sections) {
        const top = section.getBoundingClientRect().top + y;
        if (top <= probe) current = section.id;
        else break;
      }

      const atBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 5;
      if (atBottom) current = sections[sections.length - 1].id;

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Theme */

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  /* Keyboard shortcuts */

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsCommandOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen(true);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Body scroll lock (compensates for scrollbar so the page doesn't jump) */

  useEffect(() => {
    if (!(isOpen || isCommandOpen)) return;

    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [isOpen, isCommandOpen]);

  /* Actions */

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const openCommandPalette = () => {
    setIsCommandOpen(true);
    setIsOpen(false);
  };

  const navigateTo = (href) => {
    setIsOpen(false);
    setIsCommandOpen(false);

    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }

    const element = document.getElementById(href.slice(1));
    if (!element) {
      console.warn(`Navigation section not found: ${href}`);
      return;
    }

    setActiveSection(element.id);

    window.scrollTo({
      top: Math.max(
        0,
        element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT,
      ),
      behavior: "smooth",
    });
  };

  const commandItems = [
    ...NAV_LINKS.map((link) => ({
      id: link.name,
      label: `Go to ${link.name}`,
      icon: FaArrowRight,
      action: () => navigateTo(link.href),
    })),
    {
      id: "github",
      label: "Open GitHub",
      icon: FaGithub,
      action: () => openExternal(GITHUB_URL),
    },
    {
      id: "theme",
      label: theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme",
      icon: theme === "dark" ? FaSun : FaMoon,
      action: toggleTheme,
    },
    {
      id: "cv",
      label: "Download CV",
      icon: FaDownload,
      action: () => openExternal(RESUME_LINK),
    },
  ];

  const portalTarget = typeof document !== "undefined" ? document.body : null;

  return (
    <>
      {/* Announcement: normal flow, scrolls away naturally, no scroll logic */}
      <AnnouncementBar />

      {/* Sticky navbar: constant height */}
      <header
        style={{ height: NAVBAR_HEIGHT }}
        className={`sticky top-0 z-[999] w-full border-b transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "border-primary/15 bg-[var(--color-background)] shadow-[0_10px_40px_rgba(0,0,0,0.15)] md:bg-background/80 md:backdrop-blur-2xl"
            : "border-transparent bg-[var(--color-background)] md:bg-background/40 md:backdrop-blur-xl"
        }`}
      >
        {/* Scroll progress */}
        <div
          ref={progressRef}
          aria-hidden="true"
          style={{ transform: "scaleX(0)" }}
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-primary shadow-[0_0_12px_rgba(212,175,55,0.8)]"
        />

        <nav
          aria-label="Main"
          className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigateTo("#home")}
            className="group relative shrink-0 font-serif text-xl font-bold tracking-[0.08em] text-primary sm:text-2xl"
          >
            KASHI TECH
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === sectionId(link.href);

              return (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => navigateTo(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {link.name}

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                    />

                    {!isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-primary/60 transition-all duration-300 group-hover:w-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => navigateTo("#developer")}
              className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-3 py-2 text-xs font-medium text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <LiveDot />
              Live
            </button>

            <button
              type="button"
              onClick={openCommandPalette}
              aria-label="Open command palette"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-background/40 text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <FaSearch
                size={13}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-background/40 text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.15 }}
                >
                  <ThemeIcon theme={theme} />
                </motion.span>
              </AnimatePresence>
            </button>

            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2">
                <FaDownload size={11} />
                CV
              </Button>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-background/50 text-primary transition-all duration-300 hover:bg-primary/10"
            >
              <ThemeIcon theme={theme} />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((c) => !c)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-background/50 text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
            >
              {isOpen ? <FaTimes size={17} /> : <FaBars size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Drawer + palette are portalled to <body>: no parent can clip or restack them */}
      {portalTarget &&
        createPortal(
          <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              key="drawer-backdrop"
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[1000] cursor-default bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-[1001] flex h-dvh w-[88%] max-w-sm flex-col border-l border-primary/15 bg-[var(--color-background)] shadow-[-20px_0_80px_rgba(0,0,0,0.3)] md:hidden"
            >
              <div className="flex h-20 shrink-0 items-center justify-between border-b border-primary/10 px-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Navigation
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-on-surface">
                    KASHI TECH
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary"
                >
                  <FaTimes size={15} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-6">
                <div className="mb-6 flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4">
                  <LiveDot size="h-2.5 w-2.5" />
                  <div>
                    <p className="text-xs font-semibold text-green-400">
                      Developer Online
                    </p>
                    <p className="mt-0.5 text-[10px] text-on-surface-variant">
                      Currently building
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = activeSection === sectionId(link.href);

                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <button
                          type="button"
                          onClick={() => navigateTo(link.href)}
                          aria-current={isActive ? "location" : undefined}
                          className={`group flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-on-surface-variant hover:bg-primary/5 hover:text-primary"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                                  : "bg-on-surface-variant/30 group-hover:bg-primary"
                              }`}
                            />
                            <span className="text-sm font-medium">{link.name}</span>
                          </span>

                          {isActive ? (
                            <FaCheck size={11} className="text-primary" />
                          ) : (
                            <FaArrowRight
                              size={10}
                              className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                            />
                          )}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={openCommandPalette}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-xs font-semibold text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <FaSearch size={11} />
                    Search
                  </button>

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3 text-xs font-semibold text-on-surface-variant transition-all duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <ThemeIcon theme={theme} size={11} />
                    Theme
                  </button>
                </div>

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

              <div className="flex shrink-0 items-center justify-between border-t border-primary/10 px-6 py-5">
                <span className="text-[10px] text-on-surface-variant">
                  © {new Date().getFullYear()} KASHI TECH
                </span>
                <button
                  type="button"
                  onClick={() => openExternal(GITHUB_URL)}
                  className="text-on-surface-variant transition-colors hover:text-primary"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Command palette */}
      <AnimatePresence>
        {isCommandOpen && (
          <>
            <motion.button
              key="palette-backdrop"
              type="button"
              aria-label="Close command palette"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCommandOpen(false)}
              className="fixed inset-0 z-[1100] cursor-default bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              key="palette"
              role="dialog"
              aria-label="Command palette"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-[12vh] z-[1200] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-3xl border border-primary/20 bg-[var(--color-background)] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center gap-3 border-b border-primary/10 px-5 py-4">
                <FaTerminal size={14} className="text-primary" />

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
                  onClick={() => setIsCommandOpen(false)}
                  aria-label="Close command palette"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-on-surface-variant transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <FaTimes size={12} />
                </button>
              </div>

              <div className="max-h-[55vh] overflow-y-auto p-3">
                {commandItems.map((command, index) => {
                  const Icon = command.icon;

                  return (
                    <motion.button
                      key={command.id}
                      type="button"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={command.action}
                      className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-all duration-200 hover:bg-primary/10"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary/25 group-hover:bg-primary/10">
                        <Icon size={13} />
                      </span>

                      <span className="flex-1 text-sm font-medium text-on-surface-variant transition-colors group-hover:text-on-surface">
                        {command.label}
                      </span>

                      <FaArrowRight
                        size={10}
                        className="text-on-surface-variant/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between border-t border-primary/10 px-5 py-3">
                <span className="text-[10px] text-on-surface-variant">
                  Press
                  <kbd className="mx-1 rounded border border-primary/15 bg-primary/5 px-1.5 py-0.5 font-mono text-primary">
                    ESC
                  </kbd>
                  to close
                </span>
                <span className="text-[10px] text-on-surface-variant">
                  {theme === "dark" ? "Dark Mode" : "Light Mode"}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
          </>,
          portalTarget,
        )}
    </>
  );
}