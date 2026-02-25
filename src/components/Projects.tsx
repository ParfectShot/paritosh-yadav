import { onMount } from "solid-js";
import { ExternalLink, Camera, FileImage, ScanText, Code2, Sun } from "lucide-solid";

const projects = [
  {
    title: "Off Grid Collective",
    description: "Solar systems, inverter batteries, and sustainable living documentation for the off-grid community.",
    icon: Sun,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://offgridcollective.co",
  },
  {
    title: "Image Compressor",
    description: "Client-side image compression tool with quality controls and batch processing.",
    icon: FileImage,
    tags: ["SolidJS", "Canvas API", "Web Workers"],
    link: "#",
  },
  {
    title: "Document OCR",
    description: "Extract text from scanned documents and images using Tesseract.js.",
    icon: ScanText,
    tags: ["SolidJS", "Tesseract.js", "Tool"],
    link: "#",
  },
  {
    title: "paritosh.dev",
    description: "Personal portfolio with smooth animations, breathing backgrounds, and ASCII mascot.",
    icon: Code2,
    tags: ["SolidJS", "GSAP", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Photography",
    description: "Curated photo stories — Himalayan winters, Abu Dhabi streets, village life.",
    icon: Camera,
    tags: ["Stories", "Cinematic", "Gallery"],
    link: "/photography",
  },
];

export default function ProjectsSection() {
  let headerRef!: HTMLDivElement;
  let gridRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(headerRef,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: headerRef, start: "top 80%", once: true } },
    );

    const cards = gridRef.querySelectorAll(".project-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: gridRef, start: "top 85%", once: true } },
    );
  });

  return (
    <section id="projects" class="section-full flex items-center justify-center px-6 py-24">
      <div class="max-w-4xl w-full">
        <div ref={headerRef} style="opacity: 0">
          <p class="font-mono text-xs text-accent mb-2 tracking-widest uppercase">
            {"// Projects"}
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Things I've Built<span class="text-primary">.</span>
          </h2>
        </div>

        <div ref={gridRef} class="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              class="project-card group relative p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer"
              style="opacity: 0"
            >
              <div class="flex items-start justify-between mb-3">
                <project.icon
                  size={20}
                  class="text-muted-foreground group-hover:text-primary transition-colors"
                />
                <ExternalLink
                  size={14}
                  class="text-muted-foreground/0 group-hover:text-muted-foreground transition-all duration-300"
                />
              </div>

              <h3 class="font-mono text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p class="text-xs text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div class="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
