import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFlutter,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

export const PROJECT_CATEGORIES = ["All", "Web", "Mobile", "Full Stack"];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "PaintPro Management System",
    shortTitle: "PaintPro",
    category: "Full Stack",
    featured: true,

    description:
      "A complete paint business management platform designed to manage products, inventory, sales, customers, staff, shelves, and business operations from a centralized dashboard.",

    image: "/projects/paintpro.png",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
    ],

    features: [
      "Role-based authentication",
      "Inventory management",
      "Sales & billing",
      "Staff management",
      "Shelf management",
      "Business dashboard",
    ],

    stats: {
      type: "Full Stack",
      status: "In Development",
    },

    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: 2,
    title: "Afridi Student Hostel",
    shortTitle: "Hostel Management",
    category: "Full Stack",
    featured: false,

    description:
      "A modern hostel management platform for managing student registration, profiles, rooms, facilities, wardens, and administrative operations.",

    image: "/projects/hostel.png",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
    ],

    features: [
      "Student registration",
      "Authentication",
      "Student dashboard",
      "Warden management",
      "Public facilities",
      "Admin management",
    ],

    stats: {
      type: "MERN Stack",
      status: "Development",
    },

    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: 3,
    title: "School Management System",
    shortTitle: "School CMS",
    category: "Full Stack",
    featured: false,

    description:
      "An enterprise-style school management system with role-based access for administrators, teachers, students, accountants, and management.",

    image: "/projects/school.png",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],

    features: [
      "Role-based access",
      "Student management",
      "Teacher management",
      "Fee management",
      "Admissions",
      "Admin dashboard",
    ],

    stats: {
      type: "Web Application",
      status: "Development",
    },

    links: {
      github: "#",
      live: "#",
    },
  },

  {
    id: 4,
    title: "Flutter Mobile Application",
    shortTitle: "Mobile App",
    category: "Mobile",
    featured: false,

    description:
      "A modern Flutter mobile application focused on clean UI, responsive layouts, reusable widgets, application state, and API integration.",

    image: "/projects/flutter-app.png",

    technologies: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: FaCode,
      },
      {
        name: "API",
        icon: FaExternalLinkAlt,
      },
    ],

    features: [
      "Responsive UI",
      "Reusable widgets",
      "API integration",
      "Navigation",
      "State management",
      "Modern UX",
    ],

    stats: {
      type: "Mobile",
      status: "Development",
    },

    links: {
      github: "#",
      live: "#",
    },
  },

   {
    id: 5,
    title: "3D Design Porfolio",
    shortTitle: "Web Application",
    category: "Web",
    featured: false,

    description:
      "A modern Flutter mobile application focused on clean UI, responsive layouts, reusable widgets, application state, and API integration.",

    vedio: "/portPolio3D_Vedio.mp4",

    technologies: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: FaCode,
      },
      {
        name: "API",
        icon: FaExternalLinkAlt,
      },
    ],

    features: [
      "Responsive UI",
      "Reusable widgets",
      "API integration",
      "Navigation",
      "State management",
      "Modern UX",
    ],

    stats: {
      type: "Mobile",
      status: "Development",
    },

    links: {
      github: "#",
      live: "#",
    },
  },
];
