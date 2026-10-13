import { useMemo } from "react";

export default function SplashContent({
  name,
  role,
  progress,
}) {
  const letters = useMemo(
    () => Array.from(name),
    [name]
  );

  return (
    <div className="splash-content-wrapper">
      {/* Name */}
      <div className="splash-name-wrapper">
        <h1
          className="splash-name"
          aria-label={name}
        >
          {letters.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={`splash-letter splash-letter-${index % 8}`}
              aria-hidden="true"
              style={{
                animationDelay: `${0.35 + index * 0.09}s`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Role */}
      <p className="splash-role">
        {role}
      </p>

      {/* Temporary Progress */}
      <div className="splash-progress splash-text-in-delayed">
        <div className="splash-bar">
          <div
            className="splash-bar-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <span className="splash-percent">
          {Math.floor(progress)}%
        </span>
      </div>
    </div>
  );
}