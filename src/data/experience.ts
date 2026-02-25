export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Frontend Lead",
    company: "Indiagold",
    location: "Abu Dhabi, UAE",
    duration: "Mar 2022 — Present",
    description:
      "Leading frontend architecture and team transformation. Built marketing website, admin dashboard, and customer-facing web app with significant performance improvements.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "Zustand"],
    highlights: [
      "PageSpeed: 45 → 95",
      "Organic Traffic: 0 → 800k+ clicks/mo",
      "Lead Conversion: 10% → 30%",
      "Team: 7 → 3 with improved delivery",
    ],
  },
  {
    role: "Software Developer",
    company: "StoryXpress",
    location: "Gurgaon, India",
    duration: "Jan 2021 — Mar 2022",
    description:
      "Built cross-platform desktop app, web platform, browser extension, and integration SDK. Mentored a team of 3 fresh graduates.",
    techStack: ["Electron.js", "React", "TypeScript", "WebSocket", "Chrome APIs"],
    highlights: [
      "1.5M+ active users",
      "30M hours content processed",
      "Desktop app size: −40%",
      "PageSpeed: 80+",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Delinno",
    location: "Gurgaon, India",
    duration: "Dec 2019 — Dec 2020",
    description:
      "Built ESG management dashboard, enterprise survey platform, and fitness trainer LMS serving global organizations.",
    techStack: ["React", "Redux", "Python", "Django", "PostgreSQL"],
    highlights: [
      "14,000+ surveys completed",
      "50+ global orgs served",
      "44K+ app downloads",
      "1000+ active trainers",
    ],
  },
  {
    role: "Technical Consultant",
    company: "CSimplifyIT",
    location: "Gurugram, India",
    duration: "Jan 2019 — Nov 2019",
    description:
      "Developed Google Workspace productivity tools and rebuilt an OCR document management system with improved efficiency.",
    techStack: ["Google Apps Script", "Python", "OpenCV", "Django", "jQuery"],
    highlights: [
      "30K+ add-on downloads",
      "Mass mail merge tool",
      "OCR system rebuild",
      "Recruitment automation",
    ],
  },
];
