import { A } from "@solidjs/router";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-solid";
import type { BlogPost } from "~/content/blog";
import { formatBlogDate } from "~/content/blog";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard(props: BlogCardProps) {
  return (
    <A
      href={`/blog/${props.post.slug}`}
      class="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card"
    >
      <div class="mb-5 flex items-center justify-between gap-4">
        <span class="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
          {props.post.category}
        </span>
        <div class="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span class="inline-flex items-center gap-1.5">
            <CalendarDays size={12} />
            {formatBlogDate(props.post.publishedAt)}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <Clock3 size={12} />
            {props.post.readTime}
          </span>
        </div>
      </div>

      <h2 class="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
        {props.post.title}
      </h2>
      <p class="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
        {props.post.excerpt}
      </p>

      <div class="mb-6 flex flex-wrap gap-2">
        {props.post.tags.map((tag) => (
          <span class="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-foreground transition-colors duration-200 group-hover:text-primary">
        Read article
        <ArrowRight size={14} />
      </div>
    </A>
  );
}
