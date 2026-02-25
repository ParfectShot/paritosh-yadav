import { For } from "solid-js";
import { MapPin, Calendar } from "lucide-solid";
import { experiences } from "~/data/experience";
import SectionLabel from "./SectionLabel";

export default function Timeline() {
  return (
    <section id="timeline" class="section-full flex items-center py-24 px-6">
      <div class="max-w-4xl mx-auto w-full">
        <SectionLabel label="Timeline" />
        <h2 class="text-3xl sm:text-4xl font-mono font-bold text-foreground mb-16">
          Experience<span class="text-primary">.</span>
        </h2>

        <div class="relative">
          {/* Vertical line */}
          <div class="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div class="space-y-12">
            <For each={experiences}>
              {(exp, i) => (
                <div class="gsap-reveal relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div
                    class="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background"
                    classList={{ "glow-primary": i() === 0 }}
                  />

                  <div class="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 class="font-mono text-lg font-semibold text-foreground">
                          {exp.role}
                        </h3>
                        <p class="font-mono text-sm text-primary">{exp.company}</p>
                      </div>
                      <div class="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                        <span class="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span class="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p class="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div class="grid grid-cols-2 gap-2 mb-4">
                      <For each={exp.highlights}>
                        {(h) => (
                          <span class="font-mono text-[11px] text-accent">
                            ▸ {h}
                          </span>
                        )}
                      </For>
                    </div>

                    {/* Tech tags */}
                    <div class="flex flex-wrap gap-1.5">
                      <For each={exp.techStack}>
                        {(tech) => (
                          <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary border border-border text-muted-foreground">
                            {tech}
                          </span>
                        )}
                      </For>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </section>
  );
}
