import Accordion from '@root/components/Accordion';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="p-4 pb-12 max-w-4xl mx-auto md:p-8">
      <h1 className="text-3xl mb-8 text-center">Projects</h1>
      <Accordion
        title={
          <div className="flex justify-between items-center w-full ml-2">
            <div>
              <h2 className="text-xl font-semibold">Off Grid Collective</h2>
              <p
                style={{
                  color: 'var(--theme-background-input)',
                }}
                className=""
              >
                March 2025 - Present
              </p>
            </div>
          </div>
        }
        defaultValue={true}
      >
        <div className="mb-6 mt-4 p-4 rounded-md text-sm" style={{ background: 'var(--theme-border-subdued)' }}>
          <h3 className="font-bold mb-2">Off-Grid Living: Cabins, Solar Power & Self-Sufficiency | Off Grid Collective</h3>
          <p
            style={{
              color: 'var(--theme-background-input)',
            }}
            className=" mb-2"
          >
            Explore the off-grid lifestyle with the Off Grid Collective. Find resources on building cabins, implementing renewable energy solutions, managing waste and water, and connecting with others seeking independence and self-sufficiency
          </p>
          <Link href="https://offgridcollective.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
            View - offgridcollective.co
          </Link>
          {/* Add more project details here if needed, like Tech Stack, Key Features etc. */}
        </div>
      </Accordion>
      {/* Add more Accordion components for future projects here */}
    </main>
  );
} 