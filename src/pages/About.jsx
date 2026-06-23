
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const HIGHLIGHTS = [
    { label: "Based in", value: "Kohat, Pakistan" },
    { label: "Experience", value: "1+ Years" },
    { label: "Focus", value: "Software Architecture" },
    { label: "Availability", value: "Open to Freelance" },
];

const QUICK_FACTS = [
    "Shipped 2+ production web apps in process",
    "Specialize in motion-rich, accessible interfaces",
    "Comfortable owning a feature from design to deploy",
    "Collaborative — works closely with design & product",
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-[#05050a] px-6 py-24 text-white md:py-24"
        >
            {/* Ambient backdrop glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 top-1/4 h-[24rem] w-[24rem] rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[20rem] w-[20rem] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
                {/* Picture frame */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-sm md:mx-0"
                >
                    {/* Rotating gradient ring */}
                    <motion.div
                        animate={{}}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-3 rounded-[2rem] bg-[conic-gradient(from_0deg,#22d3ee,#a855f7,#22d3ee)] opacity-70 blur-md"
                    />

                    {/* Static glow base */}
                    <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-purple-500/30 blur-2xl" />

                    {/* Frame */}
                    <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                        <div className="relative overflow-hidden rounded-[1.4rem]">
                            <img
                                src="../../../public/pictures/heroPic.png"
                                alt="Alex Carter portrait"
                                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            {/* Top sheen */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#05050a]/40 via-transparent to-white/[0.03]" />

                            {/* Corner accents */}
                            <span className="absolute left-3 top-3 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-cyan-400/70" />
                            <span className="absolute right-3 top-3 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-cyan-400/70" />
                            <span className="absolute bottom-3 left-3 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-purple-400/70" />
                            <span className="absolute bottom-3 right-3 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-purple-400/70" />
                        </div>

                        {/* Floating status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#0a0a12]/90 px-4 py-2 text-xs font-medium text-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            Available for work
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                >
                    <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
                        {/* About Me */}
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                       
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>

                    <p className="mt-6 text-sm leading-relaxed text-white/55 md:text-base">
                        I am a <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">Full Stack Developer</span>  with hands-on experience in building modern, responsive, and user-friendly web applications. I specialize in both front-end and back-end development, allowing me to transform ideas into complete digital solutions. My expertise includes <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold"> HTML, CSS, JavaScript, React, Node.js, PHP, MySQL </span>, and modern web development tools.

                        I enjoy solving real-world problems through clean, efficient, and scalable code. I have worked on various projects that strengthened my skills in website development, database management, API integration, and application deployment. I am continuously learning new technologies and improving my development skills to stay updated with industry trends.

                        My goal is to create high-quality digital experiences that not only look great but also deliver excellent performance and functionality.
                    </p>
                  

                    {/* Highlight grid */}
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {HIGHLIGHTS.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center backdrop-blur-md"
                            >
                                <p className="text-[10px] uppercase tracking-wider text-white/35">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-xs font-semibold text-white/85 sm:text-sm">
                                    {item.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick facts */}
                    <ul className="mt-8 flex flex-col gap-3">
                        {QUICK_FACTS.map((fact, i) => (
                            <motion.li
                                key={fact}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                                className="flex items-start gap-3 text-sm text-white/65"
                            >
                                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                                {fact}
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <Link
                            to="/contact"
                            className="mt-9 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-shadow hover:shadow-[0_0_38px_rgba(34,211,238,0.6)]"
                        >
                            Let's Work Together
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}