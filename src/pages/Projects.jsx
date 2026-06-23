import { useRef, useState } from "react";
import { motion } from "framer-motion";


const PROJECTS = [
    {
        index: "01",
        title: "Data Dashboard",
        category: "Data Dashboard",
        description:
            "A real-time analytics dashboard with custom charting, role-based access, and sub-second data refresh across distributed sources.",
        tags: ["React", "TypeScript", "Tailwindcss", "ML AI"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "#",
        codeUrl: "#",
    },
    {
        index: "02",
        title: "Tic Tac Toe Game",
        category: "Games",
        description:
            "Headless storefront with optimistic cart updates, Stripe checkout, and edge-cached product pages for instant loads.",
        tags: ["Next.js", "Tailwindcss"],
        image: "/tic-tac-toe-game_Picture.png",
        liveUrl: "https://tic-tac-toe-game-smsu.vercel.app/",
        codeUrl: "https://github.com/codewithkashif17/tic-tac-toe-game.git",
    },
    {
        index: "03",
        title: "ToDo App",
        category: "Productivity",
        description:
            "A modern and clean Todo List application built with React.js.",
        tags: ["React",],
        image:
            "/todoApp_picture.png",
        liveUrl: "https://todo-app-iota-gilt-16.vercel.app/",
        codeUrl: "https://github.com/codewithkashif17/todo-app.git",
    },
    {
        index: "04",
        title: "My Portfolio",
        category: "Portfolio",
        description:
            "Designed and developed a fully responsive personal portfolio using React for dynamic UI components, Tailwind CSS for modern styling, and Framer Motion for seamless animations and transitions. The portfolio highlights my projects, technical skills, and creativity with a focus on performance, accessibility, and user experience.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        image:
            "/myPortfolio_pic.png",
        liveUrl: "https://my-portfolio-gv7k.vercel.app/",
        codeUrl: "https://github.com/codewithkashif17/my_portfolio",
    },
];

function ProjectCard({ project, i }) {
    const cardRef = useRef(null);
    const [spot, setSpot] = useState({ x: 50, y: 50, active: false });

    function handleMouseMove(e) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpot({ x, y, active: true });
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30"
            style={{
                boxShadow: spot.active
                    ? "0 30px 60px -15px rgba(0,0,0,0.6)"
                    : "0 10px 30px -10px rgba(0,0,0,0.5)",
            }}
        >
            {/* Cursor spotlight */}
            <div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(280px circle at ${spot.x}% ${spot.y}%, rgba(34,211,238,0.12), transparent 70%)`,
                }}
            />

            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden md:h-64">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-[#05050a]/30 to-transparent" />

                {/* Index number watermark */}
                <span className="absolute right-4 top-4 select-none font-mono text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-cyan-400/20">
                    {project.index}
                </span>

                {/* Category chip */}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 backdrop-blur-md">
                    {project.category}
                </span>
            </div>

            {/* Body */}
            <div className="relative z-10 flex flex-col gap-4 p-7">
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/55">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/60 transition-colors duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-3 flex items-center gap-4 border-t border-white/10 pt-5">
                    <motion.a
                        href={project.liveUrl}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyan-300"
                    >
                        Live Demo
                        <span aria-hidden className="text-cyan-400">
                            →
                        </span>
                    </motion.a>
                    <span className="text-white/15">|</span>
                    <motion.a
                        href={project.codeUrl}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
                    >
                        Source Code
                    </motion.a>
                </div>
            </div>

            {/* Bottom glow line on hover */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
        </motion.div>
    );
}

export default function Project() {
    return (
        <section
            id="projects"
            className="relative w-full bg-[#05050a] px-6 py-24 text-white md:py-32"
        >
            {/* Ambient backdrop */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                    
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                            My{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-relaxed text-white/50 md:text-right">
                        A curated selection of products I've designed and engineered end
                        to end — from concept through production deployment.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard key={project.title} project={project} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}