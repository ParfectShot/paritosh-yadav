import { createSignal, onMount, onCleanup } from "solid-js";
import { ChevronDown } from "lucide-solid";

export default function Hero() {
  const [displayText, setDisplayText] = createSignal("");
  const [showCursor, setShowCursor] = createSignal(true);
  const fullText = "Developer × Photographer × Builder";

  onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <section class="section-full relative flex flex-col items-center justify-center px-6 grid-bg">
      <div class="relative z-10 text-center max-w-3xl">
        <p class="font-mono text-xs uppercase tracking-widest text-accent mb-4 animate-fade-in-up">
          // Hello World
        </p>

        <h1 class="text-4xl sm:text-5xl md:text-7xl font-mono font-bold text-foreground mb-6 animate-fade-in-up" style="animation-delay: 0.1s">
          Paritosh Yadav<span class="text-primary">.</span>
        </h1>

        <div class="font-mono text-lg sm:text-xl text-muted-foreground mb-8 h-8 animate-fade-in-up" style="animation-delay: 0.2s">
          <span>{displayText()}</span>
          <span class="typed-cursor" classList={{ "opacity-0": !showCursor() }} />
        </div>

        <div class="flex gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.4s">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            class="font-mono text-sm px-6 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
          >
            Explore
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            class="font-mono text-sm px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <ChevronDown size={24} class="text-muted-foreground" />
      </div>
    </section>
  );
}
