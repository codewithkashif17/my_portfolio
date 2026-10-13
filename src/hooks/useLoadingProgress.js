import { useEffect, useState } from "react";

export const useLoadingProgress = (duration = 2000) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);

      setPercent(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [duration]);

  return percent;
};
