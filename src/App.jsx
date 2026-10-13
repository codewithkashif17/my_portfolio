
// import { Routes, Route } from "react-router-dom";

// import MainLayout from "./layouts/MainLayout";

// import Maintenance from "./pages/Maintenance";
// import Developer from "./pages/Developer";

// import Hero from "./features/home/Hero";
// import About from "./features/about/About";
// import Projects from "./features/projects/Projects";
// import Skills from "./features/skills/Skills";
// import Contact from "./features/contect/Contact";


// export default function App() {
//   return (
//     <Routes>

//       {/* =====================================================
//           MAIN PORTFOLIO
//           ===================================================== */}

//       <Route
//         path="/"
//         element={
//           <MainLayout>
//             <Hero />
//             <About />
//             <Projects />
//             <Skills />
//             <Contact />
//           </MainLayout>
//         }
//       />


//       {/* =====================================================
//           DEVELOPER MODULE
//           ===================================================== */}

//       <Route
//         path="/developer"
//         element={<Developer />}
//       />


//       {/* =====================================================
//           MAINTENANCE PAGE
//           ===================================================== */}

//       <Route
//         path="/maintenance"
//         element={<Maintenance />}
//       />

//     </Routes>
//   );
// }



import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Hero from "./features/home/Hero";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";

import Developer from "./pages/Developer";
import Maintenance from "./pages/Maintenance";

function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
}
