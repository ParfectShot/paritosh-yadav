import { For, Show } from "solid-js";
import { ExternalLink } from "lucide-solid";
import { projects } from "~/data/projects";
import SectionLabel from "./SectionLabel";

function statusColor(status: string) {
  switch (status) {
    case "Active":
      return "text-accent border-accent/30";
    case "In Development":
      return "text-primary border-primary/30";
    default:
      return "text-muted-foreground border-border";
  }
}

export default function Projects() {
  return (
    <section id="projects" class="section-full flex items-center py-24 px-6">
      <div class="max-w-6xl mx-auto w-full">
        <SectionLabel label="Projects" />
        <h2 class="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-12">
          What I Build<span class="text-primary">.</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <For each={projects}>
            {(project) => (
              <div class="gsap-reveal bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group flex flex-col">
                <div class="flex items-start justify-between mb-4">
                  <h3 class="font-mono text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span
                    class={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusColor(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p class="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div class="flex items-center justify-between">
                  <div class="flex flex-wrap gap-1.5">
                    <For each={project.techStack}>
                      {(tech) => (
                        <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground">
                          {tech}
                        </span>
                      )}
                    </For>
                  </div>

                  <Show when={project.url}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary hover:text-primary/80 transition-colors"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </Show>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
