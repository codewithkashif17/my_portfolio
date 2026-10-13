import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const numericValue = parseInt(value.replace(/\D/g, "")) || 0;

    let start = 0;

    const duration = 1800;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, value]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

export default function StatsGrid({ stats }) {
  return (
    <section className="mt-32">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <span
          className="
            inline-flex
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.25em]
            text-primary
          "
        >
          Statistics
        </span>

        <h2
          className="
            mt-5
            font-serif
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            text-on-surface
          "
        >
          Development Journey In Numbers
        </h2>

        <p
          className="
            mt-4
            max-w-3xl
            mx-auto
            text-on-surface-variant
            leading-relaxed
          "
        >
          Key milestones that represent my learning, growth, and development
          experience.
        </p>
      </motion.div>

      {/* Stats Grid */}

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.12,
        }}
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
        "
      >
        {stats.map((item) => (
          <motion.div key={item.label} variants={cardVariant}>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.03}
              perspective={1400}
              transitionSpeed={1500}
              glareEnable
              glareMaxOpacity={0.08}
            >
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-primary/15
                  bg-surface-container
                  p-8
                  text-center
                  transition-all
                  duration-500
                  hover:border-primary/40
                  hover:-translate-y-2
                  hover:shadow-[0_20px_80px_rgba(242,202,80,0.15)]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-primary/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Number */}

                <h3
                  className="
                    relative
                    font-serif
                    text-4xl
                    md:text-5xl
                    font-bold
                    text-primary
                  "
                >
                  <AnimatedNumber value={item.number} />
                </h3>

                {/* Label */}

                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    md:text-base
                    text-on-surface-variant
                  "
                >
                  {item.label}
                </p>

                {/* Accent Line */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-primary
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
