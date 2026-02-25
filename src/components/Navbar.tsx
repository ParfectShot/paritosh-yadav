import { createSignal, onMount, onCleanup, Show } from "solid-js";
import { Menu, X } from "lucide-solid";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = createSignal(false);
  const [mobileOpen, setMobileOpen] = createSignal(false);
  let navRef!: HTMLElement;

  onMount(async () => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    onCleanup(() => window.removeEventListener("scroll", handler));

    // Slide-down entrance animation
    const gsap = (await import("gsap")).default;
    gsap.fromTo(navRef, { y: -100 }, { y: 0, duration: 0.5, delay: 1.5 });
  });

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        class={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled()
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            class="font-mono text-sm font-semibold text-foreground tracking-tight"
          >
            paritosh<span class="text-primary">.</span>dev
          </a>

          {/* Desktop */}
          <div class="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                onClick={() => handleClick(link.href)}
                class="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen())}
            class="md:hidden text-foreground"
          >
            {mobileOpen() ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <Show when={mobileOpen()}>
        <div class="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button
              onClick={() => handleClick(link.href)}
              class="font-mono text-2xl text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </Show>
    </>
  );
}
