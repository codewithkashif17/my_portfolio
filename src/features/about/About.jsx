import Container from "../../components/layout/Container";

import { ABOUT_DATA } from "./AboutData";

import AboutHero from "./components/AboutHero";
import ExpertiseGrid from "./components/ExpertiseGrid";
import StatsGrid from "./components/StatsGrid";
import Timeline from "./components/Timeline";
import CurrentFocus from "./components/CurrentFocus";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background Effects */}

      <div
        className="
          absolute
          top-0
          left-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/5
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-primary/5
          blur-[140px]
          pointer-events-none
        "
      />

      <Container>
        {/* Hero Section */}

        <AboutHero data={ABOUT_DATA} />

        {/* Expertise */}

        <ExpertiseGrid expertise={ABOUT_DATA.expertise} />

        {/* Statistics */}

        <StatsGrid stats={ABOUT_DATA.stats} />

        {/* Timeline */}

        <Timeline timeline={ABOUT_DATA.timeline} />

        {/* Current Focus */}

        <CurrentFocus
          currentFocus={ABOUT_DATA.currentFocus}
          availability={ABOUT_DATA.availability}
        />
      </Container>
    </section>
  );
}
