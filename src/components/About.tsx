import { Code, Camera, Wrench } from "lucide-solid";
import SectionLabel from "./SectionLabel";

const identities = [
  {
    icon: Code,
    title: "Developer",
    description:
      "6+ years building web applications. From high-traffic marketing sites to cross-platform desktop apps — always chasing performance and clean architecture.",
  },
  {
    icon: Camera,
    title: "Photographer",
    description:
      "Capturing stories through a lens. From landscapes to street photography, finding beauty in the everyday and the extraordinary.",
  },
  {
    icon: Wrench,
    title: "Builder",
    description:
      "Creating tools and communities. Building Off Grid Collective and open-source utilities that solve real problems for real people.",
  },
];

export default function About() {
  return (
    <section id="about" class="section-full flex items-center py-24 px-6">
      <div class="max-w-6xl mx-auto w-full">
        <SectionLabel label="About" />
        <h2 class="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-12">
          Who I Am<span class="text-primary">.</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {identities.map((item) => (
            <div class="gsap-reveal bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group">
              <div class="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <item.icon size={24} class="text-primary" />
              </div>
              <h3 class="font-mono text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p class="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
