#  Personal Portfolio Website

A modern and fully responsive personal portfolio website built with **React + Vite** using **Tailwind CSS** and **Framer Motion** for smooth animations and interactive UI effects.

---

#  Features

* Fast performance with Vite
* Modern UI Design
* Fully Responsive Layout
* Smooth Animations using Framer Motion
* Reusable UI Components
* Custom Hooks
* Clean Folder Structure
* Interactive Hero Section
* Glassmorphism Effects
* Mouse Glow Effects
* Typing Animation Effect

---

# Tech Stack

## Frontend

* React.js
* Vite

## Styling

* Tailwind CSS
* PostCSS

## Animation

* Framer Motion

---

# Folder Structure

```bash
src/
│
├── assets/
│   └── projectsPic/
│       └── All project images
│
├── components/
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   └── Stats.jsx
│   │
│   ├── ui/
│   │   ├── Buttons.jsx
│   │   ├── FloatingShape.jsx
│   │   ├── GlassCard.jsx
│   │   └── MouseGlow.jsx
│   │
│   ├── Footer.jsx
│   └── Navbar.jsx
│
├── data/
│   └── homeData.js
│
├── hooks/
│   ├── useMousePosition.js
│   └── useTypingEffect.js
│
├── layout/
│   └── Layout.jsx
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── Experties/
│   ├── Skill/
│   └── Projects/
│
├── App.jsx
│
├── postcss.config.js
└── main.jsx
```

---

# Custom Hooks

## `useMousePosition.js`

Tracks the user's mouse position to create interactive UI effects.

## `useTypingEffect.js`

Handles dynamic typing animation effect inside the hero section.

---

#  Reusable Components

## Home Components

* `Hero.jsx`
* `Stats.jsx`

## UI Components

* `Buttons.jsx`
* `FloatingShape.jsx`
* `GlassCard.jsx`
* `MouseGlow.jsx`

---

#  Layout System

The project uses a centralized layout system.

```jsx
<Layout>
   {children}
</Layout>
```

Inside `Layout.jsx`:

* Navbar
* Main Content
* Footer

are managed globally.

---

#  Routing

Routing is handled inside:

```jsx
App.jsx
```

Using React Router for smooth page navigation.

---

#  UI & Animation Highlights

* Glassmorphism Cards
* Floating Background Shapes
* Mouse Glow Interaction
* Smooth Page Transitions
* Responsive Navigation
* Animated Hero Section

---

#  Installation

## Clone Repository

```bash
git clone <your-repo-link>
```

## Navigate to Project

```bash
cd portfolio
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

---

#  Build Project

```bash
npm run build
```

---

#  Projects Showcase

All project images are stored inside:

```bash
src/assets/projectsPic/
```

---

#  Responsive Design

The portfolio is optimized for:

* Mobile Devices
* Tablets
* Laptops
* Large Screens

---

# 💖 Author
### Developed By Mr Kashi
Developed with ❤️ using React, Tailwind CSS & Framer Motion.

---
