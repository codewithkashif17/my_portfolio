import { useEffect, useState } from "react";

export const useSplashTimer = (duration, onFinish) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), duration);

    const finishTimer = setTimeout(() => onFinish?.(), duration + 900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  return exiting;
};
