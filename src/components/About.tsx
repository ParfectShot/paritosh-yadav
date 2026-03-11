import { onMount } from "solid-js";
import { Code2, Camera, Wrench } from "lucide-solid";

const identities = [
  {
    icon: Code2,
    title: "Developer",
    description: "Frontend engineer specializing in React, TypeScript, and building scalable web applications.",
  },
  {
    icon: Camera,
    title: "Photographer",
    description: "Capturing moody, cinematic moments — from Himalayan winters to Abu Dhabi streets.",
  },
  {
    icon: Wrench,
    title: "Builder",
    description: "Tinkering with solar systems, air purifiers, and inverter batteries. Making things work off-grid.",
  },
];

export default function AboutSection() {
  let headerRef!: HTMLDivElement;
  let cardsRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(headerRef,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: headerRef, start: "top 80%", once: true } },
    );

    gsap.fromTo(cardsRef.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, scrollTrigger: { trigger: cardsRef, start: "top 85%", once: true } },
    );
  });

  return (
    <section id="about" class="section-full flex items-center justify-center px-6 py-24">
      <div class="max-w-4xl w-full">
        <div ref={headerRef} style="opacity: 0">
          <p class="font-mono text-xs text-accent mb-2 tracking-widest uppercase">
            {"// About"}
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who I am<span class="text-primary">.</span>
          </h2>
          <p class="text-muted-foreground max-w-2xl leading-relaxed mb-16">
            I'm a frontend engineer based in Abu Dhabi, currently leading frontend at Indiagold.
            I build things that live on screens, on rooftops, and sometimes in the middle of nowhere.
            When I'm not shipping code, I'm probably out with a camera or wiring up a solar panel.
          </p>
        </div>

        <div ref={cardsRef} class="grid md:grid-cols-3 gap-6">
          {identities.map((item) => (
            <div class="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300" style="opacity: 0">
              <item.icon
                size={24}
                class="text-primary mb-4 group-hover:text-accent transition-colors duration-300"
              />
              <h3 class="font-mono text-sm font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
