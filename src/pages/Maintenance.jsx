import packageJson from "../../package.json";

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container text-on-primary mb-6">
           Portfolio Update In Progress
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
          Currently Upgrading Portfolio
        </h1>

        <p className="text-on-surface text-lg md:text-xl mb-4">
          I'm currently working on improvements, new projects,
          and enhanced features to provide a better experience.
        </p>

        <p className="text-outline">
          The portfolio will be available again soon.
        </p>

        <div className="mt-8 text-sm text-outline">
          Portfolio Version{" "}
          <span className="text-primary font-semibold">
           v1.0.0 <span>-&gt;</span> v{packageJson.version}

          </span>
        </div>

      </div>
    </div>
  );
}