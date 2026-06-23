
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Expertise", href: "/expertise" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleLinkClick(href) {
    setActiveLink(href);
    setIsOpen(false);
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-0" : "py-0"
          }`}
      >
        <nav
          className={` flex max-w-full items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 sm:px-8 ${scrolled
              ? "border-white/10 bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
              : "border-white/5 bg-white/[0.02]"
            } mx-4 md:mx-auto`}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className="text-lg font-semibold tracking-wide text-white"
          >
            Mr<span className="text-cyan-400">.Kashi</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative">
                <Link
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="group relative block px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100 ${activeLink === link.href ? "scale-x-100" : ""
                      }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:inline-block"
          >
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.35)] transition-shadow hover:shadow-[0_0_30px_rgba(34,211,238,0.55)]"
            >
              Let's Talk
            </Link>
          </motion.div>

          {/* Hamburger button (mobile) */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-lg border border-white/10 bg-white/[0.04] md:hidden"
          >
            <motion.span
              animate={
                isOpen
                  ? { rotate: 45, y: 7, width: "20px" }
                  : { rotate: 0, y: 0, width: "20px" }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-white"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 rounded-full bg-white"
            />
            <motion.span
              animate={
                isOpen
                  ? { rotate: -45, y: -7, width: "20px" }
                  : { rotate: 0, y: 0, width: "20px" }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-white"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay + drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-40 flex h-full w-[78%] max-w-sm flex-col border-l border-white/10 bg-[#0a0a12]/95 px-8 pt-28 pb-10 backdrop-blur-2xl md:hidden"
            >
              {/* Ambient glow inside drawer */}
              <div className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

              <ul className="relative flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-colors duration-300 ${activeLink === link.href
                          ? "bg-white/[0.06] text-cyan-300"
                          : "text-white/70 hover:bg-white/[0.04] hover:text-white"
                        }`}
                    >
                      {link.label}

                      <span className="text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.4 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="block rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3.5 text-center text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                >
                  Let's Talk
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-auto text-center text-xs text-white/30"
              >
                © {new Date().getFullYear()} Mr.Kashi
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}