import Accordion from '@root/components/Accordion';
import Divider from '@root/components/Divider';
import ListItem from '@root/components/ListItem';

export default function WorkPage() {
  return (
    <main className="p-4 max-w-4xl mx-auto md:p-8">
      <h1 className="text-3xl mb-8 text-center">Work Experience</h1>

      <Accordion
        title={
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-xl font-semibold">Frontend Lead @ Indiagold</h2>
              <p className="text-gray-600">Mar 2022 - Present | Abu Dhabi, UAE</p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <ul className="space-y-3 mt-8 md:pl-8">
          <Accordion title={<h3 className="font-semibold ml-4">Architecture & Performance</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <h4 className="font-bold">Marketing Website</h4>
                <p className="text-gray-600 mb-2">Implemented Next.js best practices including dynamic imports, image optimization, and route prefetching. Utilized static generation with ISR and CDN integration. Reduced bundle size through code splitting, tree shaking and removing duplicate JS & CSS.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-2">
                  <ListItem>Next.js</ListItem>
                  <ListItem>Strapi</ListItem>
                  <ListItem>Zustand</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>Tailwind CSS</ListItem>
                  <ListItem>React Query</ListItem>
                  <ListItem>AWS S3</ListItem>
                  <ListItem>Vercel</ListItem>
                </ul>
                <h5 className="font-semibold">Client-Side Optimizations</h5>
                <ul className="mb-2">
                  <ListItem>
                    Pagespeed Score:<span className="font-semibold"> 86-95</span>
                  </ListItem>
                  <ListItem>
                    Full Bandwidth: <span className="font-semibold">361ms (195ms cached)</span>
                  </ListItem>
                  <ListItem>
                    4g: <span className="font-semibold"> 850ms (390ms cached)</span>
                  </ListItem>
                  <ListItem>
                    3g: <span className="font-semibold"> 11s (2.3s cached)</span>
                  </ListItem>
                </ul>
                <h5 className="font-semibold">Build Time Optimization</h5>
                <ul>
                  <ListItem>15m {'->'} 3m</ListItem>
                </ul>
              </div>
              <Divider />
              <div>
                <h4 className="font-bold mb-2">Admin Dashboard</h4>
                <p className="text-gray-600 mb-2">Built scalable architecture using Redux toolkit for state management, Redux Saga for side effects. Created modular component library with lazy loading and optimized re-renders using React.memo and useMemo.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-2">
                  <ListItem>React</ListItem>
                  <ListItem>Redux Toolkit</ListItem>
                  <ListItem>Redux Saga</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>React Router</ListItem>
                  <ListItem>Formik</ListItem>
                  <ListItem>MUI & Styled Components</ListItem>
                  <ListItem>AWS Amplify</ListItem>
                </ul>
                <h5 className="font-semibold">System Stabily</h5>
                <ul className="mb-2">
                  <ListItem>70% {'->'} 99.999%</ListItem>
                </ul>
                <h5 className="font-semibold">Build Time Optimization</h5>
                <ul>
                  <ListItem>20m 30s {'->'} 8m</ListItem>
                </ul>
              </div>
              <Divider />
              <div className="mb-3">
                <h4 className="font-bold">Web App</h4>
                <p className="text-gray-600 mb-2">Developed a web app for customers to apply for loans, buy digital gold, make loan payments and manage their loan services - loan pre-payment, part release, closure, renewal and rebook. Implemented dynamic routing, form validation, and API integration. Optimized performance through lazy loading, code splitting, and caching.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-2">
                  <ListItem>React</ListItem>
                  <ListItem>Redux</ListItem>
                  <ListItem>Zustand</ListItem>
                  <ListItem>React Query</ListItem>
                  <ListItem>Typescript</ListItem>
                  <ListItem>React Hook Form</ListItem>
                  <ListItem>MUI & Styled Components</ListItem>
                </ul>
                <h5 className="font-semibold">Build Time Optimization</h5>
                <ul>
                  <ListItem>10m {'->'} 56s</ListItem>
                </ul>
              </div>
            </div>
          </Accordion>
          <Accordion title={<h3 className="font-semibold ml-4">SEO & Marketing</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <p className="text-gray-600 mb-4">Built and maintained company&apos;s marketing website focused on organic growth and ads marketing. Implemented comprehensive SEO strategy including programmatic meta-data management, structured data, and content optimization. Led technical discussions for marketing initiatives and content strategy.</p>

                <h5 className="font-semibold">Key Features</h5>
                <ul className="mb-4">
                  <ListItem>Blog platform with Strapi CMS integration</ListItem>
                  <ListItem>Gold tools suite (Calculator, Rate checker, Branch locator)</ListItem>
                  <ListItem>Online loan payment system</ListItem>
                  <ListItem>Programmatic SEO pages with dynamic content</ListItem>
                </ul>

                <h5 className="font-semibold">Tech Implementation</h5>
                <ul className="mb-4">
                  <ListItem>Next.js with SSG/ISR for SEO pages</ListItem>
                  <ListItem>Strapi CMS for content and meta-data</ListItem>
                  <ListItem>Schema.org JSON-LD implementation</ListItem>
                  <ListItem>GTM, GA4, Meta Pixel integration</ListItem>
                </ul>

                <h5 className="font-semibold">Business Impact</h5>
                <ul className="mb-2">
                  <ListItem>
                    Organic Traffic: <span className="font-semibold">0 → 800k+ clicks/month</span>
                  </ListItem>
                  <ListItem>
                    Organic Leads: <span className="font-semibold">30% of total loan disbursals</span>
                  </ListItem>
                  <ListItem>
                    Keywords Ranking: <span className="font-semibold">500+ keywords in top 10</span>
                  </ListItem>
                </ul>
              </div>
            </div>
          </Accordion>

          <Accordion title={<h3 className="font-semibold ml-4">Testing & Optimization</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <h4 className="font-bold">In-House A/B Testing Platform</h4>
                <p className="text-gray-600 mb-4">Developed custom A/B testing framework for testing different variations of pages and components. Implemented user segmentation, analytics tracking, and statistical significance calculations.</p>

                <h5 className="font-semibold">Features Built</h5>
                <ul className="mb-4">
                  <ListItem>Dynamic component variants</ListItem>
                  <ListItem>User segmentation and tracking</ListItem>
                  <ListItem>Real-time analytics dashboard</ListItem>
                  <ListItem>Variant tagging for reliable data</ListItem>
                </ul>

                <h5 className="font-semibold">Tech Implementation</h5>
                <ul className="mb-4">
                  <ListItem>NextJs middleware for variant management</ListItem>
                  <ListItem>Cookies & Query Params for user session tracking</ListItem>
                  <ListItem>GTM events for conversion tracking</ListItem>
                  <ListItem>Google Analytics funnel for tracking</ListItem>
                </ul>

                <h5 className="font-semibold">Test Results</h5>
                <ul className="mb-2">
                  <ListItem>
                    Lead Form: <span className="font-semibold">10-12% → 28-30% conversion</span>
                  </ListItem>
                  <ListItem>
                    Homepage: <span className="font-semibold">15% increase in Organic CTR</span>
                  </ListItem>
                  <ListItem>
                    Mobile UX: <span className="font-semibold">25% reduction in bounce rate</span>
                  </ListItem>
                </ul>
              </div>
            </div>
          </Accordion>

          <Accordion title={<h3 className="font-semibold ml-4">Team Leadership</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <h4 className="font-bold">Team Transformation</h4>
                <p className="text-gray-600 mb-4">Led frontend team transformation from 7 to 3 members while improving delivery speed and code quality. Implemented incremental architecture improvements and modern development practices. Mentored team members in technical growth and process improvements.</p>

                <h5 className="font-semibold">Key Initiatives</h5>
                <ul className="mb-4">
                  <ListItem>Incremental architecture refactoring</ListItem>
                  <ListItem>Team restructuring and role optimization</ListItem>
                  <ListItem>Modern development workflow implementation</ListItem>
                  <ListItem>AI tools integration for productivity</ListItem>
                </ul>

                <h5 className="font-semibold">Process Improvements</h5>
                <ul className="mb-4">
                  <ListItem>Automated testing and CI/CD pipelines</ListItem>
                  <ListItem>Code review and documentation standards</ListItem>
                  <ListItem>Sprint planning and estimation process</ListItem>
                  <ListItem>Knowledge sharing sessions</ListItem>
                </ul>
              </div>
            </div>
          </Accordion>
        </ul>
      </Accordion>

      {/* Add similar Accordions for StoryXpress, Delinno, and CSimplifyIT */}
    </main>
  );
}
