import { useMemo, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaStar,
  FaLayerGroup,
} from "react-icons/fa";

import Container from "../../components/layout/Container";
import SectionTitle from "../../components/common/SectionTitle";

import { PROJECTS_DATA, PROJECT_CATEGORIES } from "./ProjectsData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return PROJECTS_DATA;
    }

    return PROJECTS_DATA.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="
        relative
        py-24
        lg:py-32
        overflow-hidden
      "
    >
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================== */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-20
            left-[-120px]
            w-72
            h-72
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-20
            right-[-120px]
            w-80
            h-80
            rounded-full
            bg-primary-container/10
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-1/2
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/10
            to-transparent
          "
        />
      </div>

      <Container>
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <SectionTitle
          badge="My Work"
          title="Projects That Turn Ideas Into Reality"
          subtitle="
            A collection of applications and systems built
            with modern technologies, scalable architecture,
            and a strong focus on user experience.
          "
        />

        {/* =========================================
            CATEGORY FILTER
        ========================================== */}

        <div className="flex justify-center mb-14">
          <div
            className="
              inline-flex
              flex-wrap
              justify-center
              gap-2
              p-2
              rounded-2xl
              border
              border-primary/20
              bg-surface-container/70
              backdrop-blur-xl
              shadow-xl
            "
          >
            {PROJECT_CATEGORIES.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    relative
                    px-5
                    py-2.5
                    rounded-xl
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ease-out
                    ${
                      active
                        ? `
                          bg-primary
                          text-on-primary
                          shadow-lg
                          shadow-primary/20
                          scale-[1.03]
                        `
                        : `
                          text-on-surface-variant
                          hover:text-primary
                          hover:bg-primary/10
                        `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================
            PROJECT GRID
        ========================================== */}

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-primary/20
                  bg-surface-container
                  shadow-xl
                  transition-all
                  duration-500
                  ease-out

                  ${
                    isHovered
                      ? `
                        border-primary/50
                        -translate-y-3
                        shadow-2xl
                        shadow-primary/10
                      `
                      : ""
                  }

                  ${project.featured ? "lg:col-span-2" : ""}
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* =================================
                    CARD GLOW
                ================================== */}

                <div
                  className={`
                    absolute
                    inset-0
                    pointer-events-none
                    transition-opacity
                    duration-500
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <div
                    className="
                      absolute
                      -top-32
                      -right-32
                      w-72
                      h-72
                      rounded-full
                      bg-primary/15
                      blur-[100px]
                    "
                  />
                </div>

                {/* =================================
                    FEATURED BADGE
                ================================== */}

                {project.featured && (
                  <div
                    className="
                      absolute
                      top-5
                      left-5
                      z-20
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-primary/40
                      bg-background/80
                      backdrop-blur-md
                      text-primary
                      text-xs
                      font-semibold
                      tracking-wide
                    "
                  >
                    <FaStar className="text-[10px]" />
                    Featured Project
                  </div>
                )}

                {/* =================================
                    PROJECT IMAGE
                ================================== */}

                <div
                  className={`
                    relative
                    overflow-hidden
                    ${project.featured ? "h-[280px] md:h-[400px]" : "h-[260px]"}
                  `}
                >
                  {/* Image */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      ${isHovered ? "scale-110" : "scale-100"}
                    `}
                  />

                  {/* Dark overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-background
                      via-background/20
                      to-transparent
                    "
                  />

                  {/* Image hover shine */}

                  <div
                    className={`
                      absolute
                      inset-y-0
                      -left-full
                      w-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      skew-x-[-20deg]
                      transition-all
                      duration-1000
                      ${isHovered ? "left-[140%]" : ""}
                    `}
                  />

                  {/* Project category */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      flex
                      items-center
                      gap-2
                      px-3
                      py-1.5
                      rounded-full
                      bg-black/40
                      border
                      border-white/10
                      backdrop-blur-md
                      text-white
                      text-xs
                    "
                  >
                    <FaLayerGroup />

                    {project.category}
                  </div>
                </div>

                {/* =================================
                    CARD CONTENT
                ================================== */}

                <div className="relative p-6 md:p-8">
                  {/* Title */}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className="
                          font-serif
                          text-2xl
                          md:text-3xl
                          font-bold
                          text-on-surface
                          transition-colors
                          duration-300
                          group-hover:text-primary
                        "
                      >
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/70">
                        {project.stats.type}
                      </p>
                    </div>

                    {/* Arrow */}

                    <div
                      className={`
                        flex
                        shrink-0
                        items-center
                        justify-center
                        w-11
                        h-11
                        rounded-full
                        border
                        border-primary/20
                        bg-primary/5
                        text-primary
                        transition-all
                        duration-500
                        ${
                          isHovered
                            ? `
                              bg-primary
                              text-on-primary
                              rotate-[-45deg]
                              scale-110
                            `
                            : ""
                        }
                      `}
                    >
                      <FaArrowRight />
                    </div>
                  </div>

                  {/* Description */}

                  <p
                    className="
                      mt-5
                      text-sm
                      md:text-base
                      leading-relaxed
                      text-on-surface-variant
                    "
                  >
                    {project.description}
                  </p>

                  {/* =================================
                      TECHNOLOGIES
                  ================================== */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => {
                      const Icon = technology.icon;

                      return (
                        <div
                          key={technology.name}
                          title={technology.name}
                          className="
                              group/tech
                              flex
                              items-center
                              gap-2
                              px-3
                              py-2
                              rounded-xl
                              border
                              border-outline-variant/30
                              bg-background/40
                              text-on-surface-variant
                              transition-all
                              duration-300
                              hover:border-primary/40
                              hover:bg-primary/10
                              hover:text-primary
                              hover:-translate-y-1
                            "
                        >
                          <Icon
                            className="
                                text-base
                                transition-transform
                                duration-300
                                group-hover/tech:scale-125
                              "
                          />

                          <span className="text-xs">{technology.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* =================================
                      FEATURES
                  ================================== */}

                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-2
                      gap-x-4
                      gap-y-2
                    "
                  >
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="
                            flex
                            items-center
                            gap-2
                            text-xs
                            text-on-surface-variant
                          "
                      >
                        <span
                          className="
                              w-1.5
                              h-1.5
                              rounded-full
                              bg-primary
                              shrink-0
                            "
                        />

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* =================================
                      DIVIDER
                  ================================== */}

                  <div className="my-7 h-px bg-gradient-to-r from-primary/20 via-outline-variant/30 to-transparent" />

                  {/* =================================
                      FOOTER
                  ================================== */}

                  <div
                    className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      gap-4
                    "
                  >
                    {/* Status */}

                    <div className="flex items-center gap-2">
                      <span
                        className="
                          relative
                          flex
                          w-2.5
                          h-2.5
                        "
                      >
                        <span
                          className="
                            absolute
                            inline-flex
                            w-full
                            h-full
                            rounded-full
                            bg-primary
                            opacity-40
                            animate-ping
                          "
                        />

                        <span
                          className="
                            relative
                            inline-flex
                            w-2.5
                            h-2.5
                            rounded-full
                            bg-primary
                          "
                        />
                      </span>

                      <span className="text-xs text-on-surface-variant">
                        {project.stats.status}
                      </span>
                    </div>

                    {/* Links */}

                    <div className="flex items-center gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          border
                          border-outline-variant/40
                          text-on-surface-variant
                          text-sm
                          transition-all
                          duration-300
                          hover:border-primary/40
                          hover:text-primary
                          hover:bg-primary/10
                          hover:-translate-y-1
                        "
                      >
                        <FaGithub />
                        Code
                      </a>

                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          bg-primary
                          text-on-primary
                          text-sm
                          font-semibold
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:shadow-lg
                          hover:shadow-primary/30
                        "
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================== */}

        <div className="mt-20 text-center">
          <p className="text-on-surface-variant">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              mt-5
              px-7
              py-3.5
              rounded-full
              border
              border-primary/40
              text-primary
              font-medium
              transition-all
              duration-300
              hover:bg-primary
              hover:text-on-primary
              hover:scale-105
              hover:shadow-xl
              hover:shadow-primary/20
            "
          >
            Let's Build Something Great
            <FaArrowRight
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
