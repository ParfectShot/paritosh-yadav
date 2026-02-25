import { createSignal, createEffect, onMount, onCleanup } from "solid-js";
import { ChevronDown } from "lucide-solid";

const roles = [
  "Frontend Engineer",
  "Photographer",
  "Builder",
  "Problem Solver",
];

export default function HeroSection() {
  const [displayText, setDisplayText] = createSignal("");
  const [roleIndex, setRoleIndex] = createSignal(0);
  const [charIndex, setCharIndex] = createSignal(0);
  const [isDeleting, setIsDeleting] = createSignal(false);

  let heroRef!: HTMLDivElement;
  let subtitleRef!: HTMLParagraphElement;
  let scrollRef!: HTMLDivElement;

  createEffect(() => {
    const currentRole = roles[roleIndex()];
    const timeout = setTimeout(
      () => {
        if (!isDeleting()) {
          setDisplayText(currentRole.slice(0, charIndex() + 1));
          setCharIndex((c) => c + 1);
          if (charIndex() + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.slice(0, charIndex() - 1));
          setCharIndex((c) => c - 1);
          if (charIndex() <= 1) {
            setIsDeleting(false);
            setRoleIndex((r) => (r + 1) % roles.length);
          }
        }
      },
      isDeleting() ? 40 : 80
    );
    onCleanup(() => clearTimeout(timeout));
  });

  onMount(async () => {
    const gsap = (await import("gsap")).default;

    // Hero content entrance
    gsap.fromTo(heroRef, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });

    // Subtitle fade in
    gsap.fromTo(subtitleRef, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 1.2 });

    // Scroll indicator fade in
    gsap.fromTo(scrollRef, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 2 });
  });

  return (
    <section class="section-full relative flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid bg */}
      <div
        class="absolute inset-0 opacity-[0.04]"
        style={{
          "background-image":
            "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          "background-size": "60px 60px",
        }}
      />

      <div ref={heroRef} class="relative z-10 text-center max-w-3xl" style="opacity: 0">
        <p class="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
          {"// Hello, World"}
        </p>

        <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
          Paritosh
        </h1>

        <div class="h-10 flex items-center justify-center">
          <span class="font-mono text-lg md:text-xl text-muted-foreground">
            {displayText()}
          </span>
          <span class="cursor-blink text-primary ml-0.5 font-mono text-lg md:text-xl">
            |
          </span>
        </div>

        <p ref={subtitleRef} class="mt-8 text-sm text-muted-foreground font-mono max-w-md mx-auto leading-relaxed" style="opacity: 0">
          Building digital products by day, capturing moments through a lens,
          and engineering off-grid solutions on weekends.
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} class="absolute bottom-10 flex flex-col items-center gap-2" style="opacity: 0">
        <span class="text-xs font-mono text-muted-foreground">scroll</span>
        <div class="animate-scroll-bounce">
          <ChevronDown size={16} class="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
