import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERTISE = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "React, Next.js",
    description:
      "Creating responsive and scalable web interfaces with clean architecture, smooth user experience, and reusable components for modern applications.",
    tags: ["React", "Next.js"],
  },
  {
    id: "ui-engineering",
    title: "UI Engineering & Animation",
    tagline: "Tailwind CSS, Framer Motion",
    description:
      "Building modern, interactive, and visually engaging interfaces with responsive layouts, smooth animations, and consistent design systems.",
    tags: ["Tailwind CSS", "Framer Motion", "Design Systems", "Figma"],
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "Node.js, Express, REST APIs",
    description:
      "Developing secure and scalable backend services, handling API integrations, authentication systems, and efficient server-side logic.",
    tags: ["Node.js", "Express", "REST APIs"],
  },
  {
    id: "database",
    title: "Database Architecture",
    tagline: "MongoDB, MySQL",
    description:
      "Designing optimized database structures, managing data efficiently, and creating scalable solutions for modern applications.",
    tags: ["MongoDB", "MySQL", "Schema Design"],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    tagline: "Core Web Vitals, caching",
    description:
      "Improving application speed and performance through optimized assets, efficient rendering, lazy loading, and caching strategies.",
    tags: ["Lighthouse", "Code Splitting", "Lazy Loading", "CDN Caching"],
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    tagline: "Docker, Cloud Hosting",
    description:
      "Managing deployments, configuring hosting environments, and ensuring reliable application delivery with modern deployment workflows.",
    tags: ["Docker", "GitHub Actions"],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    tagline: "React Testing Library",
    description:
      "Writing reliable tests and maintaining code quality to ensure stable, bug-free, and production-ready applications.",
    tags: ["React Testing Library"],
  },
  {
    id: "collaboration",
    title: "Collaboration & Process",
    tagline: "Code Review, Mentoring",
    description:
      "Collaborating with teams, reviewing code, and contributing to clean development workflows while helping improve overall project quality.",
    tags: ["Code Review", "Mentoring", "Technical Docs"],
  },
];

function ExpertiseItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-colors duration-300 ${isOpen
        ? "border-cyan-400/40 bg-white/[0.05]"
        : "border-white/10 bg-white/[0.03] hover:border-white/20"
        }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-5 px-5 py-5 text-left sm:px-7"
      >
        <span
          className={`font-mono text-xs flex-shrink-0 transition-colors duration-300 ${isOpen ? "text-cyan-400" : "text-white/30"
            }`}
        >
          0{index + 1}
        </span>

        <div className="flex-1">
          <h3
            className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${isOpen ? "text-cyan-300" : "text-white"
              }`}
          >
            {item.title}
          </h3>
          <p className="mt-0.5 text-xs text-white/40 sm:text-sm">
            {item.tagline}
          </p>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-lg transition-colors duration-300 ${isOpen
            ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
            : "border-white/15 text-white/50"
            }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-6 pl-[3.1rem] pr-5 sm:px-7 sm:pl-[3.6rem]">
              <p className="text-sm leading-relaxed text-white/55">
                {item.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Expertise() {
  const [openId, setOpenId] = useState(EXPERTISE[0].id);

  function handleToggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section
      id="expertise"
      className="relative w-full bg-[#05050a] px-6 py-24 text-white md:py-32"
    >
      {/* Ambient backdrop glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 bottom-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">

            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/50 md:text-base">

            Skilled in building modern web and mobile applications with a strong focus on performance, scalability, clean design, and smooth user experiences using the latest technologies.

          </p>
        </motion.div>

        {/* Accordion — two independent columns on desktop, single column on mobile */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="flex flex-1 flex-col gap-4">
            {EXPERTISE.filter((_, i) => i % 2 === 0).map((item) => {
              const originalIndex = EXPERTISE.findIndex((e) => e.id === item.id);
              return (
                <ExpertiseItem
                  key={item.id}
                  item={item}
                  index={originalIndex}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              );
            })}
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {EXPERTISE.filter((_, i) => i % 2 === 1).map((item) => {
              const originalIndex = EXPERTISE.findIndex((e) => e.id === item.id);
              return (
                <ExpertiseItem
                  key={item.id}
                  item={item}
                  index={originalIndex}
                  isOpen={openId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}