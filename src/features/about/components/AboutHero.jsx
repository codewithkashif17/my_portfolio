import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function AboutHero({ data }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Image Side */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1200}
          scale={1.02}
          transitionSpeed={1500}
          glareEnable
          glareMaxOpacity={0.1}
        >
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-[40px]" />

            {/* Frame */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-primary/20
                bg-surface-container
                p-3
                transition-all
                duration-500
                group-hover:border-primary/50
                group-hover:shadow-[0_25px_80px_rgba(242,202,80,0.15)]
              "
            >
              <img
                src={data.profileImage}
                alt={data.role}
                className="
                  w-full
                  h-[420px]
                  md:h-[520px]
                  object-cover
                  rounded-[24px]
                "
              />

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-primary/20
                  bg-black/40
                  backdrop-blur-xl
                  px-5
                  py-3
                "
              >
                <p className="text-xs uppercase tracking-widest text-primary">
                  Current Role
                </p>

                <h4 className="text-on-surface font-semibold">{data.role}</h4>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* Content Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
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
          {data.badge}
        </span>

        <h2
          className="
            mt-6
            font-serif
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-on-surface
          "
        >
          {data.title}
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-relaxed
            text-on-surface-variant
          "
        >
          {data.story}
        </p>

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-primary/15
            bg-surface-container
            p-6
          "
        >
          <h3
            className="
              text-primary
              font-semibold
              uppercase
              tracking-widest
              text-sm
            "
          >
            Mission
          </h3>

          <p
            className="
              mt-4
              leading-relaxed
              text-on-surface-variant
            "
          >
            {data.mission}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
