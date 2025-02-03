import Accordion from '@root/components/Accordion';
import Divider from '@root/components/Divider';
import ListItem from '@root/components/ListItem';

export default function WorkPage() {
  return (
    <main className="p-4 max-w-4xl mx-auto md:p-8">
      <h1 className="text-3xl mb-8 text-center">Work Experience</h1>

      <Accordion
        title={
          <div className="flex justify-between items-center w-full ml-2">
            <div>
              <h2 className="text-xl font-semibold">Frontend Lead</h2>
              <h3>@ Indiagold</h3>
              <p className="text-gray-600">Mar 2022 - Present | Abu Dhabi, UAE</p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <ul className="space-y-3 mt-8 md:pl-8">
          <Accordion className="ml-4" title={<h3 className="font-semibold ml-4">Architecture & Performance</h3>} defaultValue={true}>
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
          <Accordion className="ml-4" title={<h3 className="font-semibold ml-4">SEO & Marketing</h3>} defaultValue={true}>
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

          <Accordion className="ml-4" title={<h3 className="font-semibold ml-4">Testing & Optimization</h3>} defaultValue={true}>
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

          <Accordion className="ml-4" title={<h3 className="font-semibold ml-4">Team Leadership</h3>} defaultValue={true}>
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
      <div className="mt-4"></div>
      <Accordion
        title={
          <div className="flex justify-between items-center w-full ml-2 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Software Developer</h2>
              <h3>@ StoryXpress</h3>
              <p className="text-gray-600">Jan 2021 - March 2022 | Gurgaon, India</p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <ul className="space-y-3 mt-8 md:pl-8">
          <Accordion title={<h3 className="font-semibold ml-4">Cross-Platform Development</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              {/* Native Desktop App */}
              <div>
                <h4 className="font-bold">Native Desktop Application</h4>
                <p className="text-gray-600 mb-2">Built cross-platform desktop application for Windows and macOS, enabling screen recording, video editing, and real-time analytics.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-4">
                  <ListItem>Electron.js</ListItem>
                  <ListItem>React + TypeScript</ListItem>
                  <ListItem>WebSocket for real-time communication</ListItem>
                  <ListItem>Native OS APIs integration</ListItem>
                </ul>
              </div>

              <Divider />

              {/* Web Application */}
              <div>
                <h4 className="font-bold">Web Platform</h4>
                <p className="text-gray-600 mb-2">Developed web application for video hosting, analytics, and team collaboration.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-4">
                  <ListItem>React + TypeScript</ListItem>
                  <ListItem>Styled Components</ListItem>
                  <ListItem>WebSocket for real-time updates</ListItem>
                  <ListItem>Video.js for playback</ListItem>
                </ul>
              </div>

              <Divider />

              {/* Chrome Extension */}
              <div>
                <h4 className="font-bold">Browser Extension</h4>
                <p className="text-gray-600 mb-2">Created Chrome extension for in-browser screen recording and quick sharing.</p>
                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-4">
                  <ListItem>Chrome Extension APIs</ListItem>
                  <ListItem>React + TypeScript</ListItem>
                  <ListItem>WebRTC for screen capture</ListItem>
                  <ListItem>Extension Manifest V3</ListItem>
                </ul>
              </div>

              <Divider />

              {/* SDK */}
              <div>
                <h4 className="font-bold">Integration SDK</h4>
                <p className="text-gray-600 mb-2">Built embeddable SDK for third-party integrations with single-line implementation.</p>
                <h5 className="font-semibold">Key Features</h5>
                <ul className="mb-4">
                  <ListItem>Single script integration</ListItem>
                  <ListItem>Custom styling support</ListItem>
                  <ListItem>Event-driven architecture</ListItem>
                  <ListItem>Analytics integration</ListItem>
                </ul>
              </div>

              {/* Overall Metrics */}
              <div>
                <h5 className="font-semibold mt-4">Platform Impact</h5>
                <ul className="mb-2">
                  <ListItem>
                    Active Users: <span className="font-semibold">1.5M+</span>
                  </ListItem>
                  <ListItem>
                    Content Processed: <span className="font-semibold">30M hours</span>
                  </ListItem>
                  <ListItem>
                    Desktop App Size: <span className="font-semibold">40% reduction</span>
                  </ListItem>
                  <ListItem>
                    Web Performance: <span className="font-semibold">80+ PageSpeed score</span>
                  </ListItem>
                </ul>
              </div>
            </div>
          </Accordion>
          <Accordion title={<h3 className="font-semibold ml-4">Team Leadership</h3>} defaultValue={true}>
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <h4 className="font-bold">Team Mentorship</h4>
                <p className="text-gray-600 mb-4">First leadership role mentoring 3 fresh graduates. Focused on technical skill development, best practices, and fostering a learning environment. Learned valuable leadership skills including patience, emotional management, and team accountability.</p>

                <h5 className="font-semibold">Mentorship Activities</h5>
                <ul className="mb-4">
                  <ListItem>Regular pair programming sessions</ListItem>
                  <ListItem>Hands-on learning projects</ListItem>
                  <ListItem>Code review feedback sessions</ListItem>
                  <ListItem>Technical documentation workshops</ListItem>
                </ul>

                <h5 className="font-semibold">Team Development</h5>
                <ul className="mb-4">
                  <ListItem>Individual growth plans for each team member</ListItem>
                  <ListItem>Weekly knowledge sharing sessions</ListItem>
                  <ListItem>Agile development practices</ListItem>
                  <ListItem>Cross-platform development exposure</ListItem>
                </ul>

                <h5 className="font-semibold">Personal Growth</h5>
                <ul className="mb-4">
                  <ListItem>Improved communication and patience</ListItem>
                  <ListItem>Enhanced emotional intelligence</ListItem>
                  <ListItem>Better delegation and task management</ListItem>
                  <ListItem>Strengthened accountability mindset</ListItem>
                </ul>
              </div>
            </div>
          </Accordion>
        </ul>
      </Accordion>
      <Accordion
        title={
          <div className="flex justify-between items-center w-full ml-2 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Full Stack Developer</h2>
              <h3>@ Delinno</h3>
              <p className="text-gray-600">Dec 2019 - Dec 2020 | Gurgaon, India</p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <ul className="space-y-3 mt-8 md:pl-8">
          <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
            {/* ESG Dashboard */}
            <div>
              <h4 className="font-bold">ESG Management Dashboard</h4>
              <p className="text-gray-600 mb-2">Built scalable dashboard for Environmental, Social, and Governance (ESG) management enabling data-driven decision making for enterprise clients.</p>
              <h5 className="font-semibold">Tech Stack</h5>
              <ul className="mb-4">
                <ListItem>React.js</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Styled Components</ListItem>
                <ListItem>Ant Design</ListItem>
              </ul>
            </div>

            <Divider />

            {/* Survey Platform */}
            <div>
              <h4 className="font-bold">Survey Platform</h4>
              <p className="text-gray-600 mb-2">Contributed to enterprise survey platform used by global organizations and governments.</p>
              <h5 className="font-semibold">Tech Stack</h5>
              <ul className="mb-4">
                <ListItem>React (Frontend)</ListItem>
                <ListItem>Python/Django (Backend)</ListItem>
                <ListItem>PostgreSQL</ListItem>
              </ul>
              <h5 className="font-semibold">Impact</h5>
              <ul className="mb-4">
                <ListItem>
                  Surveys Completed: <span className="font-semibold">14,000+</span>
                </ListItem>
                <ListItem>
                  Global Organizations Served: <span className="font-semibold">50+</span>
                </ListItem>
              </ul>
            </div>

            <Divider />

            {/* LMS */}
            <div>
              <h4 className="font-bold">Fitness Trainer LMS</h4>
              <p className="text-gray-600 mb-2">Developed Learning Management System for fitness trainers with course management, progress tracking, and assessment features.</p>
              <h5 className="font-semibold">Tech Stack</h5>
              <ul className="mb-4">
                <ListItem>React + Material UI (Frontend)</ListItem>
                <ListItem>Django (Backend)</ListItem>
                <ListItem>REST APIs</ListItem>
              </ul>
              <h5 className="font-semibold">Metrics</h5>
              <ul className="mb-2">
                <ListItem>
                  App Downloads: <span className="font-semibold">44K+</span>
                </ListItem>
                <ListItem>
                  Active Trainers: <span className="font-semibold">1000+</span>
                </ListItem>
              </ul>
            </div>
          </div>
        </ul>
      </Accordion>
      <Accordion
        title={
          <div className="flex justify-between items-center w-full ml-2">
            <div>
              <h2 className="text-xl font-semibold">Technical Consultant</h2>
              <h3>@ CSimplifyIT</h3>
              <p className="text-gray-600">Jan 2019 - Nov 2019 | Gurugram, India</p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <ul className="space-y-3 mt-8 md:pl-8">
            <div className="mb-6 mt-4 bg-slate-50 p-4 rounded-md text-sm">
              <div>
                <h4 className="font-bold">Google Add-ons Development</h4>
                <p className="text-gray-600 mb-2">Developed productivity tools for Google Workspace, focusing on email automation and recruitment process optimization.</p>

                <h5 className="font-semibold">Key Projects</h5>
                <ul className="mb-4">
                  <ListItem>Simple Mass Mail Merge (30k+ downloads)</ListItem>
                  <ListItem>Simple Recruitment Manager</ListItem>
                </ul>

                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-4">
                  <ListItem>Google Apps Script</ListItem>
                  <ListItem>jQuery</ListItem>
                  <ListItem>Google Workspace APIs</ListItem>
                </ul>
              </div>

              <Divider />

              <div>
                <h4 className="font-bold">OCR System</h4>
                <p className="text-gray-600 mb-2">Re-Built Python-based OCR and document management system with improved efficiency and accuracy.</p>

                <h5 className="font-semibold">Tech Stack</h5>
                <ul className="mb-4">
                  <ListItem>Python</ListItem>
                  <ListItem>OpenCV</ListItem>
                  <ListItem>Django</ListItem>
                  <ListItem>Apache Kafka</ListItem>
                </ul>
              </div>
            </div>
        </ul>
      </Accordion>
      {/* Add similar Accordions for StoryXpress, Delinno, and CSimplifyIT */}
    </main>
  );
}
