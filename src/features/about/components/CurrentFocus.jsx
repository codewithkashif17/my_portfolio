import { motion } from "framer-motion";
import {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineCircleStack,
  HiOutlineRocketLaunch,
  HiOutlineBriefcase,
  HiOutlineUsers,
} from "react-icons/hi2";

const icons = [
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlineCircleStack,
  HiOutlineRocketLaunch,
];

export default function CurrentFocus({ currentFocus, availability }) {
  return (
    <section className="mt-32">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
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
          Current Focus
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
          What I'm Learning & Building
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
          Technologies, concepts, and projects I am currently focused on
          improving every day.
        </p>
      </motion.div>

      {/* Focus Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {currentFocus.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-primary/15
                bg-surface-container
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_20px_80px_rgba(242,202,80,0.15)]
              "
            >
              <div
                className="
                  absolute
                  -top-10
                  -right-10
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

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                <Icon size={28} />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-on-surface
                "
              >
                {item}
              </h3>

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
            </motion.div>
          );
        })}
      </div>

      {/* Availability Section */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          mt-20
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-primary/15
          bg-surface-container
          p-8
          lg:p-12
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            top-0
            right-0
            h-72
            w-72
            bg-primary/10
            blur-[120px]
          "
        />

        <div className="relative">
          <div
            className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-10
            "
          >
            {/* Left */}

            <div>
              <h3
                className="
                  font-serif
                  text-3xl
                  lg:text-4xl
                  font-bold
                  text-on-surface
                "
              >
                Open To Opportunities
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-on-surface-variant
                  leading-relaxed
                "
              >
                Interested in internships, freelance projects, collaborations,
                and opportunities where I can contribute, learn, and grow as a
                software engineer.
              </p>
            </div>

            {/* Right */}

            <div className="flex flex-wrap gap-4">
              {availability.map((item, index) => (
                <span
                  key={item}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-primary/20
                    bg-primary/10
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-primary
                  "
                >
                  {index === 0 && <HiOutlineBriefcase />}

                  {index === 1 && <HiOutlineRocketLaunch />}

                  {index === 2 && <HiOutlineCodeBracket />}

                  {index === 3 && <HiOutlineUsers />}

                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
