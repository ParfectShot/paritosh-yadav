import { Meta, Title } from "@solidjs/meta";
import { A, useParams } from "@solidjs/router";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-solid";
import BlogCard from "~/components/BlogCard";
import BlogHeader from "~/components/BlogHeader";
import { blogPosts, formatBlogDate, getBlogPost } from "~/content/blog";

export default function BlogPostPage() {
  const params = useParams();
  const post = () => getBlogPost(params.slug);
  const relatedPosts = () =>
    blogPosts.filter((item) => item.slug !== params.slug).slice(0, 2);

  return (
    <>
      <Title>{post() ? `${post()!.title} | Blog | Paritosh Yadav` : "Post Not Found | Blog | Paritosh Yadav"}</Title>
      <Meta
        name="description"
        content={post()?.excerpt ?? "The blog post you requested could not be found."}
      />

      <div class="noise-overlay" />
      <div class="min-h-screen bg-background">
        <BlogHeader compact />

        {!post() ? (
          <main class="flex min-h-screen items-center justify-center px-6 pt-16">
            <div class="max-w-xl text-center">
              <p class="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                // 404
              </p>
              <h1 class="mt-4 text-4xl font-bold tracking-tight text-foreground">
                Post not found<span class="text-primary">.</span>
              </h1>
              <p class="mt-4 text-sm leading-7 text-muted-foreground">
                The article you tried to open does not exist, or the slug changed while the site was being updated.
              </p>
              <A
                href="/blog"
                class="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors duration-200 hover:text-accent"
              >
                <ArrowLeft size={16} />
                Back to blog
              </A>
            </div>
          </main>
        ) : (
          <main class="px-6 pb-20 pt-28">
            <article class="mx-auto max-w-3xl">
              <A
                href="/blog"
                class="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <ArrowLeft size={14} />
                All posts
              </A>

              <header class="border-b border-border pb-10">
                <span class="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                  {post()!.category}
                </span>
                <h1 class="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {post()!.title}
                </h1>
                <p class="mt-5 text-base leading-8 text-muted-foreground">
                  {post()!.excerpt}
                </p>

                <div class="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span class="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} />
                    {formatBlogDate(post()!.publishedAt)}
                  </span>
                  <span class="inline-flex items-center gap-1.5">
                    <Clock3 size={14} />
                    {post()!.readTime}
                  </span>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                  {post()!.tags.map((tag) => (
                    <span class="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              <div class="blog-prose pt-10">
                {post()!.sections.map((section) => (
                  <section class="mb-10">
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p>{paragraph}</p>
                    ))}
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>

            <section class="mx-auto mt-20 max-w-5xl border-t border-border pt-10">
              <div class="mb-6">
                <p class="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                  More Writing
                </p>
                <h2 class="mt-2 text-2xl font-bold text-foreground">
                  Keep reading<span class="text-primary">.</span>
                </h2>
              </div>

              <div class="grid gap-5 md:grid-cols-2">
                {relatedPosts().map((item) => (
                  <BlogCard post={item} />
                ))}
              </div>
            </section>
          </main>
        )}
      </div>
    </>
  );
}
