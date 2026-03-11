import { onMount } from "solid-js";
import { Mail, Github, Linkedin, Instagram } from "lucide-solid";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:prtshydv@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/ParfectShot" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/parfectshot/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/twospiritedpenguin/" },
];

export default function ContactSection() {
  let headerRef!: HTMLDivElement;
  let iconsRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(headerRef,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: headerRef, start: "top 80%", once: true } },
    );

    gsap.fromTo(iconsRef,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.2, scrollTrigger: { trigger: iconsRef, start: "top 90%", once: true } },
    );
  });

  return (
    <section id="contact" class="section-full flex flex-col items-center justify-center px-6 py-24 relative">
      <div class="max-w-2xl w-full text-center">
        <div ref={headerRef} style="opacity: 0">
          <p class="font-mono text-xs text-accent mb-2 tracking-widest uppercase">
            {"// Contact"}
          </p>
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect<span class="text-primary">.</span>
          </h2>
          <p class="text-muted-foreground text-sm leading-relaxed mb-12">
            Got a project in mind, want to collaborate, or just want to say hi?
            I'm always open to interesting conversations.
          </p>
        </div>

        <div ref={iconsRef} class="flex items-center justify-center gap-6" style="opacity: 0">
          {socials.map((s) => (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col items-center gap-2"
            >
              <div class="p-3 rounded-lg bg-card border border-border group-hover:border-primary/40 group-hover:glow-blue-sm transition-all duration-300">
                <s.icon size={20} class="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span class="font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div class="absolute bottom-8 text-center">
        <p class="font-mono text-[10px] text-muted-foreground/50">
          Built with code & caffeine · © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
