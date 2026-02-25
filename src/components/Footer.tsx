export default function Footer() {
  return (
    <footer class="border-t border-border py-8 px-6">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Paritosh Yadav
        </p>
        <p class="font-mono text-xs text-muted-foreground">
          Built with <span class="text-primary">SolidJS</span> +{" "}
          <span class="text-accent">GSAP</span>
        </p>
      </div>
    </footer>
  );
}
