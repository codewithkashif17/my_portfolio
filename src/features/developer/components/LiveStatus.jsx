import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaClock,
  FaCircle,
} from "react-icons/fa";

import { DEVELOPER_STATUS } from "../data/developerData";

export default function LiveStatus() {
  const isOnline = DEVELOPER_STATUS.status === "online";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-primary/15
        bg-surface-container-low/70
        p-6
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-primary/30
        hover:shadow-2xl
        hover:shadow-primary/5
        sm:p-7
      "
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-primary/10
          blur-[80px]
          transition-opacity
          duration-500
          group-hover:bg-primary/15
        "
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
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
              Live Status
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
              Developer Status
            </h2>
          </div>

          {/* Laptop Icon */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-primary/15
              bg-primary/5
              text-primary
            "
          >
            <FaLaptopCode size={20} />
          </div>
        </div>

        {/* Status */}
        <div
          className="
            mt-7
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-primary/10
            bg-background/40
            px-4
            py-4
          "
        >
          <span className="relative flex h-3 w-3">
            {isOnline && (
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-60
                "
              />
            )}

            <FaCircle
              size={11}
              className={
                isOnline ? "relative text-green-400" : "relative text-gray-500"
              }
            />
          </span>

          <div>
            <p
              className={`
                text-sm
                font-semibold
                ${isOnline ? "text-green-400" : "text-on-surface-variant"}
              `}
            >
              {DEVELOPER_STATUS.statusLabel}
            </p>

            <p className="mt-0.5 text-xs text-on-surface-variant">
              {DEVELOPER_STATUS.message}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <StatusDetail
            icon={<FaMapMarkerAlt size={12} />}
            label="Mode"
            value={DEVELOPER_STATUS.location}
          />

          <StatusDetail
            icon={<FaClock size={12} />}
            label="Last Active"
            value={DEVELOPER_STATUS.lastActive}
          />
        </div>

        {/* Public Safety Note */}
        <div
          className="
            mt-5
            rounded-2xl
            border
            border-primary/10
            bg-primary/5
            px-4
            py-3
          "
        >
          <p
            className="
              text-[11px]
              leading-5
              text-on-surface-variant
            "
          >
            Public status only. Private system information such as IP address,
            running processes, and hardware details are never exposed.
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function StatusDetail({ icon, label, value }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-primary/10
        bg-background/30
        p-4
      "
    >
      <div className="flex items-center gap-2 text-primary">
        {icon}

        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
          "
        >
          {label}
        </span>
      </div>

      <p
        className="
          mt-2
          text-sm
          font-medium
          text-on-surface
        "
      >
        {value}
      </p>
    </div>
  );
}
