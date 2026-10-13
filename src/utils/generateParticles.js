export const generateParticles = (count = 50) => {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 6,
  }));
};
