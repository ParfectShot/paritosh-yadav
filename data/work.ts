interface TechStackItem {
  name: string;
  category?: 'frontend' | 'backend' | 'devops';
}

export type MetricValue = string | number | { before: string; after: string };

export interface Metric {
  label: string;
  value: MetricValue;
  unit?: string;
  comparison?: {
    cached?: string;
    previous?: string;
  };
  category: 'performance' | 'business' | 'technical';
  description?: string;
}

interface ProjectSection {
  title: string;
  description: string;
  techStack: TechStackItem[];
  metrics: Array<{
    sectionTitle: string;
    metrics: Metric[]
  }>;
}

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  duration: {
    start: string;
    end: string;
  };
  projects: {
    [key: string]: ProjectSection;
  };
}

export const workData: WorkExperience = {
  role: 'Frontend Lead',
  company: 'Indiagold',
  location: 'Abu Dhabi, UAE',
  duration: {
    start: 'Mar 2022',
    end: 'Present',
  },
  projects: {
    marketing: {
      title: 'Marketing Website',
      description: 'Implemented Next.js best practices including dynamic imports, image optimization, and route prefetching. Utilized static generation with ISR and CDN integration. Reduced bundle size through code splitting, tree shaking and removing duplicate JS & CSS.',
      techStack: [
        { name: 'Next.js', category: 'frontend' },
        { name: 'Strapi', category: 'backend' },
        { name: 'Zustand', category: 'frontend' },
        { name: 'Typescript', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'React Query', category: 'frontend' },
        { name: 'AWS S3', category: 'devops' },
        { name: 'Vercel', category: 'devops' },
      ],
      metrics: [
        {
          sectionTitle: 'Client-Side Optimizations',
          metrics: [
            {
              label: 'Pagespeed Score',
              value: { before: '45', after: '95' },
              category: 'performance',
            },
            {
              label: 'Page Load (Full Bandwidth)',
              value: { before: '361ms', after: '195ms' },
              comparison: { cached: '195ms' },
              category: 'performance',
            },
            {
              label: 'Page Load (4g)',
              value: { before: '850ms', after: '390ms' },
              comparison: { cached: '390ms' },
              category: 'performance',
            },
            {
              label: 'Page Load (3g)',
              value: { before: '11s', after: '2.3s' },
              comparison: { cached: '2.3s' },
              category: 'performance',
            },
          ],
        },
        {
          sectionTitle: 'Build Time Optimization',
          metrics: [
            {
              label: 'Build Time',
              value: { before: '15m', after: '3m' },
              category: 'technical',
            },
          ],
        },
      ],
    },
    dashboard: {
      title: 'Admin Dashboard',
      description: 'Built scalable architecture using Redux toolkit for state management, Redux Saga for side effects...',
      techStack: [
        { name: 'React', category: 'frontend' },
        { name: 'Redux Toolkit', category: 'frontend' },
        { name: 'Redux Saga', category: 'frontend' },
        { name: 'Typescript', category: 'frontend' },
        { name: 'React Router', category: 'frontend' },
        { name: 'Formik', category: 'frontend' },
        { name: 'MUI & Styled Components', category: 'frontend' },
        { name: 'AWS Amplify', category: 'devops' },
      ],
      metrics: [
        {
          sectionTitle: 'System Stabily',
          metrics: [
            {
              label: 'Session Uptime',
              value: { before: '70%', after: '99.999%' },
              category: 'business',
            },
          ],
        },
        {
          sectionTitle: 'Build Time Optimization',
          metrics: [
            {
              label: 'Build Time',
              value: { before: '20m 30s', after: '8m' },
              category: 'technical',
            },
          ],
        },
      ],
    },
  },
};