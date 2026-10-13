import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export const CONTACT_DATA = {
  badge: "Let's Work Together",

  title: "Have a Project in Mind?",

  description:
    "Whether you are building a new product, improving an existing system, or need a reliable developer for your next idea, let's discuss the problem and find the right technical solution.",

  availability: {
    status: "Available for new projects",
    description:
      "Currently open to selected freelance projects, internships, and software development opportunities.",
  },

  contactInfo: [
    {
      id: "email",
      label: "Email",
      value: "kashifmehmoodtech17@gmail.com",
      href: "mailto:kashifmehmoodtech17@gmail",
      icon: FaEnvelope,
    },

    {
      id: "phone",
      label: "Phone",
      value: "+92 344 3248489",
      href: "tel:+92 344 3248489",
      icon: FaPhone,
    },

    {
      id: "location",
      label: "Location",
      value: "Pakistan, kpk, kohat university of science and technology",
      href: "#",
      icon: FaMapMarkerAlt,
    },
  ],

  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/codewithkashif17",
      icon: FaGithub,
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kashif-mehmood-a47594397/",
      icon: FaLinkedin,
    },
  ],

  services: [
    "Full Stack Web Application",
    "React / Frontend Development",
    "Node.js / REST API",
    "Flutter Mobile Application",
    "Database Design",
    "Existing System Upgrade",
    "Other",
  ],

  projectTypes: [
    "New Product",
    "Business Management System",
    "Website / Web Application",
    "Mobile Application",
    "API / Backend System",
    "Existing System Improvement",
    "Other",
  ],

  budgets: [
    "Under $500",
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500 – $5,000",
    "$5,000+",
    "Let's discuss",
  ],

  timelines: [
    "Less than 2 weeks",
    "2 – 4 weeks",
    "1 – 2 months",
    "2 – 3 months",
    "Flexible",
  ],
};
