
import { motion } from "framer-motion";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/codewithkashif17",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.06-.01-1.92-2.78.51-3.5-.69-3.72-1.32-.13-.33-.68-1.35-1.16-1.62-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.76 2.68 1.26 3.33.96.1-.76.4-1.27.73-1.56-2.55-.29-5.21-1.31-5.21-5.81 0-1.28.45-2.34 1.18-3.16-.12-.3-.52-1.51.11-3.14 0 0 .96-.31 3.15 1.2a10.7 10.7 0 0 1 5.74 0c2.19-1.51 3.15-1.2 3.15-1.2.63 1.63.23 2.84.11 3.14.74.82 1.18 1.86 1.18 3.16 0 4.51-2.67 5.52-5.22 5.81.42.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.27 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kashif-mehmood-a47594397",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.75H5.67V18h2.67Zm-1.33-9.4a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08ZM18.33 18v-4.5c0-2.41-1.29-3.53-3.01-3.53-1.39 0-2.01.76-2.36 1.3v-1.12h-2.67c.04.78 0 8.35 0 8.35h2.67v-4.66c0-.25.02-.5.1-.68.21-.5.68-1.03 1.48-1.03 1.04 0 1.46.79 1.46 1.95V18h2.67Z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com/kamalikashi613",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.9 2H22l-7.2 8.2L23 22h-6.8l-5.3-6.9L4.9 22H2l7.7-8.8L1.5 2h7l4.8 6.3L18.9 2Zm-2.4 18h1.9L8.6 4H6.6l9.9 16Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alexcarter.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923443248489",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.94.56 3.76 1.53 5.3L2 22l4.93-1.6a9.86 9.86 0 0 0 5.11 1.4c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.78 14.07c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08.99-2.36.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.14.46.12.63-.05.17-.17.71-.83.9-1.11.19-.29.38-.24.64-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.69-.17 1.37Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:kashifmehmoodtech17@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 6.5L11.45 12.6c.33.24.77.24 1.1 0L21 6.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const RESOURCES = [
  { label: "Resume / CV", href: "./cv.pdf" },
  { label: "Case Studies", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Source Code", href: "https://github.com/codewithkashif17" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#05050a] px-6 pt-20 pb-8 text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-semibold tracking-wide">
              Mr<span className="text-cyan-400">.Kashi</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Full Stack Developer <br />
              Flutter App Developer
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance work
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {RESOURCES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/70">
              Connect
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {SOCIALS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.08] hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} Mr Kashi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-cyan-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-cyan-300">
              Terms of Use
            </a>
          </div>
          <p className="flex items-center gap-1.5">
            Built with
            <span className="text-cyan-400">React</span>
            &amp;
            <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}