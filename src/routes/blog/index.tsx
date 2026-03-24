import { Meta, Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-solid";
import BlogCard from "~/components/BlogCard";
import BlogHeader from "~/components/BlogHeader";
import { blogPosts, featuredBlogPost, formatBlogDate } from "~/content/blog";

export default function Blog() {
  return (
    <>
      <Title>Blog | Paritosh Yadav</Title>
      <Meta
        name="description"
        content="Notes on frontend systems, product engineering, and clean interface design from Paritosh Yadav."
      />

      <div class="noise-overlay" />
      <div class="min-h-screen bg-background">
        <BlogHeader />

        <main class="px-6 pb-20 pt-28">
          <div class="mx-auto max-w-5xl">
            <section class="mb-16 grid gap-8 border-b border-border pb-12 md:grid-cols-[minmax(0,1fr)_240px] md:items-end">
              <div>
                <p class="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-accent">
                  // Blog
                </p>
                <h1 class="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
                  Clean writing on product frontend, systems, and the tradeoffs that actually matter.
                </h1>
                <p class="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                  A minimal journal built around engineering lessons, interface decisions, and patterns that hold up under real product pressure.
                </p>
              </div>

              <div class="grid gap-3">
                <div class="rounded-2xl border border-border bg-card/60 p-4">
                  <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Experience
                  </p>
                  <p class="mt-2 text-2xl font-bold text-foreground">7+ years</p>
                </div>
                <div class="rounded-2xl border border-border bg-card/60 p-4">
                  <p class="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Focus
                  </p>
                  <p class="mt-2 text-sm leading-6 text-foreground">Frontend systems, product quality, and maintainable UI.</p>
                </div>
              </div>
            </section>

            <section class="mb-16">
              <div class="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    Featured
                  </p>
                  <h2 class="mt-2 text-2xl font-bold text-foreground">
                    Start with the anchor piece<span class="text-primary">.</span>
                  </h2>
                </div>
              </div>

              <A
                href={`/blog/${featuredBlogPost.slug}`}
                class="group grid gap-8 rounded-3xl border border-border bg-card/70 p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card md:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)]"
              >
                <div>
                  <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                    {featuredBlogPost.category}
                  </span>
                  <h3 class="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary md:text-4xl">
                    {featuredBlogPost.title}
                  </h3>
                  <p class="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    {featuredBlogPost.excerpt}
                  </p>
                  <div class="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-foreground transition-colors duration-200 group-hover:text-primary">
                    Read featured post
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div class="flex flex-col justify-between rounded-2xl border border-border bg-background/70 p-5">
                  <div class="flex items-center gap-3 text-xs text-muted-foreground">
                    <span class="inline-flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {formatBlogDate(featuredBlogPost.publishedAt)}
                    </span>
                    <span class="inline-flex items-center gap-1.5">
                      <Clock3 size={13} />
                      {featuredBlogPost.readTime}
                    </span>
                  </div>

                  <div class="mt-8 flex flex-wrap gap-2">
                    {featuredBlogPost.tags.map((tag) => (
                      <span class="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </A>
            </section>

            <section>
              <div class="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                    Latest Posts
                  </p>
                  <h2 class="mt-2 text-2xl font-bold text-foreground">
                    Recent writing<span class="text-primary">.</span>
                  </h2>
                </div>
              </div>

              <div class="grid gap-5 md:grid-cols-2">
                {blogPosts.map((post) => (
                  <BlogCard post={post} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
