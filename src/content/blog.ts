export type BlogSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "frontend-systems-that-age-well",
    title: "Frontend Systems That Age Well",
    excerpt:
      "The stack matters less than the rules around naming, ownership, and change. The best frontend codebases stay boring in the right places.",
    category: "Engineering",
    publishedAt: "2026-03-18",
    readTime: "6 min read",
    featured: true,
    tags: ["Architecture", "Frontend", "Scale"],
    sections: [
      {
        title: "Codebases usually decay through ambiguity",
        paragraphs: [
          "Most frontend rewrites are really attempts to escape unclear decisions. Components drift, APIs become inconsistent, and every screen invents its own patterns. The pain shows up long before the code is technically unmaintainable.",
          "A system ages well when new work has an obvious place to live. That usually comes from naming discipline, stable primitives, and a shared understanding of what belongs in the app shell, feature layer, and product surface.",
        ],
      },
      {
        title: "Boring interfaces scale better",
        paragraphs: [
          "Teams move faster when component APIs are predictable. A button should feel obvious to use. A form field should expose the same states everywhere. The goal is not novelty. The goal is reducing local decision-making for every new ticket.",
          "Minimal interfaces are not about fewer features. They are about fewer surprises. When an API feels boring, maintainers can focus on business logic instead of decoding a custom abstraction.",
        ],
        bullets: [
          "Prefer a few strong primitives over many clever wrappers.",
          "Keep design tokens centralized and visible.",
          "Treat edge-case props as a signal to split responsibilities.",
        ],
      },
      {
        title: "The real leverage is operational",
        paragraphs: [
          "Healthy frontend systems are supported by habits: lightweight RFCs, clear ownership, and release discipline. Without those, even good code collapses under product pressure.",
          "If a team has to think too hard about where to put code, how to test it, or how to ship it safely, the architecture is already taxing the roadmap.",
        ],
      },
    ],
  },
  {
    slug: "seven-years-shipping-product-frontend",
    title: "Seven Years of Shipping Product Frontend",
    excerpt:
      "After enough launches, the recurring pattern is clear: product velocity comes from constraints, not from endlessly expanding the toolkit.",
    category: "Career",
    publishedAt: "2026-03-09",
    readTime: "5 min read",
    featured: false,
    tags: ["Experience", "Product", "Teams"],
    sections: [
      {
        title: "Shipping beats polishing",
        paragraphs: [
          "Early in a project, teams overestimate the value of perfect structure and underestimate feedback loops. The fastest route to clarity is still a working release with sharp edges that real users can react to.",
          "That does not mean ignoring quality. It means placing quality work where it compounds: observability, performance budgets, and stable interaction patterns.",
        ],
      },
      {
        title: "The best teams narrow the field",
        paragraphs: [
          "Strong teams do less at once. They pick one implementation path, one owner, and one definition of done. A surprising amount of frontend chaos is just unresolved decision-making masquerading as flexibility.",
          "When product, design, and engineering align on scope early, development becomes much calmer. The code usually reflects that clarity.",
        ],
        bullets: [
          "Constrain scope before you optimize execution.",
          "Decide who owns the final call on UI tradeoffs.",
          "Document patterns once, then repeat them aggressively.",
        ],
      },
    ],
  },
  {
    slug: "minimal-interfaces-make-better-products",
    title: "Minimal Interfaces Make Better Products",
    excerpt:
      "Minimalism is useful when it improves orientation. Users should know where they are, what matters, and what happens next without decoding the layout.",
    category: "Design",
    publishedAt: "2026-02-26",
    readTime: "4 min read",
    featured: false,
    tags: ["UI", "UX", "Systems"],
    sections: [
      {
        title: "Minimal does not mean empty",
        paragraphs: [
          "A minimal interface still has hierarchy, rhythm, and intent. It simply removes decorative noise that competes with the task. In practice, this means stronger type scales, better spacing, and fewer competing accents.",
          "When teams confuse minimalism with absence, the result is flat and forgettable. When they use it to strengthen focus, the interface feels confident.",
        ],
      },
      {
        title: "Restraint improves maintainability",
        paragraphs: [
          "The visual system affects engineering cost. Too many variants create implementation drag. Too many exceptions produce brittle styles. Consistent layouts and restrained states make design changes easier to propagate.",
          "That is why a clean UI is not only an aesthetic choice. It is an operational choice that reduces maintenance cost over time.",
        ],
      },
    ],
  },
  {
    slug: "rewrite-or-repair",
    title: "Rewrite or Repair",
    excerpt:
      "Most teams reach for a rewrite too early. Repair is slower to sell but often faster to deliver, especially when the product still has momentum.",
    category: "Strategy",
    publishedAt: "2026-02-11",
    readTime: "7 min read",
    featured: false,
    tags: ["Refactoring", "Decision Making", "Systems"],
    sections: [
      {
        title: "A rewrite resets more than code",
        paragraphs: [
          "Rewrites discard local knowledge. Even if the old system is awkward, it usually contains hidden business rules, small UX choices, and operational constraints that are easy to miss on a clean slate.",
          "That is why rewrites often reintroduce solved problems while delaying roadmap work. The new stack feels cleaner, but the organization absorbs a large execution tax.",
        ],
      },
      {
        title: "Repair works when the seams are visible",
        paragraphs: [
          "If the current system can be segmented, instrumented, and incrementally replaced, repair is usually the better move. The team learns while improving the product, and delivery does not stop.",
          "The key question is not whether the code is ugly. It is whether the boundaries are good enough to change one piece without destabilizing the rest.",
        ],
        bullets: [
          "Stabilize the shell first.",
          "Measure before replacing core flows.",
          "Move the highest-churn surfaces onto cleaner patterns.",
        ],
      },
    ],
  },
];

export const featuredBlogPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
