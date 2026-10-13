import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaLayerGroup,
  FaCloud,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiPostman,
  SiFigma,
  SiHtml5,
  SiCss,
} from "react-icons/si";

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    icon: FaReact,
  },
  {
    id: "backend",
    label: "Backend",
    icon: FaServer,
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: FaMobileAlt,
  },
  {
    id: "database",
    label: "Database",
    icon: FaDatabase,
  },
  {
    id: "tools",
    label: "Tools",
    icon: FaLayerGroup,
  },
];

export const SKILLS_DATA = {
  frontend: [
    {
      name: "React.js",
      icon: FaReact,
      level: 90,
      experience: "Advanced",
      description:
        "Component-based UI development, hooks, reusable architecture and modern React patterns.",
      featured: true,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
      experience: "Advanced",
      description:
        "Modern JavaScript, ES6+, asynchronous programming, DOM and application logic.",
      featured: true,
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      level: 95,
      experience: "Advanced",
      description: "Semantic HTML and accessible, structured web interfaces.",
      featured: false,
    },
    {
      name: "CSS3",
      icon: SiCss,
      level: 90,
      experience: "Advanced",
      description:
        "Responsive layouts, animations, transitions and modern CSS.",
      featured: false,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 92,
      experience: "Advanced",
      description:
        "Utility-first responsive UI development and design systems.",
      featured: true,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 72,
      experience: "Intermediate",
      description:
        "Modern React framework concepts, routing and application architecture.",
      featured: false,
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: 86,
      experience: "Advanced",
      description:
        "Server-side JavaScript, asynchronous architecture and backend services.",
      featured: true,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 88,
      experience: "Advanced",
      description:
        "REST APIs, middleware, routing, authentication and backend architecture.",
      featured: true,
    },
    {
      name: "REST APIs",
      icon: FaServer,
      level: 90,
      experience: "Advanced",
      description:
        "API design, HTTP methods, authentication and frontend-backend integration.",
      featured: true,
    },
    {
      name: "Python",
      icon: FaPython,
      level: 70,
      experience: "Intermediate",
      description:
        "Programming fundamentals, scripting and backend-oriented development.",
      featured: false,
    },
    {
      name: "Java",
      icon: FaJava,
      level: 65,
      experience: "Intermediate",
      description:
        "Object-oriented programming and application development fundamentals.",
      featured: false,
    },
  ],

  mobile: [
    {
      name: "Flutter",
      icon: SiFlutter,
      level: 82,
      experience: "Advanced",
      description:
        "Cross-platform mobile development with reusable widgets and responsive UI.",
      featured: true,
    },
    {
      name: "Dart",
      icon: SiDart,
      level: 80,
      experience: "Advanced",
      description:
        "Dart programming, OOP, asynchronous programming and Flutter development.",
      featured: true,
    },
    {
      name: "Mobile UI",
      icon: FaMobileAlt,
      level: 85,
      experience: "Advanced",
      description:
        "Responsive layouts, navigation, reusable components and user experience.",
      featured: false,
    },
  ],

  database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 82,
      experience: "Advanced",
      description:
        "Document databases, schemas, queries and MongoDB application integration.",
      featured: true,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      level: 82,
      experience: "Advanced",
      description:
        "Relational database design, queries, relationships and data management.",
      featured: true,
    },
    {
      name: "SQL",
      icon: FaDatabase,
      level: 84,
      experience: "Advanced",
      description:
        "Queries, joins, relationships, filtering and database fundamentals.",
      featured: false,
    },
  ],

  tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      level: 88,
      experience: "Advanced",
      description:
        "Version control, branching, commits, merging and collaborative workflows.",
      featured: true,
    },
    {
      name: "GitHub",
      icon: FaGithub,
      level: 88,
      experience: "Advanced",
      description:
        "Repository management, collaboration and project deployment workflows.",
      featured: true,
    },
    {
      name: "Vite",
      icon: SiVite,
      level: 90,
      experience: "Advanced",
      description: "Modern frontend development and fast production builds.",
      featured: false,
    },
    {
      name: "Postman",
      icon: SiPostman,
      level: 82,
      experience: "Advanced",
      description: "API testing, request collections and backend debugging.",
      featured: false,
    },
    {
      name: "Figma",
      icon: SiFigma,
      level: 65,
      experience: "Intermediate",
      description: "Interface design, visual planning and UI prototyping.",
      featured: false,
    },
  ],
};

export const SKILL_STATS = [
  {
    value: "15+",
    label: "Technologies",
    icon: FaCode,
  },
  {
    value: "5",
    label: "Development Areas",
    icon: FaLayerGroup,
  },
  {
    value: "100%",
    label: "Continuous Learning",
    icon: FaCloud,
  },
];
