import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

import { ACTIVITY_CHART } from "../data/developerData";

const CHART_HEIGHT = 220;
const CHART_WIDTH = 900;

const MAX_VALUE = Math.max(
  ...ACTIVITY_CHART.flatMap((item) => [item.coding, item.study]),
);

export default function ActivityChart() {
  const codingPoints = createPoints(ACTIVITY_CHART.map((item) => item.coding));

  const studyPoints = createPoints(ACTIVITY_CHART.map((item) => item.study));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/15
        bg-surface-container-low/70
        p-5
        backdrop-blur-xl
        sm:p-7
      "
    >
      {/* Header */}
      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-primary
            "
          >
            Analytics
          </span>

          <h2
            className="
              mt-2
              font-serif
              text-2xl
              font-bold
              text-on-surface
              sm:text-3xl
            "
          >
            Daily Activity
          </h2>

          <p
            className="
              mt-2
              max-w-xl
              text-xs
              leading-5
              text-on-surface-variant
            "
          >
            A seven-day overview of coding and study activity.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4">
          <Legend label="Coding" className="bg-primary" />

          <Legend label="Study" className="bg-primary/40" />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-8 overflow-x-auto pb-2">
        <div
          className="
            min-w-[650px]
            rounded-2xl
            border
            border-primary/10
            bg-background/20
            p-4
            sm:p-5
          "
        >
          <div className="relative">
            {/* Y Axis */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                top-0
                flex
                w-9
                flex-col
                justify-between
                pr-2
                text-right
              "
            >
              {[MAX_VALUE, 4, 3, 2, 1, 0].map((value) => (
                <span
                  key={value}
                  className="
                      text-[9px]
                      text-on-surface-variant
                    "
                >
                  {value}h
                </span>
              ))}
            </div>

            {/* Graph */}
            <div className="ml-10">
              <svg
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                className="
                  h-[220px]
                  w-full
                  overflow-visible
                "
                preserveAspectRatio="none"
              >
                {/* Grid Lines */}
                {[0, 1, 2, 3, 4, 5].map((line) => {
                  const y = (CHART_HEIGHT / 5) * line;

                  return (
                    <line
                      key={line}
                      x1="0"
                      y1={y}
                      x2={CHART_WIDTH}
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.08"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Coding Area */}
                <motion.path
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  d={createAreaPath(codingPoints)}
                  fill="currentColor"
                  className="text-primary"
                  fillOpacity="0.07"
                />

                {/* Study Area */}
                <motion.path
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  d={createAreaPath(studyPoints)}
                  fill="currentColor"
                  className="text-primary"
                  fillOpacity="0.025"
                />

                {/* Coding Line */}
                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  d={createLinePath(codingPoints)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                />

                {/* Study Line */}
                <motion.path
                  initial={{
                    pathLength: 0,
                  }}
                  whileInView={{
                    pathLength: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.15,
                    ease: "easeInOut",
                  }}
                  d={createLinePath(studyPoints)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="6 6"
                  className="text-primary/50"
                />

                {/* Coding Points */}
                {codingPoints.map((point, index) => (
                  <circle
                    key={`coding-${index}`}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="currentColor"
                    className="text-primary"
                  />
                ))}

                {/* Study Points */}
                {studyPoints.map((point, index) => (
                  <circle
                    key={`study-${index}`}
                    cx={point.x}
                    cy={point.y}
                    r="3.5"
                    fill="currentColor"
                    className="text-primary/60"
                  />
                ))}
              </svg>

              {/* X Axis */}
              <div
                className="
                  mt-3
                  grid
                  grid-cols-7
                  gap-2
                "
              >
                {ACTIVITY_CHART.map((item) => (
                  <span
                    key={item.date}
                    className="
                        text-center
                        text-[9px]
                        text-on-surface-variant
                      "
                  >
                    {item.date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Summary */}
      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-4
        "
      >
        <SummaryItem label="Coding" value={`${getTotal("coding")}h`} />

        <SummaryItem label="Study" value={`${getTotal("study")}h`} />

        <SummaryItem label="Commits" value={getTotal("commits")} />

        <SummaryItem label="Solved" value={getTotal("solved")} />
      </div>
    </motion.article>
  );
}

function createPoints(values) {
  const horizontalGap = CHART_WIDTH / (values.length - 1);

  return values.map((value, index) => {
    const x = index * horizontalGap;

    const normalized = MAX_VALUE > 0 ? value / MAX_VALUE : 0;

    const y = CHART_HEIGHT - normalized * (CHART_HEIGHT - 15);

    return {
      x,
      y,
    };
  });
}

function createLinePath(points) {
  if (!points.length) {
    return "";
  }

  return points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");
}

function createAreaPath(points) {
  if (!points.length) {
    return "";
  }

  const linePath = createLinePath(points);

  const lastPoint = points[points.length - 1];

  const firstPoint = points[0];

  return `
    ${linePath}
    L ${lastPoint.x} ${CHART_HEIGHT}
    L ${firstPoint.x} ${CHART_HEIGHT}
    Z
  `;
}

function getTotal(key) {
  return ACTIVITY_CHART.reduce((total, item) => total + item[key], 0).toFixed(
    key === "coding" || key === "study" ? 1 : 0,
  );
}

function Legend({ label, className }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${className}`} />

      <span className="text-[10px] text-on-surface-variant">{label}</span>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-primary/10
        bg-background/30
        px-4
        py-3
      "
    >
      <p
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-wider
          text-on-surface-variant
        "
      >
        {label}
      </p>

      <div className="mt-1 flex items-center gap-2">
        <FaChartLine size={10} className="text-primary" />

        <span
          className="
            font-serif
            text-lg
            font-bold
            text-on-surface
          "
        >
          {value}
        </span>
      </div>
    </div>
  );
}
