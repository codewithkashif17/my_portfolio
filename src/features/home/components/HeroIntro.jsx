import { HERO_DATA } from "../HeroData";

export default function HeroIntro() {
  return (
    <div className="text-center lg:text-left">
      {/* Professional Badge */}
      <span className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        {HERO_DATA.badge}
      </span>

      {/* Main Heading */}
      <h1 className="font-serif text-4xl font-bold leading-tight text-on-surface sm:text-5xl md:text-6xl lg:text-7xl">
        {HERO_DATA.greeting}{" "}
        <span className="text-primary">{HERO_DATA.name}</span>
      </h1>

      {/* Professional Title */}
      <h2 className="mt-4 text-xl text-on-surface-variant md:text-2xl">
        {HERO_DATA.title}
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-base text-primary md:text-lg">
        {HERO_DATA.subtitle}
      </p>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-on-surface-variant lg:mx-0">
        {HERO_DATA.description}
      </p>
    </div>
  );
}
