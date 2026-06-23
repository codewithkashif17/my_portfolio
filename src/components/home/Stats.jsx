
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const STATS = [
  { label: "Projects Completed", value: "3+" },
  { label: "Client Rating", value: "4.9" },
  { label: "Years Experience", value: "1+" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard className="flex flex-col items-center gap-2 px-6 py-8 text-center">
              <span className="text-4xl font-bold text-cyan-400">{stat.value}</span>
              <span className="text-sm uppercase text-white/50">{stat.label}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}