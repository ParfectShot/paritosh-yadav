import { onMount } from "solid-js";

const timelineData = [
  {
    year: "2025–Present",
    company: "Trajector",
    role: "Senior Software Engineer",
    location: "Gurugram, India",
    achievements: [
      "Reduced CI pipeline runtime from 20 minutes to 7 minutes, unblocking faster iteration cycles",
      "Built a central documentation app embedded in the codebase — single source of truth for architecture decisions",
      "Biggest contributor across a pnpm/Nx monorepo with 2 apps and shared modules, shipping ahead of deadlines",
      "Designed and rolled out AI agent workflows (plan, implement, test, verify, ship) integrating TDD practices",
    ],
    tech: ["Next.js", "SST", "AWS Serverless", "Node.js", "Vitest", "Tailwind", "pnpm/Nx"],
    active: true,
  },
  {
    year: "2022–2025",
    company: "Indiagold",
    role: "SDE-III — Frontend",
    location: "Abu Dhabi",
    achievements: [
      "Architected and refactored Admin Dashboard and Web App — 99.99% uptime, 60% faster builds",
      "Built a Next.js marketing site with Strapi CMS — grew organic traffic from ~30 to 800k+ clicks/month",
      "Developed an in-house A/B testing module that lifted ad conversion rates from 10–12% to 28–30%",
      "Mentored a 7-member frontend team, maintaining velocity through a team reduction to 3 members",
    ],
    tech: ["React", "Next.js", "GatsbyJs", "Strapi", "Tailwind", "TypeScript", "Redux"],
    active: false,
  },
  {
    year: "2021–2022",
    company: "StoryXpress",
    role: "Full Stack Developer",
    location: "Gurugram, India",
    achievements: [
      "Led a team of 3 to build StoryXpress Suite (web, desktop, Chrome extension) — 1.5M users, 30M hours of content",
      "Reduced Electron app size by 40% and achieved 80+ PageSpeed scores across the web app",
      "Built embeddable SDKs for LMS and HR system integrations",
    ],
    tech: ["React", "Styled Components", "Electron.js", "WebSocket", "TypeScript"],
    active: false,
  },
  {
    year: "2019–2020",
    company: "Delinno",
    role: "Full Stack Developer",
    location: "Gurugram, India",
    achievements: [
      "Built an ESG management dashboard enabling data-driven decision-making for enterprise clients",
      "Contributed to a survey platform that completed 14,000+ surveys for global organizations",
      "Developed a fitness trainer LMS with 44K+ app downloads",
    ],
    tech: ["React", "Django", "Redux", "MUI"],
    active: false,
  },
  {
    year: "2019",
    company: "CSimplifyIT",
    role: "Technical Consultant — Frontend",
    location: "Gurugram, India",
    achievements: [
      "Built Google Workspace add-ons (mass mail merge, recruitment manager) streamlining email campaigns and hiring",
      "Developed a Python OCR system using OpenCV for document processing",
    ],
    tech: ["Google Apps Script", "Django", "OpenCV", "jQuery"],
    active: false,
  },
];

export default function TimelineSection() {
  let headerRef!: HTMLDivElement;
  let itemsRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(headerRef,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: headerRef, start: "top 80%", once: true } },
    );

    const items = itemsRef.querySelectorAll(".timeline-item");
    gsap.fromTo(items,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: itemsRef, start: "top 85%", once: true } },
    );
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
