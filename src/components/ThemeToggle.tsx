import { createSignal, onMount } from "solid-js";
import { Sun, Moon } from "lucide-solid";

export default function ThemeToggle() {
  const [isDark, setIsDark] = createSignal(true);

  onMount(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  });

  function toggle() {
    const next = !isDark();
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      class="p-2 rounded-lg hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark() ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
