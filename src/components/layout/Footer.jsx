import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaHeart,
} from "react-icons/fa";

import { NAV_LINKS, SOCIAL_LINKS } from "../../constants/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-primary/15 bg-surface-container-low">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* MAIN FOOTER */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="
                inline-block
                font-serif
                text-2xl
                font-bold
                text-primary
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              KASHI TECH
            </a>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-on-surface-variant">
              Software Engineer focused on building modern web applications,
              mobile experiences, scalable APIs, and practical software
              solutions.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon href={SOCIAL_LINKS.github} label="GitHub">
                <FaGithub />
              </SocialIcon>

              <SocialIcon href={SOCIAL_LINKS.linkedin} label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>

              <SocialIcon href={SOCIAL_LINKS.email} label="Email">
                <FaEnvelope />
              </SocialIcon>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-on-surface-variant
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-primary
                    "
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Expertise
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "Full Stack Development",
                "React & Modern Frontend",
                "Node.js & REST APIs",
                "Flutter Development",
                "Database Design",
              ].map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-on-surface-variant
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>


        

        {/* DIVIDER */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* BOTTOM BAR */}

        <div
          className="
            flex
            flex-col
            gap-4
            text-center
            text-xs
            text-on-surface-variant
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >
          <p>© {currentYear} KASHI TECH. All rights reserved.</p>

          <p className="flex items-center justify-center gap-2 md:justify-end">
            Built with
            <FaCode className="text-primary" />
            React + Vite + Tailwind CSS
          </p>

          <p className="flex items-center justify-center gap-1 md:justify-end">
            Crafted with
            <FaHeart className="text-primary" />
            by Kashif Mehmood
          </p>
        </div>
      </div>

    </footer>
  );
}

/* SOCIAL ICON */

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-outline-variant/30
        bg-background/40
        text-on-surface-variant
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:bg-primary
        hover:text-on-primary
        hover:shadow-lg
        hover:shadow-primary/20
      "
    >
      {children}
    </a>
  );
}
