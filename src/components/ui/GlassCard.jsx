
import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}