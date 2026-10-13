// import { useNavigate } from "react-router-dom";

// import Container from "../../components/layout/Container";
// import Button from "../../components/common/Button";

// import { HERO_DATA } from "./HeroData";

// export default function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section id="home" className="min-h-screen flex items-center pt-24">
//       <Container>
//         <div
//           className="
//             grid
//             lg:grid-cols-2
//             gap-12
//             lg:gap-20
//             items-center
//           "
//         >
//           {/* =====================================================
//               LEFT SIDE — INTRODUCTION
//               ===================================================== */}

//           <div className="text-center lg:text-left">
//             {/* Badge */}
//             <span
//               className="
//                 inline-flex
//                 items-center
//                 px-4
//                 py-2
//                 rounded-full
//                 border
//                 border-primary/30
//                 bg-primary/10
//                 text-primary
//                 text-sm
//                 font-medium
//                 mb-6
//               "
//             >
//               {HERO_DATA.badge}
//             </span>

//             {/* Heading */}
//             <h1
//               className="
//                 font-serif
//                 text-4xl
//                 sm:text-5xl
//                 md:text-6xl
//                 lg:text-7xl
//                 font-bold
//                 leading-tight
//                 text-on-surface
//               "
//             >
//               {HERO_DATA.greeting}{" "}
//               <span className="text-primary">{HERO_DATA.name}</span>
//             </h1>

//             {/* Title */}
//             <h2
//               className="
//                 mt-4
//                 text-xl
//                 md:text-2xl
//                 text-on-surface-variant
//               "
//             >
//               {HERO_DATA.title}
//             </h2>

//             {/* Subtitle */}
//             <p
//               className="
//                 mt-2
//                 text-base
//                 md:text-lg
//                 text-primary
//               "
//             >
//               {HERO_DATA.subtitle}
//             </p>

//             {/* Description */}
//             <p
//               className="
//                 mt-6
//                 max-w-2xl
//                 mx-auto
//                 lg:mx-0
//                 text-on-surface-variant
//                 leading-relaxed
//               "
//             >
//               {HERO_DATA.description}
//             </p>

//             {/* =================================================
//                 ACTION BUTTONS
//                 ================================================= */}

//             <div
//               className="
//                 mt-10
//                 flex
//                 gap-3
//                 max-w-md
//                 mx-auto
//                 lg:mx-0
//               "
//             >
//               {/* Primary Button */}
//               <a href={HERO_DATA.primaryButton.href} className="flex-1">
//                 <Button className="w-full">
//                   {HERO_DATA.primaryButton.text}
//                 </Button>
//               </a>

//               {/* Secondary Button */}
//               <a
//                 href={HERO_DATA.secondaryButton.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1"
//               >
//                 <Button variant="outline" className="w-full">
//                   {HERO_DATA.secondaryButton.text}
//                 </Button>
//               </a>
//             </div>

//             {/* =================================================
//                 SOCIAL LINKS
//                 ================================================= */}

//             <div
//               className="
//                 mt-10
//                 flex
//                 flex-wrap
//                 justify-center
//                 lg:justify-start
//                 gap-6
//               "
//             >
//               {HERO_DATA.socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     text-on-surface-variant
//                     hover:text-primary
//                     transition-colors
//                     duration-300
//                   "
//                 >
//                   {social.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* =====================================================
//               RIGHT SIDE — DEVELOPER REALTIME DASHBOARD
//               ===================================================== */}

//           <div className="flex justify-center lg:justify-end">
//             <div
//               className="
//                 group
//                 relative
//                 w-full
//                 max-w-[500px]
//                 cursor-pointer
//               "
//               onClick={() => navigate("/developer")}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(event) => {
//                 if (event.key === "Enter" || event.key === " ") {
//                   navigate("/developer");
//                 }
//               }}
//             >
//               {/* =================================================
//                   AMBIENT GLOW
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   -inset-4
//                   rounded-[32px]
//                   bg-primary/10
//                   blur-3xl
//                   transition-all
//                   duration-700
//                   group-hover:bg-primary/20
//                   group-hover:scale-105
//                 "
//               />

//               {/* =================================================
//                   OUTER GRADIENT BORDER
//                   ================================================= */}

