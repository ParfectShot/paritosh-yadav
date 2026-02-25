import { onMount, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Timeline from "~/components/Timeline";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import BreathingBackground from "~/components/BreathingBackground";
import NoiseOverlay from "~/components/NoiseOverlay";
import AsciiCharacter from "~/components/AsciiCharacter";

export default function Home() {
  onMount(async () => {
    if (isServer) return;

    // Initialize GSAP + ScrollTrigger
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements with .gsap-reveal
    const reveals = document.querySelectorAll(".gsap-reveal");
    reveals.forEach((el) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    // Initialize Lenis smooth scroll
    const Lenis = (await import("lenis")).default;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Connect Lenis to GSAP ticker
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    onCleanup(() => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    });
  });

  return (
    <>
      <BreathingBackground />
      <NoiseOverlay />
      <Navbar />
      <main class="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <AsciiCharacter />
    </>
  );
}
