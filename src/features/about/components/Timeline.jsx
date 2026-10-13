import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
    },
  },
};

export default function Timeline({ timeline }) {
  return (
    <section className="mt-32">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
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
          Journey
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
          Learning Timeline
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
          A timeline of my growth, learning, and development journey.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}

        <div
          className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            h-full
            w-[2px]
            bg-gradient-to-b
            from-transparent
            via-primary
            to-transparent
          "
        />

        {/* Mobile Line */}

        <div
          className="
            md:hidden
            absolute
            left-4
            top-0
            h-full
            w-[2px]
            bg-gradient-to-b
            from-transparent
            via-primary
            to-transparent
          "
        />

        <div className="space-y-12">
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="
                  relative
                  md:grid
                  md:grid-cols-2
                  md:gap-16
                  items-center
                "
              >
                {/* Desktop Left Side */}

                <div
                  className={`
                    hidden md:block
                    ${isEven ? "text-right" : ""}
                  `}
                >
                  {isEven && <TimelineCard item={item} />}
                </div>

                {/* Desktop Right Side */}

                <div
                  className={`
                    hidden md:block
                    ${!isEven ? "text-left" : ""}
                  `}
                >
                  {!isEven && <TimelineCard item={item} />}
                </div>

                {/* Mobile Card */}

                <div className="md:hidden pl-12">
                  <TimelineCard item={item} />
                </div>

                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-4
                    md:left-1/2
                    top-8
                    md:-translate-x-1/2
                    z-10
                  "
                >
                  <div
                    className="
                      relative
                      h-5
                      w-5
                      rounded-full
                      bg-primary
                      shadow-[0_0_25px_rgba(242,202,80,0.8)]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        animate-ping
                        bg-primary/40
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-primary/15
        bg-surface-container
        p-6
        transition-all
        duration-500
        hover:border-primary/40
        hover:-translate-y-2
        hover:shadow-[0_20px_70px_rgba(242,202,80,0.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -top-12
          -right-12
          h-32
          w-32
          rounded-full
          bg-primary/10
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Year */}

      <span
        className="
          inline-flex
          rounded-full
          bg-primary/10
          px-3
          py-1
          text-xs
          font-semibold
          tracking-widest
          uppercase
          text-primary
        "
      >
        {item.year}
      </span>

      {/* Title */}

      <h3
        className="
          mt-4
          text-xl
          font-semibold
          text-on-surface
        "
      >
        {item.title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-3
          leading-relaxed
          text-on-surface-variant
        "
      >
        {item.description}
      </p>

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
  );
}
