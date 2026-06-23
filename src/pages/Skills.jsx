import  { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
    {
        name: "Frontend",
        skills: [
            { label: "React", level: 95 },
            { label: "JavaScript", level: 92 },
            { label: "Tailwind CSS", level: 90 },
            { label: "Next.js", level: 85 },
        ],
    },
    {
        name: "Backend",
        skills: [
            { label: "Node.js", level: 80 },
            { label: "Express", level: 78 },
            { label: "MongoDB", level: 75 },
            { label: "REST APIs", level: 88 },
        ],
    },
    {
        name: "Tools",
        skills: [
            { label: "Git / GitHub", level: 90 },
            { label: "Figma", level: 82 },
            { label: "Webpack / Vite", level: 76 },
            { label: "Docker", level: 65 },
        ],
    },
];

function RingGauge({ level, size = 116, stroke = 8 }) {
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={stroke}
                />
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                    style={{
                        filter: "drop-shadow(0 0 6px rgba(34,211,238,0.45))",
                    }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{level}%</span>
            </div>
        </div>
    );
}

function SkillRing({ skill, i }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            style={{
                boxShadow: hovered
                    ? "0 20px 40px -15px rgba(34,211,238,0.15)"
                    : "0 8px 24px -12px rgba(0,0,0,0.4)",
            }}
        >
            <RingGauge level={skill.level} />
            <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-cyan-300">
                {skill.label}
            </span>
        </motion.div>
    );
}

export default function Skill() {
    return (
        <section
            id="skills"
            className="relative w-full bg-[#05050a] px-6 py-24 text-white md:py-32"
        >
            {/* Ambient backdrop glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute right-1/4 top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                        Capabilities
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                        Skills &amp;{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50 md:text-base">
                        Technologies and tools I rely on to design, build, and ship
                        production-grade web applications.
                    </p>
                </motion.div>

                {/* Categories */}
                <div className="flex flex-col gap-16">
                    {CATEGORIES.map((category, ci) => (
                        <div key={category.name}>
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: ci * 0.05 }}
                                className="mb-8 flex items-center gap-4"
                            >
                                <span className="font-mono text-xs text-white/40">
                                    0{ci + 1}
                                </span>
                                <h3 className="text-lg font-semibold text-white/90">
                                    {category.name}
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                            </motion.div>

                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                                {category.skills.map((skill, i) => (
                                    <SkillRing key={skill.label} skill={skill} i={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}