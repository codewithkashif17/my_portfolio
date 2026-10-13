import { useMemo } from "react";

import placeholderLogo from "../../../assets/hero_pic.png";

import Particles from "./Particles";
import SplashLogo from "./SplashLogo";
import SplashContent from "./SplashContent";

import { generateParticles } from "../utils/generateParticles";
import { useLoadingProgress } from "../hooks/useLoadingProgress";
import { useSplashTimer } from "../hooks/useSplashTimer";

import "../styles/splash.css";

export default function SplashScreen({
  onFinish,
  minDuration = 2400,
  logoSrc = placeholderLogo,
  name = "KASHI TECH",
  role = "Software Engineer",
}) {
  const progress = useLoadingProgress(minDuration);

  const isExiting = useSplashTimer(minDuration, onFinish);

  const particles = useMemo(() => generateParticles(102), []);

  return (
    <div
      className={`splash-root ${isExiting ? "splash-exit" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Ambient Background */}
      <div className="splash-glow splash-glow-a" aria-hidden="true" />

      <div className="splash-glow splash-glow-b" aria-hidden="true" />

      {/* Particles */}
      <Particles particles={particles} />

      {/* Main Content */}
      <main className="splash-content">
        <SplashLogo src={logoSrc} alt={name} />

        <SplashContent name={name} role={role} progress={progress} />
      </main>
    </div>
  );
}
