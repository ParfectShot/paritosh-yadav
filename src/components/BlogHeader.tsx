import { A } from "@solidjs/router";

type BlogHeaderProps = {
  compact?: boolean;
};

export default function BlogHeader(props: BlogHeaderProps) {
  return (
    <header class="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <A href="/" class="font-mono text-sm font-semibold tracking-tight text-foreground">
          paritosh<span class="text-primary">.</span>dev
        </A>

        <nav class="flex items-center gap-6">
          <A
            href="/"
            class="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            Home
          </A>
          <A
            href="/blog"
            class={`font-mono text-xs uppercase tracking-[0.24em] transition-colors duration-200 hover:text-primary ${
              props.compact ? "text-foreground" : "text-primary"
            }`}
          >
            Blog
          </A>
        </nav>
      </div>
    </header>
  );
}
