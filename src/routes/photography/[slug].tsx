import { Meta, Title } from "@solidjs/meta";
import { A, useParams } from "@solidjs/router";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Tag } from "lucide-solid";
import { For, Show, onMount } from "solid-js";
import SiteHeader from "~/components/SiteHeader";
import { formatPhotoDate, getPhotograph, getPhotoStory } from "~/content/photography";

export default function PhotographyDetailPage() {
  const params = useParams();
  const photo = () => getPhotograph(params.slug);
  const story = () => (photo() ? getPhotoStory(photo()!.storySlug) : undefined);
  const relatedPhotos = () =>
    story()?.photos.filter((item) => item.slug !== params.slug).slice(0, 3) ?? [];
  const tags = () => Array.from(new Set([...(story()?.tags ?? []), ...(photo()?.tags ?? [])]));

  let heroRef!: HTMLDivElement;
  let relatedRef!: HTMLDivElement;

  onMount(async () => {
    const gsap = (await import("gsap")).default;

    if (heroRef) {
      gsap.fromTo(
        heroRef,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" },
      );
    }

    const cards = relatedRef?.querySelectorAll(".related-photo-card");
    if (cards?.length) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.2,
          ease: "power2.out",
        },
      );
    }
  });

  return (
    <>
      <Title>
        {photo() ? `${photo()!.title} | Photography | Paritosh Yadav` : "Photograph Not Found | Paritosh Yadav"}
      </Title>
      <Meta
        name="description"
        content={photo()?.description ?? "The photograph you tried to open could not be found."}
      />

      <div class="noise-overlay" />
      <div class="min-h-screen bg-background">
        <SiteHeader active="photography" />

        {!photo() ? (
          <main class="flex min-h-screen items-center justify-center px-6 pt-16">
            <div class="max-w-xl text-center">
              <p class="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                // 404
              </p>
              <h1 class="mt-4 text-4xl font-bold tracking-tight text-foreground">
                Photograph not found<span class="text-primary">.</span>
              </h1>
              <p class="mt-4 text-sm leading-7 text-muted-foreground">
                The photograph you tried to open does not exist, or its slug changed while the archive was being updated.
              </p>
              <A
                href="/photography"
                class="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft size={16} />
                Back to photography
              </A>
            </div>
          </main>
        ) : (
          <main class="px-6 pb-20 pt-28">
            <article ref={heroRef} class="mx-auto max-w-6xl" style="opacity: 0">
              <A
                href="/photography"
                class="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <ArrowLeft size={14} />
                All stories
              </A>

              <div class="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
                <div class="overflow-hidden rounded-[2rem] border border-border bg-card/60">
                  <img
                    src={photo()!.src}
                    alt={photo()!.alt}
                    class="h-full w-full object-cover"
                  />
                </div>

                <div class="rounded-[2rem] border border-border bg-card/60 p-6 md:p-8">
                  <p class="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                    {story()?.eyebrow}
                  </p>
                  <h1 class="mt-4 text-4xl font-bold tracking-tight text-foreground">
                    {photo()!.title}
                  </h1>
                  <p class="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                    {photo()!.description}
                  </p>

                  <div class="mt-8 grid gap-4 border-y border-border py-6 text-sm text-muted-foreground">
                    <div class="inline-flex items-center gap-2">
                      <MapPin size={14} />
                      {photo()!.location}
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <CalendarDays size={14} />
                      {formatPhotoDate(photo()!.capturedAt)}
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <Tag size={14} />
                      {story()?.title}
                    </div>
                  </div>

                  <div class="mt-6 flex flex-wrap gap-2">
                    <For each={tags()}>
                      {(tag) => (
                        <span class="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>

                  <Show when={photo()!.thoughts?.length}>
                    <section class="mt-8 border-t border-border pt-6">
                      <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                        Field Notes
                      </p>
                      <div class="photo-prose mt-4">
                        <For each={photo()!.thoughts}>
                          {(paragraph) => <p>{paragraph}</p>}
                        </For>
                      </div>
                    </section>
                  </Show>
                </div>
              </div>
            </article>

            <section class="mx-auto mt-20 max-w-6xl border-t border-border pt-10">
              <div class="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    Same Story
                  </p>
                  <h2 class="mt-2 text-2xl font-bold text-foreground">
                    More from {story()?.title}
                    <span class="text-primary">.</span>
                  </h2>
                </div>
              </div>

              <div ref={relatedRef} class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <For each={relatedPhotos()}>
                  {(item) => (
                    <A
                      href={`/photography/${item.slug}`}
                      class="related-photo-card group overflow-hidden rounded-2xl border border-border bg-card/65"
                      style="opacity: 0"
                    >
                      <div class={item.aspect === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]"}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                      </div>

                      <div class="p-4">
                        <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                          {item.location}
                        </p>
                        <h3 class="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p class="mt-2 text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                        <div class="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-200 group-hover:text-primary">
                          Open photograph
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </A>
                  )}
                </For>
              </div>
            </section>
          </main>
        )}
      </div>
    </>
  );
}
