
import { motion } from "framer-motion";

export default function FloatingShape({
  className,
  duration = 12,
  delay = 0,
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}