import { createSignal, onMount, onCleanup, Show } from "solid-js";

interface AsciiState {
  art: string;
  label: string;
}

const states: Record<string, AsciiState> = {
  hero: {
    art: `   O\n  /|\\  ☞\n  / \\\n`,
    label: "hello!",
  },
  about: {
    art: `   O\n  /|\\  ☞\n  / \\\n`,
    label: "hello!",
  },
  timeline: {
    art: `   O\n  /|\\ ⌨\n  / \\\n`,
    label: "[typing...]",
  },
  projects: {
    art: `   O\n  /|🔧\n  / \\\n`,
    label: "[building...]",
  },
  contact: {
    art: `   O\n  /|\\\n  / \\\n`,
    label: "",
  },
};

export default function AsciiCharacter() {
  const [activeSection, setActiveSection] = createSignal("hero");
  const [visible, setVisible] = createSignal(false);
  const [dismissed, setDismissed] = createSignal(false);

  onMount(() => {
    // Show after hero animation completes
    const timeout = setTimeout(() => setVisible(true), 2500);

    // Observe sections
    const sections = ["about", "timeline", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "hero");
          }
        }
      },
      { threshold: 0.3 }
    );

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    onCleanup(() => {
      clearTimeout(timeout);
      observer.disconnect();
    });
  });

  const current = () => states[activeSection()] || states.hero;

  return (
    <Show when={visible() && !dismissed()}>
      <div
        class="ascii-character"
        onClick={() => setDismissed(true)}
        title="Click to dismiss"
      >
        <pre class="leading-tight">{current().art}</pre>
        <Show when={current().label}>
          <p class="text-center text-[10px] mt-0.5">{current().label}</p>
        </Show>
      </div>
    </Show>
  );
}
