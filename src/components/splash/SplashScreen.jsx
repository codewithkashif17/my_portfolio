import { useMemo } from "react";

import placeholderLogo from "../../assets/hero_pic.png";

import Particles from "./Particles";

import { generateParticles } from "../../utils/generateParticles";
import { useLoadingProgress } from "../../hooks/useLoadingProgress";
import { useSplashTimer } from "../../hooks/useSplashTimer";

export default function SplashScreen({
  onFinish,
  minDuration = 2400,
  logoSrc = placeholderLogo,
  name = "KASHI TECH",
  role = "Software Engineer",
}) {
  const percent = useLoadingProgress(minDuration);

  const exiting = useSplashTimer(minDuration, onFinish);

  const particles = useMemo(() => generateParticles(102), []);

  return (
    <div className={`splash-root ${exiting ? "splash-exit" : ""}`}>
      {/* Ambient Glow */}
      <div className="splash-glow splash-glow-a" />
      <div className="splash-glow splash-glow-b" />

      {/* Particles */}
      <Particles particles={particles} />

      {/* Content */}
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
              style={{
                width: `${percent}%`,
              }}
            />
          </div>

          <div className="splash-percent">{Math.floor(percent)}%</div>
        </div>
      </div>
    </div>
  );
}
