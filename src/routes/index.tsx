import Navbar from "~/components/Navbar";
import HeroSection from "~/components/Hero";
import AboutSection from "~/components/About";
import TimelineSection from "~/components/Timeline";
import ProjectsSection from "~/components/Projects";
import ContactSection from "~/components/Contact";

export default function Home() {
  return (
    <>
      <div class="noise-overlay" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
