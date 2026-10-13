export default function Particles({ particles }) {
  return (
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
  );
}