//               <div
//                 className="
//                   absolute
//                   -inset-[1px]
//                   rounded-[28px]
//                   bg-gradient-to-br
//                   from-primary/50
//                   via-primary-container/20
//                   to-primary/40
//                   opacity-70
//                   transition-all
//                   duration-500
//                   group-hover:opacity-100
//                 "
//               />

//               {/* =================================================
//                   DASHBOARD CARD
//                   ================================================= */}

//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border
//                   border-primary/20
//                   bg-surface-container
//                   backdrop-blur-xl
//                   shadow-2xl
//                   transition-all
//                   duration-500
//                   group-hover:-translate-y-2
//                   group-hover:shadow-primary/10
//                 "
//               >
//                 {/* =================================================
//                     DASHBOARD HEADER
//                     ================================================= */}

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-between
//                     border-b
//                     border-white/10
//                     px-6
//                     py-5
//                   "
//                 >
//                   <div>
//                     <p
//                       className="
//                         text-[10px]
//                         uppercase
//                         tracking-[0.25em]
//                         text-on-surface-variant
//                       "
//                     >
//                       Developer Dashboard
//                     </p>

//                     <h3
//                       className="
//                         mt-1
//                         text-lg
//                         font-semibold
//                         text-on-surface
//                       "
//                     >
//                       Live Overview
//                     </h3>
//                   </div>

//                   {/* Live Status */}

//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                       rounded-full
//                       border
//                       border-emerald-400/20
//                       bg-emerald-400/10
//                       px-3
//                       py-1.5
//                     "
//                   >
//                     <span
//                       className="
//                         h-2
//                         w-2
//                         rounded-full
//                         bg-emerald-400
//                         shadow-[0_0_10px_rgba(52,211,153,0.8)]
//                       "
//                     />

//                     <span
//                       className="
//                         text-[10px]
//                         font-medium
//                         uppercase
//                         tracking-wider
//                         text-emerald-400
//                       "
//                     >
//                       Live
//                     </span>
//                   </div>
//                 </div>

//                 {/* =================================================
//                     STATS
//                     ================================================= */}

//                 <div
//                   className="
//                     grid
//                     grid-cols-3
//                     gap-3
//                     p-5
//                   "
//                 >
//                   {/* Projects */}

//                   <div
//                     className="
//                       rounded-2xl
//                       border
//                       border-white/10
//                       bg-white/[0.03]
//                       p-4
//                       transition
//                       duration-300
//                       group-hover:border-primary/20
//                     "
//                   >
//                     <p className="text-xs text-on-surface-variant">Projects</p>

//                     <p
//                       className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-primary
//                       "
//                     >
//                       12
//                     </p>
//                   </div>

//                   {/* Commits */}

//                   <div
//                     className="
//                       rounded-2xl
//                       border
//                       border-white/10
//                       bg-white/[0.03]
//                       p-4
//                       transition
//                       duration-300
//                       group-hover:border-primary/20
//                     "
//                   >
//                     <p className="text-xs text-on-surface-variant">Commits</p>

//                     <p
//                       className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-primary
//                       "
//                     >
//                       48
//                     </p>
//                   </div>

//                   {/* Technologies */}

//                   <div
//                     className="
//                       rounded-2xl
//                       border
//                       border-white/10
//                       bg-white/[0.03]
//                       p-4
//                       transition
//                       duration-300
//                       group-hover:border-primary/20
//                     "
//                   >
//                     <p className="text-xs text-on-surface-variant">
//                       Tech Stack
//                     </p>

//                     <p
//                       className="
//                         mt-2
//                         text-2xl
//                         font-bold
//                         text-primary
//                       "
//                     >
//                       08
//                     </p>
//                   </div>
//                 </div>

//                 {/* =================================================
//                     ACTIVITY CHART
//                     ================================================= */}

//                 <div className="px-5">
//                   <div
//                     className="
//                       rounded-2xl
//                       border
//                       border-white/10
//                       bg-black/20
//                       p-5
//                     "
//                   >
//                     {/* Chart Header */}

//                     <div
//                       className="
//                         flex
//                         items-center
//                         justify-between
//                       "
//                     >
//                       <div>
//                         <p
//                           className="
//                             text-sm
//                             font-medium
//                             text-on-surface
//                           "
//                         >
//                           GitHub Activity
//                         </p>

//                         <p
//                           className="
//                             mt-1
//                             text-xs
//                             text-on-surface-variant
//                           "
//                         >
//                           Weekly development activity
//                         </p>
//                       </div>

