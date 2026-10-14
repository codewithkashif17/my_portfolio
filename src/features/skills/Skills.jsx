import { useMemo, useState } from "react";

import { FaArrowRight, FaCheckCircle, FaCode, FaStar } from "react-icons/fa";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";

import { SKILL_CATEGORIES, SKILLS_DATA, SKILL_STATS } from "./SkillsData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const activeSkills = useMemo(() => {
    return SKILLS_DATA[activeCategory] || [];
  }, [activeCategory]);

  const activeCategoryData = SKILL_CATEGORIES.find(
    (category) => category.id === activeCategory,
  );

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/*   BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top Glow */}
        <div
          className="
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[140px]
          "
        />

        {/* Left Glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-1/2
            h-[400px]
            w-[400px]
            -translate-y-1/2
            rounded-full
            bg-primary-container/10
            blur-[120px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            right-[-180px]
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-secondary/10
            blur-[120px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(rgba(242,202,80,1)_1px,transparent_1px),linear-gradient(90deg,rgba(242,202,80,1)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      <Container>
        {/* SECTION HEADER */}

        <SectionTitle
          badge="Technical Expertise"
          title="Skills & Technologies"
          subtitle="
            Technologies and tools I use to design,
            develop and maintain modern software systems.
          "
        />

        {/*  SKILL STATISTICS */}

        <div
          className="
            mb-16
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
          "
        >
          {SKILL_STATS.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-primary/15
                  bg-surface-container/70
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-xl
                  hover:shadow-primary/10
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-primary/10
                    blur-2xl
                    transition-transform
                    duration-500
                    group-hover:scale-150
                  "
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/20
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                  >
                    <Icon className="text-xl" />
                  </div>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-2xl
                        font-bold
                        text-primary
                      "
                    >
                      {stat.value}
                    </h3>

                    <p className="text-sm text-on-surface-variant">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN SKILLS PANEL */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-primary/20
            bg-surface-container/60
            backdrop-blur-xl
            shadow-2xl
          "
        >
          {/* Panel Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[400px]
              w-[400px]
              rounded-full
              bg-primary/10
              blur-[120px]
            "
          />

          <div
            className="
              relative
              grid
              lg:grid-cols-[260px_1fr]
            "
          >
            {/* CATEGORY SIDEBAR*/}

            <aside
              className="
                border-b
                border-primary/10
                lg:border-b-0
                lg:border-r
                border-primary/10
                p-5
                lg:p-6
              "
            >
              <div className="mb-6 px-2">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-primary
                  "
                >
                  Expertise
                </p>

                <h3
                  className="
                    mt-2
                    font-serif
                    text-2xl
                    font-bold
                    text-on-surface
                  "
                >
                  Tech Stack
                </h3>
              </div>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                  lg:grid-cols-1
                "
              >
                {SKILL_CATEGORIES.map((category) => {
                  const Icon = category.icon;

                  const active = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className={`
                        group
                        relative
                        flex
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3.5
                        text-left
                        transition-all
                        duration-300

                        ${
                          active
                            ? `
                              bg-primary
                              text-on-primary
                              shadow-lg
                              shadow-primary/20
                              scale-[1.02]
                            `
                            : `
                              text-on-surface-variant
                              hover:bg-primary/10
                              hover:text-primary
                            `
                        }
                      `}
                    >
                      <Icon
                        className={`
                          text-lg
                          transition-transform
                          duration-300
                          ${active ? "scale-110" : "group-hover:scale-110"}
                        `}
                      />

                      <span className="text-sm font-medium">
                        {category.label}
                      </span>

                      {active && (
                        <FaArrowRight
                          className="
                            ml-auto
                            text-xs
                          "
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* SKILLS CONTENT */}

            <div className="p-6 md:p-8 lg:p-10">
              {/* Header */}

              <div
                className="
                  mb-8
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-primary
                    "
                  >
                    {activeCategoryData && <activeCategoryData.icon />}

                    <span
                      className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-widest
                      "
                    >
                      {activeCategoryData?.label}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-3xl
                      font-bold
                      text-on-surface
                    "
                  >
                    Development Skills
                  </h3>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-on-surface-variant
                  "
                >
                  <FaCheckCircle className="text-primary" />
                  {activeSkills.length} technologies
                </div>
              </div>

              {/* SKILL CARDS*/}

              <div
                className="
                  grid
                  gap-4
                  md:grid-cols-2
                "
              >
                {activeSkills.map((skill, index) => {
                  const Icon = skill.icon;

                  const hovered = hoveredSkill === skill.name;

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-outline-variant/30
                        bg-background/40
                        p-5
                        transition-all
                        duration-500
                        ease-out

                        ${
                          hovered
                            ? `
                              -translate-y-2
                              border-primary/40
                              bg-primary/[0.04]
                              shadow-xl
                              shadow-primary/10
                            `
                            : ""
                        }
                      `}
                      style={{
                        animationDelay: `${index * 80}ms`,
                      }}
                    >
                      {/* Hover glow */}

                      <div
                        className={`
                          pointer-events-none
                          absolute
                          -right-10
                          -top-10
                          h-28
                          w-28
                          rounded-full
                          bg-primary/10
                          blur-3xl
                          transition-all
                          duration-500
                          ${hovered ? "scale-150 opacity-100" : "opacity-0"}
                        `}
                      />

                      {/* Top row */}

                      <div
                        className="
                          relative
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-4
                          "
                        >
                          {/* Icon */}

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-primary/20
                              bg-primary/10
                              text-primary
                              transition-all
                              duration-500
                              ${
                                hovered
                                  ? `
                                    scale-110
                                    rotate-6
                                    bg-primary
                                    text-on-primary
                                  `
                                  : ""
                              }
                            `}
                          >
                            <Icon className="text-xl" />
                          </div>

                          <div>
                            <div
                              className="
                                flex
                                items-center
                                gap-2
                              "
                            >
                              <h4
                                className="
                                  font-semibold
                                  text-on-surface
                                  transition-colors
                                  duration-300
                                  group-hover:text-primary
                                "
                              >
                                {skill.name}
                              </h4>

                              {skill.featured && (
                                <FaStar
                                  className="
                                    text-[10px]
                                    text-primary
                                  "
                                />
                              )}
                            </div>

                            <p
                              className="
                                mt-1
                                text-xs
                                text-on-surface-variant
                              "
                            >
                              {skill.experience}
                            </p>
                          </div>
                        </div>

                        {/* Percentage */}

                        <span
                          className="
                            shrink-0
                            font-serif
                            text-lg
                            font-bold
                            text-primary
                          "
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Description */}

                      <p
                        className="
                          relative
                          mt-4
                          text-xs
                          leading-relaxed
                          text-on-surface-variant
                        "
                      >
                        {skill.description}
                      </p>

                      {/* Progress */}

                      <div className="relative mt-5">
                        <div
                          className="
                            h-1.5
                            overflow-hidden
                            rounded-full
                            bg-primary/10
                          "
                        >
                          <div
                            className="
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-primary-container
                              via-primary
                              to-secondary
                              shadow-[0_0_12px_rgba(242,202,80,0.35)]
                              transition-all
                              duration-1000
                              ease-out
                            "
                            style={{
                              width: `${skill.level}%`,
                            }}
                          />
                        </div>

                        {/* Scale markers */}

                        <div
                          className="
                            mt-2
                            flex
                            justify-between
                            text-[9px]
                            uppercase
                            tracking-widest
                            text-on-surface-variant/50
                          "
                        >
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TECH STRIP*/}

        <div
          className="
            mt-12
            relative
            overflow-hidden
            rounded-2xl
            border
            border-primary/15
            bg-primary/[0.03]
            p-6
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-5
              text-center
              md:flex-row
              md:text-left
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-primary
                "
              >
                Always Learning
              </p>

              <h3
                className="
                  mt-1
                  font-serif
                  text-xl
                  font-bold
                  text-on-surface
                "
              >
                Expanding my engineering toolkit
              </h3>
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-sm
                text-on-surface-variant
              "
            >
              <FaCode className="text-primary" />

              <span>Architecture • APIs • Databases • UI/UX</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
