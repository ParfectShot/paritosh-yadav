export interface Project {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
  status: "Active" | "In Development" | "Coming Soon";
}

export const projects: Project[] = [
  {
    title: "Off Grid Collective",
    description:
      "A resource hub for off-grid living — cabins, solar power, and self-sufficiency. Built for the growing community seeking independence.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "https://offgridcollective.co",
    status: "Active",
  },
  {
    title: "paritosh.dev",
    description:
      "Personal portfolio built with SolidJS and GSAP. Features breathing backgrounds, ASCII mascot, and smooth scroll animations.",
    techStack: ["SolidJS", "Tailwind CSS", "GSAP", "Lenis"],
    status: "In Development",
  },
  {
    title: "Image Compressor",
    description:
      "Browser-based image compression tool. Everything runs locally — no uploads, no servers, complete privacy.",
    techStack: ["SolidJS", "Canvas API", "Web Workers"],
    status: "Coming Soon",
  },
  {
    title: "Document OCR",
    description:
      "Extract text from documents and images using OCR. Process everything directly in the browser with zero server dependency.",
    techStack: ["SolidJS", "Tesseract.js", "Web Workers"],
    status: "Coming Soon",
  },
];