//                       <span
//                         className="
//                           text-xs
//                           font-medium
//                           text-primary
//                         "
//                       >
//                         +18.4%
//                       </span>
//                     </div>

//                     {/* =================================================
//                         COLUMN CHART
//                         ================================================= */}

//                     <div
//                       className="
//                         mt-6
//                         flex
//                         h-32
//                         items-end
//                         justify-between
//                         gap-2
//                       "
//                     >
//                       {[45, 70, 55, 85, 65, 92, 75].map((height, index) => (
//                         <div
//                           key={index}
//                           className="
//                               flex
//                               h-full
//                               flex-1
//                               items-end
//                             "
//                         >
//                           <div
//                             className="
//                                 w-full
//                                 rounded-t-lg
//                                 bg-gradient-to-t
//                                 from-primary/20
//                                 to-primary
//                                 opacity-70
//                                 transition-all
//                                 duration-500
//                                 group-hover:opacity-100
//                                 group-hover:from-primary/40
//                               "
//                             style={{
//                               height: `${height}%`,
//                             }}
//                           />
//                         </div>
//                       ))}
//                     </div>

//                     {/* Chart Days */}

//                     <div
//                       className="
//                         mt-3
//                         grid
//                         grid-cols-7
//                         text-center
//                         text-[10px]
//                         text-on-surface-variant
//                       "
//                     >
//                       <span>Mon</span>
//                       <span>Tue</span>
//                       <span>Wed</span>
//                       <span>Thu</span>
//                       <span>Fri</span>
//                       <span>Sat</span>
//                       <span>Sun</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* =================================================
//                     CURRENT TECH STACK
//                     ================================================= */}

//                 <div className="px-5 pt-5">
//                   <p
//                     className="
//                       mb-3
//                       text-xs
//                       uppercase
//                       tracking-wider
//                       text-on-surface-variant
//                     "
//                   >
//                     Current Stack
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {["React", "Node.js", "Express", "MongoDB", "Flutter"].map(
//                       (tech) => (
//                         <span
//                           key={tech}
//                           className="
//                           rounded-full
//                           border
//                           border-primary/20
//                           bg-primary/5
//                           px-3
//                           py-1.5
//                           text-[11px]
//                           font-medium
//                           text-primary
//                         "
//                         >
//                           {tech}
//                         </span>
//                       ),
//                     )}
//                   </div>
//                 </div>

//                 {/* =================================================
//                     DASHBOARD FOOTER
//                     ================================================= */}

//                 <div
//                   className="
//                     mt-5
//                     flex
//                     items-center
//                     justify-between
//                     border-t
//                     border-white/10
//                     px-5
//                     py-4
//                   "
//                 >
//                   <div>
//                     <p
//                       className="
//                         text-xs
//                         text-on-surface-variant
//                       "
//                     >
//                       Developer Module
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-sm
//                         font-medium
//                         text-on-surface
//                       "
//                     >
//                       Explore full activity
//                     </p>
//                   </div>

//                   {/* Arrow */}

//                   <span
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-primary/20
//                       bg-primary/10
//                       text-primary
//                       transition-all
//                       duration-300
//                       group-hover:translate-x-1
//                       group-hover:bg-primary
//                       group-hover:text-black
//                     "
//                   >
//                     →
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }



import "./Hero.css";

import Container from "../../components/layout/Container";

import HeroIntro from "./components/HeroIntro";
import HeroActions from "./components/HeroActions";
import HeroSocialLinks from "./components/HeroSocialLinks";
import DeveloperDashboard from "./components/DeveloperDashboard";

import useGitHubDashboard from "../../hooks/useGitHubDashboard";

export default function Hero() {
  const {
    stats,
    dailyActivity,
    technologies,
    loading,
    error,
  } = useGitHubDashboard();

  return (
    <section
      id="home"
      className="hero-section relative py-16 sm:py-20 lg:py-28"
    >
      <div className="hero-glow" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <HeroIntro />
            <HeroActions />
            {/* <HeroSocialLinks /> */}
          </div>

          <div className="hero-dashboard--floating">
            {error ? (
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300">
                GitHub data load nahi hua: {error}
              </div>
            ) : (
              <DeveloperDashboard
                stats={stats}
                dailyActivity={dailyActivity}
                technologies={technologies}
                loading={loading}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
