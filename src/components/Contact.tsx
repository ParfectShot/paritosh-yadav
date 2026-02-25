import { Mail, Github, Linkedin, Instagram } from "lucide-solid";
import SectionLabel from "./SectionLabel";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:prtshydv@gmail.com",
    display: "prtshydv@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ParfectShot",
    display: "ParfectShot",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parfectshot/",
    display: "parfectshot",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/twospiritedpenguin/",
    display: "twospiritedpenguin",
  },
];

export default function Contact() {
  return (
    <section id="contact" class="section-full flex items-center py-24 px-6">
      <div class="max-w-2xl mx-auto w-full text-center">
        <SectionLabel label="Contact" />
        <h2 class="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-4">
          Let's Connect<span class="text-primary">.</span>
        </h2>
        <p class="text-muted-foreground mb-12 max-w-md mx-auto">
          Got a project idea, want to collaborate, or just want to say hello?
          Feel free to reach out.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s) => (
            <a
              href={s.href}
              target={s.label === "Email" ? undefined : "_blank"}
              rel={s.label === "Email" ? undefined : "noopener noreferrer"}
              class="gsap-reveal flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <div class="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <s.icon size={18} class="text-primary" />
              </div>
              <div class="text-left">
                <p class="font-mono text-xs text-muted-foreground">{s.label}</p>
                <p class="font-mono text-sm text-foreground">{s.display}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
