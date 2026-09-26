import { useEffect, useMemo, useState } from "react";
import placeholderLogo from "./assets/hero_pic.png";


export default function SplashScreen({
  onFinish,
  minDuration = 2400,
  logoSrc = placeholderLogo,
  name = "KASHI TECH",
  role = "Software Engineer",
}) {
  const [percent, setPercent] = useState(0);
  const [exiting, setExiting] = useState(false);

  // gently randomized particle field, generated once
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 6,
      })),
    []
  );

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / minDuration) * 100);
      setPercent(pct);
      if (pct < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => setExiting(true), minDuration);
    const finishTimer = setTimeout(
      () => onFinish && onFinish(),
      minDuration + 900
    );
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [minDuration, onFinish]);

  return (
    <div className={`splash-root ${exiting ? "splash-exit" : ""}`}>
      {/* deep ambient glow layers */}
      <div className="splash-glow splash-glow-a" />
      <div className="splash-glow splash-glow-b" />

      {/* floating gold particles */}
      <div className="splash-particles">
        {particles.map((p, i) => (
          <span
            key={i}
            className="splash-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="splash-content">
        <div className="splash-ring-outer">
          <div className="splash-ring-spin" />
          <div className="splash-ring-inner">
            <img src={logoSrc} alt={name} className="splash-photo" />
          </div>
        </div>

        <div className="splash-text-in">
          <div className="splash-name">{name}</div>
          <div className="splash-role">{role}</div>
        </div>

        <div className="splash-progress splash-text-in-delayed">
          <div className="splash-bar">
            <div
              className="splash-bar-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="splash-percent">{Math.floor(percent)}%</div>
        </div>
      </div>
    </div>
  );
}
