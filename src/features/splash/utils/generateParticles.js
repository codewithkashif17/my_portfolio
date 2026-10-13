export function generateParticles(count = 100) {
  return Array.from({ length: count }, (_, index) => ({
    id: index,

    x: Math.random() * 100,

    y: Math.random() * 100,

    size: Math.random() * 2.5 + 0.5,

    opacity: Math.random() * 0.5 + 0.2,

    delay: Math.random() * 5,

    duration: Math.random() * 4 + 4,
  }));
}
