import { A } from "@solidjs/router";

type SiteHeaderProps = {
  active?: "home" | "blog" | "photography";
};

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/blog", label: "Blog", key: "blog" },
  { href: "/photography", label: "Photography", key: "photography" },
] as const;

export default function SiteHeader(props: SiteHeaderProps) {
  return (
    <header class="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <A href="/" class="font-mono text-sm font-semibold tracking-tight text-foreground">
          paritosh<span class="text-primary">.</span>dev
        </A>

        <nav class="flex items-center gap-4 md:gap-6">
          {links.map((link) => (
            <A
              href={link.href}
              class={`font-mono text-[10px] uppercase tracking-[0.24em] transition-colors duration-200 hover:text-primary md:text-xs ${
                props.active === link.key ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
}
