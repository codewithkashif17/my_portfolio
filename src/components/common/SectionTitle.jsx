import React from "react";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
          {badge}
        </span>
      )}

      <h2 className="font-serif text-4xl md:text-5xl font-bold text-on-surface">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant leading-relaxed">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-6 flex ${center ? "justify-center" : "justify-start"}`}
      >
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </div>
  );
}
