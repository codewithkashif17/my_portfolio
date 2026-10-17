
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
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute left-[-120px] top-20
            h-72 w-72 rounded-full
            bg-primary/10 blur-[120px]
          "
        />

        <div
          className="
            absolute bottom-20 right-[-120px]
            h-80 w-80 rounded-full
            bg-primary-container/10 blur-[130px]
          "
        />

        <div
          className="
            absolute inset-x-0 top-1/2 h-px
            bg-gradient-to-r from-transparent
            via-primary/10 to-transparent
          "
        />
      </div>

      <Container>
        {/* SECTION HEADER */}

        <SectionTitle
          badge="My Work"
          title="Projects That Turn Ideas Into Reality"
          subtitle="A collection of applications and systems built with modern technologies, scalable architecture, and a strong focus on user experience."
        />

        {/* CATEGORY FILTER */}

        <div className="mb-14 flex justify-center">
          <div
            className="
              inline-flex flex-wrap justify-center gap-2
              rounded-2xl border border-primary/20
              bg-surface-container/70 p-2
              shadow-xl backdrop-blur-xl
            "
          >
            {PROJECT_CATEGORIES.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={active}
                  className={`
                    relative rounded-xl px-5 py-2.5
                    text-sm font-medium
                    transition-all duration-300 ease-out
                    ${
                      active
                        ? "scale-[1.03] bg-primary text-on-primary shadow-lg shadow-primary/20"
                        : "text-on-surface-variant hover:bg-primary/10 hover:text-primary"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECT GRID */}

        <div className="grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isHovered = hoveredProject === project.id;

            // Supports both correct and legacy property names.
            const videoSrc = project.video || project.vedio;
            const imageSrc = project.image;

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`
                  group relative overflow-hidden
                  rounded-[28px] border border-primary/20
                  bg-surface-container shadow-xl
                  transition-all duration-500 ease-out
                  ${
                    isHovered
                      ? "-translate-y-3 border-primary/50 shadow-2xl shadow-primary/10"
                      : ""
                  }
                  ${project.featured ? "lg:col-span-2" : ""}
                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* CARD GLOW */}

                <div
                  className={`
                    pointer-events-none absolute inset-0
                    transition-opacity duration-500
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <div
                    className="
                      absolute -right-32 -top-32
                      h-72 w-72 rounded-full
                      bg-primary/15 blur-[100px]
                    "
                  />
                </div>

                {/* FEATURED BADGE */}

                {project.featured && (
                  <div
                    className="
                      absolute left-5 top-5 z-20
                      inline-flex items-center gap-2
                      rounded-full border border-primary/40
                      bg-background/80 px-3 py-1.5
                      text-xs font-semibold tracking-wide
                      text-primary backdrop-blur-md
                    "
                  >
                    <FaStar className="text-[10px]" />
                    Featured Project
                  </div>
                )}

                {/* PROJECT MEDIA: VIDEO OR IMAGE */}

                <div
                  className={`
                    relative overflow-hidden bg-background
                    ${
                      project.featured
                        ? "h-[280px] md:h-[400px]"
                        : "h-[260px]"
                    }
                  `}
                >
                  {videoSrc ? (
                    <video
                      key={videoSrc}
                      src={videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={`${project.title} preview`}
                      className={`
                        h-full w-full object-cover
                        transition-transform duration-700 ease-out
                        ${
                          isHovered
                            ? "scale-110"
                            : "scale-100"
                        }
                      `}
                      onError={(event) => {
                        console.error(
                          `Video load nahi hui: ${project.title}`,
                          event.currentTarget.currentSrc,
                        );
                      }}
                    />
                  ) : imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className={`
                        h-full w-full object-cover
                        transition-transform duration-700 ease-out
                        ${
                          isHovered
                            ? "scale-110"
                            : "scale-100"
                        }
                      `}
                      onError={(event) => {
                        console.error(
                          `Image load nahi hui: ${project.title}`,
                          event.currentTarget.src,
                        );
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-on-surface-variant">
                      Project preview unavailable
                    </div>
                  )}

                  {/* DARK OVERLAY */}

                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t from-background
                      via-background/20 to-transparent
                    "
                  />

                  {/* HOVER SHINE */}

                  <div
                    className={`
                      pointer-events-none absolute inset-y-0
                      -left-full w-1/2 skew-x-[-20deg]
                      bg-gradient-to-r from-transparent
                      via-white/10 to-transparent
                      transition-all duration-1000
                      ${isHovered ? "left-[140%]" : ""}
                    `}
                  />

                  {/* PROJECT CATEGORY */}

                  <div
                    className="
                      absolute bottom-5 left-5
                      flex items-center gap-2
                      rounded-full border border-white/10
                      bg-black/40 px-3 py-1.5
                      text-xs text-white backdrop-blur-md
                    "
                  >
                    <FaLayerGroup />
                    {project.category}
                  </div>
                </div>

                {/* CARD CONTENT */}

                <div className="relative p-6 md:p-8">
                  {/* TITLE */}

                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3
                        className="
                          font-serif text-2xl font-bold
                          text-on-surface transition-colors
                          duration-300 group-hover:text-primary
                          md:text-3xl
                        "
                      >
                        {project.title}
                      </h3>

                      {project.shortTitle && (
                        <p className="mt-1 text-sm text-on-surface-variant">
                          {project.shortTitle}
                        </p>
                      )}

                      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/70">
                        {project.stats?.type || project.category}
                      </p>
                    </div>

                    {/* ARROW */}

                    <div
                      className={`
                        flex h-11 w-11 shrink-0 items-center
                        justify-center rounded-full border
                        border-primary/20 bg-primary/5
                        text-primary transition-all duration-500
                        ${
                          isHovered
                            ? "rotate-[-45deg] scale-110 bg-primary text-on-primary"
                            : ""
                        }
                      `}
                    >
                      <FaArrowRight />
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5 text-sm leading-relaxed
                      text-on-surface-variant md:text-base
                    "
                  >
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies?.map((technology) => {
                      const Icon = technology.icon;

                      return (
                        <div
                          key={technology.name}
                          title={technology.name}
                          className="
                            group/tech flex items-center gap-2
                            rounded-xl border border-outline-variant/30
                            bg-background/40 px-3 py-2
                            text-on-surface-variant
                            transition-all duration-300
                            hover:-translate-y-1 hover:border-primary/40
                            hover:bg-primary/10 hover:text-primary
                          "
                        >
                          {Icon && (
                            <Icon
                              className="
                                text-base transition-transform
                                duration-300 group-hover/tech:scale-125
                              "
                            />
                          )}

                          <span className="text-xs">
                            {technology.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* FEATURES */}

                  {project.features?.length > 0 && (
                    <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex items-center gap-2
                            text-xs text-on-surface-variant
                          "
                        >
                          <span
                            className="
                              h-1.5 w-1.5 shrink-0
                              rounded-full bg-primary
                            "
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* DIVIDER */}

                  <div className="my-7 h-px bg-gradient-to-r from-primary/20 via-outline-variant/30 to-transparent" />

                  {/* FOOTER */}

                  <div
                    className="
                      flex flex-col gap-4
                      sm:flex-row sm:items-center
                      sm:justify-between
                    "
                  >
                    {/* STATUS */}

                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                      </span>

                      <span className="text-xs text-on-surface-variant">
                        {project.stats?.status || "Available"}
                      </span>
                    </div>

                    {/* PROJECT LINKS */}

                    <div className="flex flex-wrap items-center gap-3">
                      {project.links?.github &&
                        project.links.github !== "#" && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} source code`}
                            className="
                              inline-flex items-center justify-center
                              gap-2 rounded-xl border
                              border-outline-variant/40 px-4 py-2.5
                              text-sm text-on-surface-variant
                              transition-all duration-300
                              hover:-translate-y-1 hover:border-primary/40
                              hover:bg-primary/10 hover:text-primary
                            "
                          >
                            <FaGithub />
                            Code
                          </a>
                        )}

                      {project.links?.live &&
                        project.links.live !== "#" && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="
                              inline-flex items-center justify-center
                              gap-2 rounded-xl bg-primary
                              px-4 py-2.5 text-sm font-semibold
                              text-on-primary transition-all duration-300
                              hover:scale-105 hover:shadow-lg
                              hover:shadow-primary/30
                            "
                          >
                            <FaExternalLinkAlt />
                            Live Demo
                          </a>
                        )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* EMPTY FILTER RESULT */}

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-on-surface-variant">
            No projects found in this category.
          </p>
        )}

        {/* BOTTOM CTA */}

        <div className="mt-20 text-center">
          <p className="text-on-surface-variant">
            Interested in working together?
          </p>

          <a
            href="#contact"
            className="
              group mt-5 inline-flex items-center gap-3
              rounded-full border border-primary/40
              px-7 py-3.5 font-medium text-primary
              transition-all duration-300
              hover:scale-105 hover:bg-primary
              hover:text-on-primary hover:shadow-xl
              hover:shadow-primary/20
            "
          >
            Let's Build Something Great

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  );
}
