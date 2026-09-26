import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#eac249",
        "on-error-container": "#ffdad6",
        "on-tertiary-container": "#454544",
        "on-primary": "#3c2f00",
        "on-secondary-container": "#352800",
        "on-background": "#e5e2e1",
        "tertiary-container": "#b4b2b2",
        "outline-variant": "#4d4635",
        "surface-container": "#201f1f",
        "primary": "#f2ca50",
        "inverse-primary": "#735c00",
        "surface-container-high": "#2a2a2a",
        "tertiary-fixed": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "primary-fixed": "#ffe088",
        "error": "#ffb4ab",
        "surface": "#131313",
        "on-primary-fixed": "#241a00",
        "surface-variant": "#353534",
        "outline": "#99907c",
        "on-surface-variant": "#d0c5af",
        "error-container": "#93000a",
        "on-surface": "#e5e2e1",
        "on-error": "#690005",
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#d4af37",
        "surface-tint": "#e9c349",
        "secondary-container": "#b08c10",
        "secondary": "#eac249",
        "on-secondary": "#3d2f00",
        "on-tertiary": "#313030",
        "tertiary": "#d0cdcd",
        "inverse-on-surface": "#313030",
        "background": "#131313",
        "secondary-fixed": "#ffe08b",
        "on-primary-container": "#554300",
        "primary-fixed-dim": "#e9c349",
        "surface-container-low": "#1c1b1b",
        "surface-dim": "#131313",
        "on-secondary-fixed": "#241a00",
        "tertiary-fixed-dim": "#c8c6c5",
        "surface-bright": "#3a3939",
        "on-primary-fixed-variant": "#574500",
        "on-tertiary-fixed": "#1c1b1b",
        "surface-container-highest": "#353534",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        gutter: "24px",
        "margin-desktop": "64px",
        "container-max": "1440px",
        unit: "8px",
        "margin-mobile": "16px",
      },

      fontFamily: {
        "body-lg": ["Inter"],
        "headline-lg": ["Playfair Display"],
        "display-lg": ["Playfair Display"],
        "body-md": ["Inter"],
        "headline-md": ["Playfair Display"],
        "label-md": ["Inter"],
        "headline-lg-mobile": ["Playfair Display"],
        caption: ["Inter"],
      },

      fontSize: {
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "display-lg": [
          "48px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "label-md": [
          "14px",
          {
            lineHeight: "1.2",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],
        "headline-lg-mobile": [
          "28px",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
    },
  },

  plugins: [forms, containerQueries],
};
