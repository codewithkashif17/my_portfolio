
import { motion } from "framer-motion";
import useTypingEffect from "../../hooks/useTypingEffect";
import Button from "../../components/ui/Button"; // 👈 ADD THIS

const ROLES = ["Full Stack Developer", "React Developer", "UI Engineer", "Freelancer", "Flutter App Developer"];

export default function Hero() {
    const typedRole = useTypingEffect(ROLES);

    return (
        <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-10 pb-20 text-center md:pt-40">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8"
            >
                <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-50" />

                <div className="rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[3px] shadow-[0_0_40px_rgba(34,211,238,0.45)]">
                    <img
                        src="/pictures/myProfile.png"
                        className="h-32 w-32 rounded-full border-4 border-[#05050a] md:h-40 md:w-40"
                    />
                </div>
            </motion.div>

            <h1 className="text-4xl font-bold md:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Kashif Mehmood
                </span>
            </h1>

            <div className="mt-4 text-xl text-white/80 md:text-2xl">
                {typedRole}
                <span className="ml-1 inline-block w-[2px] h-6 animate-pulse bg-cyan-400" />
            </div>

            <p className="mt-6 max-w-xl text-white/60">
                I build fast, accessible, and visually polished web experiences.
            </p>

            {/* 🔥 BUTTONS NOW FROM UI COMPONENT */}
            <div className="mt-10 flex  gap-4 sm:flex-row ">
                <Button to="/projects" variant="primary">
                    View Projects
                </Button>

                <Button to="/contact" variant="secondary">
                    contact me
                </Button>
            </div>
        </section>
    );
}