import { A } from "@solidjs/router";

export default function Blog() {
  return (
    <div class="section-full flex flex-col items-center justify-center px-6">
      <p class="font-mono text-xs uppercase tracking-widest text-accent mb-4">
        // Blog
      </p>
      <h1 class="text-4xl font-mono font-bold text-foreground mb-4">
        Coming Soon<span class="text-primary">.</span>
      </h1>
      <p class="text-muted-foreground mb-8">Articles are being written.</p>
      <A href="/" class="font-mono text-sm text-primary hover:underline">
        &larr; Back Home
      </A>
    </div>
  );
}
