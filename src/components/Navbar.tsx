import { createSignal, onMount, onCleanup, Show } from "solid-js";
import { A } from "@solidjs/router";
import { Menu, X } from "lucide-solid";
import ThemeToggle from "./ThemeToggle";

const anchorLinks = [
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#timeline" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const routeLinks = [
  { label: "Photography", href: "/photography" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = createSignal(false);
  const [mobileOpen, setMobileOpen] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  function handleAnchorClick(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        classList={{
          "bg-background/80 backdrop-blur-xl border-b border-border": scrolled(),
          "bg-transparent": !scrolled(),
        }}
      >
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <A href="/" class="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors">
            paritosh.dev
          </A>

          {/* Desktop nav */}
          <div class="hidden md:flex items-center gap-6">
            {anchorLinks.map((link) => (
              <button
                onClick={() => handleAnchorClick(link.href)}
                class="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            {routeLinks.map((link) => (
              <A
                href={link.href}
                class="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </A>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <div class="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen())}
              class="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen() ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <Show when={mobileOpen()}>
        <div class="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
          {anchorLinks.map((link) => (
            <button
              onClick={() => handleAnchorClick(link.href)}
              class="font-mono text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          {routeLinks.map((link) => (
            <A
              href={link.href}
              class="font-mono text-lg text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </A>
          ))}
        </div>
      </Show>
    </>
  );
}
