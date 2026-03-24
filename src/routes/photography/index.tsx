import { Meta, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { ArrowRight, ChevronDown, Filter, MapPin, Tag } from "lucide-solid";
import { For, createEffect, createMemo, createSignal, onMount } from "solid-js";
import SiteHeader from "~/components/SiteHeader";
import { photographs, photographyTags, photoStories } from "~/content/photography";

type VisibleStory = (typeof photoStories)[number] & {
  visiblePhotos: (typeof photoStories)[number]["photos"];
};

export default function Photography() {
  const [activeTag, setActiveTag] = createSignal<string | null>(null);
  const [openStory, setOpenStory] = createSignal(photoStories[0]?.slug ?? "");

  let heroRef!: HTMLDivElement;
  let filterRef!: HTMLDivElement;
  let storiesRef!: HTMLDivElement;

  const visibleStories = createMemo<VisibleStory[]>(() => {
    const tag = activeTag();

    return photoStories
      .map((story) => ({
        ...story,
        visiblePhotos: story.photos.filter((photo) =>
          !tag ? true : story.tags.includes(tag) || photo.tags.includes(tag),
        ),
      }))
      .filter((story) => story.visiblePhotos.length > 0);
  });

  createEffect(() => {
    const stories = visibleStories();
    if (stories.length === 0) return;

    if (!stories.some((story) => story.slug === openStory())) {
      setOpenStory(stories[0].slug);
    }
  });

  onMount(async () => {
    const gsap = (await import("gsap")).default;

    gsap.fromTo(
      heroRef,
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    );

    gsap.fromTo(
      filterRef,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: "power2.out" },
    );

    const cards = storiesRef.querySelectorAll(".photo-story-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        delay: 0.25,
        ease: "power2.out",
      },
    );
  });

  return (
    <>
      <Title>Photography | Paritosh Yadav</Title>
      <Meta
        name="description"
        content="Story-led photography archive with tags, places, and room for written notes alongside each photograph."
      />

      <div class="noise-overlay" />
      <div class="min-h-screen bg-background">
        <SiteHeader active="photography" />

        <main class="px-6 pb-20 pt-28">
          <div class="mx-auto max-w-6xl">
            <section
              ref={heroRef}
              class="grid gap-10 border-b border-border pb-12 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]"
              style="opacity: 0"
            >
              <div>
                <p class="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  // Photography
                </p>
                <h1 class="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  A story-led photo archive built around place, mood, and small observations.
                </h1>
                <p class="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  The gallery is organized in story groups first, then tags. Some photographs carry notes when the frame has a thought attached to it. Others stay quiet.
                </p>

                <div class="mt-8 flex flex-wrap gap-3">
                  <div class="rounded-2xl border border-border bg-card/60 px-4 py-3">
                    <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Stories
                    </p>
                    <p class="mt-2 text-2xl font-bold text-foreground">{photoStories.length}</p>
                  </div>
                  <div class="rounded-2xl border border-border bg-card/60 px-4 py-3">
                    <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Frames
                    </p>
                    <p class="mt-2 text-2xl font-bold text-foreground">{photographs.length}</p>
                  </div>
                  <div class="rounded-2xl border border-border bg-card/60 px-4 py-3">
                    <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      Tags
                    </p>
                    <p class="mt-2 text-2xl font-bold text-foreground">{photographyTags.length}</p>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 md:pl-8">
                <For each={photoStories.slice(0, 3)}>
                  {(story, index) => (
                    <div
                      class={`overflow-hidden rounded-3xl border border-border bg-card/60 ${
                        index() === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                      }`}
                    >
                      <img
                        src={story.photos[0].src}
                        alt={story.photos[0].alt}
                        class="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                  )}
                </For>
              </div>
            </section>

            <section ref={filterRef} class="sticky top-20 z-20 mt-8" style="opacity: 0">
              <div class="rounded-3xl border border-border bg-background/85 p-4 backdrop-blur-xl">
                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                      Browse by tag
                    </p>
                    <p class="mt-1 text-sm text-muted-foreground">
                      Theme, place, or intent. The filter updates the visible stories and frames.
                    </p>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveTag(null)}
                      class={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                        activeTag() === null
                          ? "border-primary/40 bg-primary/10 text-foreground"
                          : "border-border bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Filter size={12} />
                      All frames
                    </button>

                    <For each={photographyTags}>
                      {(tag) => (
                        <button
                          onClick={() => setActiveTag(tag)}
                          class={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                            activeTag() === tag
                              ? "border-primary/40 bg-primary/10 text-foreground"
                              : "border-border bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tag}
                        </button>
                      )}
                    </For>
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-10">
              <div class="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    Story Groups
                  </p>
                  <h2 class="mt-2 text-2xl font-bold text-foreground">
                    Open a set, then move frame by frame<span class="text-primary">.</span>
                  </h2>
                </div>
                <p class="hidden font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground md:block">
                  {visibleStories().length} visible stories
                </p>
              </div>

              <div ref={storiesRef} class="space-y-4">
                <For each={visibleStories()}>
                  {(story) => {
                    const isOpen = () => openStory() === story.slug;

                    return (
                      <article class="photo-story-card overflow-hidden rounded-3xl border border-border bg-card/65" style="opacity: 0">
                        <button
                          onClick={() => setOpenStory(isOpen() ? "" : story.slug)}
                          class="flex w-full flex-col gap-6 p-5 text-left md:flex-row md:items-center md:justify-between md:p-6"
                        >
                          <div class="flex items-start gap-4">
                            <div class="hidden h-24 w-20 overflow-hidden rounded-2xl border border-border bg-background/70 md:block">
                              <img
                                src={story.photos[0].src}
                                alt={story.photos[0].alt}
                                class="h-full w-full object-cover transition-transform duration-700"
                              />
                            </div>

                            <div>
                              <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                                {story.eyebrow}
                              </p>
                              <h3 class="mt-2 text-2xl font-bold tracking-tight text-foreground">
                                {story.title}
                              </h3>
                              <p class="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                                {story.description}
                              </p>

                              <div class="mt-4 flex flex-wrap gap-3 text-[11px] text-muted-foreground">
                                <span class="inline-flex items-center gap-1.5">
                                  <MapPin size={12} />
                                  {story.location}
                                </span>
                                <span class="inline-flex items-center gap-1.5">
                                  <Tag size={12} />
                                  {story.visiblePhotos.length} frame{story.visiblePhotos.length > 1 ? "s" : ""}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div class="flex items-center justify-between gap-4 md:flex-col md:items-end">
                            <div class="flex flex-wrap justify-end gap-2">
                              <For each={story.tags}>
                                {(tag) => (
                                  <span class="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                    {tag}
                                  </span>
                                )}
                              </For>
                            </div>

                            <span class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
                              {isOpen() ? "Hide frames" : "Open story"}
                              <ChevronDown
                                size={14}
                                class={`transition-transform duration-300 ${isOpen() ? "rotate-180" : ""}`}
                              />
                            </span>
                          </div>
                        </button>

                        <div
                          class={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity,padding] duration-500 ease-out md:px-6 ${
                            isOpen() ? "grid-rows-[1fr] pb-5 opacity-100 md:pb-6" : "grid-rows-[0fr] pb-0 opacity-0"
                          }`}
                        >
                          <div class="overflow-hidden border-t border-border pt-5 md:pt-6">
                            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                              <For each={story.visiblePhotos}>
                                {(photo, index) => (
                                  <A
                                    href={`/photography/${photo.slug}`}
                                    class="group photo-tile flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/60"
                                    style={{ "animation-delay": `${index() * 90}ms` }}
                                  >
                                    <div
                                      class={`overflow-hidden ${
                                        photo.aspect === "portrait"
                                          ? "aspect-[4/5]"
                                          : photo.aspect === "square"
                                            ? "aspect-square"
                                            : "aspect-[16/10]"
                                      }`}
                                    >
                                      <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        loading="lazy"
                                        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                      />
                                    </div>

                                    <div class="flex flex-1 flex-col p-4">
                                      <div class="flex items-center justify-between gap-3">
                                        <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                                          {photo.location}
                                        </span>
                                        {photo.thoughts?.length ? (
                                          <span class="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                                            Notes
                                          </span>
                                        ) : null}
                                      </div>

                                      <h4 class="mt-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                                        {photo.title}
                                      </h4>
                                      <p class="mt-2 flex-1 text-sm leading-7 text-muted-foreground">
                                        {photo.description}
                                      </p>

                                      <div class="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors duration-200 group-hover:text-primary">
                                        View photograph
                                        <ArrowRight size={14} />
                                      </div>
                                    </div>
                                  </A>
                                )}
                              </For>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  }}
                </For>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
