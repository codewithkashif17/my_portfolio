import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ExpertiseGrid({ expertise }) {
  return (
    <section className="mt-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
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
          Core Expertise
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
          Technologies & Specializations
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
          My primary areas of expertise across frontend, backend, mobile
          development, and database systems.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          staggerChildren: 0.12,
        }}
        className="
          grid
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {expertise.map((item) => (
          <motion.div key={item.title} variants={cardVariants}>
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1500}
              glareEnable
              glareMaxOpacity={0.08}
            >
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-primary/15
                  bg-surface-container
                  p-6
                  h-full
                  transition-all
                  duration-500
                  hover:border-primary/40
                  hover:-translate-y-2
                  hover:shadow-[0_20px_70px_rgba(242,202,80,0.15)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    -top-16
                    -right-16
                    h-40
                    w-40
                    rounded-full
                    bg-primary/10
                    blur-3xl
                    opacity-0
                    transition-all
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    h-16
                    w-16
                    rounded-2xl
                    bg-primary/10
                    text-3xl
                  "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-xl
                    font-semibold
                    text-on-surface
                  "
                >
                  {item.title}
                </h3>

                {/* Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-primary/15
                        bg-primary/5
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-on-surface-variant
                        transition-all
                        duration-300
                        hover:border-primary/40
                        hover:text-primary
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
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
