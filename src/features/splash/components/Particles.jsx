export default function Particles({ particles = [] }) {
  return (
    <div className="splash-particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="splash-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
}
