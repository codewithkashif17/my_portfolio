
import { HERO_DATA } from "../HeroData";

export default function TechStack({ technologies = HERO_DATA.technologies }) {
  return (
    <section className="border-t border-white/10 px-5 py-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-on-surface">
            Tech Stack
          </h3>

          <p className="mt-1 text-xs text-on-surface-variant">
            Technologies I work with
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-on-surface-variant">
          {technologies.length} technologies
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-on-surface-variant transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}
