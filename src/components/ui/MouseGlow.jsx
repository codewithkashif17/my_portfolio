
export default function MouseGlow({ x, y }) {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.12), transparent 70%)`,
            }}
        />
    );
}