import { onMount } from "solid-js";

const timelineData = [
  {
    year: "2019",
    company: "CSimplifyIT",
    role: "Technical Consultant",
    location: "Gurugram",
    achievements: [
      "Developed Google Workspace productivity tools — 30K+ downloads",
      "Rebuilt OCR document management system with improved efficiency",
    ],
    tech: ["Google Apps Script", "Python", "OpenCV", "Django"],
    active: false,
  },
  {
    year: "2019–2020",
    company: "Delinno",
    role: "Full Stack Developer",
    location: "Gurgaon",
    achievements: [
      "Built ESG dashboard, survey platform used by 50+ global organizations",
      "Developed fitness trainer LMS — 44K+ downloads, 1000+ active trainers",
    ],
    tech: ["React", "Redux", "Python", "Django", "PostgreSQL"],
    active: false,
  },
  {
    year: "2021–2022",
    company: "StoryXpress",
    role: "Software Developer",
    location: "Gurgaon",
    achievements: [
      "Built cross-platform desktop app — 1.5M+ users, 30M hours processed",
      "Created browser extension and embeddable SDK for third-party integrations",
      "Mentored team of 3 fresh graduates",
    ],
    tech: ["Electron.js", "React", "TypeScript", "WebSocket", "Chrome APIs"],
    active: false,
  },
  {
    year: "2022–Present",
    company: "Indiagold",
    role: "Frontend Lead",
    location: "Abu Dhabi",
    achievements: [
      "Leading frontend architecture for fintech platform",
      "PageSpeed: 45 → 95, Organic Traffic: 0 → 800k+ clicks/month",
      "Team transformation: 7 → 3 members with improved delivery",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    active: true,
  },
];

export default function TimelineSection() {
  let headerRef!: HTMLDivElement;
  let itemsRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(headerRef, {
      opacity: 0, y: 30, duration: 0.6,
      scrollTrigger: { trigger: headerRef, start: "top 80%", once: true },
    });

    const items = itemsRef.querySelectorAll(".timeline-item");
    gsap.from(items, {
      opacity: 0, x: -20, duration: 0.5, stagger: 0.1,
      scrollTrigger: { trigger: itemsRef, start: "top 85%", once: true },
    });
  });

  return (
    <section id="timeline" class="section-full flex items-center justify-center px-6 py-24">
      <div class="max-w-4xl w-full">
        <div ref={headerRef} style="opacity: 0">
          <p class="font-mono text-xs text-accent mb-2 tracking-widest uppercase">
            {"// Experience"}
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-16">
            Work Timeline<span class="text-primary">.</span>
          </h2>
        </div>

        <div ref={itemsRef} class="relative">
          {/* Vertical line */}
          <div class="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-border" />

          <div class="space-y-12">
            {timelineData.map((item) => (
              <div class="timeline-item relative pl-10 md:pl-14" style="opacity: 0">
                {/* Dot */}
                <div
                  class={`absolute left-0 md:left-1 top-1.5 w-[23px] h-[23px] md:w-[31px] md:h-[31px] rounded-full border-2 flex items-center justify-center ${
                    item.active
                      ? "border-primary bg-primary/10 glow-blue-sm"
                      : "border-muted-foreground/30 bg-background"
                  }`}
                >
                  <div
                    class={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${
                      item.active ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                  />
                </div>

                <div class="group">
                  <span class="font-mono text-xs text-muted-foreground">
                    {item.year} · {item.location}
                  </span>
                  <h3 class="text-lg font-bold text-foreground mt-1">
                    {item.role}{" "}
                    <span class="text-primary">@ {item.company}</span>
                  </h3>

                  <ul class="mt-3 space-y-1.5">
                    {item.achievements.map((a) => (
                      <li class="text-sm text-muted-foreground flex items-start gap-2">
                        <span class="text-accent mt-1 text-xs">▸</span>
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div class="mt-3 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
